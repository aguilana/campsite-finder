import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteStudentAsync,
  fetchAllStudents,
  selectStudents,
} from "../features/StudentsSlice";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import AddStudentForm from "./AddStudentForm";

const Students = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const students = useSelector(selectStudents);
  console.log("STUDENTS IN STATE: ", students)

  useEffect(() => {
      dispatch(fetchAllStudents());
  }, []);

  const handleClick = async (e) => {
    try{
      await dispatch(deleteStudentAsync(e.target.value))
      navigate("/students")
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <Container>
      <h1>All Students</h1>
      < AddStudentForm />
      <Ul>
        {students && students.length
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
                  <button value={student.id} onClick={handleClick}>X</button>
                </li>
              );
            })
          : <h4 style={{fontSize: 40}}>Oops...no students to display 😦 </h4>}
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
