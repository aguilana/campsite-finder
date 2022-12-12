import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleCampus, selectCampus } from "../features/CampusSlice";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Campus = () => {
  const { campusId } = useParams();
  const dispatch = useDispatch();

  const campus = useSelector(selectCampus);
  console.log("this is the campus selected", campus);
  const { name, imageUrl, address, description, students } = campus;

  useEffect(() => {
    dispatch(fetchSingleCampus(campusId));
  }, [dispatch]);

  return (
    <Container>
      <Section>
        <img src={imageUrl} alt={name} style={{ width: 300, height: 300, borderRadius: 50}} />
        <DivInfo>
          <h1>{name}</h1>
          <h4>{address}</h4>
        </DivInfo>
      </Section>
      <section>
        <h4>Campus Information: </h4>
        <p>{description}</p>
      </section>
      <div>
        <h3>List of attending students</h3>
        <ul>
          {students && students.length
            ? students.map((student) => {
                return (
                  <Link to={`/students/${student.id}`} key={student.id}>
                    <li>
                      {student.firstName} {student.lastName}
                    </li>
                  </Link>
                );
              })
            : "Campus does not have any students :("}
        </ul>
      </div>
    </Container>
  );
};

export default Campus;

const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
`;
const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 2rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 50px;
  height: 100%;
`;
