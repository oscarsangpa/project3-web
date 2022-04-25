import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { httpGet, BASE_IMG } from "../../services/TMDBService";
import SearchPopular from "../SearchPopular/Searched";
import "./Slider.css";

const Slider = () => {
    const [popular, setPopular ] = useState([]);

  useEffect(()=> {
      httpGet("/person/popular")
        .then(person => setPopular(person.results))
        .catch(error => console.log(error))

  }, []);
  return ( 
    //   <>
    //       <SearchPopular people={popular}/>
    //   </>
    <motion.div className='slider-container'>
        <motion.div className='slider' drag='x' 
        dragConstraints={{right: 0, left:-764}} >
        {popular.map((popPerson) => {
      return (
      <motion.div key={popPerson.id} className="item">
      <img src={`${BASE_IMG}${popPerson.profile_path}`} alt={popPerson.name}/>
      <h5>{popPerson.name}</h5>
      </motion.div>
      )
    })}
        </motion.div>
        
    </motion.div>
   );
}
 
export default Slider;