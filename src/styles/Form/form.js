import styled from "styled-components";

export const WindowContainer = styled.div` 
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 15px 0 hsl(200, 100%, 6%, 0.7);
  background-color: hsl(200, 100%, 6%, 0.7);
  width: 80%;
  max-width:600px;
  border-radius: 20px;
  padding: 40px 30px;
`;


export const Form = styled.form`
  display: flex;
  align-self: center;
  flex-direction: column;
  color: white;
  gap: 20px;
  width: 400px;
  margin-top: 40px;
`;

export const Title = styled.h2` 
  margin: 0;
  color: white;
  text-align: center;
  font-size: 2rem;
  font-weight: normal;
`
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`

export const Label = styled.label` 
  color: white;
  font-weight: lighter;
`

export const Input = styled.input`
  font-size: 1.25rem;
  padding: .5em;
  background-color: hsl(200, 100%, 91%, 0.3);
  border: none;
  outline: none;
  border-radius: .25em;
  color: white;
  font-weight: lighter;
  &:focus {
    box-shadow: 0 0 0 1px hsl(200, 100%, 50%);
  }
`

export const FormButton = styled.button`
  padding: 0.5em 1em;
  margin: 0;
  width: 200px;
  font-size: 1.5rem;
  font-weight: lighter;
  color: white;
  background-color: hsl(200, 100%, 50%, .25);
  border: 1px solid hsl(200, 100%, 50%);
  border-radius: .25em;
  outline: none;
  align-self: center;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: hsl(200, 100%, 50%, .4)
  }
`
