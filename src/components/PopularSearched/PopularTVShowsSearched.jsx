import { useEffect, useState } from "react";
import { httpGet, BASE_IMG } from "../../services/TMBDService/TMDBService";


const PopularTVShowsSearched = () => {

  const [tvShows, setTvShows] = useState([]);

  useEffect(()=> {
    httpGet("/tv/popular")
      .then(show => setTvShows(show.results))
      .catch(error => console.log(error))
  },[])


  return ( 
    <>
      <div className="containerMostSearched">
      {
        tvShows.map(popShow => {
          return (
            <div key={popShow.id} className="itemMostSearched">
              <img src={`${BASE_IMG}${popShow.poster_path}`} alt={popShow.name}/>
              <h5>{popShow.name}</h5>
            </div>
          )
        })
      }
      </div>
      
    </>
   );
}
 
export default PopularTVShowsSearched;