import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  img{
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
  h1,h2,h4{
    align-self: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 50px;
  height: 100%;
`;

export const Span = styled.span`
  display: flex;
  gap: 1rem;
  padding: 5px;
`;
