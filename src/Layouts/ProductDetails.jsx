import { useContext, useState, useEffect } from "react";
import PageHeader from "../Components/PageHeader";
import { Link, useParams } from "react-router-dom";
import Rating from "react-rating";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import { UserContext } from "../Contexts/UserContext";
import { apiURL } from "../Contexts/GlobalContext";
import { DataContext } from "../Contexts/DataContext";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const { user } = useContext(UserContext);
  const { url } = useParams();
  const [product, setProduct] = useState([]);
  const [productBrand, setProductBrand] = useState({});

  const { cartItems, setCartItems } = useContext(DataContext);

  const [dbUser, setDbUser] = useState({});

  const { _id, name, slug, image, brand, type, price, rating, description } =
    product[0] || {};

  // Retrieve cart items from local storage on component mount
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    fetch(`${apiURL}/products/${url}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        fetch(`${apiURL}/brand/${data[0].brand}`)
          .then((res) => res.json())
          .then((brandData) => setProductBrand(brandData[0]))
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  }, [url]);

  useEffect(() => {
    fetch(`${apiURL}/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setDbUser(data[0]);
        if (dbUser.cartItems) {
          setCartItems([...dbUser.cartItems]);
        }
      });
  }, [user.email]);

  const handleAddToCart = (id) => {
    if (!cartItems.includes(id)) {
      const updatedCartItems = [...cartItems, id];

      fetch(`${apiURL}/users`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email: dbUser.email,
          cartItems: updatedCartItems,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            Swal.fire({
              icon: "success",
              title: "Product Added",
              showCloseButton: true,
              showConfirmButton: false,
              toast: true,
              timer: 3000,
            });
            setCartItems(updatedCartItems);
          }
        })
        .catch((error) => console.error(error));

      // Store the updated cart items in local storage
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    } else {
      Swal.fire({
        icon: "error",
        title: "Product already in the cart",
        showCloseButton: true,
        showConfirmButton: false,
        toast: true,
        timer: 2000,
      });
    }
  };

  return (
    <>
      <PageHeader
        title={name}
        steps={[{ title: "Products", link: "/products" }]}
      />
      <section className="py-16">
        <div className="container-area flex flex-col lg:flex-row gap-10">
          <div className="p-5 bg-white flex-1">
            <img src={image} alt="" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl pb-1 dark:text-white">{name}</h2>
            <div className="flex items-center gap-2 dark:text-white">
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
                  className="w-14 p-2 border shadow-md rounded-md dark:bg-gray-300"
                  src={productBrand.image}
                  alt={productBrand.name}
                />
              </Link>
            </div>
            <p className="max-w-sm py-3 text-lg">{description}</p>
            <div className="space-y-2">
              <p className="price text-3xl font-secondary font-semibold pt-2 text-primary dark:text-white">
                ${price}
              </p>
              <p className="text-sm text-green-600">12 products in stock</p>
              <button
                onClick={() => handleAddToCart(_id)}
                className="btn btn-secondary"
              >
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
