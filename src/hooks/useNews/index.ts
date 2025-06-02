/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from '@tanstack/react-query';
import useApiPublic from '../useApiPublic';
import { useApiSecure } from '../useApiSecure';

const useNews = () => {
  const apiPublic = useApiPublic();
  const apiSecure = useApiSecure()

  // Fetch the post with Get method
  const {
    data: newses = [],
    isPending: loading,
    refetch
  } = useQuery({
    queryKey: ['news'],
    queryFn: async () => {
      const res = await apiPublic.get('/news');
      console.log('news: ', res.data.data.result);
      return res.data.data.result;
    }
  });

  const addNews = useMutation({
    mutationFn: async ({ newsBody }: { newsBody: any }) => {
      const res = await apiSecure.post('/news', newsBody);
      return res;
    }
  });

  return { newses, loading, refetch, addNews };
};

export default useNews;
