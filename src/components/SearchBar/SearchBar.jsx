import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { httpGet } from "../../services/TMDBService";
// import SearchPag from "../../views/Search/Search";
import Search from "../../views/Search/Search";

const SearchBar = () => {
  const [inputSearch, setInputSearch] = useState("");
  
  const handleChange = (event) => {
    setInputSearch(event.target.value)
  }
  
  return (
    <div>
      <div className="SearchBar">
          <input 
            type="text"
            value={inputSearch}
            onChange={handleChange}
          />
          <button type="submit"> <Link to={`/search?manolo=${inputSearch}`}> Search </Link> </button>
      </div>
    </div>
  )
}
 
export default SearchBar;
