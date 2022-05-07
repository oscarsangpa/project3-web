import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { useTheme } from "../../contexts/ThemeContext";
import { httpGet } from "../../services/TMDBService";
import PopularSearched from "../../components/PopularSearched/PopularSearched";
import "./Profile.scss";


const Profile = ({}) => {
  const [mySearch, setMySearch] = useState({
     movies: [],
     series: [],
     persons: []
  })
  const { user } = useAuthContext();
  const { theme } = useTheme();
 
  const notYet = <p> Not favourites now :( </p>
  
  useEffect(() => {
     let search;
     try {
        search = JSON.parse(window.localStorage.getItem('mySearch'));
        search?.forEach(item => {
           if(item.birthday) {
              setMySearch((prevState) => ({...prevState, persons: [...prevState.persons, item]}))
           }
           if(item.first_air_date) {
            setMySearch((prevState) => ({...prevState, series: [...prevState.series, item]}))
           }
           if(item.title) {
              setMySearch((prevState) => ({...prevState, movies: [...prevState.movies, item]}))
           }
        })
     } catch (error) {
        console.log(error);
     }


  }, [])
  // console.log(user)
  return ( 
      <div className={`${theme} background`}>
         <div className="background">
            <img className="user-avatar" src={user?.image} alt={user?.name} />
            <p className="text-profile"> Hello {user?.name}!</p>
            <h2 className="text title"> My favourite people</h2>
            <PopularSearched popular={mySearch.persons} />
            <h2 className="text title"> My favourites movies</h2>
            <PopularSearched popular={mySearch.movies} />
            <h2 className="text title"> My favourite TV shows</h2>
            <PopularSearched popular={mySearch.series} />
         </div>
      </div>
   );
}
 
export default Profile;