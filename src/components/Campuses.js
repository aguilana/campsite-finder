import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCampusAsync,
  fetchAllCampuses,
  selectCampuses,
} from "../features/CampusesSlice";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AddCampusForm from "./AddCampusForm";

const Campuses = () => {
  const dispatch = useDispatch();
  const campuses = useSelector(selectCampuses);
  console.log(campuses);

  useEffect(() => {
    dispatch(fetchAllCampuses());
  }, [dispatch]);

  const handleClick = async (e) => {
    try {
      await dispatch(deleteCampusAsync(e.target.value));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <h1>ALL CAMPUSES</h1>
      <AddCampusForm />
      <Ul>
        {campuses && campuses.length
          ? campuses.map((campus) => {
              return (
                <li key={campus.id}>
                  <img src={campus.imageUrl} alt={campus.name} />
                  <div>
                    <h3>
                      <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
                    </h3>
                    <h4>Address: {campus.address}</h4>
                    <p>{campus.description}</p>
                    <Button value={campus.id} onClick={handleClick}>
                      ✖
                    </Button>
                  </div>
                </li>
              );
            })
          : "Oops...no campuses listed"}
      </Ul>
    </Container>
  );
};

export default Campuses;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 2rem;
  padding: 80px;
  width: 100%;
  h1 {
    align-self: center;
    font-size: 3rem;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  justify-content: space-evenly;
  align-content: center;
  padding: 50px;
  li {
    display: flex;
    justify-content: space-around;
    align-content: center;
    gap: 1rem;
    padding: 10px 20px;
    width: 100%;
    img {
      border-radius: 40%;
      width: 250px;
      height: 250px;
    }
    div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
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

const Button = styled.button`
  font-size: 1.5rem;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: blanchedalmond;
  &:hover {
    color: white;
    background: darkblue;
    cursor: pointer;
  }
`;
