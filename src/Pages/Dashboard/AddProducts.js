import React from 'react';
import { useForm } from 'react-hook-form';
import { isCancelledError, useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddProducts = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  const { data: products, isLoading } = useQuery('tools', () => fetch('http://localhost:5000/tool').then(res => res.json()))
  const imageStorageKey = '17d5a70c9593f26ba474df8810b6fd6d';
  const onSubmit = async data => {

    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image)
   const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

   fetch(url, {
     method: 'POST',
     body: formData
   })
   .then(res =>res.json())
   .then(result =>{

    if(result.success){
      const img = result.data.url;
      const product = {
        name: data.name,
        email: data.email,
        productName: data.productName,
        img: img
      }

      fetch('http://localhost:5000/product',{
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },

        body: JSON.stringify(product)
      })
      .then(res => res.json())
      .then(inserted => {
        if(inserted.insertedId){
          toast.success('Added a product successfully')
          reset();
        }
        else{
          toast.error('Failed to add product')
        }
      })
    }
   
   } )


    if (isLoading) {
      return <Loading></Loading>
    }


  }
  return (
    <div>
      <h2 className='text-3xl text-red-500'>Add a Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>

          </label>
          <input type="text" placeholder="Your Name"

            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required"
              }
            })}
          />
          <label className="label">
            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>
            }

          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>

          </label>
          <input type="email" placeholder="Your Email"

            className="input input-bordered w-full max-w-xs"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required"
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: 'Give a valid Email'
              }
            })}
          />
          <label className="label">
            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>
            }
            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>
            }

          </label>
        </div>
        <input />

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>

          <select {...register('productName')} class="select input-bordered w-full max-w-xs">
           
            {
              products?.map(tool =><option
              key={tool?._id}
              value={tool?.name}
              
              >{tool?.name}</option>)
            }
          </select>
          
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Image</span>

          </label>
          <input type="file" placeholder="Your Name"

            className="input input-bordered w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: "Image is required"
              }
            })}
          />
          <label className="label">
            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>
            }

          </label>
        </div>

        <input className='btn w-full max-w-xs' value='Add Product' type="submit" />
      </form>
    </div>
  );
};

export default AddProducts;