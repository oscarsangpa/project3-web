import { useEffect, useState} from "react";
import { httpGet } from "../../services/TMDBService";
import PopularSearched from "../PopularSearched/PopularSearched";
import { useTheme } from "../../contexts/ThemeContext";
import { BASE_IMG } from "../../services/TMDBService";
import { Link } from "react-router-dom";
import FavouritesSearches from "../FavouritesSearchs/FavouritesSearches";

const MyFavs = (props) => {
  const [favMovie, setFavMovie] = useState([])
  const [favPerson, setFavPerson] = useState([]);
  const [favTv, setFavTv] = useState([]);
  const { theme} = useTheme()



  useEffect(() => {
    if (props) {
      httpGet(`/movie/${props}`)
        .then((movie) => {
          setFavMovie(movie);
        })
        .catch((error) => console.log(error))
      }  

        if (props) {
          httpGet(`/person/${props}`)
            .then((person) => setFavPerson(person))
            .catch((error) => console.log(error));
        }

            if (props) {
              httpGet(`/tv/${props}`)
                .then((tv) => {
                  setFavTv(tv);
                  
                })
                .catch((error) => console.log(error));
            }
  })



  return ( 
    <>
      <div className={theme}>
        <div className="containerMostSearched">
          {props.MyFav?.map((el) => {
            return (
              <div key={el.id} className="itemMostSearched section title ">
                <Link className="text"
                  to={
                    el.profile_path
                      ? `/person/${el.id}`
                      : el.title
                      ? `/movie/${el.id}`
                      : el.name && `/tv/${el.id}`
                  }
                  
                >
                  <img
                    src={
                      el.poster_path
                        ? `${BASE_IMG}${el.poster_path}`
                        : `${BASE_IMG}${el.profile_path}`
                    }
                    alt={el.title}
                  />
                  <h5 className="title-carousel">{el.title || el.name}</h5>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

    
      <PopularSearched MyFavs={favPerson} />
      <PopularSearched MyFavs={favMovie} />
      <PopularSearched MyFavs={favTv} />
    </>
   );
}
 
export default MyFavs;