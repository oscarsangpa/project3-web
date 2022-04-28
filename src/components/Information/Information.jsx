import { BASE_IMG } from "../../services/TMDBService";

const Information = (props) => {
  return ( 
    <>
      <div>

      <h2>{props.info.original_title || props.info.original_name} </h2>
          <img src={`${BASE_IMG}${props.info.poster_path}`} alt={""}/>
        <p>
        <strong>Release date: </strong>
        {props.info?.release_date || props.info.first_air_date}
        </p>

          <h4> - Companies - </h4>

        {props.info?.production_companies?.map(production => {
            return (
              <>
                <ul>
                  <li>{production.name}</li>
                </ul>
              </>
            )
          })
        }

        <h4>- Genres -</h4>

        {props.info?.genres?.map(genres => {
            return (
              <>
               <ul>
                  <li>{genres.name}</li>
                </ul>
              </>
            )
          })
        }
        <p>
        <strong>Synopsis: </strong>
        {props.info.overview}
        </p>
      </div>
            
    </>
   );
}
 
export default Information;