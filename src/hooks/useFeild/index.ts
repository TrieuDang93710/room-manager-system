import { useQuery } from '@tanstack/react-query';
import useApiPublic from '../useApiPublic';

const useField = () => {
  const apiPublic = useApiPublic();

  // Fetch the post with Get method
  const {
    data: fields = [],
    isPending: loading,
    refetch
  } = useQuery({
    queryKey: ['field'],
    queryFn: async () => {
      const res = await apiPublic.get('/category');
      console.log('fields: ', res.data.data.result);
      return res.data.data.result;
    }
  });

  return { fields, loading, refetch };
};

export default useField;
