import { Link } from "react-router-dom";
import styles from "./MovieCard.css";
// import { getMovieImg } from "../utils/getMovieImg"; 

export function MovieCard({ movie }) {
    //const imageUrl = getMovieImg(movie.poster_path, 300); 
    return (
        <div>
            <li >
                <Link to={"/movies/" + movie.id}>
                    <img
                        width={230}
                        height={345}
                        className={styles.movieImage}
                        //src={imageUrl} 
                        alt={movie.title}
                    />
                    <div>{movie.title}</div>
                </Link>
            </li>
        </div>    
    )
}