import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { httpGet } from "../../../services/TMDBService";
import "../../../components/PopularSearched/PopularPersonSearched.css";
import PersonInformation from "../../../components/DetailComponentes/Person/PersonInformation";
import KnownFor from "../../../components/DetailComponentes/Person/KnownFor";
import Filmography from "../../../components/DetailComponentes/Person/Filmography";
import Review from "../../../components/Review/Review";

export default function PersonDetail({popular}) {
  const [detailPerson, setDetailPerson] = useState([]);
  const [creditPerson, setCreditPerson] = useState();
  const { personId } = useParams();

  useEffect(() => {
    if (personId) {
      httpGet(`/person/${personId}`)
        .then((person) => setDetailPerson(person))
        .catch((error) => console.log(error));

      httpGet(`/person/${personId}/combined_credits`)
        .then((credit) => {
          setCreditPerson(credit);
        })
        .catch((error) => console.log(error));
    }
  }, [personId]);

  return (
    <>
      <PersonInformation personInfo={detailPerson} />

      <KnownFor creditCast={creditPerson} />

      <Filmography credits={creditPerson} />

      <Review/>
    </>
  );
}
