// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { /*httpGet,*/ BASE_IMG } from "../../services/TMDBService";

export default function PersonInformation({personInfo}) {

    return (
        <>
          <h3>{personInfo.name}</h3>
          {personInfo.profile_path && <img src={`${BASE_IMG}${personInfo.profile_path}`} alt={""}/>}
          <ul>
            <li>
                <strong>Known For: </strong>{personInfo.known_for_department}
            </li>
            <li>
                <strong>Born in: </strong>{personInfo.place_of_birth}
            </li>
            <li>
                <strong>Birthday: </strong> {personInfo.birthday}
            </li>
            <li>
                <strong>Biography: </strong> {personInfo.biography}
            </li>
          </ul>  
        </>
    )
}



// sfc + tab para crear lo que tengo arriba