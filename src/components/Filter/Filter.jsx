import { Link } from "react-router-dom";
import { BASE_IMG } from "../../services/TMDBService";
import "./Filter.scss";

const Filter = (props) => {
  return (
      <>
      {
      props.list.map((el) => {
        return (
          <>
          <div className="container-filter" key={el.id}>
            <Link to={
              el.media_type === "person"
                      ? `/person/${el.id}`
                      : el.media_type === "movie"
                      ? `/movie/${el.id}`
                      : el.media_type === "tv" && `/tv/${el.id}`
            }>
            <img src={`${BASE_IMG}${el.profile_path || el.poster_path}`} alt={el.name || el.title} />
            
            <ul>
              <li>{el.name || el.title}</li>
            </ul>
            </Link>
          </div>
          </>
        );
      })
      }
    </>
  );
};

export default Filter;
