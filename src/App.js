import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./guards/ProtectedRoute";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Profile from "./views/Profile/Profile";
import Register from "./views/Register/Register";

function App() {
  return (
    <div className="App">
     <div>
     <Routes>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="/" element={<Home/>} />


              <Route path="profile" element={<Profile />} />
            <Route path="/" element={<ProtectedRoute/>} >
              {/* <Route path="favourites" element={<Favourites />} /> */}
            </Route>

          </Routes>
     </div>
    </div>
  );
}

export default App;


