import { Link, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { httpGet, BASE_IMG } from "../../services/TMDBService";


const SearchBar = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [searched, setSearched] = useState([]);
  const [query, setQuery] = useSearchParams({});

  // const history = useHistory()
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery({search: inputSearch});
  }

  const handleChange = (event) => {
    setInputSearch(event.target.value)
  }

  // useEffect(()=> {
  //   // setLoading(true)
  //   console.log('object');
  //   httpGet("/search/multi/?query=")
  //     .then((data) => {
  //       setSearched(data.results)
  //         // setLoading(false)
  //     })
  // }, []);

  useEffect(()=> {
    if(query.get('search')) {
      // setLoading(true)
      httpGet("/search/multi/?query=" + query.get('search'))
        .then((data) => {
          setSearched(data.results);
            // setLoading(false)
        })
    }
  }, [query])



  return (
    <>
      <div>
        <h4>
          <form onSubmit={handleSubmit}>
            <input type="text"
              value={inputSearch}
              onChange={handleChange}
            />
            <button type="submit"> search </button>
          </form>
        </h4>
        {
          searched?.map((({name, id, title, profile_path, poster_path}) => {
            return (
              <>
                <div>
                  { profile_path &&
                    (<Link to={`/person/${id}`}>
                      <img src={`${BASE_IMG}${profile_path}`} alt=""/> 
                    </Link>)  
                  }
                  { title ? (<Link to={`/movie/${id}`}>
                      <img src={`${BASE_IMG}${poster_path}`} alt=""/>
                    </Link>)
                  :
                    (<Link to={`/tv/${id}`}>
                      <img src={`${BASE_IMG}${poster_path}`} alt=""/>
                    </Link>)                                      
                  }
                  <p key={id}>{name}</p>
                </div>
              </>
            )
          }))
        }
      </div>
    </>
  )
  // return ( 
  //   <>
  //   <div>
  //      <h4>SearchBarTEST</h4>
  //      <form onSubmit={handleSubmit}>
  //        <input type="text" 
  //          value={inputSearch} 
  //          onChange={handleChange}  
  //          />
  //        <button type="submit">Search</button>
  //      </form>
  //   </div>
  //   </>
  //  );
}
 
export default SearchBar;

// :
//                     <Link to={`/tv/${id}`}>
//                       (<img src={`${BASE_IMG}${poster_path}`} alt=""/>)
//                     </Link>