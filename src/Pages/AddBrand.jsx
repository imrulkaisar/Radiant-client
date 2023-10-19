import { useState } from "react";
import PageHeader from "../Components/PageHeader";

const AddBrand = () => {
  const [slug, setSlug] = useState("");

  const onNameChange = (e) => {
    const input = e.target.value.toLowerCase();
    setSlug(input.split(" ").join("-"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const description = form.description.value;

    const data = {
      name,
      slug,
      image,
      description,
    };

    console.log(data);
  };

  return (
    <div>
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
              placeholder="Brand Image"
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
    </div>
  );
};

export default AddBrand;
