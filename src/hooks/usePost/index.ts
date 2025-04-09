import { useQuery } from '@tanstack/react-query';
import useApiPublic from '../useApiPublic';

const usePost = () => {
  const apiPublic = useApiPublic();

  // Fetch the post with Get method
  const {
    data: posts = [],
    isPending: loading,
    refetch
  } = useQuery({
    queryKey: ['post'],
    queryFn: async () => {
      const res = await apiPublic.get('/post');
      console.log('posts: ', res.data.data.result);
      return res.data.data.result;
    }
  });

  return { posts, loading, refetch };
};

export default usePost;
