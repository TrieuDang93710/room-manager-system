import { useQuery } from '@tanstack/react-query';
import useApiPublic from '../useApiPublic';

const useNews = () => {
  const apiPublic = useApiPublic();

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

  return { newses, loading, refetch };
};

export default useNews;
