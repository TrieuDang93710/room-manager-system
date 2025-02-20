import { AuthContext } from '@/contexts/ContextProvider';
import { useContext } from 'react';

export const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};
