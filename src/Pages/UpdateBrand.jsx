import { useState, useEffect } from "react";
import PageHeader from "../Components/PageHeader";
import { apiURL } from "../Contexts/GlobalContext";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const UpdateBrand = () => {
  const [slug, setSlug] = useState("");
  const [brands, setBrands] = useState([]);
  const [brand, setBrand] = useState([]);
  const { url } = useParams();

  useEffect(() => {
    fetch(`${apiURL}/brand/${url}`)
      .then((res) => res.json())
      .then((data) => setBrand(data[0]));
  }, [url]);

  const onNameChange = (e) => {
    const input = e.target.value.toLowerCase();
    setSlug(input.split(" ").join("-"));
  };

  const findResult = brands.find((brand) => brand.slug === slug);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const newName = form.name.value;
    const newSlug = form.slug.value;
    const newImage = form.image.value;
    const newDescription = form.description.value;

    const brandData = {
      newName,
      newSlug,
      newImage,
      newDescription,
    };

    console.log(brandData);

    if (findResult && brand.slug !== newSlug) {
      Swal.fire({
        icon: "error",
        title: "Brand url is already exist.",
        text: "You have have a brand with the same name. please try to add a different one.",
      });
    } else {
      fetch(`${apiURL}/brands`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(brandData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              icon: "success",
              title: "Brand updated successfully!",
              showConfirmButton: false,
              showCloseButton: true,
            });
            form.reset();
            // setSlug("");
            fetch(`${apiURL}/brands`)
              .then((res) => res.json())
              .then((data) => setBrands(data))
              .catch((error) => console.error(error));
          }
        })
        .catch((error) => console.error(error));
    }
  };

  useEffect(() => {
    fetch(`${apiURL}/brands`)
      .then((res) => res.json())
      .then((data) => setBrands(data))
      .catch((error) => console.error(error));
  }, [slug]);

  console.log(brands);

  return (
    <div>
      <PageHeader title="Update Brand" />
      <div className="py-16">
        <form
          className="max-w-lg mx-auto bg-white p-8 space-y-5"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name" className="">
              Brand Name
            </label>
            <input
              type="text"
              className="form-input"
              id="name"
              name="name"
              placeholder="Brand name"
              onChange={onNameChange}
              defaultValue={brand.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name" className="">
              Slug
            </label>
            <input
              type="text"
              className="form-input"
              id="name"
              name="slug"
              placeholder="Brand name"
              onChange={onNameChange}
              value={slug || brand.slug}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image" className="">
              Brand Image
            </label>
            <input
              type="text"
              className="form-input"
              id="image"
              name="image"
              placeholder="Image URL"
              defaultValue={brand.image}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description" className="">
              Description
            </label>
            <textarea
              className="form-input h-40"
              id="description"
              name="description"
              placeholder="Category description"
              defaultValue={brand.description}
            ></textarea>
          </div>
          <button className="btn btn-primary w-full">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBrand;
