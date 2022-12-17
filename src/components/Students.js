import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteStudentAsync,
  fetchAllStudents,
  selectStudents,
} from "../features/StudentsSlice";
import { Link } from "react-router-dom";
import AddStudentForm from "./AddStudentForm";
import { Container, Ul, Title, Span } from "../styles/Container/style";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Select } from "../styles/Select/Select.style";

const Students = () => {
  const dispatch = useDispatch();

  // form states
  const [showForm, setShowForm] = useState(false);
  const [btnText, setBtnText] = useState("Add Student Here");
  const [value, setValue] = useState("all")

  const students = useSelector(selectStudents);

  useEffect(() => {
    dispatch(fetchAllStudents());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteStudentAsync(id));
  };

  // collapsable form functionality
  const handleClick = () => {
    if (showForm === false) {
      setShowForm(!showForm);
      setBtnText("Collapse");
    } else {
      setShowForm(false);
      setBtnText("Add Student Here");
    }
  };

  // change for filtering students
  const handleChange = (e) => {
    setValue(e.target.value)
    // students.filter(student=>student.campus === null)
  }

  // filtering registration function
  const filterByRegistration = students.filter((student) => {
    if (value === 'all') return student;
    if (value === 'unregistered') return student.campus === null;
    if (value === 'registered') return student.campus
  })

  return (
    <Container>
      <Title>All Students</Title>
      <Button
        onClick={handleClick}
        variant="contained"
        style={{ width: 250, alignSelf: "center" }}
      >
        {btnText}
      </Button>
      {showForm ? <AddStudentForm /> : ""}

      <Select onChange={handleChange}>
        <option value="all">See All Students</option>
        <option value="unregistered">See Unregistered Students</option>
        <option value="registered">See Registered Students</option>
      </Select>

      <Ul>
        {students && students.length ? (
          filterByRegistration.map((student) => {
            return (
              <li key={student.id}>
                <img
                  src={student.imageUrl}
                  alt={student.firstName}
                  style={{ width: 300, height: 250 }}
                />
                <Span>
                  <h2>
                    <Link to={`/students/${student.id}`}>
                      {student.firstName}
                      <br />
                      {student.lastName}
                    </Link>
                  </h2>
                  <Button
                    onClick={() => handleDelete(student.id)}
                    variant="contained"
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
        ) : (
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
