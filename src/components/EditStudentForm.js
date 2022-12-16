import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCampuses } from "../features/CampusesSlice";
import {
  editSingleStudent,
  fetchSingleStudent,
  selectStudent,
} from "../features/StudentSlice";
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

const EditStudentForm = ({ studentId }) => {
  const campuses = useSelector(selectCampuses);


  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [gpa, setGpa] = useState();
  const [campusId, setCampusId] = useState();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const updatedStudent = {
        studentId,
        firstName,
        lastName,
        email,
        gpa,
        campusId,
      };
      await dispatch(editSingleStudent(updatedStudent));
      setFirstName("");
      setLastName("");
      setEmail("");
      setGpa(0);
    } catch (err) {
      console.log(err);
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
        <Title>Edit Campus</Title>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="firstname">First Name: </Label>
            <Input
              type="text"
              value={firstName}
              name="firstname"
              placeholder="firstname"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="lastname">Last Name: </Label>
            <Input
              type="text"
              value={lastName}
              name="lastname"
              placeholder="last name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="email">Email: </Label>
            <Input
              type="text"
              value={email}
              name="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
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
              {campuses
                ? campuses.map((campus) => (
                    <option key={campus.id} value={campus.id}>
                      {campus.name}
                    </option>
                  ))
                : ""}
            </select>
          </InputGroup>

          <FormButton type="submit">Update</FormButton>
        </Form>
      </FormContainer>
    </WindowContainer>
  );
};

export default EditStudentForm;
