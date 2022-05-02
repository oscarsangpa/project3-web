import { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [inputSearch, setInputSearch] = useState("");

  const handleChange = (event) => {
    setInputSearch(event.target.value)
  }

  return (
    <div className="search-box">
    {/* <button className="btn-search"><i className="fas fa-search"></i></button> */}
    <input type="text" 
    className="input-search" 
    placeholder="Type to Search..."
      value={inputSearch}
      onChange={handleChange}
    />

          <button type="submit"> <Link to={`/search?manolo=${inputSearch}`}> Search </Link> </button>
    </div>
  )
}
 
export default SearchBar;
      
//       <div className="search-box">
//     {/* <button className="btn-search"><i className="fas fa-search"></i></button> */}
//     <form onSubmit={handleSubmit} >
//     <input type="text" 
//     className="input-search" 
//     placeholder="Type to Search..."
//       value={inputSearch}
//       onChange={handleChange}
//     />
//     </form>
//   </div>
//       {
//         searched?.map((({name, id, title, profile_path, poster_path}) => {
//           return (
//             <div className="style">
//               <SearchPag searched={searched}/>
//             </div>
//           )
//         }))
//       }
//     </div>
//   )
// }
 
// export default SearchBar;
