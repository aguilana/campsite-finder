import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCampuses, selectCampuses } from "../features/CampusesSlice";

const Campuses = () => {
  const dispatch = useDispatch();
  const campuses = useSelector(selectCampuses);
  console.log(campuses);
  const { id, name, imageUrl, address, description } = campuses

  useEffect(() => {
    dispatch(fetchAllCampuses());
  }, [dispatch]);

  return (
    <div>
      <h1>CAMPUS COMPONENT</h1>
      <ul>
        {campuses
          ? campuses.map((campus) => {
              return (
                <li key={campus.id}>
                    <img src={campus.imageUrl} alt={campus.name} />
                    <div>
                    <h3>{campus.name}</h3>
                    <h4>{campus.address}</h4>
                    <p>{campus.description}</p>
                    </div>

                </li>
              )
            })
          : "Oops...no campuses listed"}
      </ul>
    </div>
  );
};

export default Campuses;
