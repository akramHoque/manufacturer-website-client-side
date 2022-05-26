import React from 'react';

const User = ({user}) => {
  const {email} = user ;

  return (
  
      <tr>
        <th>1</th>
        <td>{email}</td>
        <td><button class="btn btn-sm btn-success">Make an Admin</button></td>
        <td><button class="btn btn-sm btn-error">Remove user</button></td>
      </tr>
   
  );
};

export default User;