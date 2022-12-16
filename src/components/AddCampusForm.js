import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCampusAsync } from "../features/CampusesSlice";
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

const AddCampusForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await dispatch(addCampusAsync({ name, address }));
      alert("Successfully added a new campus!")
      setName("");
      setAddress("");
      navigate("/campuses");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <WindowContainer>
      <FormContainer>
        <Title>Add Campus</Title>
        <Form id="create-campus-form" onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="name">Campus Name: </Label>
            <Input
              type="text"
              placeholder="name of campus"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              name="name"
              required
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="address">Address: </Label>
            <Input
              type="text"
              placeholder="address of campus"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              name="address"
              required
            />
          </InputGroup>
          <FormButton type="submit">Create Campus</FormButton>
        </Form>
      </FormContainer>
    </WindowContainer>
  );
};

export default AddCampusForm;
