import { useState } from "react";
import "./Favorites.scss"

const FavouritesSearches = ({ saveSearch }) => {
  const [fav, setFav] = useState(localStorage.getItem("mySearch") || []);
  const [clicked, setClicked] = useState(false)
  const doSaveSearch = () => {
    if (saveSearch) {
      const fav = JSON.parse(localStorage.getItem("mySearch")) || [];
      const miArray = [...fav, saveSearch.id]
      localStorage.setItem('mySearch', JSON.stringify(miArray))
    }
      setClicked(true)
  }

  const deleteFav = (id) => {
    const miArray = fav;
    localStorage.removeItem("mySearch", miArray)
    console.log("fav", fav)
    setClicked(false)

  } 

  return ( 
    <>

      {
        !clicked 
        ?
         (
      <button className="btn-fav" onClick={doSaveSearch}>
      <i class="fa-regular fa-star fa-xl"></i>
      </button>

         ) :
         (
      <button className="btn-fav" onClick={deleteFav}>
      <i class="fa-solid fa-star fa-xl cliked"></i>
      </button>
         )
      }
      {/* <button onClick={doSaveSearch}>fav</button>
      <button onClick={deleteFav}> nofav</button> */}

    </>
   );
}
 
export default FavouritesSearches;