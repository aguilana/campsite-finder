import React from 'react';

const ReviewCard = ({ review, handleDelete, singleCampground }) => {
  function numStars(rating) {
    let stars = '';
    for (let i = 0; i < rating; i++) {
      stars += '⭐';
    }
    return stars;
  }

  return (
    <div className='flex justify-between bg-[#f6f6f6a7] rounded-md text-black p-3'>
      <div className='pr-2'>
        <h3>{numStars(review.rating)}</h3>
        <div>{review.body}</div>
      </div>
      <div className='flex justify-center items-center pl-2'>
        <button
          className='text-gray-700 bg-opacity-70 rounded-md hover:opacity-80 hover:text-red-900'
          onClick={() =>
            handleDelete({
              singleCampgroundId: singleCampground.id,
              reviewId: review.id,
            })
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
