import { useQuery } from '@tanstack/react-query';
import { useApiSecure } from '../useApiSecure';

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
      console.log('resumes: ', res.data.data);
      return res.data.data;
    }
  });

  return { resumes, loading, refetch };
};

export default useResume;
