import { Link } from "react-router-dom";

const Brand = ({ name, image, link }) => {
  return (
    <Link
      to={link}
      className="group flex flex-col gap-3 justify-center items-center"
    >
      <figure className="bg-white p-1 aspect-[4/5] flex justify-center items-center rounded-full w-1/2 min-w-[80px] hover:p-2 duration-150 border">
        <img className="max-w-full" src={image} alt={name} />
      </figure>
      <p className="group-hover:text-secondary font-secondary uppercase text-sm text-center font-bold tracking-[3px]">
        {name}
      </p>
    </Link>
  );
};

export default Brand;
