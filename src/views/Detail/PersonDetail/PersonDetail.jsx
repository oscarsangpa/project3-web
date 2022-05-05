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

export default function PersonDetail({popular}) {
  const [detailPerson, setDetailPerson] = useState([]);
  const [creditPerson, setCreditPerson] = useState();
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
    }
  }, [personId]);

  return (
    <div className={theme}>
    <div className="background">
      <PersonInformation personInfo={detailPerson} />

      <KnownFor creditCast={creditPerson} />

      <Review itemId={detailPerson.id}/>
      <Filmography credits={creditPerson} />
      </div>
    </div>
  );
}
