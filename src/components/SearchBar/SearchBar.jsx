import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { httpGet } from "../../services/TMDBService";
import SearchPag from "../../views/Search/Search";
import "../../style/Style.css"

const SearchBar = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [searched, setSearched] = useState([]);
  const [query, setQuery] = useSearchParams({});

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery({search: inputSearch});
  }

  const handleChange = (event) => {
    setInputSearch(event.target.value)
  }

  useEffect(()=> {
    if(query.get('search')) {
      httpGet("/search/multi/?query=" + query.get('search'))
        .then((data) => {
          setSearched(data.results);
        })
    }
  }, [query])

  return (
    <div>
      {/* <div className="SearchBar">
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            value={inputSearch}
            onChange={handleChange}
          />
          <button type="submit"> Search </button>
        </form>
      </div> */}
      
      <div className="search-box">
    {/* <button className="btn-search"><i className="fas fa-search"></i></button> */}
    <form onSubmit={handleSubmit} >
    <input type="text" 
    className="input-search" 
    placeholder="Type to Search..."
      value={inputSearch}
      onChange={handleChange}
    />
    </form>
  </div>
      {
        searched?.map((({name, id, title, profile_path, poster_path}) => {
          return (
            <div className="style">
              <SearchPag searched={searched}/>
            </div>
          )
        }))
      }
    </div>
  )
}
 
export default SearchBar;
