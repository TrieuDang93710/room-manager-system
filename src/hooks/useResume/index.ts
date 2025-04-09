/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from '@tanstack/react-query';
import { useApiSecure } from '../useApiSecure';
import NotificationCustom from '@/helpers/notify';

const useResume = () => {
  const apiSecure = useApiSecure();

  // Fetch the post with Get method
  const {
    data: resumes = [],
    isPending: loading,
    refetch
  } = useQuery({
    queryKey: ['resume'],
    queryFn: async () => {
      const res = await apiSecure.get('/resume');
      console.log('resumes: ', res.data.data.result);
      return res.data.data.result;
    }
  });

  const addNewResume = useMutation({
    mutationFn: async ({ newResume }: { newResume: any }) => {
      const res = await apiSecure
        .post('/resume', newResume)
        .then((result) => {
          console.log('result: ', result.data);
          NotificationCustom('success', result.data.data.message);
        })
        .catch((error) => {
          console.log('error: ', error);
          NotificationCustom('error', error);
        });
      return res;
    }
  });

  const getOneResume = useMutation({
    mutationFn: async ({ id }: { id: number }) => {
      const res = await apiSecure.get(`/resume/get-one/${Number(id)}`);
      // .then((result) => {
      //   console.log('result: ', result);
      //   NotificationCustom('success', result.data.message);
      // })
      // .catch((error) => {
      //   console.log('error: ', error);
      //   NotificationCustom('error', error);
      // });
      return res;
    }
  });

  const updateResume = useMutation({
    mutationFn: async ({ id, updateDto }: { id: number; updateDto: any }) => {
      const res = await apiSecure
        .patch(`/resume/${id}`, updateDto)
        .then((result) => {
          console.log('result: ', result.data);
          NotificationCustom('success', result.data.data.message);
        })
        .catch((error) => {
          console.log('error: ', error);
          NotificationCustom('error', error);
        });
      return res;
    }
  });

  const removeResume = useMutation({
    mutationFn: async ({ id, statusDto }: { id: number; statusDto: any }) => {
      const res = await apiSecure
        .patch(`/resume/remove/${id}`, statusDto)
        .then((result) => {
          console.log('result: ', result.data);
          NotificationCustom('success', result.data.data.message);
        })
        .catch((error) => {
          console.log('error: ', error);
          NotificationCustom('error', error);
        });
      return res;
    }
  });

  return { resumes, loading, refetch, addNewResume, getOneResume, updateResume, removeResume };
};

export default useResume;
