import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { httpGet } from "../../../services/TMDBService";
import Cast from "../../../components/Cast/Cast";
import Information from "../../../components/Information/Information";
import Review from "../../../components/Review/Review";
import FavouritesSearches from "../../../components/FavouritesSearchs/FavouritesSearches";
import { useTheme } from "../../../contexts/ThemeContext";
import { getAllReviews } from "../../../services/ReviewServices";

export default function SerieDetail() {
  const { theme } = useTheme()
  const [detailTv, setDetailTv] = useState([]);
  const [background, setBackground] = useState([]);
  const [creditChar, setCreditChar] = useState([]);
  const { tvId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (tvId) {
      httpGet(`/tv/${tvId}`)
        .then((tv) => {
          setDetailTv(tv);
          setBackground(tv.backdrop_path);
        })
        .catch((error) => console.log(error));
      httpGet(`/tv/${tvId}/credits`)
        .then((credit) => {
          setCreditChar(credit);
        })
        .catch((error) => console.log(error));
      getAllReviews(tvId)
        .then((reviews) => {
    
          setReviews(reviews);
        })
        .catch((error) => console.log(error));
    }
  }, [tvId]);

  return (
    <div className={theme}>
    <div className="background">
      {/* <FavouritesSearches saveSearch={detailTv}/> */}
      <Information info={detailTv} background={background} />
      <Cast cast={creditChar} />
      <Review itemId={detailTv.id} reviews={reviews}/>
    </div>
    </div>
  );
}
