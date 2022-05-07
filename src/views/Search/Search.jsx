import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Filter from "../../components/Filter/Filter";
import { httpGet } from "../../services/TMDBService";
import { useTheme } from "../../contexts/ThemeContext";
import "../../style/styles.scss";
import "./search.scss";

function Search() {
  const {theme} = useTheme();
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
    const q = searchParams.get('q');
    if(q) {
      httpGet("/search/multi?query=" + q)
      .then((data) => {
          setSearched(data.results);
        })
    }
  }, [searchParams])

  return (
     
      <div className={theme}>

      <div>

      
      <div className="list background">

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

      <div className="background">
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
      </div>    
      </div>
  );
}

export default Search;