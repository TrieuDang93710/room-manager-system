import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../useAuth';
import { useApiSecure } from '@/hooks/useApiSecure';
export const useAdmin = () => {
  const auth = useAuth();
  const apiSecure = useApiSecure();

  const { user } = auth;

  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, 'isAdmin'],
    queryFn: async () => {
      const response = await apiSecure.get(`user/admin/${'user?.email'}`);
      return response.data?.admin;
    }
  });

  return [isAdmin, isAdminLoading];
};
