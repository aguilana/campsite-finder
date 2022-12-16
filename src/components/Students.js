import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteStudentAsync,
  fetchAllStudents,
  selectStudents,
  // loadingStudents,
} from "../features/StudentsSlice";
import { Link } from "react-router-dom";
import AddStudentForm from "./AddStudentForm";
import { Container, Ul, Title, Span } from "../styles/Container/style";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const Students = () => {
  const dispatch = useDispatch();

  const students = useSelector(selectStudents);


  useEffect(() => {
    console.log("use effect")
    dispatch(fetchAllStudents());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteStudentAsync(id));
  };

  return (
    <Container>
      <Title>All Students</Title>

      <AddStudentForm />
      <Ul>
        {students && students.length ? (
          students.map((student) => {
            return (
              <li key={student.id}>
                <img
                  src={student.imageUrl}
                  alt={student.firstName}
                  style={{ width: 300, height: 250 }}
                />
                <Span>
                  <h3>
                    <Link to={`/students/${student.id}`}>
                      {student.firstName} {student.lastName}
                    </Link>
                  </h3>
                  <Button
                    onClick={() => handleDelete(student.id)}
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                  >
                    ✖
                  </Button>
                </Span>
                {student.campus && <h5>Attending: {student.campus.name}</h5>}
                {student.gpa ? <h5>GPA: {student.gpa}</h5> : <h5>GPA: </h5>}
                <h5>Email: {student.email}</h5>
              </li>
            );
          })
        ) 
        : (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        )}
      </Ul>
    </Container>
  );
};

export default Students;
