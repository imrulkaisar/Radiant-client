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
        path: "/product/:id",
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
        path: "/brand/:id",
        element: <BrandDetails />,
      },
      {
        path: "/add-brand",
        element: <AddBrand />,
      },
      {
        path: "/update-brand/:id",
        element: <UpdateBrand />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

export default MainRouters;