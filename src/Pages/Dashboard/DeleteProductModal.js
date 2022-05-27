import React from 'react';
import { toast } from 'react-toastify';

const DeleteProductModal = ({ deleteProduct, refetch, setDeleteProduct}) => {
  const {name, email} = deleteProduct ;
  const handleDelete =() => {
    fetch(`http://localhost:5000/product/${email}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.deletedCount) {
          toast.success('Product is deleted')
          setDeleteProduct(null)
          refetch()
        }
      })
  }
  return (
    <div>
     
     

<input type="checkbox" id="delete" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg text-red-700">Are You sure to Delete ?? </h3>
    <p class="py-4">You will get one chance to delete !</p>
    <div class="modal-action">
    <button onClick={() => handleDelete()} class="btn btn-xs btn-error">Delete</button>
      <label for="delete" class="btn btn-xs">Close</label>
    </div>
  </div>
</div>
    </div >
  );
};

export default DeleteProductModal;