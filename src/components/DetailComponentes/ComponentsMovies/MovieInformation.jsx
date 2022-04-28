import { BASE_IMG } from "../../../services/TMDBService";

const MovieInformation = (detailMovie) => {
    return ( 
        <div>
            <h3>- Página MovieDetail -</h3>

            <p>{detailMovie.original_title}</p>
            <img src={`${BASE_IMG}${detailMovie.poster_path}`} alt={""}/>
            <p>{detailMovie.release_date}</p>
            {detailMovie?.production_companies?.map(production => {
                return (
                <>
                    <ul>
                        <li>{production.name}</li>
                    </ul>
                </>
                )
            })}
            
            <p>- Genres -</p>

            {detailMovie?.genres?.map(genres => {
                return (
                <>
                    <ul>
                        <li>{genres.name}</li>
                    </ul>
                </>
                )
            })}

            <p>- Overviews -</p>
            
            <p>{detailMovie.overview}</p>
        </div>
    );
}
 
export default MovieInformation;