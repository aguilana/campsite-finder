import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  fetchAllCampgrounds,
  selectCampgrounds,
  deleteCampgroundAsync,
} from '../../features/slices/campgroundSlice';
import Fire from '../../assets/images/fire.jpg';
import { CampgroundCard } from '../features';
import { Pagination } from '@mui/material';

const Campgrounds = () => {
  const campgrounds = useSelector(selectCampgrounds);
  const dispatch = useDispatch();
  // state to keep track of the current page
  const [currentPage, setCurrentPage] = useState(1);
  // state to keep track of the number of items per page
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    dispatch(fetchAllCampgrounds());
  }, []);

  // calculate the index of the last campground to display on the current page
  const indexOfLastCampground = currentPage * itemsPerPage;
  // calculate the index of the first campground to display on the current page
  const indexOfFirstCampground = indexOfLastCampground - itemsPerPage;
  // slice the array of campgrounds to display the current page
  const currentCampgrounds = campgrounds.slice(
    indexOfFirstCampground, // index of the first campground to display
    indexOfLastCampground // index of the last campground to display
  );

  // handle page change
  const handlePageChange = (e, page) => {
    setCurrentPage(page);
  };

  return (
    <div className='relative bg-scroll mx-auto pt-4 flex-1 flex justify-center items-center w-full'>
      <img
        className='absolute inset-0 object-cover w-screen h-full z-[-1] filter blur-[6px] opacity-60'
        src={Fire}
        alt='mountains and lake'
      />
      <div className='mt-20 flex flex-col justify-center items-center w-full'>
        <div className='flex flex-col md:flex items-center justify-center py-4 md:px-10 px-7 max-w-6xl mx-auto gap-3'>
          <div className='border-b'>
            <h1 className='text-4xl'>All Campgrounds ({campgrounds.length})</h1>
          </div>
          <section>
            <Link to='/campgrounds/create'>Add Campground</Link>
          </section>
        </div>
        <Pagination
          count={Math.ceil(campgrounds.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color='success'
          className='my-4'
          sx={{
            color: 'green',
            '& .MuiPagination-ul': {
              color: '#f7f7f7',
            },
            '& .MuiPaginationItem-root': {
              color: '#f5f5f5',
            },
          }}
        />
        <CampgroundCard campgrounds={currentCampgrounds} />
      </div>
    </div>
  );
};

export default Campgrounds;
