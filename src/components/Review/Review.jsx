import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

const Review = () => {
  const { user } = useAuthContext()
  return ( 
    <>
      {
        !user ?
        <>
        <p>
        Sign in {<Link to={"/register"}> here </Link>} to comment
        </p>
        </>

        :
        <div>
          caja de comentatios
        </div>
      }

    </>
   );
}
 
export default Review;