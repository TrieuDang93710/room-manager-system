/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from '@tanstack/react-query';
import useApiPublic from '../useApiPublic';
import { useApiSecure } from '../useApiSecure';
import NotificationCustom from '@/helpers/notify';

const useBusiness = () => {
  const apiPublic = useApiPublic();
  const apiSecure = useApiSecure();

  // Fetch the post with Get method
  const {
    data: businesses = [],
    isPending: loading,
    refetch
  } = useQuery({
    queryKey: ['business'],
    queryFn: async () => {
      const res = await apiPublic.get('/companies');
      console.log('businesses: ', res.data.data.result);
      return res.data.data.result;
    }
  });

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
          refetch();
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
          refetch();
        })
        .catch((error) => {
          console.log('error: ', error);
          NotificationCustom('error', error);
        });
      return res;
    }
  });

  return { businesses, loading, refetch, addBusiness, approveBusiness, removeBusiness };
};

export default useBusiness;
