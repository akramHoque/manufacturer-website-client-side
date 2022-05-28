import { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteProductModal from './DeleteProductModal';
import ManageProductTable from './ManageProductTable';

const ManageProducts = () => {
 const [deleteProduct, setDeleteProduct] = useState(null) ;
  const { data: items, isLoading, refetch } = useQuery('items', () => fetch('https://rocky-plateau-28765.herokuapp.com/product',{
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()));
   


  if(isLoading){
    return <Loading></Loading>
  }
  return (
    <div>
      <h2>Manage All Products: {items?.length}</h2>
      <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Image</th>
        <th>product Name</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {
       items.map((item, index) =><ManageProductTable
       key={item._id}
       item={item}
       index={index}
       refetch = {refetch}
       setDeleteProduct={setDeleteProduct}
       ></ManageProductTable>)
     }
     
    </tbody>
  </table>
</div>

{
  deleteProduct && <DeleteProductModal
      deleteProduct={ deleteProduct}
      refetch = {refetch}
      setDeleteProduct={setDeleteProduct}
  ></DeleteProductModal>
}
  </div>
  );
};

export default ManageProducts;