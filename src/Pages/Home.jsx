import { useEffect } from "react";
import Brand from "../Components/Brand";
import Slider from "../Components/Slider";
import Testimonials from "../Components/TestimonialSlider/Testimonials";

import { useState } from "react";
import { apiURL } from "../Contexts/GlobalContext";
import ProductsArchive from "../Components/ProductsArchive";

const Home = () => {
  const [brands, setBrands] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${apiURL}/brands`)
      .then((res) => res.json())
      .then((data) => setBrands(data))
      .catch((error) => console.error(error));

    // product fetching
    fetch(`${apiURL}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  const latesProducts = products.reverse().slice(0, 8);

  return (
    <>
      <Slider />
      <section className="py-16">
        <div className="container-area grid grid-cols-6 gap-4">
          {brands.map((brand) => (
            <Brand
              key={brand._id}
              name={brand.name}
              image={brand.image}
              link={`/brand/${brand.slug}`}
            />
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="container-area space-y-8">
          <div className="text-center space-y-3">
            <p className="sub-heading">Our shop</p>
            <h2 className="section-heading">Top Products</h2>
          </div>
          <div>
            <ProductsArchive products={latesProducts} />
          </div>
        </div>
      </section>

      {/* testimonials */}
      <Testimonials />
    </>
  );
};

export default Home;
