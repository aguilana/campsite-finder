import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  fetchSingleCampground,
  selectSingleCampground,
} from '../../../features/slices/singleCampgroundSlice';

const Campground = () => {
  const { id } = useParams();
  const singleCampground = useSelector(selectSingleCampground);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleCampground(id));
  }, []);

  return (
    <>
      <h1>Welcome to {singleCampground.name}</h1>
      <img
        className='rounded-xl'
        src={singleCampground.imageUrl}
        alt={singleCampground.name}
      />
      <p>Located in {singleCampground.location}</p>
      <h3>Price: ${singleCampground.price}</h3>
      <div>
        <h5>Description: </h5>
        <p>{singleCampground.description}</p>
      </div>
    </>
  );
};

export default Campground;
