import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { httpGet, BASE_IMG } from "../../../services/TMDBService";

export default function KnownFor() {
    const [detailPerson, setDetailPerson] = useState([]);
    const [creditPerson, setCreditPerson] = useState();
    const { personId} = useParams();
  
    useEffect(()=> {
      if(personId) {
        httpGet(`/person/${personId}`)
          .then(person => setDetailPerson(person))
          .catch(error => console.log(error))
    
        httpGet(`/person/${personId}/combined_credits`)
          .then(credit => setCreditPerson(credit))
          .catch(error => console.log(error))
      }
        
    },[personId])

    return (
        <>
            <div className="containerMostSearched">
        {
          creditPerson?.cast.map(person => {
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