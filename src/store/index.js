import { configureStore } from '@reduxjs/toolkit';
import campgroundReducer from '../features/slices/campgroundSlice';
import singleCampgroundReducer from '../features/slices/singleCampgroundSlice';
import authReducer from '../features/auth/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    campgrounds: campgroundReducer,
    campground: singleCampgroundReducer,
  },
});

export default store;
