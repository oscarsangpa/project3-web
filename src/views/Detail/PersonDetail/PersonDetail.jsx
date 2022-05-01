import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { httpGet } from "../../../services/TMDBService";
import PersonInformation from "../../../components/Person/PersonInformation";
import KnownFor from "../../../components/Person/KnownFor";
import Filmography from "../../../components/Person/Filmography";
import Review from "../../../components/Review/Review";
import "../../../components/PopularSearched/PopularSearched.css";

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
