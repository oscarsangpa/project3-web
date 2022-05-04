import { useState } from "react";

const FavouritesSearches = ({ saveSearch }) => {
  const [fav, setFav] = useState(localStorage.getItem("miPelicula") || [])
  
  // const fav = JSON.parse(localStorage.getItem("miPelicula")) || [];

  const doSaveSearch = () => {
    if (saveSearch) {
      const miArray = [...fav, saveSearch.id]
      localStorage.setItem('miPelicula', JSON.stringify(miArray))
    }
      
  }
  
  const deleteFav = (id) => {
    const miArray = fav;
    localStorage.removeItem("miPelicula", miArray)
    console.log("fav", fav)

  } 




  return ( 
    <>
      <button onClick={doSaveSearch}>fav</button>
      <button onClick={deleteFav}> nofav</button>

    </>
   );
}
 
export default FavouritesSearches;