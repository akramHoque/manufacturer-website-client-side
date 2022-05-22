import React from 'react';
import sleepy from '../assets/sleep/sleep.jfif'

const NotFound = () => {
  return (
    <div>
      <h2 className = 'text-4xl text-center text-red-500 my-5'>Page Not Found</h2>
      <img className='items-center' src={sleepy} alt="" />
     

    </div>
  );
};

export default NotFound;