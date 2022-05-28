import React from 'react';

const Contact = () => {
  return (
    <div style={{
    
  }} className='bg-slate-400 px-10 py-14 my-10 '>
    <div className='text-center pb-14 text-white'>
      <p className='text-2xl font-bold text-red-500'>
        Contact Us
      </p>
      <h1 className='text-4xl'>Stay connected with us</h1>
    </div>
    <div className='grid grid-cols-1 justify-items-center gap-5'>
      <input
        type='text'
        placeholder='Email Address'
        className='input w-full max-w-md'
      />
      <input
        type='text'
        placeholder='Subject'
        className='input w-full max-w-md'
      />
      <textarea
        className='textarea w-full max-w-md'
        placeholder='Your message'
        rows={6}
      ></textarea>
     <button class="btn btn-active rounded text-orange-500">Contact</button>
    </div>
  </div>
  );
};

export default Contact;