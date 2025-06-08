/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { BellOutlined, FilterOutlined, HomeOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import BreadCrumbCommon from '@/components/atoms/Breadcumb';
import flex from '@/config/flex.config';
import { listRoom } from '@/faker/data';
import { STRIPE_SECRET_KEY } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import CheckoutForm from '../components/CheckoutForm';
import { useApiSecure } from '@/hooks/useApiSecure';
import NotificationCustom from '@/helpers/notify';

const stripePromise = loadStripe(`${STRIPE_SECRET_KEY}`);

interface PaymentPageProps {
  params: { id: number };
}

const PaymentPage = ({ params }: PaymentPageProps) => {
  const apiSecure = useApiSecure();
  const [packageItem, setPackageItem] = useState<any>(null);
  const [filteredItems] = useState(listRoom);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(2);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  console.log('currentItems: ', currentItems, '\n', 'paginate: ', paginate);

  const breadcrumbs = [
    {
      url: '/',
      label: 'Trang chủ',
      prefixIcon: () => <HomeOutlined />
    },
    {
      url: '/system/payment',
      label: 'Thanh toán',
      prefixIcon: () => <FilterOutlined />
    }
  ];

  useEffect(() => {
    apiSecure
      .get(`/service-package/${Number(params.id)}`)
      .then((result) => {
        console.log('result: ', result);
        setPackageItem(result.data.data);
      })
      .catch((error) => {
        NotificationCustom('error', error.message);
      });
  }, [apiSecure, params.id]);

  return (
    <div
      className={
        'w-full min-h-screen md:px-10 px-3 pt-20  z-10 ' +
        flex({ direction: 'col', justifyContent: 'start', alignItems: 'center' })
      }
    >
      <div className='w-[80%] flex flex-row items-center justify-between gap-3'>
        <p className='text-[14px] font-bold text-black text-center'>
          Tổng 49.562 công ty đăng việc làm [Update 23/05/2025]
        </p>
        <Button
          onClick={() => alert('Click me')}
          className='hover:text-white border-blue-600 hover:bg-blue-600 text-blue-600 font-bold rounded-full md:px-8 px-4'
          variant={'outline'}
          size={'lg'}
        >
          <BellOutlined />
          <p className='hidden md:block'>Tạo thông báo việc làm</p>
        </Button>
      </div>
      <div className='w-[80%] flex flex-row items-center justify-start'>
        <BreadCrumbCommon breadcrumbs={breadcrumbs} currentUrl='/' mode='dark' />
      </div>
      <div className='w-[80%] flex flex-col items-start justify-start my-4 gap-3'>
        <h2 className='text-xl font-bold py-4'>Gói dịch vụ được chọn</h2>
        <div className='w-full flex flex-col items-center justify-start'>
          <Elements stripe={stripePromise}>
            <CheckoutForm packageItem={packageItem} price={packageItem && packageItem!.price} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
