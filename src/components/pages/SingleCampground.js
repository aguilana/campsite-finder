import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import {
  addReviewToCampgroundAsync,
  deleteReviewAsync,
  fetchSingleCampground,
  selectSingleCampground,
} from '../../features/slices/singleCampgroundSlice';
import { Campground, CreateReviewForm } from '../features';
import Fire from '../../assets/images/fire.jpg';

const SingleCampground = () => {
  const { id } = useParams();
  const singleCampground = useSelector(selectSingleCampground);
  console.log(singleCampground);
  const dispatch = useDispatch();

  const [body, setBody] = useState('');
  const [rating, setRating] = useState(null);
  console.log('single campground ln18: ', { body, rating, id: Number(id) });

  useEffect(() => {
    dispatch(fetchSingleCampground(id));
  }, []);

  const handleDelete = ({ singleCampgroundId, reviewId }) => {
    dispatch(deleteReviewAsync({ singleCampgroundId, reviewId }));
  };

  return (
    <div className='relative bg-scroll mt-20 mx-auto pt-4 flex-1 flex justify-center items-center w-full'>
      {/* if there is an Id and singleCampground then show...singleCampground...make separate component for campground? */}
      <img
        className='absolute inset-0 object-cover w-screen h-full z-[-1] filter blur-[6px] opacity-60'
        src={Fire}
        alt='campfire'
      />
      <div className='flex flex-1 justify-between items-center max-w-7xl'>
        {id && singleCampground ? (
          <div className='flex'>
            <div className='flex-1 p-10'>
              {/* single campground card layout... */}
              <Campground />
            </div>
            <div className='flex flex-col flex-1 p-10 bg-gray-700 bg-opacity-70 rounded-xl'>
              <section>
                <CreateReviewForm />
              </section>
              <div className='flex justify-between items-center py-4'>
                <p className='hover:bg-gray-600 rounded-lg max-w-[200px] h-10 flex items-center transition-all ease-in-out duration-500 bg-gray-800'>
                  <Link
                    className='py-1 px-2'
                    to={`/campgrounds/${singleCampground.id}/edit`}
                  >
                    Edit Campground
                  </Link>
                </p>
                <p className='hover:bg-gray-600 rounded-lg max-w-[200px] h-10 flex items-center transition-all ease-in-out duration-500 bg-gray-800'>
                  <Link className='py-1 px-2' to='/campgrounds'>
                    All Campgrounds
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <h1 className='mx-auto text-7xl font-bold'>
            {' '}
            Campground does not exist 😇{' '}
          </h1>
        )}
      </div>
    </div>
  );
};

export default SingleCampground;
