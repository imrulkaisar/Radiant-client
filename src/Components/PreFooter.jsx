import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
// import "./styles.css"

const animation = { duration: 10000, easing: (t) => t };

const PreFooter = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    slides: {
      perView: "auto",
      spacing: 50,
    },
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div
      ref={sliderRef}
      className="keen-slider text-center font-primary uppercase py-10 tracking-[2px]"
    >
      <div className="keen-slider__slide min-w-max">Free Shipping</div>
      <div className="keen-slider__slide min-w-max">24/7 Support</div>
      <div className="keen-slider__slide min-w-max">Money Back Warranty</div>
      <div className="keen-slider__slide min-w-max">All Products is Eco</div>
      <div className="keen-slider__slide min-w-max">Free Shipping</div>
      <div className="keen-slider__slide min-w-max">24/7 Support</div>
      <div className="keen-slider__slide min-w-max">Money Back Warranty</div>
      <div className="keen-slider__slide min-w-max">All Products is Eco</div>
    </div>
  );
};

export default PreFooter;
