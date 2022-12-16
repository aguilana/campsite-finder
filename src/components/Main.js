import React from "react";
/* Imported Components */
import {
  Home,
  NavBar,
  Campuses,
  Students,
  Campus,
  Student,
  PageNotFound
} from "./";
import { Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <>
      {/* ---- NavBar ---- */}
      <NavBar/>
      {/* ---- Components and Routes ----  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/campuses" element={<Campuses />} />
        <Route exact path="/students" element={<Students />} />
        <Route exact path="/campuses/:theCampusId" element={<Campus />} />
        <Route exact path="/students/:studentId" element={<Student />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </>
  );
};

export default Main;
