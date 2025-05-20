import { useQuery } from '@tanstack/react-query';
import useApiPublic from '../useApiPublic';

const useServicePackage = () => {
  const apiPublic = useApiPublic();

  // Fetch the post with Get method
  const {
    data: packages = [],
    isPending: loading,
    refetch
  } = useQuery({
    queryKey: ['packages'],
    queryFn: async () => {
      const res = await apiPublic.get('/service-package');
      console.log('packages: ', res.data.data.result);
      return res.data.data.result;
    }
  });

  return { packages, loading, refetch };
};

export default useServicePackage;
