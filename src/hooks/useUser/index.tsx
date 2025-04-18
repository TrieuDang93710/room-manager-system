import { useQuery } from '@tanstack/react-query';
import { useApiSecure } from '../useApiSecure';

const useUser = () => {
  //   const apiPublic = useApiPublic();
  const apiSecure = useApiSecure();

  // Fetch the post with Get method
  const {
    data: users = [],
    isPending: loading,
    refetch
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await apiSecure.get('/user');
      console.log('users: ', res.data.data);
      return res.data.data;
    }
  });

  return { users, loading, refetch };
};

export default useUser;
