import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
  TextArea,
} from "../styles/Form/form";

const AddCampusForm = () => {
  // various states for form
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await dispatch(addCampusAsync({ name, address, description }));
      alert("Successfully added a new campus!");
      setName("");
      setAddress("");
      setDescription("");
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
              placeholder="...name of campus..."
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
              placeholder="...address of campus..."
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              name="address"
              required
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="description">Description: </Label>
            <TextArea
              type="text-area"
              placeholder="...description..."
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              name="description"
              cols="5"
              required
            ></TextArea>
          </InputGroup>
          <FormButton type="submit">Create Campus</FormButton>
        </Form>
      </FormContainer>
    </WindowContainer>
  );
};

export default AddCampusForm;
