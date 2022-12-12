import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addStudentAsync,
  fetchAllStudents,
  selectStudents,
} from "../features/StudentsSlice";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Students = () => {
  // need to create 3 useStates - firstname, lastname, email, campuses?
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gpa, setGpa] = useState(null)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const students = useSelector(selectStudents);

  useEffect(() => {
    dispatch(fetchAllStudents());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    dispatch(addStudentAsync({ firstName, lastName, email, gpa }));
    navigate("/students")
  };

  return (
    <Container>
      <h1>All Students</h1>
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
        <input type="number" placeholder="cumulative gpa" value={gpa} onChange={(e)=>{setGpa(e.target.value)}}  name='gpa' />
        <button type="submit">Create Student</button>
      </Form>
      <Ul>
        {students
          ? students.map((student) => {
              return (
                <li key={student.id}>
                  <img
                    src={student.imageUrl}
                    alt={student.firstName}
                    style={{ width: 300, height: 250 }}
                  />
                  <span>
                    <h3>
                      <Link to={`/students/${student.id}`}>
                        {student.firstName} {student.lastName}
                      </Link>
                    </h3>
                  </span>
                </li>
              );
            })
          : "no students to display"}
      </Ul>
    </Container>
  );
};

export default Students;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 80px;
  width: 100%;
  h1 {
    align-self: center;
    font-size: 3rem;
  }
`;

const Ul = styled.ul`
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
    gap: 1rem;
    height: 350px;
    width: 350px;
    img {
      border-radius: 40%;
      align-self: center;
    }
    span {
      h3 {
        font-size: 2rem;
        height: 100%;
        a {
          color: black;
          text-decoration: none;
        }
        a:hover {
          color: red;
        }
      }
    }
  }
  span {
    align-self: center;
  }
`;

const Form = styled.form`
  display: flex;
  align-self: center;
  flex-direction: column;
  gap: 0.8rem;
  width: 40%;
`;
