import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleCampus, selectCampus } from "../features/CampusSlice";

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
    <div>
      <h1>{name}</h1>
      <img src={imageUrl} alt={name} />
      <h4>{address}</h4>
      <p>{description}</p>
      <div>
        <h3>List of attending students</h3>
        <ul>
          {students && students.length
            ? students.map((student) => {
                return (
                  <li>
                    {student.firstName} {student.lastName}
                  </li>
                );
              })
            : "Campus does not have any students :("}
        </ul>
      </div>
    </div>
  );
};

export default Campus;
