import { useEffect, useState } from "react";
import { httpGet, BASE_IMG } from "../../services/TMBDService/TMDBService"
import Slider from "../Slider/SliderPOP";
import "./PopularPersonSearched.css"

const PopularPersonSearched = () => {

  const [popular, setPopular ] = useState([]);

  useEffect(()=> {
      httpGet("/person/popular")
        .then(person => setPopular(person.results))
        .catch(error => console.log(error))

  }, []);

  return ( 
    <>
        <div className="containerMostSearched">
    {popular.map((popPerson) => {
      return (
      <div key={popPerson.id} className="itemMostSearched">
      <img src={`${BASE_IMG}${popPerson.profile_path}`} alt={popPerson.name}/>
      <h5>{popPerson.name}</h5>
      </div>
      )
    })}
        </div>
    </>
   );
}
 
export default PopularPersonSearched;