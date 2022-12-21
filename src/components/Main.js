import React from "react";
/* Imported Components */
import {
  Home,
  NavBar,
  PageNotFound,
} from "./";
import { Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <>
      {/* ---- NavBar ---- */}
      {/* ---- Components and Routes ----  */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default Main;
