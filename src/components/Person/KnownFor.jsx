import { Link } from "react-router-dom";
import { BASE_IMG } from "../../services/TMDBService";
import imgNotFound from "../../images/img-notfound.png";

export default function KnownFor({ creditCast }) {
  return (
    <>
      <h3 className="knownfor-title"> Known For...</h3>
      <div className="containerMostSearched">
        {creditCast?.cast?.map(
          ({ id, media_type, poster_path, original_title, original_name }) => {
            return (
              <div key={id} className="itemMostSearched">
                <Link className="knowfor-carousel text"
                  to={media_type === "movie" ? `/movie/${id}` : `/tv/${id}`}
                >
                  {poster_path && (
                    <img
                      src={poster_path === "" || undefined ? `${imgNotFound}` : `${BASE_IMG}${poster_path}`}
                      alt={original_title || original_name}
                    />
                  )}
                  <h5>{original_title || original_name}</h5>
                </Link>
              </div>
            );
          }
        )}
      </div>
    </>
  );
}
