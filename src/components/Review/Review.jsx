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

  
  const onSubmit = (data) => {
    const { description } = data;
    // console.log("mi review", data, user)

    if (!description) {
      setErrors(true);
    } else {
      createReview({ ...data, user, itemId })
        .then((review) => {
          setRefresh(!refresh)
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
        setRefresh(!refresh);
         
      })    
  };

  return (
    <>
              {
              !user ?

            (
              <div>
                <p>Sign in {<Link to={"/register"}> here </Link>} to comment</p>
              </div>)
              :
              (
                <div>


        { reviews.map((rew) => {
            return (
              <div className="comment-main-box">
                <div className="comments-box">
                  <div className="profile-pic">
                    <img className="review-avatar"
                      src={user?.image}
                      alt={user?.name}
                    />
                  </div>
                  <div className="comment-text-box">
                    <div className="arrow">

                    </div>
                    <div className="comment-text">
                      <h5 className="rev-username">{user?.name}</h5>

                    <p className="content-rev text textRev"> 
                    {rew.description}
                    </p>
                    </div>
                  </div>
                </div>
                    <button onClick={() => handleDelete(rew._id)}>delete</button>
              </div>
            );
          })}
          
          <div className="rev-container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputGroup
                placeholder="Review"
                id="description"
                register={register}
                type="text"
              />
              <button className="btn-rev">{sendReview ? 'Creating review' : 'Send'}</button> 
         
            </form>
          </div>
          <br></br>
          <br></br>
          </div>
              )
              }

          
            
    </>
  );
};

export default Review;
