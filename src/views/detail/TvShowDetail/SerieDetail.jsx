import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_IMG, httpGet } from "../../../services/TMDBService";

export default function SerieDetail() {

  const [detailTv, setDetailTv] = useState([]);
  const [background, setBackground] = useState([])
  // const [creditChar, setCreditChar] = useState([]);
  const { tvId } = useParams()
  // const {creditId} = useParams()

  useEffect(() => {
    if(tvId) {
      httpGet(`/tv/${tvId}`)
        .then((tv) => {
          setDetailTv(tv)
          setBackground(tv.backdrop_path)
        })
  
        .catch(error => console.log(error))
      }
    //  if (creditId) {
    //    httpGet(`/credit/${creditId}`)
    //      .then(credit => setCreditChar(credit))
    //      .catch(error => console.log(error))
    //      console.log("el cast", creditChar)
    //  }

  },[tvId])

    return (
      <div>
          <h3>- TV Shows detail -</h3>
          <div style={{backgroungImage: `${BASE_IMG}${background}`}}>
          <p>{detailTv.original_name}</p>
        <img src={`${BASE_IMG}${detailTv?.poster_path}`} alt={""}/>

          </div>
      </div>
    );
}
