import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";
import { ROUTE } from "./routes";

const ProtectedRoute = ({ children }) => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue.user) {
    return <Navigate to={ROUTE.LOGIN} replace />;
  }

  return children;
};

export default ProtectedRoute;
