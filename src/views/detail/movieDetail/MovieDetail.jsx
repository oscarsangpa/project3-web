import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { httpGet, BASE_IMG } from "../../../services/TMDBService";

const img= "https://image.tmdb.org/t/p/original"


export default function MovieDetail() {
  const [detailMovie, setDetailMovie] = useState([]);
  // const [creditChar, setCreditChar] = useState([]);
  const { movieId } = useParams()
  const {creditId} = useParams()

  useEffect(() => {
    if(movieId) {
      httpGet(`/movie/${movieId}`)
        .then(movie => setDetailMovie(movie))
        .catch(error => console.log(error))
      }
    //  if (creditId) {
    //    httpGet(`/credit/${creditId}`)
    //      .then(credit => setCreditChar(credit))
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

        {/* {
          creditChar?.map(char => {
            return (
              <div>
                <p>{char.name}</p>
                <p>{char.character}</p>
                <p>{char.original_name}</p>
              </div>
            )
          })
        } */}

      </div>
    );
}
