import { BASE_IMG } from "../../../services/TMDBService";

const TvInformation = ({tvInfo}) => {
  return (
    <>
      {/* <div style={{backgroungImage: `${BASE_IMG}${background}`}}> */}

        <h2>{tvInfo?.original_name}</h2>
        <img src={`${BASE_IMG}${tvInfo?.poster_path}`} alt={""}/>

        <p>{tvInfo?.release_date}</p>

          <h4> - Companies - </h4>
        {
          tvInfo?.production_companies?.map(production => {
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
        {
          tvInfo?.genres?.map(genres => {
            return (
              <>
               <ul>
                  <li>{genres.name}</li>
                </ul>
              </>
            )
          })
        }

        <h4>- Overviews -</h4>
        <p>{tvInfo?.overview}</p>
      {/* </div> */}
    </>
  );
}
 
export default TvInformation;