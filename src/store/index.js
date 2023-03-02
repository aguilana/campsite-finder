import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import campgroundReducer from '../features/slices/campgroundSlice';
import singleCampgroundReducer from '../features/slices/singleCampgroundSlice';
import authReducer from '../features/auth/authSlice';

const store = configureStore({
  // reducer is an object that contains all the reducers for the app (one reducer per slice)
  reducer: {
    auth: authReducer,
    campgrounds: campgroundReducer,
    campground: singleCampgroundReducer,
  },
  // middleware is an array of functions that can modify the actions before they reach the reducers
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
