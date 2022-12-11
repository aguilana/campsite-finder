import React from "react";
/* Imported Components */
import { Campuses, Students, Home } from "./";

import { Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    /* ---- NavBar ---- */

    /* ---- Components and Routes ---- */
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/campuses" element={<Campuses />} />
      <Route path="/students" element={<Students/>} />
    </Routes>
  );
};

export default Main;
