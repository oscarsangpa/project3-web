// import { useEffect, useState } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// // import Spinner from "../Spinner/Spinner";
// // import {getSearch} from '../../services/TBDBService/PeopleService';
// import { httpGet } from '../../services/TBDBService/TMBDService';

// // function useQuery() {
// //   return new URLSearchParams(useLocation().search);
// // }
// // const tokenMDB = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDJjNGE5OWEyYjU2YzI1N2FhMzI4OTQ1MmI1NzNiYyIsInN1YiI6IjYyNGYzNjE0NjhiNzY2MTBkMzVkNzIwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R02WEIYrsizTU8a8aJWQB6bDd3V1x_z_aDMbUHeWDRo`;

// const SearchBar = () => {
//   // const [loading, setLoading] = useState(true)

//   // const location = useLocation()
//   // const [query, setQuery] = useSearchParams()
//   // const searchQuery = query.get("search")

//   //const history = useHistory()

//   //__________________________________
//   // const query = useQuery();
//   // const search = query.get("search");
//   //__________________________________

//   const [ inputSearch, setInputSearch] = useState("")
//   const [searched, setSearched] = useState([])

//   useEffect(()=> {
//     // setLoading(true)
//       httpGet("/search/multi/?query=")
//       .then((data) => {
//         setSearched(data.results)
//           // setLoading(false)
//       })
//   }, []);

//   useEffect(()=> {
//       setInputSearch(search)
//   }, [search])

//     // loading && <Spinner/>

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // history.push("/?search=" + inputSearched)
//   } 
  
//   const handleChange = (event) => {
//     setInputSearch(event.target.value)
//     // console.log(inputSearh)
//     // setQuery({searchQuery: inputSearch})
//     // navigate(("/?search=") + inputSearch )
//   }

//   return ( 
//     <>
//       <h4>SearchBar</h4>
//       <form onSubmit={handleSubmit}>
//         <input type="text" 
//           value={inputSearch} 
//           onChange={handleChange}  
//           />
//         <button type="submit">Search</button>
//       </form>

//       {
//         searched.map(search => {
//           return (
//             <p> Name: {search.name}</p>
//           )
//         })
//       }
//     </>
//    );
// }
 
// export default SearchBar;