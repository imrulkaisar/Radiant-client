import { useContext, useState } from "react";
import PageHeader from "../Components/PageHeader";
import { useEffect } from "react";
import { apiURL } from "../Contexts/GlobalContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { DataContext } from "../Contexts/DataContext";

const UpdateProduct = () => {
  const { products, brands, types } = useContext(DataContext);
  const { id } = useParams();
  const [newSlug, setNewSlug] = useState("");
  const [singleProduct, setSingleProduct] = useState([]);
  const navigate = useNavigate();

  // const { _id, name, image, type, price, rating, description } = singleProduct;

  // fetching single product with id
  useEffect(() => {
    fetch(`${apiURL}/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleProduct(data[0]);
        setNewSlug(singleProduct.slug || "");
      })
      .catch((error) => console.error(error));
  }, [id, singleProduct.slug]);

  const onNameChange = (e) => {
    const input = e.target.value.toLowerCase();

    setNewSlug(input.split(" ").join("-"));
  };

  const findResult = products.find((product) => product.slug === newSlug);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const newName = form.name.value;
    const newImage = form.image.value;
    const newBrand = form.brand.value;
    const newType = form.type.value;
    const newPrice = form.price.value;
    const newRating = form.rating.value;
    const newDescription = form.description.value;

    const productData = {
      newName,
      newSlug,
      newImage,
      newBrand,
      newType,
      newPrice,
      newRating,
      newDescription,
    };

    console.log(productData);

    if (findResult && newSlug !== singleProduct.slug) {
      Swal.fire({
        icon: "error",
        title: "Product slug is already exist.",
        text: "You have a product with the same slug. please try to add a different one.",
      });
    } else {
      fetch(`${apiURL}/products/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(productData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            if (data.modifiedCount) {
              Swal.fire({
                icon: "success",
                title: "Product updated successfully!",
                showConfirmButton: false,
                showCloseButton: true,
              });

              navigate("/products");
            }
          }
        })
        .catch((error) => console.error(error));
    } // end findResult condition
  };

  return (
    <div>
      <PageHeader
        title="Update product"
        steps={[{ title: "Products", link: "/products" }]}
      />
      <div className="py-16">
        <div className="image text-center pb-8">
          <img className="w-36 inline" src={singleProduct.image} alt="" />
        </div>
        <form
          className="max-w-lg mx-auto bg-white p-8 space-y-5"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name" className="">
              Product Name
            </label>
            <input
              type="text"
              className="form-input"
              id="name"
              name="name"
              placeholder="Product name"
              onChange={onNameChange}
              defaultValue={singleProduct.name}
            />
          </div>
          {newSlug.length > 0 && (
            <p>
              <b>Slug:</b> {newSlug}
            </p>
          )}
          <div className="form-group">
            <label htmlFor="image" className="">
              Product Image
            </label>
            <input
              type="text"
              className="form-input"
              id="image"
              name="image"
              placeholder="Image URL"
              defaultValue={singleProduct.image}
            />
          </div>
          <div className="form-group">
            <label htmlFor="brand" className="">
              Brand
            </label>
            <select
              className="form-input"
              id="brand"
              name="brand"
              value={singleProduct.brand}
            >
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
            <label htmlFor="type" className="">
              Type
            </label>
            <select
              className="form-input"
              id="type"
              name="type"
              value={singleProduct.type}
            >
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
              <label className="" htmlFor="price">
                Product Price
              </label>
              <input
                type="text"
                id="price"
                name="price"
                placeholder="Price"
                className="form-input"
                defaultValue={singleProduct.price}
              />
            </div>
            <div className="form-group">
              <label className="" htmlFor="rating">
                Rating
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="Rating (1-5)"
                name="rating"
                defaultValue={singleProduct.rating}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="description" className="">
              Short Description
            </label>
            <textarea
              className="form-input h-40"
              id="description"
              name="description"
              placeholder="Short description"
              defaultValue={singleProduct.description}
            ></textarea>
          </div>
          <button className="btn btn-primary w-full">Update Product</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
