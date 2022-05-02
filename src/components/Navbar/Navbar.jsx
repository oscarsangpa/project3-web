import "../../style/Style.css";
import { useAuthContext } from "../../contexts/AuthContext";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthButtons from "../AuthButtons/AuthButtons";
import SearchBar from "../SearchBar/SearchBar";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/menu";
import { logout } from "../../store/AccessTokenStore";
import logo from "../../images/KnownFor-removebg-preview.png";

const Navbar = () => {
  const { user } = useAuthContext();
  const [showSearchBar, setShowSearchBar] = useState(false);

  const showBar = () => {
    setShowSearchBar(!showSearchBar);
  };

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
            <button>{/*ICONO DE MODO NOCHE*/}</button>

          </li>
          <li>
            <button className="button" onClick={() => showBar()}>Search</button>
            <div className="searchBarNav">
              {showSearchBar &&
               <SearchBar className="button"/>}
            </div>
          </li>
          <Menu>
            <MenuButton>muñecajo</MenuButton>
            <MenuList>
              {user ? (
                <MenuGroup>
                  <MenuItem>
                  <Link to={"/profile"}>
                  Profile

                  </Link>
                  </MenuItem>
                  <MenuItem onClick={logout}> Logout </MenuItem>
                </MenuGroup>
              ) : (
                <MenuGroup>
                  <MenuItem>
                    <Link to={"/login"}>Login</Link>
                  </MenuItem>

                  <MenuItem>
                    <Link to={"/register"}>Register</Link>
                  </MenuItem>
                </MenuGroup>
              )}
            </MenuList>
          </Menu>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
