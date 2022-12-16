import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "@mui/material/Button";

const PageNotFound = () => {
  const navigate = useNavigate();

  //   useEffect(() =>
  //     setTimeout(() => {
  //       navigate(-1)
  //     }, 2000));

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Container>
      <h2> Back to home page here:</h2>
      <Button
        size="large"
        color="success"
        variant="contained"
        onClick={handleClick}
      >
        HOME
      </Button>
    </Container>
  );
};

export default PageNotFound;

const Container = styled.div`
  background-image: url("https://img.lovepik.com/element/40021/7866.png_1200.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
  height: 100vh;
  gap: 1.5rem;
  button{
    width: 200px;
    height: 50px;
    align-self: center;
  }
`;
