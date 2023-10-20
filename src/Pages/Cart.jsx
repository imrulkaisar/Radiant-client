import { useContext } from "react";
import PageHeader from "../Components/PageHeader";
import { DataContext } from "../Contexts/DataContext";
import { apiURL } from "../Contexts/GlobalContext";
import { UserContext } from "../Contexts/UserContext";
import { Link } from "react-router-dom";
import { BsCartX } from "react-icons/bs";

const Cart = () => {
  const { products, cartItems, setCartItems } = useContext(DataContext);
  const { user } = useContext(UserContext);

  const cartData = products.filter((product) =>
    cartItems.includes(product._id)
  );

  const handleRemove = (id) => {
    const updatedCartItems = cartItems.filter((itemId) => itemId !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    fetch(`${apiURL}/users`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        cartItems: updatedCartItems,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <PageHeader title="My cart" />
      <section className="py-16">
        <div className="container-area">
          {cartData.length ? (
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Image
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Product Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Brand
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Remove
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartData.map((item) => (
                    <tr
                      key={item._id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td className="px-6 py-4">
                        <img className="w-16" src={item.image} alt="" />
                      </td>
                      <td className="px-6 py-4">{item.name}</td>
                      <td className="px-6 py-4">{item.brand}</td>
                      <td className="px-6 py-4">${item.price}</td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleRemove(item._id)}
                          className="w-8 h-8 border flex justify-center items-center leading-none text-xl rounded-full pb-1 hover:text-red-600 hover:border-red-600"
                        >
                          x
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="py-10 flex flex-col items-center justify-center gap-5 max-w-lg mx-auto">
              <BsCartX className="text-6xl text-text" />
              <p className="text-2xl text-center font-light">
                Ops! No product in your cart! Please add some products first.
              </p>
              <Link className="btn btn-primary" to="/products">
                Go to Products page
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Cart;
