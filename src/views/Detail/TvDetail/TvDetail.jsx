import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BASE_IMG, httpGet } from "../../../services/TMDBService";
import TvInformation from "../../../components/DetailComponentes/Tv/TvInformation";
import TvCast from "../../../components/DetailComponentes/Tv/TvCast";
import Cast from "../../../components/Cast/Cast";

export default function SerieDetail() {

  const [detailTv, setDetailTv] = useState([]);
  const [background, setBackground] = useState([])
  const [creditChar, setCreditChar] = useState([]);
  const { tvId } = useParams()

  useEffect(() => {
    if(tvId) {
      httpGet(`/tv/${tvId}`)
        .then((tv) => {
          setDetailTv(tv)
          setBackground(tv.backdrop_path)
        })
        .catch(error => console.log(error))
      httpGet(`/tv/${tvId}/credits`)
        .then(credit => {
         console.log(credit)
         setCreditChar(credit)
         })
        .catch(error => console.log(error))
        console.log("el cast", creditChar)
      }
    //  if (creditId) {
    //    httpGet(`/credit/${creditId}`)
    //      .then(credit => setCreditChar(credit))
    //      .catch(error => console.log(error))
    //      console.log("el cast", creditChar)
    //  }

  },[tvId])

    return (
      <>
        <TvInformation tvInfo={detailTv}/>
        <Cast cast={creditChar}/>
      </>
      
      // <div>
      //   <h3>- TV Shows detail -</h3>
      //   <div style={{backgroungImage: `${BASE_IMG}${background}`}}>

      //     <p>{detailTv.original_name}</p>

      //     <img src={`${BASE_IMG}${detailTv?.poster_path}`} alt={""}/>

      //     <p>{detailTv.release_date}</p>

      //     {
      //     detailTv?.production_companies?.map(production => {
      //       return (
      //         <>
      //           <ul>
      //             <li>{production.name}</li>
      //           </ul>
      //         </>
      //       )
      //     })}

      //     <p>- Genres -</p>
      //     {
      //       detailTv?.genres?.map(genres => {
      //         return (
      //           <>
      //           <ul>
      //               <li>{genres.name}</li>
      //             </ul>
      //           </>
      //         )
      //       })
      //     }

      //     <p>- Overviews -</p>
      //     <p>{detailTv.overview}</p>
      //     </div>

      //     <div className="containerMostSearched">
      //       {creditChar.cast?.map(credit => {
      //         return (
      //           <div key={credit.id} className="itemMostSearched">
      //           <Link to={`/person/${credit.id}`}>
      //             <img src={`${BASE_IMG}${credit.profile_path}`} alt={credit.title}/>
      //             <h5>{credit.title}</h5>
      //           </Link>
      //           </div>
      //         )
      //       })
      //       }
      //     </div>
      // </div>
    );
}
