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
import PrivateRouter from "./PrivateRouter";
import Contact from "../Pages/Contact";

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
        element: (
          <PrivateRouter>
            <ProductDetails />
          </PrivateRouter>
        ),
      },
      {
        path: "/add-product",
        element: (
          <PrivateRouter>
            <AddProduct />
          </PrivateRouter>
        ),
      },
      {
        path: "update-product/:id",
        element: (
          <PrivateRouter>
            <UpdateProduct />
          </PrivateRouter>
        ),
      },
      {
        path: "/brand/:url",
        element: <BrandDetails />,
      },
      {
        path: "/add-brand",
        element: (
          <PrivateRouter>
            <AddBrand />
          </PrivateRouter>
        ),
      },
      {
        path: "/update-brand/:url",
        element: (
          <PrivateRouter>
            <UpdateBrand />
          </PrivateRouter>
        ),
      },
      {
        path: "/add-type",
        element: (
          <PrivateRouter>
            <AddType />
          </PrivateRouter>
        ),
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: (
          <PrivateRouter>
            <Cart />
          </PrivateRouter>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRouter>
            <Profile />
          </PrivateRouter>
        ),
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
