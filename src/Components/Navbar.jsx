import { Link, NavLink } from "react-router-dom";
import { FiUser, FiShoppingCart, FiPlusCircle } from "react-icons/fi";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="container-area py-2 flex justify-between items-center border-b">
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
          className="flex gap-2 items-center uppercase text-sm py-2 border-b border-primary hover:border-b-2"
        >
          <FiPlusCircle /> Add Product
        </Link>
        <div className="relative">
          <Link to="/cart">
            <FiShoppingCart className="text-2xl" />
          </Link>
          <span className="absolute -top-3 -right-2 bg-secondary px-1 rounded-full text-sm">
            0
          </span>
        </div>
        <button className="btn btn-primary py-2">
          <FiUser /> Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
