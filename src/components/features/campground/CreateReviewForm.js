import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  addReviewToCampgroundAsync,
  deleteReviewAsync,
  selectSingleCampground,
} from '../../../features/slices/singleCampgroundSlice';
import { TextField, Button, Slider, Typography } from '@mui/material';
import { ReviewCard } from '../index';

const marks = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
];

const CreateReviewForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleCampground = useSelector(selectSingleCampground);

  const [body, setBody] = useState('');
  const [rating, setRating] = useState(3);
  const [charCount, setCharCount] = useState(0);
  const MAX_CHAR_COUNT = 500;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // send post request to /api/campgrounds/:id
    if (body == '' || rating == null) {
      alert('fill out appropriate fields to leave a review');
    } else {
      await dispatch(
        addReviewToCampgroundAsync({ body, rating, id: parseInt(id) })
      );
      setRating(3);
      setBody('');
      setCharCount(0);
    }
  };

  const handleBodyChange = (e) => {
    const input = e.target.value;
    if (input.length <= MAX_CHAR_COUNT) {
      setBody(input);
      setCharCount(input.length);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'rating') setRating(Number(e.target.value));
  };

  const handleDelete = ({ singleCampgroundId, reviewId }) => {
    dispatch(deleteReviewAsync({ singleCampgroundId, reviewId }));
  };

  return (
    <div>
      {/* single component for REVIEWS FORM */}
      <form onSubmit={handleSubmit}>
        <div>
          <Typography gutterBottom>Rating</Typography>
          <Slider
            defaultValue={3}
            value={rating}
            onChange={handleChange}
            name='rating'
            aria-label='Rating'
            step={1}
            marks={marks}
            min={1}
            max={5}
            valueLabelDisplay='auto'
            sx={{
              color: 'green',
              '& .MuiSlider-markLabel': {
                color: '#f7f7f7',
              },
            }}
          />
        </div>
        <div className='pb-4'>
          <TextField
            label='Leave a Review'
            value={body}
            onChange={handleBodyChange}
            name='review'
            variant='filled'
            color='success'
            multiline
            // maxRows={10}
            fullWidth
            inputProps={{
              style: { color: '#f7f7f7' },
            }}
            InputLabelProps={{
              style: { color: '#f7f7f7' },
            }}
          />
          <p className='text-sm text-right mt-1'>
            {charCount} / 500 characters
          </p>
          <div className='pt-4'>
            <Button variant='contained' color='success' type='submit'>
              Leave Review
            </Button>
          </div>
        </div>
      </form>
      <section className='py-4'>
        <h5 className='text-3xl p-1'>
          Reviews
          <span>
            (
            {singleCampground.reviews && singleCampground.reviews.length
              ? singleCampground.reviews.length
              : 0}
            )
          </span>
        </h5>
      </section>
      <ol
        className={`max-h-[400px] w-100 flex flex-col gap-4 ${
          singleCampground?.reviews?.length > 0 && 'overflow-y-scroll'
        } pr-4`}
      >
        {singleCampground.reviews && singleCampground.reviews.length ? (
          singleCampground.reviews.map((review) => {
            return (
              <ReviewCard
                key={review.id}
                review={review}
                singleCampground={singleCampground}
                handleDelete={handleDelete}
              />
            );
          })
        ) : (
          <p>No Reviews</p>
        )}
      </ol>
    </div>
  );
};

export default CreateReviewForm;
