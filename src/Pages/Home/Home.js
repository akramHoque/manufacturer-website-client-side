import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Contact from './Contact';
import Engineer from './Engineer';
import Summery from './Summery';
import Tools from './Tools';

const Home = () => {
  return (
    <div>
     <Banner></Banner>
     <Tools></Tools>
     <Engineer></Engineer>
     <Summery></Summery>
     <Contact></Contact>
   

    </div>
  );
};

export default Home;