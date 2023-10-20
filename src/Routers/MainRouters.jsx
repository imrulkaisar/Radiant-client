import { createBrowserRouter } from "react-router-dom";
import PageTemplate from "../Layouts/PageTemplate";
import Home from "../Pages/Home";
import AddProduct from "../Pages/AddProduct";
import UpdateProduct from "../Pages/UpdateProduct";
import ProductDetails from "../Layouts/ProductDetails";
import BrandDetails from "../Layouts/BrandDetails";
import AddBrand from "../Pages/AddBrand";
import UpdateBrand from "../Pages/UpdateBrand";
import Cart from "../Pages/Cart";
import Profile from "../Pages/Profile";
import AddType from "../Pages/AddType";
import Products from "../Pages/Products";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const MainRouters = createBrowserRouter([
  {
    path: "/",
    element: <PageTemplate />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:url",
        element: <ProductDetails />,
      },
      {
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        path: "update-product/:id",
        element: <UpdateProduct />,
      },
      {
        path: "/brand/:url",
        element: <BrandDetails />,
      },
      {
        path: "/add-brand",
        element: <AddBrand />,
      },
      {
        path: "/update-brand/:url",
        element: <UpdateBrand />,
      },
      {
        path: "/add-type",
        element: <AddType />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default MainRouters;
