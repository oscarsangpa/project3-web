import React from "react";

// import Link frm "react-router-dom";
const Navbar = () => {
  return ( 
    <>

      <a href='/'>FACE HACK</a>
      {/* <Link to='/'>FACE HACK</Link> */}
      <ul>
          <button href="PROFILE">Profile</button> {/*METER AUTENTIFICACIÓN PARA REDIRIGIR A LOGIN O PROFILE */}
          <button >Search</button>
          <button>{/*ICONO DE MODO NOCHE*/}</button>
      </ul>
    </>
   );
}
 
export default Navbar;