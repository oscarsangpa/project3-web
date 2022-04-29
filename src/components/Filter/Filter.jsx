import { BASE_IMG } from "../../services/TMDBService";

const Filter = (props) => {
  return (

      props.list.map((el) => {
        return (
          <>
            <p>{el.name || el.title}</p>
            <img src={`${BASE_IMG}${el.profile_path || el.poster_path}`} alt={el.name || el.title} />
          </>
        );
      })
  );
};

export default Filter;
