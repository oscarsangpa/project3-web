import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { httpGet } from "../../services/TMBDService/TMDBService";

const SearchBarTest = () => {
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
          searched.map((({name, id}) => {
            return (
              <>
                <p key={id}>{name}</p>
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
 
export default SearchBarTest;