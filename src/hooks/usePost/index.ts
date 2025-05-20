/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from '@tanstack/react-query';
import useApiPublic from '../useApiPublic';
import { useApiSecure } from '../useApiSecure';
import NotificationCustom from '@/helpers/notify';

const usePost = () => {
  const apiPublic = useApiPublic();
  const apiSecure = useApiSecure();

  // Fetch the post with Get method
  const usePostsSearch = (searchParams?: {
    fields?: string;
    addresses?: string;
    workTypes?: string;
    titles?: string;
  }) => {
    const {
      data: posts = [],
      isPending: loading,
      refetch
    } = useQuery({
      queryKey: ['post', searchParams],
      queryFn: async () => {
        const queryStr = new URLSearchParams();

        if (searchParams?.fields) queryStr.append('fields', searchParams.fields);
        if (searchParams?.addresses) queryStr.append('addresses', searchParams.addresses);
        if (searchParams?.workTypes) queryStr.append('workTypes', searchParams.workTypes);
        if (searchParams?.titles) queryStr.append('titles', searchParams.titles);

        console.log('queryStr: ', queryStr);

        const res = await apiPublic.get(`/post/?${queryStr.toString()}`);
        console.log('posts: ', res.data.data.result);
        return res.data.data.result;
      }
    });

    return { posts, loading, refetch };
  };

  const getPost = useMutation({
    mutationFn: async ({ id }: { id: number }) => {
      console.log('id: ', { id });
      const res = await apiPublic.get(`/post/${Number(id)}`);
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
        })
        .catch((error) => {
          console.log('error: ', error);
          NotificationCustom('error', error);
        });
      return res;
    }
  });

  return { usePostsSearch, getPost, approvePost, removePost };
};

export default usePost;
