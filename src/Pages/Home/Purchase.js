import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Purchase = () => {
  
  const { itemId } = useParams();
  const [item, setItem] = useState({});
 
  useEffect(() => {
    const url = `http://localhost:5000/purchase/${itemId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => setItem(data));
}, [item])

const [user, loading, error] = useAuthState(auth);

const handlePlaceOrder = event =>{
  event.preventDefault();
  console.log('submit')
  const order = {
    productName: event.target.product.value,
    order: event.target.order.value,
    email: user.email,
    customerName: user.displayName,
    address: event.target.address.value,
    phoneNumber: event.target.phone.value

  }
  console.log(order);
}
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

       <form onSubmit={handlePlaceOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-1'>
       <input type="text" name='product' placeholder='Product Name'  class="input input-bordered input-red-500 w-full max-w-xs" />
       <input type="text" name='order' placeholder='Order' class="input input-bordered input-red-500 w-full max-w-xs" />
       <input type="text" name='name' value={user?.displayName || ''} disabled class="input input-bordered input-red-500 w-full max-w-xs" />
       <input type="email" name='email' value={user?.email || ''}  disabled class="input input-bordered input-red-500 w-full max-w-xs" />
       <input type="text" name='address' placeholder="Your Address" class="input input-bordered input-red-500 w-full max-w-xs" />
       <input type="text" name='phone' placeholder="Phone Number" class="input input-bordered input-red-500 w-full max-w-xs" />
       <input type="submit" value='Submit' class=" btn btn-success w-full max-w-xs" />
       </form>
       
     </div>
   </div>
    </div>
  );
};

export default Purchase;