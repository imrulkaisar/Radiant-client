import { useState } from "react";
import PageHeader from "../Components/PageHeader";
import { useEffect } from "react";
import { apiURL } from "../Contexts/GlobalContext";
import { Link, useParams } from "react-router-dom";
import Rating from "react-rating";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";

const ProductDetails = () => {
  const { url } = useParams();
  const [product, setProduct] = useState([]);
  const [productBrand, setProductBrand] = useState({});

  const { name, slug, image, brand, type, price, rating, description } =
    product[0] || {};
  // const { name, slug, image, description } = brand || {};

  // useEffect(() => {
  //   fetch(`${apiURL}/brand/${brand}`)
  //     .then((res) => res.json())
  //     .then((data) => setProductBrand(data[0]));
  // }, [brand]);

  useEffect(() => {
    fetch(`${apiURL}/products/${url}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        // Fetch productBrand data here
        fetch(`${apiURL}/brand/${data[0].brand}`)
          .then((res) => res.json())
          .then((brandData) => setProductBrand(brandData[0]))
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  }, [url]);

  console.log(brand, productBrand);
  return (
    <>
      <PageHeader
        title={name}
        steps={[{ title: "Products", link: "/products" }]}
      />
      <section className="py-16">
        <div className="container-area flex gap-10">
          <div className="p-5 bg-white flex-1">
            <img src={image} alt="" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl pb-1">{name}</h2>
            <div className="flex items-center gap-2">
              <Rating
                className="text-2xl"
                initialRating={rating}
                emptySymbol={<AiFillStar className="text-gray-400" />}
                fullSymbol={<AiFillStar className="text-orange-300" />}
                readonly
              />
              ({rating} out of 5)
            </div>
            <div className="brand text-right -mt-5">
              <Link to={`/brand/${productBrand.slug}`}>
                <img
                  className="w-14 p-2 border shadow-md rounded-md"
                  src={productBrand.image}
                  alt={productBrand.name}
                />
              </Link>
            </div>
            <p className="max-w-sm py-3 text-lg">{description}</p>
            <div className="space-y-2">
              <p className="price text-3xl font-secondary font-semibold pt-2 text-primary">
                ${price}
              </p>
              <p className="text-sm text-green-600">12 products in stock</p>
              <button className="btn btn-secondary">
                <AiOutlineShoppingCart /> Add to cart
              </button>
            </div>
            <div className="divider bg-gray-300 h-[2px] my-5"></div>
            <div className="space-y-1">
              <p>
                <b>Brand: </b>
                {productBrand.name}
              </p>
              <p className="capitalize">
                <b>Type: </b>
                {type}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
