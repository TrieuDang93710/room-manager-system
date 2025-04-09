/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from '@tanstack/react-query';
import useApiPublic from '../useApiPublic';
import { useApiSecure } from '../useApiSecure';
import NotificationCustom from '@/helpers/notify';

const usePost = () => {
  const apiPublic = useApiPublic();
  const apiSecure = useApiSecure();

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

  const getPost = useMutation({
    mutationFn: async ({ id }: { id: number }) => {
      console.log('id: ', { id });
      const res = await apiPublic
        .get(`/post/${Number(id)}`)
        // .then((result) => {
        //   NotificationCustom('success', result.data.message);
        //   console.log('result: ', result);
        //   refetch();
        // })
        // .catch((error) => {
        //   console.log('error: ', error);
        //   NotificationCustom('error', error.message);
        // });
      return res;
    }
  });

  const approvePost = useMutation({
    mutationFn: async ({ id, status }: { id: number; status: any }) => {
      console.log('newPost: ', { status, id });
      const res = await apiSecure
        .patch(`/post/approve/${Number(id)}`, { status })
        .then(() => {
          NotificationCustom('success', 'Đã duyệt thành công');
          refetch();
        })
        .catch((error) => {
          console.log('error: ', error);
          NotificationCustom('error', error);
        });
      return res;
    }
  });

  const removePost = useMutation({
    mutationFn: async ({ id, status }: { id: number; status: any }) => {
      // const res = await apiSecure.patch(`/companies/remove/${id}`, { status });
      const res = await apiSecure
        .patch(`/post/delete/${Number(id)}`, { status })
        .then(() => {
          NotificationCustom('success', 'Đã xóa thành công');
          refetch();
        })
        .catch((error) => {
          console.log('error: ', error);
          NotificationCustom('error', error);
        });
      return res;
    }
  });

  return { posts, getPost, loading, refetch, approvePost, removePost };
};

export default usePost;
