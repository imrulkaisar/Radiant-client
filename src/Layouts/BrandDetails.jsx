import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { apiURL } from "../Contexts/GlobalContext";
import PageHeader from "../Components/PageHeader";

const BrandDetails = () => {
  const { url } = useParams();
  const [brand, setBrand] = useState({});
  const { name, slug, image, description } = brand || {};

  useEffect(() => {
    fetch(`${apiURL}/brand/${url}`)
      .then((res) => res.json())
      .then((data) => setBrand(data[0]));
  }, [url]);

  console.log(brand);

  return (
    <>
      <PageHeader title={name} />
      <section className="py-16">
        <div className="container-area">
          <div className="flex gap-10 items-center">
            <img className="w-28" src={image} alt="" />
            <div className="space-y-4">
              <p className="text-lg">{description}</p>
              <Link
                to={`/update-brand/${slug}`}
                className="btn btn-primary py-2 inline-block"
              >
                Edit brand details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandDetails;
