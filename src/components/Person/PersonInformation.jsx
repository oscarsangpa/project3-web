// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { /*httpGet,*/ BASE_IMG } from "../../services/TMDBService";
import FavouritesSearches from "../FavouritesSearchs/FavouritesSearches";
import "./person.scss";

export default function PersonInformation({personInfo}) {

    return (
        <>
          <h2 className="knownfor-title">{personInfo.name}</h2>
          <div className="info-container">

          {personInfo.profile_path && 
          <img className="img-profile" src={`${BASE_IMG}${personInfo.profile_path}`} alt={""}/>}
          <ul className="info-items">
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
                <strong>Gender: </strong> {personInfo.gender === 1 ? "Female" : "Male"}
            </li>
          </ul>
          </div>
            <div>
            <FavouritesSearches saveSearch={personInfo}/>  
            </div>
            <p className="biography">
                <strong>Biography: </strong> {personInfo.biography}
            </p>
        </>
    )
}



// sfc + tab para crear lo que tengo arriba