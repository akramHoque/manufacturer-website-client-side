import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L48bqAFxWJ8tjmz7HNM8kjy2OEsaOhndY74Vl9r5VnRB5gg3R3ewQBSAYw5qHWV0o45El1u455PBym1kLPjP64h00UYBPILRy');

const Payment = () => {
  const { id } = useParams();
  const url = `https://rocky-plateau-28765.herokuapp.com/order/${id}`;
  const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()))

  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div>

      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-14">
        <div class="card-body">
          <h2 class="card-title"> Paymnet for {order?.productName}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <p>Plase pay: $ {order?.price} /p</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>


        </div>
      </div>
    </div>

  );
};

export default Payment;