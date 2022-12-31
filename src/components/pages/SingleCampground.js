import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  addReviewToCampgroundAsync,
  fetchSingleCampground,
  selectSingleCampground,
} from "../../features/singleCampgroundSlice";

const SingleCampground = () => {
  const { id } = useParams();
  const singleCampground = useSelector(selectSingleCampground);
  console.log(singleCampground);
  const dispatch = useDispatch();

  const [body, setBody] = useState("");
  const [rating, setRating] = useState(null);
  console.log({ body, rating });

  useEffect(() => {
    dispatch(fetchSingleCampground(id));
  }, []);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    // send post request to /api/campgrounds/:id
    await dispatch(addReviewToCampgroundAsync(id, { body, rating }));
  };

  const handleChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    if (e.target.name === "rating") setRating(Number(e.target.value));
    if (e.target.name === "review") setBody(e.target.value);
  };

  return (
    <>
      {id && singleCampground ? (
        <div
          style={{
            fontSize: "1.5rem",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Welcome to {singleCampground.name}</h1>
          <img src={singleCampground.imageUrl} alt={singleCampground.name} />
          <p>Located in {singleCampground.location}</p>
          <h3>Price: ${singleCampground.price}</h3>
          <div>
            <h5>Description: </h5>
            <p>{singleCampground.description}</p>
          </div>
          <div>
            <section>
              <h5>Reviews</h5>
              <ol>
                {singleCampground.reviews ? (
                  singleCampground.reviews.map((review) => {
                    return <li key={review.body}>{review.body}</li>;
                  })
                ) : (
                  <p>No Reviews</p>
                )}
              </ol>
            </section>
            <section>
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
            </section>
          </div>
          <p>
            <Link to={`/campgrounds/${singleCampground.id}/edit`}>
              Edit Campground
            </Link>
          </p>
        </div>
      ) : (
        <h1> Campground does not exist </h1>
      )}
      <footer>
        <Link to="/campgrounds">All Campgrounds</Link>
      </footer>
    </>
  );
};

export default SingleCampground;
