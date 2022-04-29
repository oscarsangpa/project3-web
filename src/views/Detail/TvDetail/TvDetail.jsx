import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { httpGet } from "../../../services/TMDBService";
import Cast from "../../../components/Cast/Cast";
import Information from "../../../components/Information/Information";
import Review from "../../../components/Review/Review";

export default function SerieDetail() {
  const [detailTv, setDetailTv] = useState([]);
  const [background, setBackground] = useState([]);
  const [creditChar, setCreditChar] = useState([]);
  const { tvId } = useParams();

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
    }
  }, [tvId]);

  return (
    <>
      <Information info={detailTv} background={background} />
      <Cast cast={creditChar} />
      <Review/>
    </>
  );
}
