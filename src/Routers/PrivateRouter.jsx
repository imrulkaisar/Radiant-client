import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(UserContext);
  const { pathname } = useLocation();

  if (loading) {
    return null;
  }

  if (user && user.accessToken) {
    return children;
  } else {
    return <Navigate state={pathname} to="/login" />;
  }
};

export default PrivateRouter;
