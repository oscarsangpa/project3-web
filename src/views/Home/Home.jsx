import "../../style/Style.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { httpGet } from "../../services/TMDBService";
import PopularSearched from "../../components/PopularSearched/PopularSearched";

const Home = () => {
  const [people, setPeople] = useState([]);
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);

  const getPerson = () => {
    if (people) {
      httpGet("/person/popular")
        .then((person) => {
          setPeople(person.results);
          // console.log("person", person)
        })
        .catch((err) => console.log(err));
    }
  };

  const getMovies = () => {
    movies &&
      httpGet("/movie/popular")
        .then((movie) => {
          setMovies(movie.results);
          // console.log("mov", movie)
        })
        .catch((err) => console.log(err));
  };

  const getTvShows = () => {
    tvShows &&
      httpGet("/tv/popular")
        .then((tv) => {
          setTvShows(tv.results);
          // console.log("tv", tv)
        })
        .catch((err) => console.log(err));
  };

  /* intentado hacer las 3 peticiones en una usando Promisse.all. No funciona */

  //   if(getPerson && getMovies && getTvShows) {
  //     Promise.all([getPerson, getMovies, getTvShows
  //     ]).then((person, movie, tvShow) => {
  //       setPeople(person)
  //       console.log("person", people)
  //       setMovies(movie)
  //       console.log("movies", movies)
  //       setTvShows(tvShow)
  //       console.log("tvs", tvShows)
  //     })
  //       .catch(error => console.log(error))
  //   }
  // }

  useEffect(() => {
    getPerson();
    getMovies();
    getTvShows();
  }, []);

  return (
    <>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
      <SearchBar />
      <br />
      <h2> - People most searched - </h2>
      <PopularSearched popular={people} />
      <h2> - Movies most searched - </h2>
      <PopularSearched popular={movies} />
      <h2> - TV Shows most searched - </h2>
      <PopularSearched popular={tvShows} />
    </>
  );
};

export default Home;
