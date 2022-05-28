import React from 'react';
 import drill from '../../assets/banner/drill.jpg';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
   
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={drill} className="max-w-sm rounded-lg shadow-2xl" alt='dril'/>
                <div>
                    <h1 className="text-4xl uppercase font-bold"><span className='text-blue-900'>We Are Expert  </span> <span className='text-orange-500'>in all professional works</span></h1>
                    <p className="py-6">Zenith company build a historical marketplace in online marketing system. Our items is <span className='text-blue-900 bg-gray-200'> more efficient accurate and flexible</span></p>
                <PrimaryButton>Get Started</PrimaryButton>
                </div>

            </div>
        </div>
    );
};

export default Banner;