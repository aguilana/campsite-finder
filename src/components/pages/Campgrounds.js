import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchAllCampgrounds,
  selectCampgrounds,
  deleteCampgroundAsync,
} from "../../features/campgroundSlice";

const Campgrounds = () => {
  const campgrounds = useSelector(selectCampgrounds);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCampgrounds());
  }, []);

  const handleDelete = (id) => {
    alert("Deleting campground")
    dispatch(deleteCampgroundAsync(id));
  };

  return (
    <div>
      <h1>All Campgrounds</h1>
      <section>
        <Link to="/campgrounds/create">Add Campground</Link>
      </section>
      <ul>
        {campgrounds && campgrounds.length ? (
          campgrounds.map((campground) => {
            return (
              <li key={campground.id}>
                <h3>
                  <Link to={`/campgrounds/${campground.id}`} style={{listStyle: "none", textDecoration: "none", color: "black" }}>
                    {campground.name}
                  </Link>
                  <span>
                  <button onClick={() => handleDelete(campground.id)}>
                    Delete
                  </button>
                </span>
                </h3>
              </li>
            );
          })
        ) : (
          <h1> Loading ...</h1>
        )}
      </ul>
    </div>
  );
};

export default Campgrounds;
