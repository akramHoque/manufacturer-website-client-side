import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const ManageProducts = () => {

  const {data: items, isLoading} = useQuery('items', () => fetch('http://localhost:5000/product',{
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
}).then(res => res.json()))

  if(isLoading){
    return <Loading></Loading>
  }
  return (
    <div>
      <h2>Manage All Products: {items?.length}</h2>
    </div>
  );
};

export default ManageProducts;