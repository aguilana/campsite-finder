import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllStudents, selectStudents } from "../features/StudentsSlice";

const Students = () => {
  const dispatch = useDispatch();

  const students = useSelector(selectStudents);

  useEffect(() => {
    dispatch(fetchAllStudents());
  }, [dispatch]);

  return (
    <>
      <h1>All Students</h1>
      <ul>
        {students
          ? students.map((student) => {
              return (
                <li>
                  <img
                    src={student.imageUrl}
                    alt={`This is a picture student ${student.firstName} who currently attends ${student.campus.name}`}
                    style={{ width: 250, height: 250 }}
                  />
                  <div>
                    <span>
                      <h3>
                        {student.firstName} {student.lastName}
                      </h3>
                    </span>
                  </div>
                </li>
              );
            })
          : "no students to display"}
      </ul>
    </>
  );
};

export default Students;
