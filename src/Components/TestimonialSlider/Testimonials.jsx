import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./style.css";
import Testimonial from "../Testimonial";

import testimonialBg from "../../assets/Images/testimonialBg.jpg";
import beautyFace from "../../assets/Images/beauty-face.jpg";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <section className="flex flex-col-reverse">
      <div
        style={{
          backgroundImage: `url(${testimonialBg})`,
        }}
        className="flex-1 md:max-w-[50%] px-10 py-16 space-y-8"
      >
        <div className="text-center space-y-3">
          <p className="sub-heading text-white">Our shop</p>
          <h2 className="section-heading text-white">Top Products</h2>
        </div>

        <div>
          <div className="navigation-wrapper text-white">
            <div ref={sliderRef} className="keen-slider">
              <div className="keen-slider__slide number-slide1">
                <Testimonial
                  image="https://avatars.githubusercontent.com/u/14228591?v=4"
                  name="Imrul Kaisar"
                  address="Dhaka, Bangladesh"
                >
                  I'm in love with Luchiana's products! The quality is amazing
                  and the prices are unbeatable. I've tried everything from
                  their skincare line to their lipsticks, and I've never been
                  disappointed.
                </Testimonial>
              </div>
              <div className="keen-slider__slide number-slide2">
                <Testimonial
                  image="https://pro-theme.com/html/dvents/assets/media/components/b-blockquote/face-1.jpg"
                  name="Kristopher Rorand"
                  address="California, USA"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliquat
                  enim ad minim veniam quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea consequat.
                </Testimonial>
              </div>
            </div>
            {loaded && instanceRef.current && (
              <>
                <Arrow
                  left
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  disabled={currentSlide === 0}
                />

                <Arrow
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                  disabled={
                    currentSlide ===
                    instanceRef.current.track.details.slides.length - 1
                  }
                />
              </>
            )}
          </div>
          {loaded && instanceRef.current && (
            <div className="dots">
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={"dot" + (currentSlide === idx ? " active" : "")}
                  ></button>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${beautyFace})`,
        }}
        className="flex-1 bg-cover bg-center min-h-[300px]"
      ></div>
    </section>
  );
};

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

export default Testimonials;
