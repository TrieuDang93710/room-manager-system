/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from '@tanstack/react-query';
import useApiPublic from '../useApiPublic';

const useCloudinary = () => {
  const apiPublic = useApiPublic();

  //   const uploadImage = useMutation({
  //     mutationFn: async ({ formData }: { formData: any }) => {
  //       await apiPublic
  //         .post('/cloudinary/image', { formData })
  //         .then((result) => {
  //           console.log('result: ', result);
  //         })
  //         .catch((error) => {
  //           console.log('error: ', error);
  //         });
  //     }
  //   });

  const uploadFile = useMutation({
    mutationFn: async ({ file }: { file: any }) => {
      const res = await apiPublic.post('/cloudinary/file', file);
      return res;
    }
  });

  return { uploadFile };
};

export default useCloudinary;
