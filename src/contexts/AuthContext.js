// import { useState, createContext } from "react";

// export const AuthContext = createContext();

// export default function AuthContextProvider({ children }) {
//   const [user, setUser] = useState(localStorage.getItem("user"));

//   const loginUser = () => {
//     setUser({ id: "userId" });
//     //'localStorage' Almacen para guardar los datos del
//     // usuatrio. Actúa como unas  cookies, pero esa 
//     //información se guarda en su ordenador, no es 
//     //nuestro servidor
//     localStorage.setItem("user", "userId");
//   };
//   const logoutUser = () => {
//     setUser(null);
//     localStorage.removeItem("user");
//   };
//   return (
//     <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

//_______________________________________

import { createContext, useContext, useState, useEffect } from 'react'
import { getCurrentUser } from '../services/UsersService'
import { getAccessToken, setAccessToken } from '../store/AccessTokenStore';

export const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)


export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState()

  const login = (token) => {
    setAccessToken(token)

    getUser()
  }

  const getUser = () => {
    getCurrentUser()
      .then(userFromAPI => setUser(userFromAPI))
  }

  useEffect(() => {
    // token?
    if (getAccessToken()) {
      getUser()
    }
  }, [])

  const value = {
    user,
    login
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;

