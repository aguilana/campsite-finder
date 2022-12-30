import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  fetchSingleCampground,
  selectSingleCampground,
} from "../../features/singleCampgroundSlice";

const SingleCampground = () => {
  const { id } = useParams();
  const singleCampground = useSelector(selectSingleCampground);
  console.log(singleCampground)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleCampground(id));
  }, []);

  return (
    <>
      {id && singleCampground ? (
        <div style={{fontSize: "1.5rem", width: "100vw",display: "flex", flexDirection:"column", alignItems: "center"}}>
          <h1>Welcome to {singleCampground.name}</h1>
          <img src={singleCampground.imageUrl} alt={singleCampground.name} />
          <p>Located in {singleCampground.location}</p>
          <div>
            <h2>Description: </h2>
            <p>{singleCampground.description}</p>
            <h3>Price: ${singleCampground.price}</h3>
          </div>
          <p>
            <Link to={`/campgrounds/${singleCampground.id}/edit`}>Edit Campground</Link>
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
