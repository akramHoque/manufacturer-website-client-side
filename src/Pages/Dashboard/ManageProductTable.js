import React from 'react';
import { toast } from 'react-toastify';

const ManageProductTable = ({ item, index, refetch, setDeleteProduct}) => {
  const { name, productName, img, email } = item;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>
        <div class="avatar">
          <div class="w-16 rounded">
            <img src={img} alt='img' />
          </div>
        </div>

      </td>

      <td>{productName}</td>
      <td>
        <label onClick={() => setDeleteProduct(item)} for="delete" class="btn btn-xs btn-error">Delete</label>
       

      </td>
    </tr>

  );
};

export default ManageProductTable;