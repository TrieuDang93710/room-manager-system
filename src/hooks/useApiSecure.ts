import API_PUBLIC_URI from '@/lib/constants';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const apiSecure = axios.create({
  baseURL: API_PUBLIC_URI
});

export const useApiSecure = () => {
  const router = useRouter();

  apiSecure.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      const token = localStorage.getItem('access-token');
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  apiSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;

      if (status === 401 || status === 403) {
        // await logOut();
        router.push('/sign-in');
      }
      return Promise.reject(error);
    }
  );

  return apiSecure;
};
