import Rating from "react-rating";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineEye, AiOutlineEdit } from "react-icons/ai";

const ProductCard = ({ data = {} }) => {
  const { _id, name, slug, image, brand, type, price, rating } = data;

  const brandName = brand.split("-").join(" ");

  return (
    <article className="product bg-white p-5 text-center flex flex-col gap-4 rounded-lg">
      <figure>
        <Link to={`/product/${slug}`}>
          <img src={image} alt={name} />
        </Link>
        <div className="type bg-gray-800 text-white py-1 -mx-5">
          <Link to={`/brand/${brand}`} className="block capitalize">
            {brandName}
          </Link>
        </div>
      </figure>
      <div className="space-y-1 flex-1 ">
        <Link to={`/product/${slug}`} className="block">
          <h4 className="font-secondary uppercase text-lg">{name}</h4>
        </Link>
        <Link className="block">
          <p>{type}</p>
        </Link>
      </div>
      <div className="flex gap-5 justify-between items-center">
        <p className="price text-lg font-primary text-primary font-semibold">
          ${price}
        </p>
        <div>
          <Rating
            initialRating={rating}
            emptySymbol={<AiFillStar className="text-gray-400" />}
            fullSymbol={<AiFillStar className="text-orange-300" />}
            readonly
          />
        </div>
      </div>
      <div className="flex text-2xl gap-2 justify-center">
        <Link
          to={`/product/${slug}`}
          className="py-1 px-3 border border-primary flex-1 flex justify-center hover:bg-black hover:text-white"
        >
          <AiOutlineEye />
        </Link>
        <Link
          to={`/update-product/${_id}`}
          className="py-1 px-3 border border-primary flex-1 flex justify-center hover:bg-black hover:text-white"
        >
          <AiOutlineEdit />
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;
