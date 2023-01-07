import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// redux store single campground slice
export const fetchSingleCampground = createAsyncThunk(
  "campground/fetchSingle",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/campgrounds/${id}`);
      // data comes from the response object of axios

      return data;
    } catch (err) {
      // log amy errors that occur
      console.log("error: ", err);
    }
  }
);

// redux store adding review to a single campground slice
export const addReviewToCampgroundAsync = createAsyncThunk(
  "campground/addReview",
  // async takes a body, rating and id which will be used in the 2nd param of post request
  async ({ body, rating, id }) => {
    try {
      const { data } = await axios.post(`/api/campgrounds/${id}/reviews`, {
        body,
        rating,
        campgroundId: id,
      });

      // second params include an object with {body: body, rating: rating, campgroundId: id} to be passed to express
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

// delete a review (redux store) in single campground
export const deleteReviewAsync = createAsyncThunk(
  "campground/deleteReview",

  // takes object with singleCampground and reviewId to be passed as the values in the delete request.
  async ({ singleCampgroundId, reviewId }) => {
    try {
      const { data } = await axios.delete(
        `/api/campgrounds/${singleCampgroundId}/reviews/${reviewId}`
      );
      // data is the response.data from the delete request
        console.log("data from delete: ", data)
      return data;
      // data returned to the store

    } catch (err) {
      console.log(err);
    }
  }
);

// EDIT single campground from the single campground page
export const editSingleCampgroundAsync = createAsyncThunk(
  "campground/editCampground",

  async ({ id, name, price, description, location, imageUrl }) => {
    // takes an object with id, name, price, description, location and imageUrl
    try {
      // alters data with the put request calling the same endpoint from express
      const { data } = await axios.put(`/api/campgrounds/${id}/edit`, {
        name,
        price,
        description,
        location,
        imageUrl,
      });

      // new data returned to the redux store
      return data;
    } catch (err) {
      console.log("error: ", err)
    }
  }
);

// initial state of the redux store (an object with properties)
const initialState = {
  campsite: {},
  loading: false,
  error: null,
};

// CAMPGROUND SLICE TO manage the DATA from the store
export const singleCampgroundSlice = createSlice({
  // name of the slice/store
  name: "campground",
  initialState,
  extraReducers: (builder) => {
    // case for the fetching of single campground
    builder.addCase(fetchSingleCampground.fulfilled, (state, { payload }) => {
      // action.load will be the state.campsite
      state.campsite = payload;
    });
    builder.addCase(
      // managing reviews in the campsite
      addReviewToCampgroundAsync.fulfilled,
      (state, { payload }) => {
        // simply pushing the review to the reviews array in the  single campsite model
        state.campsite.reviews.push(payload);
      }
    );
    builder.addCase(deleteReviewAsync.fulfilled, (state, { payload }) => {
      console.log("payload of delete: ", payload)
      // altering the state of reviews via filtering out the data of the payload. Payload is the deleted item.
      state.campsite.reviews = state.campsite.reviews.filter(
        // filtering the review array with ONLY the items that don't contain the payload id - the deleted review.
        (review) => review.id !== payload.id
      );
    });
  },
});

// exporting the campground stores state
export const selectSingleCampground = (state) => {
  console.log("state: ", state);
  return state.campground.campsite;
};

export default singleCampgroundSlice.reducer;
