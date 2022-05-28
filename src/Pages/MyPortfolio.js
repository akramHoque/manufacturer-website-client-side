import React from 'react';

const MyPortfolio = () => {
  return (
    <div className='p-5 my-3'>
      <h2 className='text-4xl text-red-700 text-center'>My Portfolio</h2>
      <h5 className=' text-xl  text-center'>Name: Md Akramul Hoque</h5>
      <p className='text-center'>Email: oriniusakram511@gmail.com</p>
      <br />
      <br />
      <p className='bg-slate-300'>Educational Background:</p>
      <p>I am Md. Akramul Hoque. I am a student. I have passed my SSC from Feni kamil maddrasha and HSC form Milestone College, Uttara Dhaka, and BSc. in CSE from Feni University, feni, Bangladesh. After completing my graduation i have motived by programming hero and i want to build technological skilled with PHero team. So I enrolled this course. </p>
      <br />
      <br />
      <p className='bg-slate-300'>List of technologies as a web developer:</p>
     <ol>
       <li>HTML</li>
       <li>CSS</li>
       <li>Javascript</li>
       <li>React</li>
       <li>Mongo DB</li>
       <li>Nodejs</li>
       <li>Firebase, and so on...</li>
     </ol>
     <br />
     <br />

     <p className='bg-slate-300'>Live Website Link (3)</p>
     <ol>
       <li>https://assignment-12-53a87.firebaseapp.com/</li>
       <li>https://assignment-11-20be0.web.app/</li>
       <li>https://assignment-10-gym-trainer.firebaseapp.com/</li>
       </ol>
    </div>
  );
};

export default MyPortfolio;