import { Link } from "react-router-dom";
import { BASE_IMG } from "../../../services/TMDBService";

export default function KnownFor({creditCast}) {
    
    return (
        <>
            <h3>- Known For:</h3>
            <div className="containerMostSearched">
        {
          creditCast?.cast.map(person => {
            return (
              <div key={person.id} className="itemMostSearched">
              <Link to={`/movie/${person.id}`}>
              {person.poster_path && <img src={`${BASE_IMG}${person.poster_path}`} alt={person.original_title}/>}
              <h5>{person.original_title}</h5>
              </Link>
              </div>
            )
          })
        }
        </div>
        </>
    )
}