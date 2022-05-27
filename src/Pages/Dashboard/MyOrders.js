import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyOrders = () => {
  const [order, setOrder] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate() ;
 
useEffect(() =>{
 if(user){
  fetch(`http://localhost:5000/order?email=${user.email}`,{
    method: 'GET',
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
  }
  
  
  
  
  )
  .then(res =>{
   
    if(res.status === 401 ||  res.status === 403 ){
      signOut(auth);
      localStorage.removeItem('accessToken') ;
        navigate('/') ;
    }
   
   return  res.json()
    })
  .then(data => {
    setOrder(data)
  
  })
 }
}, [user])

  return (
    <div>
      <h2 className='text-xl text-red-500 font-semibold'> Orders : {order?.length}</h2>
      <div class="overflow-x-auto">
  <table class="table table-zebra w-full">
    <thead>
      <tr>
        <th></th>
        <th>User Name</th>
        <th>Products Name</th>
        <th>Quantity</th>
        <th>Payment</th>
        <th>Phone</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {
       order?.map((item, index) => <tr>
        <th>{index + 1}</th>
        <td>{item?.customerName}</td>
        <td>{item?.productName}</td>
        <td>{item?.quantity}</td>
        <td>{(item?.price && !item?.paid) && <Link to = {`/dashboard/payment/${item?._id}`}><button  className = "btn btn-xs btn-success">Pay Now</button></Link>}
        {(item?.price && item?.paid) && <span className = "text-success">Paid</span>}
        </td>
        
        
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