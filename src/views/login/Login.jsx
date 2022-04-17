import React, { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";

export default function Login() {
  const authContextValue = useContext(AuthContext);
  return (
    <div>
      <div>Página Login</div>
      <div>
        {authContextValue.user ? (
          <button onClick={authContextValue.logoutUser}>LOGOUT</button>
        ) : (
          <button onClick={authContextValue.loginUser}>LOGIN</button>
        )}
      </div>
    </div>
  );
}
