import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Link } from "react-router-dom";
import sliderImage1 from "../assets/Images/slider/slider1.jpg";
import sliderImage2 from "../assets/Images/slider/slider2.jpg";
import sliderImage3 from "../assets/Images/slider/slider3.jpg";

const Slider = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <section ref={sliderRef} className="keen-slider py-0">
        <div className="keen-slider__slide number-slide1">
          <div
            style={{
              backgroundImage: `url(${sliderImage1})`,
            }}
            className="h-[400px] lg:h-[500px] bg-cover bg-center"
          >
            <div className="overlay h-full text-white flex justify-start items-center">
              <div className="container-area space-y-2 lg:space-y-5">
                <p className="text-xl text-white font-secondary uppercase tracking-[5px]">
                  Skin Package
                </p>
                <h4 className="text-7xl uppercase leading-none tracking-[5px] pb-4">
                  Daily <br />
                  Skincare
                </h4>
                <Link
                  to="/products"
                  className="btn btn-primary inline-block border-white hover:border-black"
                >
                  Shop now
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Slider 2 */}
        <div className="keen-slider__slide number-slide1">
          <div
            style={{
              backgroundImage: `url(${sliderImage2})`,
            }}
            className="h-[400px] lg:h-[500px] bg-cover bg-center"
          >
            <div className="overlay h-full text-white flex justify-start items-center">
              <div className="container-area space-y-2 lg:space-y-5">
                <p className="text-xl text-white font-secondary uppercase tracking-[5px]">
                  exclusive
                </p>
                <h4 className="text-7xl uppercase leading-none tracking-[5px] pb-4">
                  Patches <br />
                  under eyes
                </h4>
                <Link
                  to="/products"
                  className="btn btn-primary inline-block border-white hover:border-black"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Slider 3 */}
        <div className="keen-slider__slide number-slide1">
          <div
            style={{
              backgroundImage: `url(${sliderImage3})`,
            }}
            className="h-[400px] lg:h-[500px] bg-cover bg-center"
          >
            <div className="overlay h-full text-white flex justify-start items-center">
              <div className="container-area space-y-2 lg:space-y-5">
                <p className="text-xl text-white font-secondary uppercase tracking-[5px]">
                  new product
                </p>
                <h4 className="text-7xl uppercase leading-none tracking-[5px] pb-4">
                  Nature
                  <br />
                  Moisturizers
                </h4>
                <Link
                  to="/products"
                  className="btn btn-primary inline-block border-white hover:border-black"
                >
                  Shop now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
