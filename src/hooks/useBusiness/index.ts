/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from '@tanstack/react-query';
import useApiPublic from '../useApiPublic';
import { useApiSecure } from '../useApiSecure';
import NotificationCustom from '@/helpers/notify';

const useBusiness = () => {
  const apiPublic = useApiPublic();
  const apiSecure = useApiSecure();

  // Fetch the post with Get method
  const useBusinessSearch = (searchParams?: { fields?: string; addresses?: string }) => {
    const {
      data: businesses = [],
      isPending: loading,
      refetch
    } = useQuery({
      queryKey: ['business', searchParams],
      queryFn: async () => {
        const queryStr = new URLSearchParams();

        if (searchParams?.fields) queryStr.append('fields', searchParams.fields);
        if (searchParams?.addresses) queryStr.append('addresses', searchParams.addresses);

        console.log('queryStr: ', queryStr);
        const res = await apiPublic.get(`/companies/?${queryStr.toString()}`);
        console.log('businesses: ', res.data.data.result);
        return res.data.data.result;
      }
    });

    return { businesses, refetch, loading };
  };

  const addBusiness = useMutation({
    mutationFn: async (newBusiness: any) => {
      // const res = await apiPublic.post('/companies', newBusiness);
      return newBusiness;
    }
  });

  const approveBusiness = useMutation({
    mutationFn: async ({ id, status }: { id: number; status: any }) => {
      console.log('newBusiness: ', { status, id });
      const res = await apiSecure
        .patch(`/companies/approve/${Number(id)}`, { status })
        .then(() => {
          NotificationCustom('success', 'Đã duyệt thành công');
        })
        .catch((error) => {
          console.log('error: ', error);
          NotificationCustom('error', error);
        });
      return res;
    }
  });

  const removeBusiness = useMutation({
    mutationFn: async ({ id, status }: { id: number; status: any }) => {
      // const res = await apiSecure.patch(`/companies/remove/${id}`, { status });
      const res = await apiSecure
        .patch(`/companies/remove/${Number(id)}`, { status })
        .then(() => {
          NotificationCustom('success', 'Đã xóa thành công');
        })
        .catch((error) => {
          console.log('error: ', error);
          NotificationCustom('error', error);
        });
      return res;
    }
  });

  return { useBusinessSearch, addBusiness, approveBusiness, removeBusiness };
};

export default useBusiness;
