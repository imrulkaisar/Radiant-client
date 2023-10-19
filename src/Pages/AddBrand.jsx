import { useState, useEffect } from "react";
import PageHeader from "../Components/PageHeader";
import { apiURL } from "../Contexts/GlobalContext";
import Swal from "sweetalert2";

const AddBrand = () => {
  const [slug, setSlug] = useState("");
  const [brands, setBrands] = useState([]);

  const onNameChange = (e) => {
    const input = e.target.value.toLowerCase();
    setSlug(input.split(" ").join("-"));
  };

  const findResult = brands.find((brand) => brand.slug === slug);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const description = form.description.value;

    const brandData = {
      name,
      slug,
      image,
      description,
    };

    if (findResult) {
      Swal.fire({
        icon: "error",
        title: "Brand is already exist.",
        text: "You have have a brand with the same name. please try to add a different one.",
      });
    } else {
      fetch(`${apiURL}/brands`, {
        method: "POST",
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
              title: "Brand added successfully!",
              showConfirmButton: false,
              showCloseButton: true,
            });
            form.reset();
            setSlug("");
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
    <>
      <PageHeader title="Add Brand" />
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
              placeholder="Brand name"
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
              Brand Image
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
            <label htmlFor="description" className="sr-only">
              Description
            </label>
            <textarea
              className="form-input h-40"
              id="description"
              name="description"
              placeholder="Category description"
            ></textarea>
          </div>
          <button className="btn btn-primary w-full">Add brand</button>
        </form>
      </div>
    </>
  );
};

export default AddBrand;
