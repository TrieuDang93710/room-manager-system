/* eslint-disable @typescript-eslint/no-explicit-any */

import CurrencyFormatted from '@/config/currency.config';
import NotificationCustom from '@/helpers/notify';
import { useAuth } from '@/hooks/auth/useAuth';
import { useApiSecure } from '@/hooks/useApiSecure';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface CheckoutFormProps {
  price: any;
  cart?: any;
}

function CheckoutForm({ price }: CheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const axiosSecure = useApiSecure();
  const router = useRouter();

  const [cartError, setCartError] = useState('');
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    if (price !== 'price' && price < 1) {
      return;
    }
    axiosSecure.post('/payment/create-payment-intent', { price: `${price}` }).then((res: any) => {
      console.log('res: ', res);
      setClientSecret(res.data.clientSecret);
    });
  }, [price, axiosSecure]);

  console.log('res: ', clientSecret);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    // create card element
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    });

    if (error) {
      setCartError(error.message!);
      console.log('[error]', cartError);
    } else {
      setCartError('success');
      console.log('[PaymentMethod]', paymentMethod);
    }

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: user?.username || 'anonymous',
          email: user?.email || 'unknown'
        }
      }
    });
    if (confirmError) {
      console.log('confirmError: ', confirmError);
    }
    console.log('paymentIntent: ', paymentIntent);
    if (paymentIntent!.status === 'succeeded') {
      console.log('paymentIntentId: ', paymentIntent!.id);
      setCartError(`Your transition id is ${paymentIntent!.id}`);

      const paymentInformation = {
        paymentDate: paymentIntent!.created,
        cardType: paymentMethod!.card?.brand,
        paymentMethod: ['card payment'],
        status: [paymentIntent!.status],
        amount: `${price}`,
        surcharge: 30,
        total: `${paymentIntent!.amount}`,
        paymentId: paymentIntent!.id,
        email: user?.email
      };
      console.log('paymentInformation: ', paymentInformation);
      await axiosSecure.post(`/payment/new/${1}`, paymentInformation).then((res: any) => {
        console.log('data: ', res.data);
        NotificationCustom('success', 'Thanh toán thành công !!!');
        router.push('/system/payment');
      });
    }
  };

  return (
    <div className='w-full flex justify-center py-6'>
      <div className='w-1/2 flex flex-col items-start justify-start'>
        {/* <h2 className='text-3xl font-bold py-4'>Gói dịch vụ được chọn</h2> */}
        <div className='w-[50%] border-[1px] rounded-sm py-2 cursor-pointer border-slate-500 dark:border-blue-600 flex flex-col items-center justify-start gap-2'>
          <button className='w-3/4 py-2 rounded-sm text-[16px] font-bold bg-[#9999993f] text-blue-600'>Miễn phí</button>
          <div className='w-full h-[30vh] flex flex-col items-start justify-start p-3 gap-2'>
            <p className='text-[20px] font-medium'>
              <strong className='text-black dark:text-blue-600 font-medium'>Gia : </strong>
              {CurrencyFormatted({ value: 0, code: 'VND' })}
            </p>
            <p className='text-[18px] font-medium'>
              <strong className='text-black dark:text-blue-600 font-medium'>So tin dang : </strong>15
            </p>
            <p className='text-[18px] font-medium'>
              <strong className='text-black dark:text-blue-600 font-medium'>So tin dang : </strong>15
            </p>
          </div>
          <button
            disabled={true}
            className='w-3/4 py-2 rounded-sm dark:text-blue-600 border border-slate-500 dark:border-[#9999993f] text-[16px] font-bold'
          >
            <Link href={'/system/payment'}>Thanh toán ngay</Link>
          </button>
        </div>
      </div>
      <div className='md:w-1/3 w-full py-5 px-3 gap-5 space-y-3 shadow-md rounded-sm shadow-slate-600 flex flex-col items-start justify-start'>
        <h4 className='text-2xl font-bold'>Thanh toán qua pay pal!</h4>
        <h5 className='text-xl font-bold py-4'>Credit/Debit cash</h5>
        {/* stripe */}
        <form className='w-full h-[60px] flex-col items-start justify-start space-y-6 gap-4' onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4'
                  }
                },
                invalid: {
                  color: '#9e2146'
                }
              }
            }}
          />
          <button
            className='w-full text-white bg-green-500 py-2 rounded-sm shadow-md shadow-slate-500'
            type='submit'
            disabled={!stripe}
          >
            Pay
          </button>
        </form>
        {cartError ? <p className='text-red'>{cartError}</p> : ''}
        <button
          className='w-full text-white bg-blue-500 py-2 rounded-sm shadow-md shadow-slate-500'
          type='submit'
          disabled={!stripe}
        >
          Pay pal
        </button>
      </div>
    </div>
  );
}

export default CheckoutForm;
