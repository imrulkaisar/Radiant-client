import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { apiURL } from "../Contexts/GlobalContext";
import PageHeader from "../Components/PageHeader";
import ProductsArchive from "../Components/ProductsArchive";
import BrandAdvertisementSlider from "../Components/BrandAdvertisementSlider";

const BrandDetails = () => {
  const { url } = useParams();
  const [brand, setBrand] = useState({});
  const { name, slug, image, bannerImages, description } = brand || {};
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${apiURL}/brand/${url}`)
      .then((res) => res.json())
      .then((data) => setBrand(data[0]));

    // product fetching
    fetch(`${apiURL}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, [url]);

  const brandProducts =
    products.filter((product) => product.brand === slug) || [];

  const bannerImagesArray = bannerImages ? bannerImages.split("|") : [];

  return (
    <>
      <PageHeader title={name} />
      <BrandAdvertisementSlider images={bannerImagesArray} />
      <section className="py-16">
        <div className="container-area space-y-10">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img className="w-36 dark:bg-white dark:p-2" src={image} alt="" />
            <div className="space-y-4 text-center lg:text-left">
              <p className="text-lg text-center lg:text-left">{description}</p>
              <Link
                to={`/update-brand/${slug}`}
                className="btn btn-primary py-2 inline-block dark:border-white dark:text-white"
              >
                Edit brand details
              </Link>
            </div>
          </div>
          <div className="divider bg-gray-300 h-[2px] my-5"></div>
          {/* Products */}
          <div className="space-y-8">
            <h2 className="font-secondary text-3xl text-center lg:text-left capitalize dark:text-white">
              {name} brand products
            </h2>
            {brandProducts.length > 0 ? (
              <ProductsArchive products={brandProducts} />
            ) : (
              <p>Sorry! There is no products for this brand.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandDetails;
