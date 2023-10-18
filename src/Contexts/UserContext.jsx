import { createContext, useState } from "react";

export const UserContext = createContext(null);

const UserContextProvider = () => {
  const [user, setUser] = useState({});

  const authInfo = {
    user,
  };

  return <UserContext.Provider value={authInfo}></UserContext.Provider>;
};

export default UserContextProvider;
