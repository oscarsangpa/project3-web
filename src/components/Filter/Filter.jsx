import { Link } from "react-router-dom";
import { BASE_IMG } from "../../services/TMDBService";
import "./Filter.scss";


const Filter = (props) => {
  return (
      <>
      <div className="container-filter">

      {
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
            <img className="search-list-img" src={`${BASE_IMG}${el.profile_path || el.poster_path}`} alt={el.name || el.title} />
            <div className="item-filter">
            <ul>
              <li>{el.name || el.title}</li>
            </ul>
            </div>
            </Link>
          </div>
          
          </>
        );
      })
      }
      </div>

    </>
  );
};

export default Filter;
