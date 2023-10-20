import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MainRouters from "./Routers/MainRouters";
import UserContextProvider from "./Contexts/UserContext";
import DataContextProvider from "./Contexts/DataContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <DataContextProvider>
        <RouterProvider router={MainRouters} />
      </DataContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
