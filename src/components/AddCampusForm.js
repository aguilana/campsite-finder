import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addCampusAsync } from "../features/CampusesSlice";

const AddCampusForm = () => {

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await dispatch(addCampusAsync({ name, address }));
      setName("");
      setAddress("");
      navigate("/campuses")
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Form id="create-campus-form" onSubmit={handleSubmit}>
      <label htmlFor="name"></label>
      <input
        type="text"
        placeholder="name of campus"
        value={name}
        onChange={(e) => {setName(e.target.value)}}
        name="name"
      />
      <label htmlFor="address"></label>
      <input
        type="text"
        placeholder="address of campus"
        value={address}
        onChange={(e) => {setAddress(e.target.value)}}
        name="address"
      />
      <button type="submit">Create Campus</button>
    </Form>
  );
};

export default AddCampusForm;

const Form = styled.form`
  display: flex;
  align-self: center;
  flex-direction: column;
  gap: 0.8rem;
  width: 40%;
`;
