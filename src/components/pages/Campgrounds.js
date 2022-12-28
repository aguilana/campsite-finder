import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCampgrounds, selectCampgrounds } from "../../features/campgroundSlice";

const Campgrounds = () => {
  const campgrounds = useSelector(selectCampgrounds)
  const dispatch = useDispatch();
  console.log("campgrounds", campgrounds)


  useEffect(()=>{
    dispatch(fetchAllCampgrounds())
  },[])
  



  return (
    <div>
      <h1>All Campgrounds</h1>
      <ul>
        {campgrounds && campgrounds.length ? (
          campgrounds.map((campground) => {
            return (
              <li key={campground.id}>
                <h3>{campground.name}</h3>
              </li>
            )
          })
        ) : <h1> Loading ...</h1>}
      </ul>
    </div>
  );
};

export default Campgrounds