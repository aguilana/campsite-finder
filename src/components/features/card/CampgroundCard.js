import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  fetchAllCampgrounds,
  selectCampgrounds,
  deleteCampgroundAsync,
} from '../../../features/slices/campgroundSlice';

const CampgroundCard = () => {
  const campgrounds = useSelector(selectCampgrounds);
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAllCampgrounds());
  }, []);

  const handleDelete = (id) => {
    alert('Deleting campground');
    dispatch(deleteCampgroundAsync(id));
    // navigate('/campgrounds');
  };

  return (
    <ul className='flex flex-wrap px-20 py-10'>
      {campgrounds && campgrounds.length
        ? campgrounds.map((campground) => {
            return (
              <li
                key={campground.id}
                className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2'
              >
                <div
                  onClick={() => navigate(`/campgrounds/${campground.id}`)}
                  className='bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:opacity-90'
                >
                  <img
                    src={campground.imageUrl}
                    alt={campground.name}
                    className='w-full h-40 md:h-48 lg:h-56 xl:h-64 object-cover'
                  />
                  <div className='p-4 flex-grow:1'>
                    <h3 className=' text-gray-700 font-bold pb-2'>
                      {campground.name}{' '}
                    </h3>
                    <p className='text-gray-700 pb-2 text-lg xl:text-sm lg:text-sm md:text-sm sm:text-sm'>
                      {campground.location}
                    </p>
                    <p className='text-gray-700 font-bold'>
                      ${campground.price}/night
                    </p>
                  </div>
                </div>
                {!isAdmin && (
                  <div className='w-full text-center justify-center py-2'>
                    <button
                      onClick={() => handleDelete(campground.id)}
                      className='text-gray-700 bg-opacity-70 rounded-md hover:opacity-50 bg-red-500 p-2'
                    >
                      Delete
                    </button>
                  </div>
                )}
              </li>
            );
          })
        : null}
    </ul>
  );
};

export default CampgroundCard;
