import { useState } from "react";
import { Link } from "react-router-dom";
import Filter from "../../components/Filter/Filter";
import { BASE_IMG } from "../../services/TMDBService";

const SearchPag = ({searched}) => {
  const [listToShow, setListToShow] = useState("");






  const filterMovie = searched.filter(search => search.media_type === "movie")
  const filterTv = searched.filter(search => search.media_type === "tv")
  const filterPerson = searched.filter(search => search.media_type === "person")
  // console.log(filterMovie)

    // let type = "";
    // let typeImg = "";

    //     if (searched.media_type === "person") {
    //         type = "person"
    //         typeImg = searched.profile_path
    //     }
    //     if (searched.media_type === "movie") {
    //         type = "movie"
    //         typeImg = searched.poster_path
    //     }
    //     if (searched.media_type === "tv") {
    //         type = "tv"
    //         typeImg = searched.poster_path
    //     }

    return ( 
        <>
            <p onClick={() => setListToShow("movie")}> 
            Movies: {filterMovie.length} 
            </p>

            <p onClick={() => setListToShow("tv")}>
            TvShows: {filterTv.length} 
            </p>

            <p onClick={() => setListToShow("person")}>
            Persons: {filterPerson.length}
            </p>

            {listToShow=== "movie" &&  
              <Filter list={filterMovie} />
            }

            {listToShow=== "tv" &&
              <div>
              <Filter list={filterTv} />
              </div>
            }

            {listToShow=== "person" &&
              <div>
              <Filter list={filterPerson} />
              </div>
           
            }

        {
          searched?.map((({name, id, title, profile_path, poster_path}) => {
            return (
              <>
              <div key={id}>
                <Link to={`/person/${id}`}>
                    <img src={`${BASE_IMG}${profile_path}`} alt=""/> 
                    <p key={id}>{name}</p>
                </Link>
              </div>

                {/* <div>
                  { profile_path &&
                    (<Link to={`/${type}/${id}`}>
                      <img src={`${BASE_IMG}${profile_path}`} alt=""/> 
                        <p key={id}>{name}</p>
                    </Link>)  
                  }

                  { title ? (<Link to={`/${type}/${id}`}>
                      <img src={`${BASE_IMG}${poster_path}`} alt=""/>
                    </Link>)
                  :
                  (<Link to={`/${type}/${id}`}>
                      <img src={`${BASE_IMG}${poster_path}`} alt=""/>
                    </Link>)                                      
                  }
                        <p key={id}>{title}</p>

                </div> */}
              </>
            )
          }))
        }
        </>
     );
}
 
export default SearchPag;









// import { useEffect, useState } from "react";
// import { get } from "./../../utils/httpClient"; /*TUTORIAL*/
// import { MovieCard } from "../../components/MovieCard/MovieCard";
// import styles from "../../components/MovieCard/MovieCard.css";
// import { Spinner } from "../../components/spinner/Spinner.js";
// import InfiniteScroll from "react-infinite-scroll-component";
// // import { Empty } from "./../../components/empty/Empty";/*TUTORIAL*/
// import React from "react";
// import { useGetSearchResult } from "../../services/useGetSearchResult";


// export default function Search({search})

// export default function Search({ search } /*insertar aquí el elemento a buscar*/) {
//   const getData = useGetSearchResult();
//   const [movies, setMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   useEffect(() => {
//     setIsLoading(true);
//     const searchUrl = search
//       ? "/search/movie?query=" + search + "&page=" + page
//       : "/discover/movie?page=" + page;
//     get(searchUrl).then((data) => {
//       setMovies((prevMovies) => prevMovies.concat(data.results));
//       setHasMore(data.page < data.total_pages);
//       setIsLoading(false);
//     });
//   }, [search, page]);

//   // if (!isLoading && movies.length === 0) {
//   //   return <Empty />;                          /*TUTORIAL*/
//   // }

//   return (
//     <><>
//           <div>Página Search</div>
//           <div>
//               <div>RESULTADOS</div>
//               <div>isLoading: {getData.isLoading ? "CARGANDO" : "RESUELTO"}</div>
//               <div>TENEMOS DATOS: {getData.data}</div>
//               <div>ERROR: {getData.error}</div>
//           </div>
//       </><InfiniteScroll
//           dataLength={movies.length}
//           hasMore={hasMore}
//           next={() => setPage((prevPage) => prevPage + 1)}
//           loader={<Spinner />}
//       >
//               <div>
//                   <a href="">Actores</a>
//                   <a href="">Movies</a>
//                   <a href="">Series</a>
//               </div>
//               <ul className={styles.moviesGrid}>
//                   {movies.map((movie) => (
//                       <MovieCard key={movie.id} movie={movie} />
//                   ))}
//               </ul>
//           </InfiniteScroll></>
//   );
// }
