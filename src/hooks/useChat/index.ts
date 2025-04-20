/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from '@tanstack/react-query';
import { useApiSecure } from '../useApiSecure';

const useChat = () => {
  const apiSecure = useApiSecure();

  const useAllMessages = (params: { userToChatId: number }) => {
    const {
      data: messages = [],
      isPending: loading,
      refetch
    } = useQuery({
      queryKey: ['message', params],
      queryFn: async () => {
        const res = await apiSecure.get(`/message/${Number(params.userToChatId)}`);
        // console.log('res: ', res.data);
        return res.data;
      }
    });

    return { messages, loading, refetch };
  };

  const sendMessage = useMutation({
    mutationFn: async ({ sendDto, receiver }: { sendDto: any; receiver: any }) => {
      const res = await apiSecure.post(`/message/send/${Number(receiver)}`, sendDto);
      console.log('res: ', res.data)
      return res.data;
    }
  });

  return { useAllMessages, sendMessage };
};

export default useChat;
