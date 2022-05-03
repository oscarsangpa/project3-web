

const FavouritesSearches = (props) => {
  let searched = []

  const saveSearch = (props) => {
    const saveLocal = searched.push(props)
    localStorage.setItem("mi pelicula", saveLocal)
    console.log("dar favorito")
    console.log(saveLocal)
  }


  return ( 
    <>
      <button onClick={saveSearch}>fav</button>
    </>
   );
}
 
export default FavouritesSearches;