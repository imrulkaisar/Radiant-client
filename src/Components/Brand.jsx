import { Link } from "react-router-dom";

const Brand = ({ name, image, link }) => {
  return (
    <Link
      to={link}
      className="group flex flex-col gap-3 justify-center items-center"
    >
      <figure className="bg-white p-3 aspect-[4/5] flex justify-center items-center rounded-full w-1/2 hover:p-2 duration-150 border">
        <img className="max-w-full" src={image} alt={name} />
      </figure>
      <p className="group-hover:text-secondary font-secondary uppercase text-sm font-bold tracking-[3px]">
        {name}
      </p>
    </Link>
  );
};

export default Brand;
