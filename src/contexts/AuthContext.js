import { useState, createContext } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(localStorage.getItem("user"));

  const loginUser = () => {
    setUser({ id: "userId" });
    //'localStorage' Almacen para guardar los datos del
    // usuatrio. Actúa como unas  cookies, pero esa 
    //información se guarda en su ordenador, no es 
    //nuestro servidor
    localStorage.setItem("user", "userId");
  };
  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
}
