// import "../../style/Style.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { logout } from "../../store/AccessTokenStore";


const AuthButtons = () => {
  const navigate = useNavigate
  const {user} = useAuthContext()

  const onSubmit = () => {
    logout()
    console.log("SALIENDO")
    navigate("/")

  }

  return ( 
    <>
      <div className="buttonsLRP">
        {
          user ?
          ( 
            <>
            <Link to={"/profile"}>
              <button>Profile</button>
            </Link>
              <button onClick={onSubmit}>logout</button> 
            </>
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