import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { apiURL } from "./GlobalContext";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export const DataContext = createContext(null);

const DataContextProvider = ({ children }) => {
  const initialCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [products, setProducts] = useState([]);

  const { user } = useContext(UserContext);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    // product fetching
    fetch(`${apiURL}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (user && user.email) {
      fetch(`${apiURL}/users/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0 && data[0].cartItems) {
            setCartItems([...data[0].cartItems]);
          }
        })
        .catch((error) => console.error(error));
    }
  }, [user]);

  const data = {
    cartItems,
    setCartItems,
    products,
  };
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataContextProvider;
