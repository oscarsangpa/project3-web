import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
// import  {getUser}  from "../services/UsersService";
// import { ROUTE } from "./routes";

const ProtectedRoute = () => {
  const { user, authenticationChecked } = useAuthContext()
  let location = useLocation()


  if (authenticationChecked && !user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return (
    <Outlet />
  )
}

export default ProtectedRoute;

// const ProtectedRoute = ({ children, getUser }) => {
//   // const {id} = useParams()
//   // const { user} = getUser()
//   const authContextValue = useContext(useAuthContext);
//   if (!authContextValue.user) {
//     return <Navigate to={ROUTE.LOGIN} replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;

