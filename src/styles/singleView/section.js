import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  img {
    align-self: center;
  }
`;
export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 2rem;
  width: 100%;
  h1,
  h2,
  h4 {
    color: black;
    align-self: center;
  }
  a {
    color: rgb(0,0,0,.8);
    text-decoration: none;
    &:hover {
      background: rgb(202, 202, 202, 0.1);
      color: red;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 50px;
  height: 100%;
  color: black;
`;

export const Span = styled.span`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 5px;
  a {
    color: black;
    text-decoration: none;
    &:hover {
      background: rgb(202, 202, 202, 0.1);
      color: red;
    }
  }
`;
