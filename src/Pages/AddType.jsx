import { useState, useEffect } from "react";
import PageHeader from "../Components/PageHeader";
import { apiURL } from "../Contexts/GlobalContext";
import Swal from "sweetalert2";

const AddType = () => {
  const [slug, setSlug] = useState("");
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetch(`${apiURL}/types`)
      .then((res) => res.json())
      .then((data) => setTypes(data))
      .catch((error) => console.error(error));
  }, [slug]);

  const onNameChange = (e) => {
    const input = e.target.value.toLowerCase();
    setSlug(input.split(" ").join("-"));
  };

  const findResult = types.find((type) => type.slug === slug);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const description = form.description.value;

    const typeData = {
      name,
      slug,
      image,
      description,
    };

    if (findResult) {
      Swal.fire({
        icon: "error",
        title: "Type is already exist.",
        text: "You have have a type with the same name. please try to add a different one.",
      });
    } else {
      fetch(`${apiURL}/types`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(typeData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              icon: "success",
              title: "Type added successfully!",
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

  console.log(types);

  return (
    <>
      <PageHeader title="Add Type" />
      <div className="py-16">
        <form
          className="max-w-lg mx-auto bg-white p-8 space-y-5"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name" className="sr-only">
              Type Name
            </label>
            <input
              type="text"
              className="form-input"
              id="name"
              name="name"
              placeholder="Type name"
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
              Type Image
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
              placeholder="Type description"
            ></textarea>
          </div>
          <button className="btn btn-primary w-full">Add Type</button>
        </form>
      </div>
    </>
  );
};

export default AddType;
