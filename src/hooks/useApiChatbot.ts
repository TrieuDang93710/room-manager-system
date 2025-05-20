import { API_CHATBOT_PUBLIC_URI } from '@/lib/constants';
import axios from 'axios';

const apiChatbot = axios.create({
  baseURL: API_CHATBOT_PUBLIC_URI
});

const useApiChatbot = () => {
  return apiChatbot;
};

export default useApiChatbot;