import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { httpGet, BASE_IMG } from "../../../services/TMDBService";

const img= "https://image.tmdb.org/t/p/original"


export default function MovieDetail() {
  const [detailMovie, setDetailMovie] = useState([]);
  const { movieId } = useParams()

  useEffect(() => {
    if(movieId) {
      httpGet(`/movie/${movieId}`)
        .then(movie => setDetailMovie(movie))
        .catch(error => console.log(error))
    }
  },[movieId])


    return (
      <div>
        <h3>
         - Página MovieDetail -
        </h3>
        <p>{detailMovie.original_title}</p>
        <img src={`${img}${detailMovie.poster_path}`} alt={""}/>

      </div>
    );
}
