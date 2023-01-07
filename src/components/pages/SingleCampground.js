import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  addReviewToCampgroundAsync,
  deleteReviewAsync,
  fetchSingleCampground,
  selectSingleCampground,
} from "../../features/singleCampgroundSlice";
import { CreateReviewForm } from "../features";

const SingleCampground = () => {
  const { id } = useParams();
  const singleCampground = useSelector(selectSingleCampground);
  console.log(singleCampground);
  const dispatch = useDispatch();

  const [body, setBody] = useState("");
  const [rating, setRating] = useState(null);
  console.log("single campground ln18: ", { body, rating, id: Number(id) });

  useEffect(() => {
    dispatch(fetchSingleCampground(id));
  }, []);

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

  const handleDelete = ({singleCampgroundId, reviewId}) => {
    dispatch(deleteReviewAsync({singleCampgroundId, reviewId}))
  }

  return (
    <>
    {/* if there is an Id and singleCampground then show...singleCampground...make separate component for campground? */}
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
          {/* single campground card layout... */}
          <h1>Welcome to {singleCampground.name}</h1>
          <img src={singleCampground.imageUrl} alt={singleCampground.name} />
          <p>Located in {singleCampground.location}</p>
          <h3>Price: ${singleCampground.price}</h3>
          <div>
            <h5>Description: </h5>
            <p>{singleCampground.description}</p>
          </div>
          <div>
            {/* single campground REVIEWS SECTION...own component? */}
            <section>
              <h5>
                Reviews
                <span>
                  (
                  {singleCampground.reviews && singleCampground.reviews.length
                    ? singleCampground.reviews.length
                    : 0}
                  )
                </span>
              </h5>
              <ol>
                {singleCampground.reviews && singleCampground.reviews.length ? (
                  singleCampground.reviews.map((review) => {
                    return (
                      <>
                      
                      <li key={review.id}>
                        {review.body} <span>Rating: {review.rating}</span>
                      </li>

                      <button onClick={()=>handleDelete({singleCampgroundId: singleCampground.id, reviewId: review.id})}>Delete Review</button>
                      </>
                    );
                  })
                ) : (
                  <p>No Reviews</p>
                )}
              </ol>
            </section>
            <section>
              <CreateReviewForm/>
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
