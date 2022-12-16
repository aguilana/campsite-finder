import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchSingleCampus,
  selectCampus,
  unregisterStudentAsync,
} from "../features/CampusSlice";
import { Link } from "react-router-dom";
import EditCampusForm from "./EditCampusForm";
import { Section, DivInfo, Container, Span } from "../styles/singleView/section";

const Campus = () => {
  const { theCampusId } = useParams();
  const dispatch = useDispatch();


  const campus = useSelector(selectCampus);
  const { name, imageUrl, address, description, students } = campus;

  // function to handle un-assigning students to the campus with this view
  const unregisterStudent = async (student) => {
    await dispatch(unregisterStudentAsync(student))
    dispatch(fetchSingleCampus(theCampusId))
  };

  useEffect(() => {
    dispatch(fetchSingleCampus(theCampusId));
  }, []);

  return (
    <Container>
      <Section>
        <img
          src={imageUrl}
          alt={name}
          style={{ width: 300, height: 300, borderRadius: 50 }}
        />
        <DivInfo>
          <h1>{name}</h1>
          <h4>{address}</h4>
          <EditCampusForm theCampusId={theCampusId} />
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
                  <Span key={student.id}>
                    <li>
                      <Link to={`/students/${student.id}`}>
                        {student.firstName} {student.lastName}
                      </Link>
                    </li>
                    <button
                      onClick={()=>unregisterStudent(student)}
                    >
                      Unregister
                    </button>
                  </Span>
                );
              })
            : "Campus does not have any students :("}
        </ul>
      </div>
    </Container>
  );
};

export default Campus;

