import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
// import SearchBar from "../../components/SearchBar/SearchBar";
import Search from "../../components/SearchBar/searchtest";
import { httpGet } from "../../services/TBDBService/TMBDService";
import MoviesList from "../movies/MoviesList";

const Home = () => {

  


  return ( 
    <>
      <Navbar/>
      <h3>HOME</h3>
      <Search />
      <MoviesList/>
    </>
   );
}
 
export default Home;