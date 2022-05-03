// import "../../style/Style.css";
import "../../style/ESTYLE.scss"
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import AuthButtons from "../AuthButtons/AuthButtons";
import SearchBar from "../SearchBar/SearchBar";
import logo from "../../images/logo-KnownFor.png"

const Navbar = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <>
      <div className={theme}>
      <div className="Nav nav-color">
        <Link to={"/"}>
          <img className="logo" src={logo} alt={""}/>
        </Link>
        <ul className="buttonsNav">
            <li>
              <SearchBar/>
            </li>
            
          <li>
            <AuthButtons />
          </li>
          <li>
            <button onClick={toggleTheme}>{theme}</button>
          </li>
        </ul>
      </div>
      </div>
    </>
  );
};

export default Navbar;
