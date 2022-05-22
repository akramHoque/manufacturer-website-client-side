import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
  
  const { itemId } = useParams();
  const [item, setItem] = useState({});
  console.log(item);
  useEffect(() => {
    const url = `http://localhost:5000/purchase/${itemId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => setItem(data));
}, [item])
  return (
    <div>
      <h2 className='text-3xl font-bold text-violet-500 text-center my-5 '>Your Selected Items</h2>
      <div class="card w-96 bg-base-100 shadow-xl">
     
     <figure><img src={item?.img}alt="tool" /></figure>
     <div class="card-body">
       <h2 class="card-title">{item?.name}</h2>
       <p>{item.shortDescription}</p>
       <p>Price: $ {item?.price}</p>
       <p>Available: {item?.availableQuantity}</p>
       <p>Min Order: {item?.minOrderQuantity}</p>
     </div>
   </div>
    </div>
  );
};

export default Purchase;