import { useEffect, useState, createContext, useContext } from "react";
import { apiURL } from "./GlobalContext";
import { UserContext } from "./UserContext";

export const DataContext = createContext(null);

const DataContextProvider = ({ children }) => {
  // Extracting user from the context
  const { user } = useContext(UserContext);

  // Initializing states
  const initialCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [types, setTypes] = useState([]);
  const [users, setUsers] = useState([]);

  // Effect for updating cartItems in localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Effect for fetching products and all users
  useEffect(() => {
    // product fetching
    fetch(`${apiURL}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));

    // All brands fetching
    fetch(`${apiURL}/brands`)
      .then((res) => res.json())
      .then((data) => setBrands(data))
      .catch((error) => console.error(error));

    // All Types fetching
    fetch(`${apiURL}/types`)
      .then((res) => res.json())
      .then((data) => setTypes(data))
      .catch((error) => console.error(error));

    // All users fetching
    fetch(`${apiURL}/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  // Effect for fetching user-specific data
  useEffect(() => {
    if (user && user.email) {
      // single user fetching
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

  // Data object for the context provider
  const data = {
    cartItems,
    setCartItems,
    products,
    brands,
    types,
    users,
  };

  // Return the context provider with the provided data
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataContextProvider;
