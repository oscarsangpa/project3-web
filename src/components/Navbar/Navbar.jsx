import "../../style/Style.css";
import { Link } from "react-router-dom";
import AuthButtons from "../AuthButtons/AuthButtons";
import SearchBar from "../SearchBar/SearchBar";
import logo from "../../images/KnownFor-removebg-preview-cortada.png";

const Navbar = () => {

  return (
    <>
      <div className="Nav">
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
            <button>SOL</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
