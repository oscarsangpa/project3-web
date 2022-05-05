import { useAuthContext } from "../../contexts/AuthContext";

const Profile = () => {
  const { user } = useAuthContext();
  // console.log(user)
  return ( 
    <>
      <h4>Profile</h4>
      <p> Hello {user.name}!</p>
      <img src={user.image} alt={" "} />
    </>
   );
}
 
export default Profile;