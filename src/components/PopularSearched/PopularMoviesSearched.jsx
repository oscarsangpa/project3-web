import { useEffect, useState } from "react";
import { httpGet, BASE_IMG } from "../../services/TMBDService/TMDBService";


const PopularMoviesSearched = () => {

  const [movies, setMovies] = useState([])

  useEffect(()=> {
    httpGet("/movie/popular")
      .then(movie => setMovies(movie.results))
      .catch(error => console.log(error))
  }, [])
  return ( 
    <>
        <h2> - Movies most searched - </h2>
        <div className="containerMostSearched">
      {movies.map(popMovie => {
        return (
          <div key={popMovie.id} className="itemMostSearched">
            <img src={`${BASE_IMG}${popMovie.poster_path}`} alt={popMovie.title}/>
            <h5>{popMovie.title}</h5>
          </div>
        )
      })
      }
        </div>
    </>
   );
}
 
export default PopularMoviesSearched;