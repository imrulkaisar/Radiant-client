import Brand from "../Components/Brand";
import Slider from "../Components/Slider";
import Testimonials from "../Components/TestimonialSlider/Testimonials";

// brand image
import CliniqueImage from "../assets/Images/brands/clinique.png";
import OlayImage from "../assets/Images/brands/olay.png";

const Home = () => {
  return (
    <>
      <Slider />
      <section className="py-16">
        <div className="container-area grid grid-cols-6 gap-4">
          <Brand name="Clinique" image={CliniqueImage} />
          <Brand name="Olay" image={OlayImage} />
          <Brand name="Clinique" image={CliniqueImage} />
          <Brand name="Olay" image={OlayImage} />
          <Brand name="Clinique" image={CliniqueImage} />
          <Brand name="Olay" image={OlayImage} />
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
            <p className="text-center">
              <code>Products will load here....</code>
            </p>
          </div>
        </div>
      </section>

      {/* testimonials */}
      <Testimonials />
    </>
  );
};

export default Home;
