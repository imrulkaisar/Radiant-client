import { useContext } from "react";
import Brand from "../Components/Brand";
import Slider from "../Components/Slider";
import Testimonials from "../Components/TestimonialSlider/Testimonials";

import ProductsArchive from "../Components/ProductsArchive";
import { DataContext } from "../Contexts/DataContext";

const Home = () => {
  const { products, brands } = useContext(DataContext);

  const latesProducts = products.reverse().slice(0, 8);

  return (
    <>
      <Slider />
      <section className="py-16 dark:bg-gray-800">
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
            <h2 className="section-heading dark:text-white">Top Products</h2>
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
