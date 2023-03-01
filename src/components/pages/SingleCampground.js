import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import {
  deleteReviewAsync,
  fetchSingleCampground,
  selectSingleCampground,
} from '../../features/slices/singleCampgroundSlice';
import {
  Campground,
  CreateReviewForm,
  EditAndAllCampgrounds,
} from '../features';
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
    <div className='relative bg-scroll mx-auto pt-4 flex-1 flex justify-center items-center w-full'>
      {/* if there is an Id and singleCampground then show...singleCampground...make separate component for campground? */}
      <img
        className='absolute inset-0 object-cover w-screen h-full z-[-1] filter blur-[6px] opacity-60'
        src={Fire}
        alt='campfire'
      />
      <div className='flex flex-1 justify-between items-center max-w-7xl mt-20 '>
        {id && singleCampground ? (
          <div className='flex gap-4'>
            <div className='flex-1 p-10 bg-gray-700 bg-opacity-70 rounded-xl'>
              {/* single campground card layout... */}
              <Campground />
            </div>
            <div className='flex flex-col flex-1 justify-between p-10 bg-gray-700 bg-opacity-70 rounded-xl overflow-auto'>
              <section className=''>
                <CreateReviewForm />
              </section>
              <EditAndAllCampgrounds
                singleCampground={singleCampground}
                id={id}
              />
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
