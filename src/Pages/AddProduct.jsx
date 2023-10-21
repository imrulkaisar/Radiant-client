import { useState } from "react";
import PageHeader from "../Components/PageHeader";
import { useEffect } from "react";
import { apiURL } from "../Contexts/GlobalContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { DataContext } from "../Contexts/DataContext";

const AddProduct = () => {
  const { types, brands } = useContext(DataContext);

  const [slug, setSlug] = useState("");
  const [products, setProducts] = useState([]);
  let timeout;

  useEffect(() => {
    fetch(`${apiURL}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, [slug]);

  const onNameChange = (e) => {
    const input = e.target.value.toLowerCase();
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setSlug(input.split(" ").join("-"));
    }, 3000);
  };

  const findResult = products.find((product) => product.slug === slug);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const image = form.image.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const productData = {
      name,
      slug,
      image,
      brand,
      type,
      price,
      rating,
      description,
    };

    if (findResult) {
      Swal.fire({
        icon: "error",
        title: "Product slug is already exist.",
        text: "You have a product with the same slug. please try to add a different one.",
      });
    } else {
      fetch(`${apiURL}/products`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(productData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            if (data.insertedId) {
              Swal.fire({
                icon: "success",
                title: "Product added successfully!",
                showConfirmButton: false,
                showCloseButton: true,
              });
              form.reset();
              setSlug("");
            }
          }
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div>
      <PageHeader
        title="Add Product"
        steps={[{ title: "Products", link: "/products" }]}
      />
      <div className="py-16 px-5 lg:px-0">
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
            <label htmlFor="brand" className="sr-only">
              Brand
            </label>
            <select className="form-input" id="brand" name="brand">
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
            <label htmlFor="type" className="sr-only">
              Type
            </label>
            <select className="form-input" id="type" name="type">
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
          <div className="flex flex-col md:flex-row gap-4">
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
