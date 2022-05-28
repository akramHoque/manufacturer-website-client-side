import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Engineer from './Engineer';
import Summery from './Summery';
import Tools from './Tools';

const Home = () => {
  return (
    <div>
      <h2 className='text-center text-5xl text-orange-700 py-5 my-5'>Zenith Manufacturing Company</h2>
     <Banner></Banner>
     <Tools></Tools>
     <Engineer></Engineer>
     <Summery></Summery>
     <Contact></Contact>
   

    </div>
  );
};

export default Home;