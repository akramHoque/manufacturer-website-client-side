import React from 'react';
import img from '../../assets/Enginner/enginner.png'
const Engineer = () => {
  return (
    <div class="hero min-h-screen">
    <div class="hero-content flex-col  lg:flex-row-reverse">
      <img src={img} class="max-w-sm rounded-lg shadow-2xl " alt='1' />
      <div className='bg-stone-400 p-5'>
        <h1 class="text-4xl font-bold text-orange-600  uppercase ">Why We are Best in manufacturing!</h1>
        <p class="py-6 text-white">The Zenith comapany is the best manufacturing comapny in suoth indian state. We belive good Production, safty, simplicity of product.</p>
        <button class="btn btn-seondary rounded-none text-orange-500">Get Started</button>
      </div>
    </div>
  </div>
  );
};

export default Engineer;