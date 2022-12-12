import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllStudents, selectStudents } from "../features/StudentsSlice";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Students = () => {
  const dispatch = useDispatch();

  const students = useSelector(selectStudents);

  useEffect(() => {
    dispatch(fetchAllStudents());
  }, [dispatch]);

  return (
    <Container>
      <h1>All Students</h1>
      <Ul>
        {students
          ? students.map((student) => {
              return (
                <li key={student.id}>
                  <img
                    src={student.imageUrl}
                    alt={`This is a picture student ${student.firstName} who currently attends ${student.campus.name}`}
                    style={{ width: 250, height: 250 }}
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
