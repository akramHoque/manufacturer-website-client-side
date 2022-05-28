import React from 'react';
import { toast } from 'react-toastify';

const User = ({user, refetch}) => {
  const {email, role} = user ;
  const makeAdmin = () =>{
    fetch(`https://rocky-plateau-28765.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res => {
      if(res.status === 403){
        toast.error('Faild to create an admin')
      }
      
     return res.json()})
    .then(data =>{
      console.log(data)
     if(data.modifiedCount>0){
      refetch()
      toast.success(`An admin is created`);
     }
    })
  }

  return (
  
      <tr>
        <th>1</th>
        <td>{email}</td>
        <td>{role !=='admin' && <button onClick={makeAdmin} class="btn btn-sm btn-success">Make an Admin</button>}</td>
        <td><button class="btn btn-sm btn-error">Remove user</button></td>
      </tr>
   
  );
};

export default User;