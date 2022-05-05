import { useState } from "react";
import "./Favorites.scss"

const FavouritesSearches = ({ saveSearch }) => {
  const [fav, setFav] = useState(localStorage.getItem("mySearch") || [])
  const doSaveSearch = () => {
    if (saveSearch) {
      const fav = JSON.parse(localStorage.getItem("miPelicula")) || [];
      const miArray = [...fav, saveSearch.id]
      localStorage.setItem('mySearch', JSON.stringify(miArray))
    }
      
  }

  const deleteFav = (id) => {
    const miArray = fav;
    localStorage.removeItem("mySearch", miArray)
    console.log("fav", fav)

  } 

  return ( 
    <div className="btn-fav">
      <button onClick={doSaveSearch}>fav</button>
      <button onClick={deleteFav}> nofav</button>

    </div>
   );
}
 
export default FavouritesSearches;