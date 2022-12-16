import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleStudent, selectStudent } from "../features/StudentSlice";
import EditStudentForm from "./EditStudentForm";
import { Section, DivInfo, Container } from "../styles/singleView/section";
import { fetchAllCampuses } from "../features/CampusesSlice";

const Student = () => {
  const { studentId } = useParams();

  const dispatch = useDispatch();

  const student = useSelector(selectStudent);

  const { firstName, lastName, email, imageUrl, gpa, campus } = student;

  useEffect(() => {
    dispatch(fetchSingleStudent(studentId));
    dispatch(fetchAllCampuses())
  }, [dispatch]);


  return (
    <Container>
      <Section>
        <img
          src={imageUrl}
          alt={`this is an image of the student ${firstName}, ${lastName}`}
          style={{ width: 350, height: 350, borderRadius: 50 }}
        />
        <DivInfo>
          <h1>
            {firstName} {lastName}
          </h1>
          <h2>
            {student.campus ? (
              <Link to={`/campuses/${campus.id}`}>
                {firstName} {lastName} attends {student.campus.name}
              </Link>
            ) 
            : (
              `${firstName} is currently not associated with any campus!`
            )
            }
          </h2>
          <h2>EMAIL: {email}</h2>
          <h2>GPA: {gpa}</h2>

          {/* ---- edit student form ---- */}
          <EditStudentForm studentId={studentId}  />
        </DivInfo>
      </Section>
    </Container>
  );
};

export default Student;
