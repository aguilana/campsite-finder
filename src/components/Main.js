import React from "react";
/* Imported Components */
import { Home, NavBar, Campuses, Students, Campus, Student } from "./";

import { Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <>
      {/* ---- NavBar ---- */}
      <NavBar />
      {/* ---- Components and Routes ----  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campuses" element={<Campuses />} />
        <Route path="/students" element={<Students />} />
        <Route path="/campuses/:campusId" element={<Campus />} />
        <Route path="/students/:studentId" element={<Student />} />
      </Routes>
    </>
  );
};

export default Main;
