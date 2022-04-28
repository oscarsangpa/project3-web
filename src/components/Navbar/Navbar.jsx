import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthButtons from "../AuthButtons/AuthButtons";
import SearchBar from "../SearchBar/SearchBar";

// import Link frm "react-router-dom";
const Navbar = () => {
  const [authBtn, setAuthBtn] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false)

  // const showBtn = () => {
  //   setAuthBtn(!authBtn)
  // }

  const showBar = () => {
    setShowSearchBar(!showSearchBar)
    console.log("funcionaaaaaaaaaaaaaaaaaaaaa")
  }

  return ( 
    <>
      <Link to={'/'}>WHO IS</Link>
      <ul>
          {/*METER AUTENTIFICACIÓN PARA REDIRIGIR A LOGIN O PROFILE */}
          {/* <Link to={"/profile"}>
          <button onClick={showBtn}>Profile</button> 
          </Link> */}
          <AuthButtons/>
          
          <button onClick={() => showBar()}>Search</button>

          {showSearchBar &&
            <SearchBar/>
          }

          <button>{/*ICONO DE MODO NOCHE*/}</button>
      </ul>
    </>
   );
}
 
export default Navbar;