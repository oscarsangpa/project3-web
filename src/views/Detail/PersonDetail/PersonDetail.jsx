import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { httpGet } from "../../../services/TMDBService";
import PersonInformation from "../../../components/Person/PersonInformation";
import KnownFor from "../../../components/Person/KnownFor";
import Filmography from "../../../components/Person/Filmography";
import Review from "../../../components/Review/Review";
import { useAuthContext } from "../../../contexts/AuthContext";
import { useTheme } from "../../../contexts/ThemeContext";
import "../../../components/PopularSearched/PopularSearched.scss";
import { getAllReviews } from "../../../services/ReviewServices";

export default function PersonDetail({popular}) {
  const [detailPerson, setDetailPerson] = useState([]);
  const [creditPerson, setCreditPerson] = useState();
  const [reviews, setReviews] = useState([]);
  const [refresh, setRefresh] = useState(false) 
  const { personId } = useParams();
  const {user} = useAuthContext()
  const { theme} = useTheme()

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

        getAllReviews(personId)
        .then((reviews) => {
    
          setReviews(reviews);
        })
        .catch((error) => console.log(error));
    }
  }, [personId, refresh]);

  return (
    <div className={theme}>
    <div className="background">
      <PersonInformation personInfo={detailPerson} />

      <KnownFor creditCast={creditPerson} />

      <Review setRefresh={setRefresh} refresh={refresh} itemId={detailPerson.id} reviews={reviews}/>
      <Filmography credits={creditPerson} />
      </div>
    </div>
  );
}
