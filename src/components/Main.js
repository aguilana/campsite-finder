import React from "react";
/* Imported Components */
import {
  Home,
} from "./";
import { Campgrounds, SingleCampground } from "./pages";
import { CreateCampground, EditSingleCampground, Footer, NavBar } from "./features";
import { Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <>
      {/* ---- NavBar ---- */}
      <NavBar/>
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campgrounds" element={<Campgrounds />} />
        <Route path="/campgrounds/create" element={<CreateCampground/>} />
        <Route path="/campgrounds/:id" element={<SingleCampground/>}/>
        <Route path="/campgrounds/:id/edit" element={<EditSingleCampground/>}/>
      </Routes>
      {/* FOOTER */}
      <Footer/>
    </>
  );
};

export default Main;
