import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { httpGet, BASE_IMG } from "../../../services/TMDBService";
import "../../../components/PopularSearched/PopularPersonSearched.css"
import Filmography from "../../../components/Filmography/Filmography";

export default function PersonDetail() {
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
      <div>
        <h3>
          - Página PersonDetail -
        </h3>

        <p>{detailPerson.name}</p>
        {detailPerson.profile_path && <img src={`${BASE_IMG}${detailPerson.profile_path}`} alt={""}/>}
        <ul>
          <li>
        <span>Known For:</span>{detailPerson.known_for_department}
        </li>
          <li>
        <span>Born in:</span>{detailPerson.place_of_birth}
        </li>
          <li>
        <span>Birthday: </span> {detailPerson.birthday}
        </li>
          <li>
        <span>Biography: </span> {detailPerson.biography}
        </li>

        </ul>
        <h3>- Known For:</h3>
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

        <h3>- Filmography - </h3>
        {/* {
          creditPerson?.cast.map(cast => {
            return (
              <ul key={cast.id}>
                <li>
                {cast.release_date} 
                <Link to={`/movie/${cast.id}`}>
                - {cast.sort()} as 
                </Link>
                {cast.character}</li>
              </ul>
            )
          })
        } */}

        <Filmography credits={creditPerson}/>

      </div>
    );
}
