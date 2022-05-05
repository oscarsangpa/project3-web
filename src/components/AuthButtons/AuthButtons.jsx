import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { useTheme } from "../../contexts/ThemeContext";
import "./AuthButtons.scss";

const AuthButtons = () => {
  const {theme} = useTheme()
  const navigate = useNavigate
  const {user, logout} = useAuthContext()

  const onSubmit = () => {
    logout()
    console.log("SALIENDO")
    // navigate("/")

  }

  return ( 
    <nav className={theme}>
      <div className="buttonsLRP">
        {
          user ?
          ( 
            <>
            <Link to={"/profile"}>
              <p className="auth-btn title">
                <img src={user.image} alt={user.name}/>
              </p>
            </Link>
              <button onClick={onSubmit}>logout</button> 
            </>
          )
          :   
          (
            <>
              <Link to={"/login"}>
                <p className="auth-btn title">Login</p>
              </Link>
              <Link to={"/register"}>
                <p className="auth-btn title">Register</p>
              </Link>
            </>
          )
        }
      </div>
    </nav>
   );
}
 
export default AuthButtons;