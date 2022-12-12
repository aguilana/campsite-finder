import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleStudent, selectStudent } from "../features/StudentSlice";

const Student = () => {
  const { studentId } = useParams();

  const dispatch = useDispatch();

  const student = useSelector(selectStudent);

  const { firstName, lastName, email, imageUrl, gpa, campus } = student;

  useEffect(() => {
    dispatch(fetchSingleStudent(studentId));
  }, [dispatch]);

  return (
    <>
      <h1>
        {firstName} {lastName}
      </h1>
      <img
        src={imageUrl}
        alt={`this is an image of the student ${firstName}, ${lastName}`}
        style={{ width: 250, height: 250 }}
      />
      <h2>EMAIL: {email}</h2>
      <h2>GPA: {gpa}</h2>
      <h5>
        {student.campus ? (
          <Link to={`/campuses/${campus.id}`}>
            {firstName} {lastName} attends {student.campus.name}
          </Link>
        ) : (
          `${firstName} is currently not associated with any campus!`
        )}
      </h5>
    </>
  );
};

export default Student;
