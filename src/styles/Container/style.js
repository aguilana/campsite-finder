import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 80px;
  width: 100%;
`;
export const Title = styled.h1`
  align-self: center;
  font-size: 3rem;
  color: black;
`;

export const DeleteBtn = styled.button`
  padding: 0.5em 1em;
  margin: 0;
  width: 120px;
  height: 60%;
  font-size: 1.5rem;
  font-weight: lighter;
  color: white;
  background-color: hsl(200, 100%, 50%, 0.25);
  border: 1px solid hsl(200, 100%, 50%);
  border-radius: 0.25em;
  outline: none;
  align-self: center;
  text-align: center;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: hsl(200, 100%, 50%, 0.4);
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  justify-content: center;
  align-content: center;
  li {
    flex-grow: 1 0 33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    gap: 5px;
    background-color: hsla(200, 29%, 67%, 0.702);
    padding: 10px 5px;
    color: black;
    img {
      align-self: center;
    }
    h5 {
      padding: 2px 4px;
    }
  }
`;

export const Span = styled.span`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  height: 100%;
  padding: 5px 10px;
  a {
    color: black;
    text-decoration: none;
  }
`;
