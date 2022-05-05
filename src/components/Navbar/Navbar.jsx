// import "../../style/Style.css";
// import "../../style/styles.scss"
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import AuthButtons from "../AuthButtons/AuthButtons";
import SearchBar from "../SearchBar/SearchBar";
import darkLogo from "../../images/Logo-dark-mode.png"
import lightLogo from "../../images/Logo-light-mode.png"
import "./Navbar.scss"

const Navbar = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <>
      <div className={theme}>
      <div className="Nav nav-color">
        <Link to={"/"}>
        {
          theme === "light" 
          ? <img className="logo" src={lightLogo} alt={""}/>
          : <img className="logo" src={darkLogo} alt={""}/> 
        }
        </Link>
        <ul className="buttonsNav">
            <li>
              <SearchBar/>
            </li>
            
          <li>
            <AuthButtons />
          </li>
          <li>
            <button className="btn-theme" onClick={toggleTheme}>
                  
            {theme === "dark" 
            ? <i class="fa-regular fa-lightbulb  fa-xl"></i>
            : <i class="fa-solid fa-lightbulb  fa-xl"></i> }
            </button>
          </li>
        </ul>
      </div>
      </div>
    </>
  );
};

export default Navbar;
