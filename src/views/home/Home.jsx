import PopularMoviesSearched from "../../components/PopularSearched/PopularMoviesSearched";
import PopularPersonSearched from "../../components/PopularSearched/PopularPersonSearched";
import PopularTVShowsSearched from "../../components/PopularSearched/PopularTVShowsSearched";
import SearchBarTest from "../../components/SearchBar/SearchBarTest";


const Home = () => {
  return ( 
    <>
      <h3>HOME</h3>
      <SearchBarTest />
      <br/>
      <PopularPersonSearched/>
      <PopularMoviesSearched/>
      <PopularTVShowsSearched/>
    </>
   );
}
 
export default Home;