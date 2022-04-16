import { Link } from "react-router-dom";
import './Navbar.css';


const Navbar = () => {
  return ( 
    <>
      <nav className="Navbar">
        <ul className="item">
          <li>Who Is</li>
          <li>
            <Link to="/login">
            <button>
              Login
            </button>
            </Link>
          </li>
          <li>
            <Link to="/register">
            <button>
              Register
            </button>
            </Link>
          </li>
        </ul>

      </nav>
    </>
   );
}
 
export default Navbar;