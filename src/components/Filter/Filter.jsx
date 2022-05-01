import { Link } from "react-router-dom";
import { BASE_IMG } from "../../services/TMDBService";

const Filter = (props) => {
  return (

      props.list.map((el) => {
        return (
          <>
          <div key={el.id}>
            <Link to={
              el.media_type === "person"
                      ? `/person/${el.id}`
                      : el.media_type === "movie"
                      ? `/movie/${el.id}`
                      : el.media_type === "tv" && `/tv/${el.id}`
            }>
            <img src={`${BASE_IMG}${el.profile_path || el.poster_path}`} alt={el.name || el.title} />
            <p>{el.name || el.title}</p>
            </Link>
          </div>
          </>
        );
      })
  );
};

export default Filter;
