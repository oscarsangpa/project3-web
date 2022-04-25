import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { httpGet, BASE_IMG } from "../../services/TMDBService";


const PopularMoviesSearched = () => {

  const [movies, setMovies] = useState([])

  useEffect(()=> {
    httpGet("/movie/popular")
      .then(movie => {
        console.log(movie);
        setMovies(movie.results)
      })
      .catch(error => console.log(error))
  }, [])
  return ( 
    <>
        
        <div className="containerMostSearched">
          {movies.map(popMovie => {
            return (
              <div key={popMovie.id} className="itemMostSearched">
              <Link to={`/movie/${popMovie.id}`}>
                <img src={`${BASE_IMG}${popMovie.poster_path}`} alt={popMovie.title}/>
                <h5>{popMovie.title}</h5>
              </Link>
              </div>
            )
          })
          }
        </div>
    </>
   );
}
 
export default PopularMoviesSearched;