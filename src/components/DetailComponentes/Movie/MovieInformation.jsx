import { BASE_IMG } from "../../../services/TMDBService";

const MovieInformation = ({movieInfo}) => {
    return ( 
        <div>
            <h2>{movieInfo.original_title}</h2>
            <img src={`${BASE_IMG}${movieInfo.poster_path}`} alt={""}/>
            <p>{movieInfo.release_date}</p>
            {movieInfo?.production_companies?.map(production => {
                return (
                <>
                    <ul>
                        <li>{production.name}</li>
                    </ul>
                </>
                )
            })}
            
            <h4>- Genres -</h4>

            {movieInfo?.genres?.map(genres => {
                return (
                <>
                    <ul>
                        <li>{genres.name}</li>
                    </ul>
                </>
                )
            })}

            <h4>- Overviews -</h4>
            
            <p>{movieInfo.overview}</p>
        </div>
    );
}
 
export default MovieInformation;