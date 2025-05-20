/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from '@tanstack/react-query';
import { useApiSecure } from '../useApiSecure';
import NotificationCustom from '@/helpers/notify';

const useApply = () => {
  const apiSecure = useApiSecure();

  // Fetch the post with Get method
  const {
    data: applies = [],
    isPending: loading,
    refetch
  } = useQuery({
    queryKey: ['apply'],
    queryFn: async () => {
      const res = await apiSecure.get('/apply');
      return res.data.data.result;
    }
  });

  const addApply = useMutation({
    mutationFn: async ({ createApplyDto }: { createApplyDto: any }) => {
      console.log('createApplyDto: ', createApplyDto);
      const res = await apiSecure.post('/apply', createApplyDto);
      return res;
    }
  });

  const approveApply = useMutation({
    mutationFn: async ({ id, status }: { id: number; status: any }) => {
      console.log('newApply: ', { status, id });
      const res = await apiSecure
        .patch(`/apply/update/${Number(id)}`, { status })
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

  const removeApply = useMutation({
    mutationFn: async ({ id, status }: { id: number; status: any }) => {
      // const res = await apiSecure.patch(`/companies/remove/${id}`, { status });
      const res = await apiSecure
        .patch(`/apply/remove/${Number(id)}`, { status })
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

  return { applies, loading, refetch, addApply, approveApply, removeApply };
};

export default useApply;
