import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCampuses, selectCampuses } from "../features/CampusesSlice";
import { Link } from "react-router-dom";

const Campuses = () => {
  const dispatch = useDispatch();
  const campuses = useSelector(selectCampuses);
  console.log(campuses);

  useEffect(() => {
    dispatch(fetchAllCampuses());
  }, [dispatch]);

  return (
    <>
      <h1>CAMPUS COMPONENT</h1>
      <ul>
        {campuses
          ? campuses.map((campus) => {
              return (
                <li>
                  <img
                    src={campus.imageUrl}
                    alt={campus.name}
                    style={{ width: 250, height: 250 }}
                  />
                  <div>
                    <Link to={`/campuses/${campus.id}`} key={campus.id}>
                      <h3>{campus.name}</h3>
                    </Link>
                    <h4>{campus.address}</h4>
                    <p>{campus.description}</p>
                  </div>
                </li>
              );
            })
          : "Oops...no campuses listed"}
      </ul>
    </>
  );
};

export default Campuses;
