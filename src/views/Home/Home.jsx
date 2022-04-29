import "../../style/Style.css";
import PopularMoviesSearched from "../../components/PopularSearched/PopularMoviesSearched";
import PopularPersonSearched from "../../components/PopularSearched/PopularPersonSearched";
import PopularTVShowsSearched from "../../components/PopularSearched/PopularTVShowsSearched";
import SearchBar from "../../components/SearchBar/SearchBar";
import Slider from "../../components/Slider/SliderPOP";

const Home = () => {

  return ( 
    <>
      <SearchBar/>
      <br/>
      {/* <Slider/> */}
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