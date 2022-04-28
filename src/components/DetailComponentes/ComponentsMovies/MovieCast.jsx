import { Link } from "react-router-dom";
import { BASE_IMG } from "../../../services/TMDBService";

const MovieCast = (creditChar) => {
    return (  
        <>
            <h3>- Cast -</h3>
            <div className="containerMostSearched">
            {creditChar.cast?.map(credit => {
                return (
                <div key={credit.id} className="itemMostSearched">
                <Link to={`/person/${credit.id}`}>
                    <img src={`${BASE_IMG}${credit.profile_path}`} alt={credit.title}/>
                    <h5>{credit.title}</h5>
                </Link>
                </div>
                )
            })
            }
            </div>
        </>
    );
}
 
export default MovieCast;