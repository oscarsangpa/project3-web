import { BASE_IMG } from "../../../services/TMDBService";

const TvInformation = (detailTv, background) => {
  return (
    <>
      <h3>- TV Shows detail -</h3>
      <div style={{backgroungImage: `${BASE_IMG}${background}`}}>

        <p>{detailTv.original_name}</p>
        <img src={`${BASE_IMG}${detailTv?.poster_path}`} alt={""}/>

        <p>{detailTv.release_date}</p>

        {
          detailTv?.production_companies?.map(production => {
            return (
              <>
                <ul>
                  <li>{production.name}</li>
                </ul>
              </>
            )
          })
        }

        <p>- Genres -</p>
        {
          detailTv?.genres?.map(genres => {
            return (
              <>
               <ul>
                  <li>{genres.name}</li>
                </ul>
              </>
            )
          })
        }

        <p>- Overviews -</p>
        <p>{detailTv.overview}</p>
      </div>
    </>
  );
}
 
export default TvInformation;