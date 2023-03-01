import React from 'react';
import { Link } from 'react-router-dom';

const EditAndAllCampgrounds = ({ singleCampground }) => {
  console.log('singleCampground ln 6: ', singleCampground);
  const campgroundId = parseInt(singleCampground.id);
  console.log('campgroundId ln 8: ', campgroundId);
  console.log('singleCampground.id ln 9: ', singleCampground.id);
  console.log('typeof singleCampground.id ln 10: ', typeof singleCampground.id);
  console.log('typeof campgroundId ln 11: ', typeof campgroundId);
  return (
    <div className='flex justify-between items-center py-4'>
      <p className='hover:bg-gray-600 rounded-lg max-w-[200px] h-10 flex items-center transition-all ease-in-out duration-500 bg-gray-800'>
        <Link className='py-1 px-2' to={`/campgrounds/${campgroundId}/edit`}>
          Edit Campground
        </Link>
      </p>
      <p className='hover:bg-gray-600 rounded-lg max-w-[200px] h-10 flex items-center transition-all ease-in-out duration-500 bg-gray-800'>
        <Link className='py-1 px-2' to='/campgrounds'>
          All Campgrounds
        </Link>
      </p>
    </div>
  );
};

export default EditAndAllCampgrounds;
