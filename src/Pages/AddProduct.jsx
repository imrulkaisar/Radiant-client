import { useState } from "react";
import PageHeader from "../Components/PageHeader";
import { useEffect } from "react";
import { apiURL } from "../Contexts/GlobalContext";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [slug, setSlug] = useState("");
  const [brands, setBrands] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetch(`${apiURL}/brands`)
      .then((res) => res.json())
      .then((data) => setBrands(data))
      .catch((error) => console.error(error));
  }, []);

  const onNameChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <PageHeader
        title="Add Product"
        steps={[{ title: "Products", link: "/products" }]}
      />
      <div className="py-16">
        <form
          className="max-w-lg mx-auto bg-white p-8 space-y-5"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name" className="sr-only">
              Brand Name
            </label>
            <input
              type="text"
              className="form-input"
              id="name"
              name="name"
              placeholder="Product name"
              onChange={onNameChange}
            />
          </div>
          {slug.length > 0 && (
            <p>
              <b>Slug:</b> {slug}
            </p>
          )}
          <div className="form-group">
            <label htmlFor="image" className="sr-only">
              Product Image
            </label>
            <input
              type="text"
              className="form-input"
              id="image"
              name="image"
              placeholder="Image URL"
            />
          </div>
          <div className="form-group">
            <label htmlFor="image" className="sr-only">
              Brand
            </label>
            <select className="form-input" id="image" name="brand">
              <option value="">Select Brand</option>
              {brands.map((brand) => (
                <option key={brand._id} value={brand.slug}>
                  {brand.name}
                </option>
              ))}
            </select>
            <div className="text-right text-xs text-blue-600 font-primary capitalize hover:underline">
              <Link to="/add-brand">+ Add new brand</Link>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="image" className="sr-only">
              Type
            </label>
            <select className="form-input" id="image" name="brand">
              <option value="">Select Type</option>
              {types.map((type) => (
                <option key={type._id} value={type.slug}>
                  {type.name}
                </option>
              ))}
            </select>
            <div className="text-right text-xs text-blue-600 font-primary capitalize hover:underline">
              <Link to="/add-type">+ Add new type</Link>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="form-group">
              <label className="sr-only" htmlFor="price">
                Product Price
              </label>
              <input
                type="text"
                id="price"
                name="price"
                placeholder="Price"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="sr-only" htmlFor="rating"></label>
              <input
                type="text"
                className="form-input"
                placeholder="Rating (1-5)"
                name="rating"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="description" className="sr-only">
              Short Description
            </label>
            <textarea
              className="form-input h-40"
              id="description"
              name="description"
              placeholder="Short description"
            ></textarea>
          </div>
          <button className="btn btn-primary w-full">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
