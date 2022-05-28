import React from 'react';
import {  useNavigate } from 'react-router-dom';;


const Tool = ({tool}) => {
  const {_id, name ,img, shortDescription,minOrderQuantity, availableQuantity,price} = tool;
  const navigate = useNavigate();

  const handlePurchase = id =>{
    navigate(`/purchase/${id}`)
   
  }

  
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
    <div class="card-body text-center">
      <img src={img} alt="" />
      <h2 class="card-title text-xl font-bold text-warning uppercase">{name}</h2>
      <p>{shortDescription}</p>
      <p className='text-gray-700'>Min Order Quantity: {minOrderQuantity}</p>
      <p  className='text-gray-700 '>Available Quantity: {availableQuantity}</p>
      <p className='text-red-500 font-bold'>Price: ${price}</p>
      <div className="card-actions justify-center">
        
                   <button
                    className='btn btn-accent text-white uppercase' 
                   onClick={() => handlePurchase(_id)
    
                  }
                   > 
                   Buy Now</button>
                </div>
    </div>
  
  </div>
  );
};

export default Tool;