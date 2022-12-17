import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchSingleCampus,
  selectCampus,
  unregisterStudentAsync,
} from "../features/CampusSlice";
import { Link } from "react-router-dom";
import EditCampusForm from "./EditCampusForm";
import {
  Section,
  DivInfo,
  Container,
  Span,
} from "../styles/singleView/section";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const Campus = () => {
  const { theCampusId } = useParams();
  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState(false);
  const [btnText, setBtnText] = useState("Edit Campus");

  const campus = useSelector(selectCampus);
  const { name, imageUrl, address, description, students } = campus;

  // function to handle un-assigning students to the campus with this view
  const unregisterStudent = async (student) => {
    alert(`${student.firstName} is now unregistered`);
    await dispatch(unregisterStudentAsync(student));
    dispatch(fetchSingleCampus(theCampusId));
  };

  // handleClick for collapsable form
  const handleClick = () => {
    if (showForm === false) {
      setShowForm(!showForm);
      setBtnText("Collapse");
    } else {
      setShowForm(!showForm);
      setBtnText("Edit Campus");
    }
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
          <Button
            variant="contained"
            style={{ width: 300, alignSelf: "center" }}
            onClick={handleClick}
          >
            {btnText}
          </Button>
          {showForm ? <EditCampusForm theCampusId={theCampusId} /> : ""}
        </DivInfo>
      </Section>
      <section>
        <h4>Campus Information: </h4>
        <p>{description}</p>
      </section>
      <div>
        <h3>Enrollees: </h3>
        <ul>
          {students && students.length
            ? students.map((student) => {
                return (
                  <Span key={student.id} style={{ width: 400 }}>
                    <li>
                      <Link
                        style={{ fontSize: 20 }}
                        to={`/students/${student.id}`}
                      >
                        {student.firstName} {student.lastName}
                      </Link>
                    </li>
                    <Button
                      onClick={() => unregisterStudent(student)}
                      variant="contained"
                      startIcon={<DeleteIcon />}
                    >
                      Unregister
                    </Button>
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
