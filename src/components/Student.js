import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleStudent, selectStudent } from "../features/StudentSlice";
import styled from "styled-components";
import EditStudentForm from "./EditStudentForm";

const Student = () => {
  const { studentId } = useParams();

  const dispatch = useDispatch();

  const student = useSelector(selectStudent);

  const { firstName, lastName, email, imageUrl, gpa, campus } = student;

  useEffect(() => {
    dispatch(fetchSingleStudent(studentId));
  }, [dispatch]);

  return (
    <Container>
      <h1>
        {firstName} {lastName}
      </h1>
      <h2>
        {student.campus ? (
          <Link to={`/campuses/${campus.id}`}>
            {firstName} {lastName} attends {student.campus.name}
          </Link>
        ) : (
          `${firstName} is currently not associated with any campus!`
        )}
      </h2>
      <Section>
        <img
          src={imageUrl}
          alt={`this is an image of the student ${firstName}, ${lastName}`}
          style={{ width: 350, height: 350, borderRadius: 50 }}
        />
        <DivInfo>
          <h2>EMAIL: {email}</h2>
          <h2>GPA: {gpa}</h2>
          <EditStudentForm studentId={studentId}/>
        </DivInfo>
      </Section>
    </Container>
  );
};

export default Student;

const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
`;
const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 2rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 50px;
  height: 100%;
  h1,h2 {
    align-self: center;
  }
`;
