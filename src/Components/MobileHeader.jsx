import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import {
  FiPhone,
  FiMail,
  FiMoon,
  FiSun,
  FiShoppingCart,
  FiUser,
  FiPlusCircle,
  FiMenu,
} from "react-icons/fi";
import { DataContext } from "../Contexts/DataContext";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { contactInfo } from "../Contexts/GlobalContext";
import Logo from "./Logo";
import { UserContext } from "../Contexts/UserContext";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import SocialIcons from "./SocialIcons";

const MobileHeader = () => {
  const [theme, setTheme] = useState(null);
  const [toggle, SetToggle] = useState(true);
  const { cartItems } = useContext(DataContext);
  const { user, logOut } = useContext(UserContext);
  const { accessToken, displayName, photoURL, email } = user || {};

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (window.matchMedia("prefers-color-scheme: dark").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    SetToggle(!toggle);
  };

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
    <div id="mobile-header">
      <div
        id="topbar"
        className="flex justify-between items-center py-2 px-5 bg-gray-300 dark:bg-gray-800 dark:text-white"
      >
        <a href={`tel:${contactInfo.phone}`}>
          <FiPhone className="text-xl" />
        </a>
        <a href={`mailto:${contactInfo.email}`}>
          <FiMail className="text-xl" />
        </a>
        {/* Theme switcher */}
        <button
          onClick={handleThemeSwitch}
          className="border border-gray-300 p-2 text-lg rounded-full hover:bg-black hover:border-black hover:text-white dark:text-white dark:bg-gray-600"
        >
          {toggle ? <FiMoon /> : <FiSun />}
        </button>

        {/* Cart */}
        <div className="relative">
          <Link to="/cart">
            <FiShoppingCart className="text-2xl" />
          </Link>
          <span className="absolute -top-3 -right-2 bg-secondary px-1 rounded-full text-sm dark:text-primary">
            {cartItems.length}
          </span>
        </div>
      </div>

      <div
        id="main-header"
        className="p-2 flex justify-between items-center dark:bg-gray-600 dark:text-white"
      >
        <Logo />

        <div className="flex gap-2 items-center">
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
            </div>
          ) : (
            <Link
              to="/login"
              className="btn btn-primary py-2 dark:border-white"
            >
              <FiUser /> Login
            </Link>
          )}
          <FiMenu
            onClick={toggleDrawer}
            className="text-4xl p-1 border border-primary dark:border-white"
          />
        </div>
      </div>

      {/* Drawer */}
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className=""
      >
        <div className="flex flex-col items-center dark:bg-gray-800 dark:text-white p-5 min-h-screen">
          <div>
            {accessToken ? (
              <div className="flex items-center gap-2 mt-4">
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
          <div className="border-b-2 w-full py-2"></div>
          <Link
            to="/add-product"
            className="flex gap-2 items-center uppercase text-sm pb-1 pt-4"
          >
            <FiPlusCircle /> Add Product
          </Link>
          <div className="border-b-2 w-full py-2"></div>
          <div className="menu flex flex-col items-center gap-5 uppercase font-medium text-sm tracking-wider py-8">
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
          <SocialIcons className="text-text gap-4 text-lg" />
        </div>
      </Drawer>
    </div>
  );
};

export default MobileHeader;
