// import "../../style/Style.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

const AuthButtons = () => {
  const {user} = useAuthContext()

  return ( 
    <>
      <div className="buttonsLRP">
        {
          user ?
          ( 
            <Link to={"/profile"}>
              <button>Profile</button>
            </Link> 
          )
          :   
          (
            <>
              <Link to={"/login"}>
                <button>Login</button>
              </Link>
              <Link to={"/register"}>
                <button>Register</button>
              </Link>
            </>
          )
        }
      </div>
    </>
   );
}
 
export default AuthButtons;