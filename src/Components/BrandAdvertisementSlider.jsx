const BrandAdvertisementSlider = ({ images = [] }) => {
  return (
    <div className="keen-slider gap-2 text-center font-primary uppercase tracking-[2px] pt-2">
      {images.length > 0 &&
        images.map((image, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${image})`,
            }}
            className="keen-slider__slide min-w-max bg-center bg-cover"
          >
            <div className="min-h-[240px] w-full"></div>
          </div>
        ))}
    </div>
  );
};

export default BrandAdvertisementSlider;
