import { useAuthContext } from "../../contexts/AuthContext";

const Profile = () => {
  const { user } = useAuthContext();
  console.log(user)
  return ( 
    <>
      <h4>Profile</h4>
      <img src={user.image} alt={" "} />
      {user && JSON.stringify(user)}
    </>
   );
}
 
export default Profile;