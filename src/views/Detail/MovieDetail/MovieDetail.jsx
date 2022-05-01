import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { httpGet } from "../../../services/TMDBService";
import Cast from "../../../components/Cast/Cast";
import Information from "../../../components/Information/Information";
import Review from "../../../components/Review/Review";
import FavouritesSearches from "../../../components/FavouritesSearchs/FavouritesSearches";

export default function MovieDetail() {
  const [detailMovie, setDetailMovie] = useState([]);
  const [creditChar, setCreditChar] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId) {
      httpGet(`/movie/${movieId}`)
        .then((movie) => {
          setDetailMovie(movie);
        })
        .catch((error) => console.log(error));
      httpGet(`/movie/${movieId}/credits`)
        .then((credit) => {
          setCreditChar(credit);
        })
        .catch((error) => console.log(error));
    }
  }, [movieId]);

  return (
    <>
      <Information info={detailMovie} />
      <FavouritesSearches saveSearch={detailMovie}/>
      <Cast cast={creditChar} />

      <Review/>
    </>
  );
}
