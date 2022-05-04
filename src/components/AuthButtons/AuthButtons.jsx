import "../../style/Style.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { logout } from "../../store/AccessTokenStore";


const AuthButtons = () => {
  const navigate = useNavigate
  const {user} = useAuthContext()

  const onSubmit = () => {
    logout()
    console.log("SALIENDO")
    // navigate("/")

  }

  return ( 
    <>
      <div className="buttonsLRP">
        {
          user ?
          ( 
            <>
            <Link to={"/profile"}>
              <p className="auth-btn">Profile</p>
            </Link>
              <button onClick={onSubmit}>logout</button> 
            </>
          )
          :   
          (
            <>
              <Link to={"/login"}>
                <p className="auth-btn">Login</p>
              </Link>
              <Link to={"/register"}>
                <p className="auth-btn">Register</p>
              </Link>
            </>
          )
        }
      </div>
    </>
   );
}
 
export default AuthButtons;