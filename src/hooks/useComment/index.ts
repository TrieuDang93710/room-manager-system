import { useQuery } from '@tanstack/react-query';
import useApiPublic from '../useApiPublic';

const useComment = () => {
  const apiPublic = useApiPublic();

  // Fetch the post with Get method
  const {
    data: comments = [],
    isPending: loading,
    refetch
  } = useQuery({
    queryKey: ['comments'],
    queryFn: async () => {
      const res = await apiPublic.get('/rating');
      console.log('comments: ', res.data.data);
      return res.data.data;
    }
  });

  return { comments, loading, refetch };
};

export default useComment;
