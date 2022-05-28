import React, { useState } from 'react';

const AddReview = () => {
  const addReview = event => {
    event.preventDefault();

    const rating = event.target.rating.value;
    const comment = event.target.comment.value;
    console.log(rating, comment);
  }
  return (
    <div>
      <h2 className='text-center text-xl text-slate-500'>Add Review </h2>
      <form onSubmit={addReview} className='grid grid-cols-1 gap-3 justify-items-center mt-1'>
            <input type="text" name='rating' placeholder='Your ratings' class="input input-bordered input-red-500 w-full max-w-xs" />
            <textarea name="comment" id="" cols="30" rows="10" placeholder='write here...'></textarea>
            <input  type="submit" value='Add Review' class=" btn btn-success w-full max-w-xs" />
          </form>
    </div>
  );
};

export default AddReview ;