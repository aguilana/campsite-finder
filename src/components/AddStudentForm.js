import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAllCampuses, selectCampuses } from "../features/CampusesSlice";
import { addStudentAsync, fetchAllStudents } from "../features/StudentsSlice";
import {
  WindowContainer,
  FormContainer,
  Form,
  Title,
  Input,
  Label,
  InputGroup,
  FormButton,
} from "../styles/Form/form";

const AddStudentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gpa, setGpa] = useState("");
  const [campusId, setCampusId] = useState("");
  console.log("campus", campusId);

  const dispatch = useDispatch();

  const campuses = useSelector(selectCampuses);
  console.log("campuses on add student", campuses);

  useEffect(() => {
    dispatch(fetchAllStudents());
    dispatch(fetchAllCampuses());
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await dispatch(addStudentAsync({ firstName, lastName, email, campusId }));
      alert("Successfully added a new student!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setCampusId("");
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleChange = (e) => {
    if (e.target.value === "unselected") {
      setCampusId(null);
    } else {
      setCampusId(e.target.value);
      console.log(e.target.value);
    }
  };

  return (
    <WindowContainer>
      <FormContainer>
        <Title>Add Student</Title>
        <Form id="create-student-form" onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="firstName">First Name: </Label>
            <Input
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              name="firstName"
              placeholder="First Name"
              required
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="lastName">Last Name: </Label>
            <Input
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              name="lastName"
              placeholder="Last Name"
              required
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="email">Email: </Label>
            <Input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name="email"
              placeholder="Email"
              required
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="gpa">GPA: </Label>
            <Input
              type="number"
              step="any"
              value={gpa}
              name="gpa"
              placeholder="GPA"
              onChange={(e) => setGpa(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Label> Select Campus </Label>
            <select onChange={handleChange}>
              <option defaultValue value="unselected">
                {" "}
                -- select a campus --{" "}
              </option>
              {campuses
                ? campuses.map((campus) => (
                    <option key={campus.id} value={campus.id}>
                      {campus.name}
                    </option>
                  ))
                : ""}
            </select>
          </InputGroup>
          <FormButton type="submit">Create Student</FormButton>
        </Form>
      </FormContainer>
    </WindowContainer>
  );
};

export default AddStudentForm;
