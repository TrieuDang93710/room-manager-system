import { useQuery } from '@tanstack/react-query';
import useApiPublic from '../useApiPublic';

const useCategory = () => {
  const apiPublic = useApiPublic();

  // Fetch the post with Get method
  const {
    data: categories = [],
    isPending: loading,
    refetch
  } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await apiPublic.get('/category');
      console.log('categories: ', res.data.data.result);
      return res.data.data.result;
    }
  });

  return { categories, loading, refetch };
};

export default useCategory;
