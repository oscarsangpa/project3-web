import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { httpGet, BASE_IMG } from "../../../services/TMDBService";

const img= "https://image.tmdb.org/t/p/original"


export default function MovieDetail() {
  const [detailMovie, setDetailMovie] = useState([]);
  const [creditChar, setCreditChar] = useState([]);
  const { movieId } = useParams()
  const {creditId} = useRef()

  useEffect(() => {
    if(movieId) {
      httpGet(`/movie/${movieId}`)
        .then(movie => setDetailMovie(movie))
        .catch(error => console.log(error))
      }
     if (creditId) {
       httpGet(`/credit/${creditId}`)
         .then(credit => setCreditChar(credit))
         .catch(error => console.log(error))
         console.log("el cast", creditChar)
     }
  },[movieId, creditId])


    return (
      <div>
        <h3>
         - Página MovieDetail -
        </h3>
        <p>{detailMovie.original_title}</p>
        <img src={`${img}${detailMovie.poster_path}`} alt={""}/>
        {/* <p>{detailMovie.release_date}</p>
        {detailMovie.production_company.map(production => {
          return (
            <>
              <p>{production.name}</p>
            </>
          )
        })} */}
        {/* <p>{detailMovie.}</p> */}
        <p></p>

        {
          creditChar?.map(char => {
            return (
              <div className="containerMostSearched">
                {creditChar.map(credit => {
                  return (
                    <div key={credit.id} className="itemMostSearched">
                    <Link to={`/credit/${credit.id}`}>
                      <img src={`${BASE_IMG}${credit.poster_path}`} alt={credit.title}/>
                      <h5>{credit.title}</h5>
                    </Link>
                    </div>
                  )
                })
                }
        </div>
            )
          })
        }

      </div>
    );
}
