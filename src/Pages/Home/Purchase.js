import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
  
  const { itemId } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/purchase/${itemId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => setItem(data));
}, [item])
  return (
    <div>
      <h2 className='text-3xl font-bold text-violet-500  my-5 '>Your Selected Items</h2>
      <div class="card w-96 bg-base-100 shadow-xl flex">
     
     <figure><img src={item?.img}alt="tool" /></figure>
     <div class="card-body">
       <h2 class="card-title text-2xl font-bold">{item?.name}</h2>
       <p className="font-bold " >{item.shortDescription}</p>
       <p className="font-bold">Price: $ {item?.price}</p>
       <p className="font-bold">Available: {item?.availableQuantity}</p>
       <p className="font-bold">Min Order: {item?.minOrderQuantity}</p>
     </div>
   </div>
    </div>
  );
};

export default Purchase;