import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>WELCOME</h1>
      <h2>
        <Link to="/">ENTER</Link>
      </h2>
    </div>
  );
};

export default Home;