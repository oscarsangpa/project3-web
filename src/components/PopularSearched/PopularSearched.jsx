import { BASE_IMG } from "../../services/TMDBService";
import { Link } from "react-router-dom";

const PopularSearched = (props) => {
  return (
    <>
      <div className="containerMostSearched">
        {props.popular?.map((el) => {
          return (
            <div key={el.id} className="itemMostSearched section">
              <Link className="Link"
                to={
                  el.profile_path
                    ? `/person/${el.id}`
                    : el.title
                    ? `/movie/${el.id}`
                    : el.name && `/tv/${el.id}`
                }
              >
                <img
                  src={
                    el.poster_path
                      ? `${BASE_IMG}${el.poster_path}`
                      : `${BASE_IMG}${el.profile_path}`
                  }
                  alt={el.title}
                />
                <h5>{el.title || el.name}</h5>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PopularSearched;
