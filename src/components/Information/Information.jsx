import { BASE_IMG } from "../../services/TMDBService";
import imgNotFound from "../../images/not-img.png";
import "../Person/person.scss";
import { useTheme } from "../../contexts/ThemeContext";
import FavouritesSearches from "../FavouritesSearchs/FavouritesSearches";

const Information = (props) => {
  const {theme} = useTheme()
  const {
    id,
    original_name,
    original_title,
    overview,
    poster_path,
    release_date,
    first_air_date,
    production_companies,
    genres,
  } = props.info;
  return (
    <>
      <div className={theme}>
        <h2 className="title" key={id}>{original_title || original_name} </h2>
        <img className="img-profile"
          src={!poster_path ? `${imgNotFound}` : `${BASE_IMG}${poster_path}`}
          alt={original_title || original_name}
        />


        <h4 className="title container-info"> - Companies - </h4>

        <div className="container-info">
        {production_companies?.map((production, index) => {
          return (
              <ul key={index}>
                <li className="item-info">{production.name}</li>
              </ul>
          );
        })}

        <h4>- Genres -</h4>

        {genres?.map((genres, index) => {
          return (
            <>
              <ul key={index}>
                <li>{genres.name}</li>
              </ul>
            </>
          );
        })}
        <p>
          <strong>Release date: </strong>
          {release_date || first_air_date}
        </p>
        <FavouritesSearches saveSearch={props.info} />
        <p>
          <strong>Synopsis: </strong>
          {overview}
        </p>
        </div>
      </div>
    </>
  );
};

export default Information;
