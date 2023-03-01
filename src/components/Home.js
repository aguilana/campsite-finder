import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  fetchAllCampgrounds,
  selectCampgrounds,
} from '../features/slices/campgroundSlice';
import LakeAloha from '../assets/images/lake-aloha.jpg';

const Home = () => {
  const campgrounds = useSelector(selectCampgrounds);
  const dispatch = useDispatch();
  console.log('campgrounds', campgrounds);

  useEffect(() => {
    dispatch(fetchAllCampgrounds());
  }, []);

  return (
    <div className={'relative p-5 bg-scroll flex-1'}>
      <img
        className='absolute inset-0 object-cover w-full h-full z-[-1] filter blur-[1px]'
        src={LakeAloha}
        alt=''
      />
      <div
        className={
          'relative z-10 mt-20 pt-20 h-full w-full text-center flex flex-col gap-10 flex-1 justify-center items-center'
        }
      >
        <h1 className='lg:text-9xl md:text-8xl sm:text-6xl text-5xl font-extrabold p-4 transform-translate-y-full transition duration-1000 ease-in-out'>
          WELCOME
        </h1>
        <Link
          to='/campgrounds'
          className='p-4 lg:text:-7xl md:text-6xl text:5xl bg-[#9e9d9d] bg-opacity-10 hover:bg-opacity-40 hover:scale-105 transition duration-100 ease-in-out rounded-xl'
        >
          ENTER
        </Link>
      </div>
    </div>
  );
};

export default Home;
