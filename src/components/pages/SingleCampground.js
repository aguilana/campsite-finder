import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  addReviewToCampgroundAsync,
  deleteReviewAsync,
  fetchSingleCampground,
  selectSingleCampground,
} from "../../features/singleCampgroundSlice";
import { Campground, CreateReviewForm } from "../features";

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

  const handleDelete = ({ singleCampgroundId, reviewId }) => {
    dispatch(deleteReviewAsync({ singleCampgroundId, reviewId }));
  };

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
          <Campground />
          <section>
            <CreateReviewForm />
          </section>

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
