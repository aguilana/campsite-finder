import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllCampgrounds, selectCampgrounds } from "../features/campgroundSlice";
import { Campgrounds } from "./pages";

const Home = () => {

  const campgrounds = useSelector(selectCampgrounds)
  const dispatch = useDispatch();
  console.log("campgrounds", campgrounds)


  useEffect(()=>{
    dispatch(fetchAllCampgrounds())
  },[])
  



  return (
    <div>
      <h1>WELCOME</h1>
      <h2>
        ALL CAMPGROUNDS
      </h2>
    <Link to="/campgrounds">ENTER</Link>
    </div>
  );
};

export default Home;