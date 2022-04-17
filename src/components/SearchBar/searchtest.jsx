import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { httpGet } from "../../services/TBDBService/TMBDService";

const Search = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [query, setQuery] = useSearchParams();
  const search = query.get("search")
  // const history = useHistory()
  const navigate = useNavigate();


    const handleSubmit = (event) => {
    event.preventDefault();
    // history.push("/?search=" + inputSearched)

  }

    const handleChange = (event) => {
    setInputSearch(event.target.value)
    console.log(inputSearch)
    setQuery({search: inputSearch})
    // navigate(("/?search=") + inputSearch )
  }

  useEffect(()=> {
    setInputSearch(search || "")
  }, [search])



  return ( 
    <>
       <h4>SearchBar</h4>
       <form onSubmit={handleSubmit}>
         <input type="text" 
           value={inputSearch} 
           onChange={handleChange}  
           />
         <button type="submit">Search</button>
       </form>
    </>
   );
}
 
export default Search;