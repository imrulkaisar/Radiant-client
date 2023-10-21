import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiUser, FiShoppingCart, FiPlusCircle } from "react-icons/fi";
import Logo from "./Logo";
import { useContext, useEffect } from "react";
import { UserContext } from "../Contexts/UserContext";
import { DataContext } from "../Contexts/DataContext";

const Navbar = () => {
  const { user, logOut } = useContext(UserContext);
  const { accessToken, displayName, photoURL, email } = user || {};
  const navigate = useNavigate();

  const { cartItems } = useContext(DataContext);

  const handleLogOut = () => {
    logOut()
      .then((res) => {
        console.log("Logged out successfully!");
        localStorage.removeItem("cartItems");
        navigate("/login");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container-area py-2 flex justify-between items-center border-b dark:text-white dark:border-transparent">
      <Logo />
      <div className="menu flex gap-5 uppercase font-medium text-sm tracking-wider">
        <NavLink to="/" className="hover:text-secondary">
          Home
        </NavLink>
        <NavLink to="/products" className="hover:text-secondary">
          Products
        </NavLink>
        <NavLink to="/contact" className="hover:text-secondary">
          Contact
        </NavLink>
      </div>
      <div className="flex gap-6 items-center">
        <Link
          to="/add-product"
          className="flex gap-2 items-center uppercase text-sm py-2 border-b border-primary hover:border-b-2 dark:border-white"
        >
          <FiPlusCircle /> Add Product
        </Link>
        <div className="relative">
          <Link to="/cart">
            <FiShoppingCart className="text-2xl" />
          </Link>
          <span className="absolute -top-3 -right-2 bg-secondary px-1 rounded-full text-sm dark:text-primary">
            {cartItems.length}
          </span>
        </div>
        {accessToken ? (
          <div className="flex items-center gap-2">
            <Link to="/profile">
              <img
                className="w-10 h-10 object-cover rounded-full border-2 border-transparent hover:border-2 hover:border-secondary"
                src={photoURL}
                alt={displayName}
                title="Profile"
              />
            </Link>
            <div className="space-y-1">
              <Link to="/profile">
                <p>{displayName}</p>
              </Link>
              <button
                onClick={handleLogOut}
                className="btn border-0 p-0 text-xs font-bold hover:underline hover:text-secondary"
              >
                Log out
              </button>
            </div>
          </div>
        ) : (
          <Link to="/login" className="btn btn-primary py-2">
            <FiUser /> Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
