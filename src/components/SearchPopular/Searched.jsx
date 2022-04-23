import { motion } from "framer-motion";
import { BASE_IMG } from "../../services/TMBDService/TMDBService";

const SearchPopular = (props) => {
  return ( 
    <>
      <motion.div className='slider-container'>
        <motion.div className='slider' drag='x' 
        dragConstraints={{right: 0, left:-764}} >
        {props.search.map((search) => {
      return (
      <motion.div key={search.id} className="item">
      {
        (props.name) 
        ?
        <div>
      (<img src={`${BASE_IMG}${search.profile_path}`} alt={search.name}/>
      <h5>{search.name}</h5>)
        </div>
      :
      <div>
      (<img src={`${BASE_IMG}${search.poster_path}`} alt={search.title}/>
      <h5>{search.title}</h5>)
      </div>

      }
      </motion.div>
      )
    })}
        </motion.div>
        
    </motion.div>
    </>
   );
}
 
export default SearchPopular;