import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReview } from '../../../services/PostService';

const ReviewDetail = () => {
  const [review, setReview] = useState({})
  const { id } = useParams()

  useEffect(() => {
    getReview(id)
      .then(review => setReview(review))
  },[])

  return (
    <div>
      {/* <h1 className="text-primary text-center my-4" style={{ fontSize: "45px"}}>{post.title}</h1>
      <div
        dangerouslySetInnerHTML={{__html: post.content}}
      /> */}
    </div>
  );
};

export default ReviewDetail;