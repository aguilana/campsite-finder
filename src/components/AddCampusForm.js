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
      navigate("/campuses");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Form id="create-campus-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Campus Name: </label>
      <input
        type="text"
        placeholder="name of campus"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        name="name"
      />
      <label htmlFor="address">Address: </label>
      <input
        type="text"
        placeholder="address of campus"
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
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
