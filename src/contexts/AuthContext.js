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

// import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'
// import { getCurrentUser } from '../services/UsersService'
// import { getAccessToken, logout, setAccessToken } from '../store/accessTokenStore'
// import { isValidJwt } from '../utils/jwt'

// const AuthContext = createContext()

// export const useAuthContext = () => useContext(AuthContext)

// export const AuthContextProvider = ({ children }) => {
//   const navigate = useNavigate()
//   let location = useLocation();
//   const fetchedRef = useRef(false)

//   let from = location.state?.from?.pathname || "/profile";

//   const [user, setUser] = useState()
//   const [authenticationChecked, setAuthenticationChecked] = useState(false)

//   const login = (token) => {
//     setAccessToken(token)

//     getUser(true)
//   }

//   const getUser = useCallback((isLogin) => {
//     getCurrentUser()
//       .then(userFromAPI => {
//         setUser(userFromAPI)

//         setAuthenticationChecked(true)

//         if (isLogin) {
//           navigate(from, { replace: true })
//         }
//       })
//   }, [navigate, from])

//   useEffect(() => {
//     if (!fetchedRef.current) {
//       console.log('sdjhlasdh')
//       // token?
//       if (getAccessToken()) {
//         console.log(getAccessToken())
//         if (isValidJwt(getAccessToken())) {
//           getUser()
//         } else {
//           logout()
//         }
//       } else {
//         setAuthenticationChecked(true)
//       }
//       fetchedRef.current = true
//     }
//   }, [getUser])

//   const value = {
//     user,
//     login,
//     authenticationChecked
//   }

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   )
// }
// export default AuthContext