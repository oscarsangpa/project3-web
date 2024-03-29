import { BASE_IMG } from "../../services/TMDBService";
import { Link } from "react-router-dom";
import imgNotFound from "../../images/img-notfound.png";
import "./Cast.scss";

const Cast = (props) => {
  return (
    <>
      <h4>- Cast -</h4>
      <div className="containerMostSearched">
        {props.cast.cast?.map((credit) => {
          return (
            <div key={credit.id} className="itemMostSearched">
              <Link className="title-cast" to={`/person/${credit.id}`}>
                <img
                  src={`${BASE_IMG}${credit.profile_path}` || `${imgNotFound}` }
                  alt={credit.title}
                />
                <h5>{credit.title}</h5>
                <p>
                  <strong>{credit.name}</strong>
                </p>
              </Link>
              <p>{credit.character}</p>
            </div>
          );
        })}
        ;
      </div>
    </>
  );
};

export default Cast;
