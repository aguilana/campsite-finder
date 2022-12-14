import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { editSingleStudent } from "../features/StudentSlice";

const EditStudentForm = ({ studentId }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [gpa, setGpa] = useState();

  const dispatch = useDispatch();

  const handleChange = async (e) => {
    try {
      e.preventDefault();
      const updatedStudent = { studentId, firstName, lastName, email, gpa };
      await dispatch(editSingleStudent(updatedStudent));
      setFirstName("");
      setLastName("");
      setEmail("");
      setGpa();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmit={handleChange}>
      <h2>Edit Campus</h2>
      <label htmlFor="firstname">First Name: </label>
      <input
        type="text"
        value={firstName}
        name="firstname"
        placeholder="firstname"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label htmlFor="lastname">Last Name: </label>
      <input
        type="text"
        value={lastName}
        name="lastname"
        placeholder="last name"
        onChange={(e) => setLastName(e.target.value)}
      />
      <label htmlFor="email">Email: </label>
      <input
        type="text"
        value={email}
        name="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="gpa">GPA: </label>
      <input
        type="number"
        step="any"
        value={gpa}
        name="gpa"
        placeholder="GPA"
        onChange={(e) => setGpa(e.target.value)}
      />
      <button type="submit">Update</button>
    </Form>
  );
};

export default EditStudentForm;

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
