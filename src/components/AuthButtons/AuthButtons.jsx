import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

const AuthButtons = () => {
  const {user} = useAuthContext()

  return ( 
    <>
    {user ?
     ( 
        <div>
          <Link to={"/profile"}>
            <button>Profile</button>
          </Link> 
        </div>
      )
      :   
       (
         <div>
          <Link to={"/login"}>
            <button>Login</button>
          </Link>  

          <Link to={"/register"}>
            <button>Register</button>
          </Link> 
        </div>
        )
    }
    </>
   );
}
 
export default AuthButtons;