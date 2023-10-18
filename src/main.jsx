import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MainRouters from "./Routers/MainRouters";
import UserContextProvider from "./Contexts/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={MainRouters} />
    </UserContextProvider>
  </React.StrictMode>
);
