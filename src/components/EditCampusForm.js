import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { editSingleCampus } from "../features/CampusSlice";

const EditCampusForm = ({theCampusId}) => {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    const dispatch = useDispatch();

    

    const handleChange = async (e) => {
        try {e.preventDefault();
        console.log('submitted change')
        const updatedCampus = {theCampusId, name, address}
        await dispatch(editSingleCampus(updatedCampus))
        setName("");
        setAddress("")}
        catch(err){
            console.log(err)
        }
    }

  return (
    
    <Form onSubmit={handleChange}>
      <h2>Edit Campus</h2>
      <label htmlFor="name">Name: </label>
      <input type="text" value={name} name="name" placeholder="campus name" onChange={(e)=>setName(e.target.value)} />
      <label htmlFor="address">Address: </label>
      <input type="text" value={address} name="address" placeholder="address" onChange={(e)=>setAddress(e.target.value)} />
      <button type="submit">Update</button>
    </Form>
  );
};

export default EditCampusForm;

const Form = styled.form`
  display: flex;
  align-self: center;
  flex-direction: column;
  gap: 0.8rem;
  width: 300px;
  input {
    height: 20px;
    border-radius: 5px;
    padding: 10px;
  }
  button {
    border: none;
    width: 100px;
    height: 25px;
    align-self: center;
    background-color: blanchedalmond;
    border-radius: 10px;
    &:hover {
      color: white;
      background: darkblue;
      cursor: pointer;
    }
  }
`;
