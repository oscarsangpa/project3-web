import { useEffect, useState } from "react";
import { get } from "../utils/httpClient"; /*TUTORIAL*/
import { MovieCard } from "../../components/movieCard/MovieCard";
import styles from "../../components/movieCard/MovieCard.css";
import { Spinner } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component"; /*TUTORIAL*/
import { Empty } from "./Empty";/*TUTORIAL*/
//import React from "react";
//import { useGetSearchResult } from "../../services/useGetSearchResult";

export default function Search({ search } /*insertar aquí el elemento a buscar*/) {
  //const getData = useGetSearchResult();

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search + "&page=" + page
      : "/discover/movie?page=" + page;
    get(searchUrl).then((data) => {
      setMovies((prevMovies) => prevMovies.concat(data.results));
      setHasMore(data.page < data.total_pages);
      setIsLoading(false);
    });
  }, [search, page]);

  if (!isLoading && movies.length === 0) {
    return <Empty />;
  }

  return (
    // <div>
    //   <div>Página Search</div>
    //   <div>
    //     <div>RESULTADOS</div>
    //     <div>isLoading : {getData.isLoading ? "CARGANDO" : "RESUELTO"}</div>
    //     <div>TENEMOS DATOS: {getData.data}</div>
    //     <div>ERROR: {getData.error}</div>
    //   </div>
    // </div>
    <InfiniteScroll
      dataLength={movies.length}
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<Spinner />}
    >
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}
