import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Purchase = () => {

  const { itemId } = useParams();
  const [item, setItem] = useState({});


  useEffect(() => {
    const url = `https://rocky-plateau-28765.herokuapp.com/purchase/${itemId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setItem(data));
  }, [item])

  const [user, error] = useAuthState(auth);

  const handlePlaceOrder = event => {
    event.preventDefault();

    const order = {
      productName: event.target.product.value,
      email: user.email,
      customerName: user.displayName,
      address: event.target.address.value,
      phoneNumber: event.target.phone.value,
      quantity: event.target.quantity.value, 
      price: event.target.price.value
     
    }

    let error;
    
   if(error){
    error = <p className='text-red-500'><small>{error?.message}</small></p>
}
  // if(order.quantity > item?.availableQuantity || order.quantity < item?.minOrderQuantity){
  //   alert(`avaialable quantity is ${item?.minOrderQuantity}`);
   
  // }

    fetch('https://rocky-plateau-28765.herokuapp.com/order', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })

      .then(res => res.json())
      .then(data => {
        console.log(data);
        toast.success('your Order is completed');
      })

    

  }
  return (
    <div>
      <h2 className='text-3xl font-bold text-violet-500  my-5 '>Your Selected Items</h2>
      <div class="card w-96 bg-base-100 shadow-xl flex">

        <figure><img src={item?.img} alt="tool" /></figure>
        <div class="card-body">
          <h2 class="card-title text-2xl font-bold">{item?.name}</h2>
          <p className="font-bold " >{item.shortDescription}</p>
          <p className="font-bold">Price: $ {item?.price}</p>
          <p className="font-bold">Min Order: {item?.minOrderQuantity}</p>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text font-bold">Available Quantity : {item?.availableQuantity}</span>  
            </label>
          
          </div>

          <form onSubmit={handlePlaceOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-1'>
            <input type="text" name='product' placeholder='Product Name' class="input input-bordered input-red-500 w-full max-w-xs" />
            <input type="text" name='quantity'  placeholder="Quantity" class="input input-bordered w-full max-w-xs" />
            <input type="text" name='price'  placeholder="Price" class="input input-bordered w-full max-w-xs" />
            <input type="text" name='name' value={user?.displayName || ''} disabled class="input input-bordered input-red-500 w-full max-w-xs" />
            <input type="email" name='email' value={user?.email || ''} disabled class="input input-bordered input-red-500 w-full max-w-xs" />
            <input type="text" name='address' placeholder="Your Address" class="input input-bordered input-red-500 w-full max-w-xs" />
            <input type="text" name='phone' placeholder="Phone Number" class="input input-bordered input-red-500 w-full max-w-xs" />
            <input disabled={ error.quantity?.type === 'max' || error.quantity?.type === 'min'} type="submit" value='Place Order' class=" btn btn-success w-full max-w-xs" />
            {error}
          </form>

        </div>
      </div>
    </div>
  );
};

export default Purchase;

