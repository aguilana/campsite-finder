import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { editSingleCampus } from "../features/CampusSlice";

const EditCampusForm = ({campusId}) => {
    console.log("this is campus id in edit form", campusId)

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    const dispatch = useDispatch();

    

    const handleChange = async (e) => {
        try {e.preventDefault();
        console.log('submitted change')
        const updatedCampus = {campusId, name, address}
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
  width: 40%;
`;
