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
              <button className="button">Profile</button>
            </Link>
              <button onClick={onSubmit}>logout</button> 
            </>
          )
          :   
          (
            <>
              <Link to={"/login"}>
                <button className="button">Login</button>
              </Link>
              <Link to={"/register"}>
                <button className="button">Register</button>
              </Link>
            </>
          )
        }
      </div>
    </>
   );
}
 
export default AuthButtons;