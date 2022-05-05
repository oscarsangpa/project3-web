import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "react-hook-form";
import InputGroup from "../InputGroup/InputGroup";
import { createReview, deleteReview } from "../../services/ReviewServices";
import { getUser } from "../../services/UsersService";
import "./Review.scss";

const Review = ({ itemId }) => {
  const [sendReview, setSendReview] = useState(false);
  const [errors, setErrors] = useState(false);
  const { user } = useAuthContext();
  const navigate = useNavigate();

  // console.log(user)

  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    const { description } = data;
    // console.log("mi review", data, user)

    if (!description) {
      setErrors(true);
      console.log("ree", data, user)
    } else {
      createReview({ ...data, user, itemId })
        .then((review) => {
          getUser();
          // navigate("/profile");
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setSendReview(false);
        });
    }
  };

  const handleDelete = (id) => {
    console.log("el id", id, user);
    deleteReview(id).then(() => {
      getUser();
    });
  };
  return (
    <>
        {user.reviews.map((rew) => {
            return (
              <div class="comment-main-box">
                <div class="comments-box">
                  <div class="profile-pic">
                    <img
                      src="https://s.gravatar.com/avatar/c75a0943b348f2aedb1cdee6a09e17d8?d=mm&s=70"
                      alt=""
                    />
                  </div>
                  <div class="comment-text-box">
                    <div class="arrow">

                    </div>
                    <div class="comment-text">
                      <h5 className="rev-username">{user.name}</h5>

                    <p className="content-rev">
                    {rew.description}
                    </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          

          {/* {
            !user &&


          (
            <div>
            <p>Sign in {<Link to={"/register"}> here </Link>} to comment</p>
  <button
  className={`btn btn-${sendReview ? "secondary" : "primary"}`}
  >
    {sendReview ? "Creating review" : "Send review"}
  </button>
            </div>)
          } */}
            
    </>
  );
};

export default Review;
