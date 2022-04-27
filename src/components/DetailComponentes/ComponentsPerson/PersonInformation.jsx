import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { httpGet, BASE_IMG } from "../../../services/TMDBService";

export default function PersonInformation() {
    const [detailPerson, setDetailPerson] = useState([]);
    const [creditPerson, setCreditPerson] = useState();
    const {personId} = useParams();

    useEffect(() => {
        if(personId){
            httpGet(`/person/${personId}`)
                .then(person => setDetailPerson(person))
                .catch(error => console.log(error))

            httpGet(`/person/${personId}/combined_credits`)
                .then(credit => setCreditPerson(credit))
                .catch(error => console.log(error))
        }
    }, [personId])

    return (
        <>
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
        </>
    )
}



// sfc + tab para crear lo que tengo arriba