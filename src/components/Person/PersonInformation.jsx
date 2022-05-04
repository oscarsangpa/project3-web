// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { /*httpGet,*/ BASE_IMG } from "../../services/TMDBService";
import styles from "./person.module.scss";

export default function PersonInformation({personInfo}) {

    return (
        <>
          <h2>{personInfo.name}</h2>
          <div className={styles.infoContainer}>

          {personInfo.profile_path && 
          <img className={styles.imgProfile} src={`${BASE_IMG}${personInfo.profile_path}`} alt={""}/>}
          <ul className={styles.infoItems}>
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
            <p className={styles.biography}>
                <strong>Biography: </strong> {personInfo.biography}
            </p>
        </>
    )
}



// sfc + tab para crear lo que tengo arriba