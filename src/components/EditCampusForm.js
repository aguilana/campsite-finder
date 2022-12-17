import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editSingleCampus } from "../features/CampusSlice";
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

const EditCampusForm = ({ theCampusId }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const dispatch = useDispatch();

  const handleChange = async (e) => {
    try {
      e.preventDefault();
      const updatedCampus = { theCampusId, name, address };
      await dispatch(editSingleCampus(updatedCampus));
      setName("");
      setAddress("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <WindowContainer>
      <FormContainer>
        <Title>Edit Campus</Title>
        <Form onSubmit={handleChange}>
          <InputGroup>
            <Label htmlFor="name">Name: </Label>
            <Input
              type="text"
              value={name}
              name="name"
              placeholder="campus name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="address">Address: </Label>
            <Input
              type="text"
              value={address}
              name="address"
              placeholder="address"
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <FormButton type="submit">Update</FormButton>
          </InputGroup>
        </Form>
      </FormContainer>
    </WindowContainer>
  );
};

export default EditCampusForm;
