import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { httpGet, BASE_IMG } from "../../../services/TMDBService";

const img= "https://image.tmdb.org/t/p/original"


export default function MovieDetail() {
  const [detailMovie, setDetailMovie] = useState([]);
  const [creditChar, setCreditChar] = useState([]);
  const { movieId } = useParams()

  useEffect(() => {
    if(movieId) {
      httpGet(`/movie/${movieId}`)
        .then(movie => {
          // console.log(movie);
          setDetailMovie(movie)

        })
        .catch(error => console.log(error))
        httpGet(`/movie/${movieId}/credits`)
         .then(credit => {
          // console.log(credit)
          setCreditChar(credit)
          })
         .catch(error => console.log(error))
      }
    //  if (movieId) {
    //    httpGet(`/movie/${movieId}/credits`)
    //      .then(credit => {
    //       console.log(credit)
    //       setCreditChar(credit)
    //       })
    //      .catch(error => console.log(error))
    //      console.log("el cast", creditChar)
    //  }
  },[movieId])


    return (
      <div>
        <h3>
         - Página MovieDetail -
        </h3>
        <p>{detailMovie.original_title}</p>

        <img src={`${img}${detailMovie.poster_path}`} alt={""}/>

        <p>{detailMovie.release_date}</p>

        {
          detailMovie?.production_companies?.map(production => {
            return (
              <>
                <ul>
                  <li>{production.name}</li>
                </ul>
              </>
            )
        })}
        
        <p>- Genres -</p>
        {
          detailMovie?.genres?.map(genres => {
            return (
              <>
              <ul>
                  <li>{genres.name}</li>
                </ul>
              </>
            )
        })}

        <p>- Overviews -</p>
        <p>{detailMovie.overview}</p>

        <div className="containerMostSearched">
          {creditChar.cast?.map(credit => {
            return (
              <div key={credit.id} className="itemMostSearched">
              <Link to={`/movie/${credit.id}`}>
                <img src={`${BASE_IMG}${credit.profile_path}`} alt={credit.title}/>
                <h5>{credit.title}</h5>
              </Link>
              </div>
            )
          })
          }
        </div>

      </div>
    );
}
