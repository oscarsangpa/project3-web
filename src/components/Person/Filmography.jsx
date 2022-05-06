import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Filmography = ({ credits }) => {
  const [sorted, setSorted] = useState([]);
  const [year, setYear] = useState([]);

  useEffect(() => {
    if (credits) {
      const sortedCredits = credits.cast.sort((b, a) =>
        a.release_date > b.release_date
          ? 1
          : a.release_date < b.release_date
          ? -1
          : 0
      );
      setSorted(sortedCredits);
    }
  }, [credits]);

  // useEffect(()=> {
  //   if (credits) {
  //     const onlyYear = credits.cast.map((y) => {
  //       const theYear = y.release_date.slice(0,4)
  //       // console.log(theYear)
  //       setYear(theYear)
  //     })
  //     console.log(year)
  //   }

  // },[])

  return (
    <>
      <h3 className="biography"> Filmography </h3>
      {sorted?.map((credit, index) => {
        return (
          <ul key={index}>
            <li>
              {credit.release_date === undefined || ""
                ? ` ____ - `
                : `${credit.release_date.slice(0,4)} —  In ` || `${credit.first_air_date} ―  In `}

              <Link className="link-title text"
                to={
                  credit.media_type === "movie"
                    ? `/movie/${credit.id}`
                    : `/tv/${credit.id}`
                }
              >
                {credit.title || credit.name}
              </Link>
              {` as ${credit.character}`}
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default Filmography;
