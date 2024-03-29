import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getCurrentUser } from '../services/UsersService'
import { getAccessToken, logout as deleteToken, setAccessToken } from '../store/AccessTokenStore';
import { isValidJwt } from '../utils/jwt'

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate()
  let location = useLocation();
  const fetchedRef = useRef(false)

  let from = location.state?.from?.pathname || "/profile";

  const [user, setUser] = useState()
  const [authenticationChecked, setAuthenticationChecked] = useState(false)

  const login = (token) => {
    setAccessToken(token)

    getUser(true)
  }

  const logout = ()=> {
    deleteToken()
    setUser(null)

 }  
 
 const getUser = useCallback((isLogin) => {
    getCurrentUser()
      .then(userFromAPI => {
        setUser(userFromAPI)

        setAuthenticationChecked(true)

        if (isLogin) {
          navigate(from, { replace: true })
        }
      })
  }, [navigate, from])

  useEffect(() => {
    if (!fetchedRef.current) {
      // token?
      if (getAccessToken()) {
        // console.log(getAccessToken())
        if (isValidJwt(getAccessToken())) {
          getUser()
        } else {
          logout()
        }
      } else {
        setAuthenticationChecked(true)
      }
      fetchedRef.current = true
    }
  }, [getUser])

  const value = {
    user,
    login,
    authenticationChecked,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContext