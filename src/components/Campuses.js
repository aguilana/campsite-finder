import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCampusAsync,
  fetchAllCampuses,
  selectCampuses,
} from "../features/CampusesSlice";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AddCampusForm from "./AddCampusForm";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const Campuses = () => {
  const dispatch = useDispatch();
  const campuses = useSelector(selectCampuses);
  const [showForm, setShowForm] = useState(false);
  const [btnText, setBtnText] = useState("Add A Campus");

  useEffect(() => {
    dispatch(fetchAllCampuses());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteCampusAsync(id));
  };

  const handleClick = () => {
    if (showForm === false) {
      setShowForm(!showForm);
      setBtnText("Collapse");
    } else {
      setShowForm(false);
      setBtnText("Add A Campus");
    }
  };

  return (
    <>
      {
        <Container>
          <Title>ALL CAMPUSES</Title>
          <Button
            onClick={handleClick}
            variant="contained"
            style={{ width: 250, alignSelf: "center"}}
          >
            {btnText}
          </Button>
          {showForm ? <AddCampusForm /> : ""}
          <Ul>
            {campuses && campuses.length ? (
              campuses.map((campus) => {
                return (
                  <li key={campus.id}>
                    <img src={campus.imageUrl} alt={campus.name} />
                    <div>
                      <h3>
                        <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
                      </h3>
                      <h4>Address: {campus.address}</h4>
                      <p>{campus.description}</p>
                      <Button
                        value={campus.id}
                        onClick={() => handleDelete(campus.id)}
                        variant="contained"
                        startIcon={<DeleteIcon />}
                      >
                        DELETE
                      </Button>
                    </div>
                  </li>
                );
              })
            ) : (
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open
              >
                <CircularProgress color="inherit" />
              </Backdrop>
            )}
          </Ul>
        </Container>
      }
    </>
  );
};

export default Campuses;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 80px;
  width: 100vw;
`;

const Title = styled.h1`
  align-self: center;
  font-size: 3rem;
  color: black;
`;

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-content: center;
  padding: 50px;
  li {
    display: flex;
    justify-content: space-around;
    align-content: center;
    width: 100%;
    gap: 1rem;
    padding: 10px 20px;
    color: black;
    background-color: hsla(200, 29%, 67%, 0.702);
    img {
      width: 200px;
      height: 200px;
      flex: 1;
    }
    div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      flex: 9;
      button {
        width: 150px;
      }
    }
    h3 {
      font-size: 2rem;
      a {
        text-decoration: none;
        color: black;
        &:hover {
          border-radius: 10px;
          background: darkgray;
          color: brown;
        }
      }
    }
  }
`;
