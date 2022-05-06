import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "react-hook-form";
import InputGroup from "../InputGroup/InputGroup";
import { createReview, deleteReview } from "../../services/ReviewServices";
import { getCurrentUser, getUser } from "../../services/UsersService";
import "./Review.scss";

const Review = ({ itemId, reviews, setRefresh, refresh }) => {
  const [sendReview, setSendReview] = useState(false);
  const [errors, setErrors] = useState(false);
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false)

  // console.log(user)

  const { handleSubmit, register } = useForm();

  
console.log(user)
  const onSubmit = (data) => {
    const { description } = data;
    // console.log("mi review", data, user)

    if (!description) {
      setErrors(true);
      console.log("ree", data, user)
    } else {
      createReview({ ...data, user, itemId })
        .then((review) => {
          setRefresh(!refresh)
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
    deleteReview(id)
      .then(res => {
        console.log(res)
        setRefresh(!refresh);
         
      })    
  };
  console.log(reviews)

  return (
    <>
        { reviews.map((rew) => {
            return (
              <div className="comment-main-box">
                <div className="comments-box">
                  <div className="profile-pic">
                    <img className="review-avatar"
                      src={user.image}
                      alt={user.name}
                    />
                  </div>
                  <div className="comment-text-box">
                    <div className="arrow">

                    </div>
                    <div className="comment-text">
                      <h5 className="rev-username">{user.name}</h5>

                    <p className="content-rev">
                    {rew.description}
                    </p>
                    </div>
                  </div>
                </div>
                    <button onClick={() => handleDelete(rew._id)}>delee</button>
              </div>
            );
          })}
          
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputGroup
                label="Review"
                id="description"
                register={register}
                type="text"
              />
              <button className={`btn btn-${sendReview? 'secondary' : 'primary'}`}>{sendReview ? 'Creating user...' : 'Submit'}</button>
              
              <p>
              {
              reviews.map(des => {
                return (
                  <>
                    <p>{des.description}</p>
                  </>
                )
              })}</p>
            </form>
          </div>

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
