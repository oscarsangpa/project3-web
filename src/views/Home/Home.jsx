// import { useEffect, useState } from "react";
import PopularMoviesSearched from "../../components/PopularSearched/PopularMoviesSearched";
import PopularPersonSearched from "../../components/PopularSearched/PopularPersonSearched";
import PopularTVShowsSearched from "../../components/PopularSearched/PopularTVShowsSearched";
import SearchBar from "../../components/SearchBar/SearchBar";
import Slider from "../../components/Slider/SliderPOP";
// import { httpGet } from "../../services/TMBDService/TMDBService";



const Home = () => {
  // const [searchedItem, setSearchedItem] = useState([])
  // const [people, setPeople] = useState([]);
  // const [movies, setMovies] = useState([]);
  // const [tvShows, setTvShows] = useState([]);

  // const getSearched = () => {
  //   Promise.all(
  //     httpGet("/person/popular"),
  //     httpGet("/movie/popular"),
  //     httpGet("/tv/popular")
  //   )
  //     .then((person, movie, tvShow) => {
  //     setPeople(person.results)
  //     setMovies(movie.results)
  //     setTvShows(tvShow.results)
  //   })
  //     .catch(error => console.log(error))
  // }


  //   useEffect(()=> {
  //     getSearched()
  //   },[])

  return ( 
    <>
      <SearchBar />
      <br/>
      {/* <Slider/> */}
      {/* <h2>______________________________</h2> */}
      <h2> - People most searched - </h2>
      <PopularPersonSearched/>
      <h2> - Movies most searched - </h2>
      <PopularMoviesSearched/>
      <h2>- TV Shows most searched - </h2>
      <PopularTVShowsSearched/>
    </>
   );
}
 
export default Home;