import { BASE_IMG } from "../../services/TMDBService";
import imgNotFound from "../../images/not-img.png";
import styles from "../Person/person.module.css"

const Information = (props) => {
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
      <div>
        <h2 key={id}>{original_title || original_name} </h2>
        <img className={styles.imgProfile}
          src={!poster_path ? `${imgNotFound}` : `${BASE_IMG}${poster_path}`}
          alt={original_title || original_name}
        />
        <p>
          <strong>Release date: </strong>
          {release_date || first_air_date}
        </p>

        <h4> - Companies - </h4>

        {production_companies?.map((production, index) => {
          return (
            <>
              <ul key={index}>
                <li>{production.name}</li>
              </ul>
            </>
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
          <strong>Synopsis: </strong>
          {overview}
        </p>
      </div>
    </>
  );
};

export default Information;
