import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  fetchAllCampgrounds,
  selectCampgrounds,
  deleteCampgroundAsync,
} from '../../features/slices/campgroundSlice';

import { CampgroundCard } from '../features';

const Campgrounds = () => {
  const campgrounds = useSelector(selectCampgrounds);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCampgrounds());
  }, []);

  return (
    <div className='mt-20'>
      <div className='flex flex-col md:flex items-center justify-center py-4 md:px-10 px-7 max-w-6xl mx-auto gap-3'>
        <div className='border-b'>
          <h1 className='text-4xl'>All Campgrounds ({campgrounds.length})</h1>
        </div>
        <section>
          <Link to='/campgrounds/create'>Add Campground</Link>
        </section>
      </div>
      <CampgroundCard />
    </div>
  );
};

export default Campgrounds;
