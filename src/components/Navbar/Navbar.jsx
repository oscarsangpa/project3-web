import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthButtons from "../AuthButtons/AuthButtons";

// import Link frm "react-router-dom";
const Navbar = () => {
  const [authBtn, setAuthBtn] = useState(false);

  const showBtn = () => {
    setAuthBtn(!authBtn)
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
          
          <button >Search</button>
          <button>{/*ICONO DE MODO NOCHE*/}</button>
      </ul>
    </>
   );
}
 
export default Navbar;