/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from '@tanstack/react-query';
import { useApiSecure } from '../useApiSecure';
import NotificationCustom from '@/helpers/notify';

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

  const updateProfile = useMutation({
    mutationFn: async ({ updateUserDto }: { updateUserDto: any }) => {
      const res = await apiSecure
        .patch('/user/update-user', updateUserDto)
        .then((result) => {
          console.log('result: ', result);
          NotificationCustom('success', result.data.message);
        })
        .catch((error) => {
          console.log('error: ', error);
          NotificationCustom('error', error.message);
        });

      return res;
    }
  });

  return { users, refetch, loading, updateProfile };
};

export default useUser;
