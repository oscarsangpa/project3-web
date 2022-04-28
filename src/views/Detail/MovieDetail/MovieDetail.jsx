import React, { useEffect, /*useRef,*/ useState } from "react";
import { Link, useParams } from "react-router-dom";
import { httpGet, BASE_IMG } from "../../../services/TMDBService";
import MovieInformation from "../../../components/DetailComponentes/Movie/MovieInformation";
// import MovieCast from "../../../components/DetailComponentes/Movie/MovieCast";
import Cast from "../../../components/Cast/Cast";
import Information from "../../../components/Information/Information";

export default function MovieDetail() {
  const [detailMovie, setDetailMovie] = useState([]);
  const [creditChar, setCreditChar] = useState([]);
  const { movieId } = useParams()

  useEffect(() => {
    if(movieId) {
      httpGet(`/movie/${movieId}`)
        .then(movie => {
          setDetailMovie(movie)
        })
        .catch(error => console.log(error))
      httpGet(`/movie/${movieId}/credits`)
        .then(credit => {
          setCreditChar(credit)
        })
        .catch(error => console.log(error))
    }
  },[movieId])
  let num = 1

    return (
      <div>
        {/* <MovieInformation movieInfo={detailMovie}/> */}
        <Information info={detailMovie}/>
        {/* <MovieCast movieCast={creditChar}/> */}
        <Cast cast={creditChar}/>
      </div>
      // <div>

      //   <p>{detailMovie.original_title}</p>
      //   <img src={`${BASE_IMG}${detailMovie.poster_path}`} alt={""}/>
      //   <p>{detailMovie.release_date}</p>
      //   {detailMovie?.production_companies?.map(production => {
      //     return (
      //       <>
      //         <ul>
      //           <li>{production.name}</li>
      //         </ul>
      //       </>
      //     )
      //   })}
            
      //   <p>- Genres -</p>

      //   {detailMovie?.genres?.map(genres => {
      //     return (
      //       <>
      //         <ul>
      //           <li>{genres.name}</li>
      //         </ul>
      //       </>
      //     )
      //   })}

      //   <p>- Overviews -</p>
            
      //   <p>{detailMovie.overview}</p>
        
      //   <h3>- Cast -</h3>
      //   <div className="containerMostSearched">
      //     {creditChar.cast?.map(credit => {
      //       return (
      //         <div key={credit.id} className="itemMostSearched">
      //           <Link to={`/person/${credit.id}`}>
      //             <img src={`${BASE_IMG}${credit.profile_path}`} alt={credit.title}/>
      //             <h5>{credit.title}</h5>
      //           </Link>
      //         </div>
      //       )})
      //     }
      //   </div>
      // </div>  
    );
}
