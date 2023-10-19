const Testimonial = ({ name, image, children }) => {
  return (
    <div className="space-y-5 px-10">
      <p className="text-center text-primary">{children}</p>
      <div className="flex flex-col gap-3 items-center justify-center">
        <img
          className="w-12 h-12 object-cover rounded-full"
          src={image}
          alt={name}
        />
        <p className="font-secondary text-primary uppercase">{name}</p>
      </div>
    </div>
  );
};

export default Testimonial;
