import { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { useTheme } from "../../contexts/ThemeContext";
import { httpGet } from "../../services/TMDBService";
import "./Profile.scss";



const Profile = ({}) => {
  const [mySearch, setMySearch] = useState([])
  const { user } = useAuthContext();
  const { theme } = useTheme();
  // console.log(user)
  return ( 
      <div className={theme}>
      <div className="background">
      <h4 className="text">Profile</h4>
      <img className="user-avatar" src={user.image} alt={user.name} />
      <p> Hello {user.name}!</p>
      </div>
      </div>
   );
}
 
export default Profile;