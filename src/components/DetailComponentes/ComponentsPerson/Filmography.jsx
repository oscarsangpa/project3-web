import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Filmography = ({credits}) => {
  const [sorted, setSorted] = useState([])

  useEffect(() => {
    if(credits) {
      console.log('entro');
      const sortedCredits = credits.cast.sort((b, a) => (a.release_date > b.release_date ? 1: a.release_date < b.release_date ? -1 : 0 ))
      setSorted(sortedCredits)
    }
  },[credits]);
 
  return ( 
    <>
        <h3>- Filmography - </h3>
     {
      sorted?.map((credit, index) => {
         return (
           <ul key={index}>
             <li>
             {`${credit.release_date} - `}
             <Link to={`/movie/${credit.id}`}>
             {credit.title}
             </Link>
               {` as ${credit.character}`}

               {/* {`${credit.release_date} - ${<Link to={`/movie/${credit.id}`}> {credit.title} </Link>} as ${credit.character}`} */}

             </li>
           </ul>
         )
       })
     }
    </>
   );
}
 
export default Filmography;