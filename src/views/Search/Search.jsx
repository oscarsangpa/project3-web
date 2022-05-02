import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Filter from "../../components/Filter/Filter";
import { BASE_IMG } from "../../services/TMDBService";
import { httpGet } from "../../services/TMDBService";
import styles from "./search.module.css";

function Search() {
  const [searched, setSearched] = useState([]);
  const [searchParams] = useSearchParams({});
  const [listToShow, setListToShow] = useState("all");
  const filterMovie = searched.filter(
    (search) => search.media_type === "movie"
    );
    const filterTv = searched.filter((search) => search.media_type === "tv");
  const filterPerson = searched.filter(
    (search) => search.media_type === "person"
  );

  useEffect(()=> {
    console.log()
    const manolo = searchParams.get('manolo');
    if(manolo) {
      httpGet("/search/multi/?query=" + manolo)
      .then((data) => {
          setSearched(data.results);
        })
    }
  }, [searchParams])
  
  return (
    <>  
      <div className={styles.list}>

        <p onClick={() => setListToShow("all")}>
          All ({searched.length}):
        </p>
        <p onClick={() => setListToShow("movie")}>
          Movies ({filterMovie.length}):
        </p>
        <p onClick={() => setListToShow("tv")}>
          TvShows ({filterTv.length}):</p>
        <p onClick={() => setListToShow("person")}> 
          People ({filterPerson.length}):
        </p>

      </div>

      <div>
        {listToShow === "movie" && ( 
          <div>
            <Filter list={filterMovie} />
          </div>
        )}
        {listToShow === "tv" && (
          <div>
            <Filter list={filterTv} />
          </div>
        )}
        {listToShow === "person" && (
          <div>
            <Filter list={filterPerson} />
          </div>
        )}

        {listToShow === "all" && <Filter list={searched} />}
      </div>

    </>
  );
}

export default Search;