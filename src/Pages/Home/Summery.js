import React from 'react';
import img1 from '../../assets/icon/pc.png'
import img2 from '../../assets/icon/flag.png'
import img3 from '../../assets/icon/users.png'
const Summery = () => {
  return (
    <div>
      <h2 className='text-4xl text-orange-700 text-center uppercase my-5 py-5'>Business Summery</h2>
      <div className="w-100 flex gap-5  bg-stone-200 shadow-xl">
      
      <div className='gap-5 my-10 py-10'>
         <h3 className='text-2xl m-5 p-5  uppercase  text-blue-500'>Our Customers</h3>
          <div className="flex items-center">
              <div className="avatar">
                  <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                      <img src={img1} alt="img" />
                  </div>
              </div>
              <div>
                  <h4 className='text-2xl font-bold text-gray-500'>100+ Customers</h4> 
              </div>
          </div>
      </div>
      <div className='gap-5 my-10 py-10'>
          <h3 className='text-2xl m-5 p-5  uppercase text-violet-500'> Tools</h3>
          <div className="flex items-center ">
              <div className="avatar">
                  <div className="w-12 rounded-full ring ring-secondary mx-2 ring-offset-base-100 mr-5">
                  <img src={img2} alt="img" />
                  </div>
              </div>
              <div>
                  <h4 className='text-2xl font-bold text-orange-500'>50+ Tools</h4>
              </div>
          </div>
      </div>
      <div className='gap-5 my-10 py-10'>
          <h3 className='text-2xl m-5 p-5  uppercase text-fuchsia-400'>Reviews</h3>
          <div className="flex items-center">
              <div className="avatar">
                  <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                  <img src={img3} alt="img" />
                  </div>
              </div>
              <div>
                  <h4 className='text-2xl font-bold text-sky-500'>100+ reviews</h4>
                  
              </div>
          </div>
      </div>
      
  </div>
    </div>

  );
};

export default Summery;