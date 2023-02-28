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
    <div className='bg-[#f6f6f6a7] rounded-md text-black p-4'>
      <h3>{numStars(review.rating)}</h3>
      <div>{review.body}</div>

      <button
        className='text-gray-700 bg-opacity-70 rounded-md hover:opacity-50 bg-red-500 p-2 hover:text-gray-900'
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
  );
};

export default ReviewCard;
