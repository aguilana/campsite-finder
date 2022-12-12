import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { addStudentAsync } from '../features/StudentsSlice';

const AddStudentForm = () => {

      // need to create 3 useStates - firstname, lastname, email, campuses?
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gpa, setGpa] = useState(0)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    dispatch(addStudentAsync({ firstName, lastName, email, gpa }));
    navigate("/students")
  };

  return (
    <Form id="create-student-form" onSubmit={handleSubmit}>
    <label htmlFor="firstName">First Name: </label>
    <input
      type="text"
      value={firstName}
      onChange={(e)=>{setFirstName(e.target.value)}}
      name="firstName"
      placeholder="First Name"
    />
    <label htmlFor="lastName">Last Name: </label>
    <input
      type="text"
      value={lastName}
      onChange={(e)=>{setLastName(e.target.value)}}
      name="lastName"
      placeholder="Last Name"
    />
    <label htmlFor="email">Email: </label>
    <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" placeholder="Email" />
    <label htmlFor="gpa">GPA: </label>
    <input type="number" step="any" placeholder="cumulative gpa" value={gpa} onChange={(e)=>{setGpa(e.target.value)}}  name='gpa' />
    <button type="submit">Create Student</button>
  </Form>
  )
}

export default AddStudentForm

const Form = styled.form`
  display: flex;
  align-self: center;
  flex-direction: column;
  gap: 0.8rem;
  width: 40%;
`;
