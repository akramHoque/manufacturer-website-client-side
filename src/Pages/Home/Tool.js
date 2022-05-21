import React from 'react';

const Tool = ({tool}) => {
  const {name ,img, shortDescription,minOrderQuantity, availableQuantity,price} = tool;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
    <div class="card-body text-center">
      <img src={tool.img} alt="" />
      <h2 class="card-title text-xl font-bold text-warning uppercase">{tool.name}</h2>
      <p>{tool.shortDescription}</p>
      <p>Min Order Quantity: {tool.minOrderQuantity}</p>
      <p>Available Quantity: {tool.availableQuantity}</p>
      <p className='text-warning'>Price: ${tool.price}</p>
      <div className="card-actions justify-center">
                    <button
                    ></button>
                    <label htmlFor="booking-modal"
                        className="btn btn-sm btn-secondary text-white bg-gradient-to-r from-secondary to-primary  uppercase">Buy Now
                        </label>
                </div>
    </div>
  </div>
  );
};

export default Tool;