import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { httpGet } from "../../services/TMDBService";
import SearchPag from "../../views/Search/Search";

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
      <div className="SearchBar">
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            value={inputSearch}
            onChange={handleChange}
          />
          <button type="submit"> search </button>
        </form>
      </div>
      {
        searched?.map((({name, id, title, profile_path, poster_path}) => {
          return (
            <>
              <SearchPag searched={searched}/>
              <p key={id}>{name}</p>
              <div>
                  {/* { profile_path &&
                    (<Link to={`/person/${id}`}>
                      <img src={`${BASE_IMG}${profile_path}`} alt=""/> 
                    </Link>)  
                  }
                  { title && (<Link to={`/movie/${id}` || `/tv/${id}`}>
                      <img src={`${BASE_IMG}${poster_path}`} alt=""/>
                    </Link>)
                  } */}
                  {/* : */}
                  {/* (<Link to={`/tv/${id}`}>
                      <img src={`${BASE_IMG}${poster_path}`} alt=""/>
                    </Link>)                                       */}
              </div>
            </>
          )
        }))
      }
    </div>
  )
}
 
export default SearchBar;
