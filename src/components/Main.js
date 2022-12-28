import React from "react";
/* Imported Components */
import {
  Home,
  NavBar,
  PageNotFound,
} from "./";
import { Campgrounds, SingleCampground } from "./pages";
import { Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <>
      {/* ---- NavBar ---- */}
      {/* ---- Components and Routes ----  */}
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campgrounds" element={<Campgrounds />} />
        <Route path="/campgrounds/:id" element={<SingleCampground/>}/>
      </Routes>
    </>
  );
};

export default Main;
