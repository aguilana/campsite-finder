import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Div>
      <h1>WELCOME</h1>
      <h2>
        <Link to="/campuses">ENTER</Link>
      </h2>
    </Div>
  );
};

export default Home;

const Div = styled.div`
  text-align: center;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  font-size: 3rem;
  justify-content: center;
  align-content: center;
  h1{
    color: black;
  }
  h2 {
    border: 1px solid black;
    width: 300px;
    border-radius: 15px;
    align-self: center;
    cursor: pointer;
    a{
      text-decoration: none;
      color: #000
    }
    &:hover {
      background-color: #fff;
      color: #000;
      transition: 1000ms;
    }
  }
`;
