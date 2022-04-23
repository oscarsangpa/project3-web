import { useEffect, useState } from "react";

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
     {
      sorted?.map((credit, index) => {
         return (
           <ul key={index}>
             <li>
             {credit.release_date} -
             {credit.title} as
             {credit.character}
             </li>
           </ul>
         )
       })
     }
    </>
   );
}
 
export default Filmography;