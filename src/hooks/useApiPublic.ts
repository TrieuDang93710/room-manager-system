import { API_PUBLIC_URI } from '@/lib/constants';
import axios from 'axios';

const apiPublic = axios.create({
  baseURL: API_PUBLIC_URI
});

const useApiPublic = () => {
  return apiPublic;
};

export default useApiPublic;
