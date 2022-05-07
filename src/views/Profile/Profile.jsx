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
  const [favMovie, setFavMovie] = useState([])
  const [favPerson, setFavPerson] = useState([]);
  const [favTv, setFavTv] = useState([]);
  
  useEffect(() => {
     let search;
     try {
        search = JSON.parse(window.localStorage.getItem('mySearch'));
        console.log(search);
        search.forEach(item => {
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

   //   const filterMovie = mySearch.filter(
   //    (search) => search.media_type === "movie");
   //   const filterTv = mySearch.filter((search) => search.media_type === "tv");
   //   const filterPerson = mySearch.filter(
   //    (search) => search.media_type === "person"
   //  );
   //  console.log(filterPerson)
   //  console.log(filterTv )
   //  console.log(filterMovie)) }
      

      // if (filterPerson) {
      //     httpGet(`/person/${filterPerson}`)
      //       .then((person) => setFavPerson(person))
      //       .catch((error) => console.log(error));
      // }

      // if (filterTv ) {
      //         httpGet(`/tv/${filterTv }`)
      //           .then((tv) => {
      //             setFavTv(tv);
                  
      //           })
      //           .catch((error) => console.log(error));
      // }
  }, [])
  // console.log(user)
  return ( 
      <div className={theme}>
      <div className="background">
      <h4 className="text">Profile</h4>
      <img className="user-avatar" src={user?.image} alt={user?.name} />
      <p> Hello {user?.name}!</p>

      <PopularSearched popular={mySearch.movies} />
      <PopularSearched popular={mySearch.series} />
      <PopularSearched popular={mySearch.persons} />
      </div>
      </div>
   );
}
 
export default Profile;