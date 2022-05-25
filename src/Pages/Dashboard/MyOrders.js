import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
  const [order, setOrder] = useState([]);
  const [user] = useAuthState(auth);
 
useEffect(() =>{
 if(user){
  fetch(`http://localhost:5000/order?email=${user.email}`)
  .then(res => res.json())
  .then(data => setOrder(data))
 }
}, [user])

  return (
    <div>
      <h2 className='text-xl text-red-500 font-semibold'> Orders : {order.length}</h2>
      <div class="overflow-x-auto">
  <table class="table table-zebra w-full">
    <thead>
      <tr>
        <th></th>
        <th>User Name</th>
        <th>Products Name</th>
        <th>Quantity</th>
        <th>Phone</th>
        <th>Cancel</th>
      </tr>
    </thead>
    <tbody>
     {
       order.map((item, index) => <tr>
        <th>{index + 1}</th>
        <td>{item?.customerName}</td>
        <td>{item?.productName}</td>
        <td>{item?.quantity}</td>
        <td>{item?.phoneNumber}</td>
        <td><button class="btn btn-xs">X</button></td>
      </tr>)
     }
      
    </tbody>
  </table>

 
</div>


    </div>
  );
};

export default MyOrders;