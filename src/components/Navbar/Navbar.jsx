import "../../style/Style.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthButtons from "../AuthButtons/AuthButtons";
import SearchBar from "../SearchBar/SearchBar";


const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false)

  const showBar = () => {
    setShowSearchBar(!showSearchBar)
  }

  return ( 
    <>
      <div className="Nav">
        <Link to={'/'}>KnownFor</Link>
        <ul className="buttonsNav">
            <li><AuthButtons /></li>
            <li><button>{/*ICONO DE MODO NOCHE*/}</button></li>
            <li>
              <button onClick={() => showBar()}>Search</button>
              <div className="searchBarNav">
                {showSearchBar && 

                (<SearchBar className="style"/>)}
              </div>
                
            </li>
        </ul>
      </div>
    </>
   );
}
 
export default Navbar;