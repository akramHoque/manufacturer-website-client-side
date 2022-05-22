import React from 'react';
import sleepy from '../assets/sleep/sleep.jfif'

const NotFound = () => {
  return (
    <div>
      <h2 className = 'text-4xl text-center text-red-500 my-5'>Page Not Found</h2>
     <div className='flex items-center justify-center'>
     <img  src={sleepy} alt="" />
     </div>
     
    </div>
  );
};

export default NotFound;