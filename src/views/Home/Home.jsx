// import "../../style/Style.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useTheme } from "../../contexts/ThemeContext";
import { useEffect, useState } from "react";
import { httpGet } from "../../services/TMDBService";
import PopularSearched from "../../components/PopularSearched/PopularSearched";
import './Home.scss'

const Home = () => {
  const {theme} = useTheme()
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
    <div className={theme}>
        {/* <p className="title"> Welcome to the page that helps you find what this actor is known for.</p>
        
        <p className="title">You can search for people, movies or TV shows and see where they starred.</p> */}

        <div className="background">

      <SearchBar className="title" />
      <br />
      <h2 className="text title"> Most searched people</h2>
      <PopularSearched popular={people} />
      <h2 className="text title">Most searched movies</h2>
      <PopularSearched popular={movies} />
      <h2 className="text title">Most searched TV shows</h2>
      <PopularSearched popular={tvShows} />
        </div>
    </div>
  );
};

export default Home;
