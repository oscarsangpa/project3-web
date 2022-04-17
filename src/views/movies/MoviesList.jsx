import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { httpGet } from "../../services/TBDBService/TMBDService";

const MoviesList = () => {
  const [ movies, setMovies] = useState([]);

  const [query, setQuery] = useSearchParams();
  const search = query.get("search");

  useEffect(()=> {
    const searchUrl = search 
    ? "/search/movie?query=" + search 
    : "/discover/movie";
    httpGet(searchUrl)
      .then(data => setMovies(data.results))
      .catch(error => console.log(error))
  })
  return ( 
    <>
      {movies.map(movie => {
        return (
          <p key={movie.id}>{movie.name}</p>
        )
      })}

    </>
   );
}
 
export default MoviesList;