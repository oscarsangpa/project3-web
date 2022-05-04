import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import {useForm} from "react-hook-form";
import InputGroup from "../InputGroup/InputGroup";
import { createReview } from "../../services/ReviewServices";
import { getUser } from "../../services/UsersService";

const Review = ({itemId}) => {
  const [sendReview, setSendReview] = useState(false);
  const [errors, setErrors] = useState(false);
  const { user } = useAuthContext()
  const navigate = useNavigate()

  console.log(user)
  
  
  const { handleSubmit, register } = useForm()

  const onSubmit = (data) => {
    const { description } = data
    console.log("mi review", data, user)

    if (!description ) {
      setErrors(true)
      console.log("ree", data, user)
    } else {
      createReview({...data, user, itemId})
      .then((review) => {
        getUser()
        navigate('/profile')
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setSendReview(false)
      })
    }
  };

  return ( 
    <>
      {
        !user ?
        <>
        <p>
        Sign in {<Link to={"/register"}> here </Link>} to comment
        </p>
        </>

        :
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
          user.reviews.map(des => {
            return (
              <>
                <p>{des.description}</p>
              </>
            )
          })}</p>

          }
        </form>
        </div>
      }

    </>
   );
}
 
export default Review;