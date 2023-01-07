import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addReviewToCampgroundAsync } from "../../features/singleCampgroundSlice";

const CreateReviewForm = () => {

  const { id } = useParams();
  const dispatch = useDispatch();

  const [body, setBody] = useState("");
  const [rating, setRating] = useState(null);
  console.log("single campground ln18: ", { body, rating, id: Number(id) });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    // send post request to /api/campgrounds/:id
    if (body == "" || rating == null) {
      alert("fill out appropriate fields to leave a review");
    } else {
      await dispatch(addReviewToCampgroundAsync({ body, rating, id }));
    }
  };

  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    if (e.target.name === "rating") setRating(Number(e.target.value));
    if (e.target.name === "review") setBody(e.target.value);
  };

  return (
    <>
      {/* single component for REVIEWS FORM */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="rating">Rating </label>
          <select name="rating" id="rating" onChange={handleChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <div>
          <label htmlFor="review">Leave a Review: </label>
          <textarea
            name="review"
            value={body}
            id="review"
            cols="30"
            rows="3"
            style={{ maxHeight: "80px", maxWidth: "300px" }}
            onChange={handleChange}
          />
          <button type="submit">Leave Review</button>
        </div>
      </form>
    </>
  );
};

export default CreateReviewForm;
