import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
// import  {getUser}  from "../services/UsersService";
import { ROUTE } from "./routes";

const ProtectedRoute = ({ children, getUser }) => {
  // const {id} = useParams()
  // const { user} = getUser()
  const authContextValue = useContext(useAuthContext);
  if (!authContextValue.user) {
    return <Navigate to={ROUTE.LOGIN} replace />;
  }

  return children;
};

export default ProtectedRoute;
