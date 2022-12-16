import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() =>
    setTimeout(() => {
      navigate(-1)
    }, 3000), []);

  return (
    <Container>
      <h1>OOPS...404 Error...PAGE NOT FOUND</h1>
      <h2>Redirecting back to last page</h2>
      <img src="https://cdn.dribbble.com/users/469578/screenshots/2597126/404-drib23.gif" />
    </Container>
  );
};

export default NotFound;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        height: 500px;
        width: 500px;
    }
`