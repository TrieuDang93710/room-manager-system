/* eslint-disable @typescript-eslint/no-explicit-any */
import CardRow from '@/components/organisms/system/Card/Row';
import RenderContent from '../../post/components/RenderContent';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import useApiPublic from '@/hooks/useApiPublic';

interface PostDetailCardProps {
  postId?: number;
  openPostDetailCard: boolean;
  setOpenPostDetailCard: React.Dispatch<React.SetStateAction<boolean>>;
}

const PostDetailCard = ({ postId, setOpenPostDetailCard, openPostDetailCard }: PostDetailCardProps) => {
  const [sticky, setSticky] = useState<boolean>(false);
  console.log(sticky);

  const apiPublic = useApiPublic();
  const [postItem, setPostItem] = useState<any>(null);
  const [description, setDescription] = useState<string[]>([]);
  const [experience, setExperience] = useState<string[]>([]);
  const [benefit, setBenefit] = useState<string[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    apiPublic
      .get(`/post/${Number(postId)}`)
      .then((res) => {
        console.log('res: ', res);
        setPostItem(res.data.data);
        setDescription(res.data.data.description.split('; '));
        setExperience(res.data.data.require.description.split('; '));
        setBenefit(res.data.data.benefit.split('; '));
        // setSkill(res.data.data.benefit.split('; '))
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  }, [apiPublic, postId]);

  return (
    <div
      onMouseLeave={() => {
        setOpenPostDetailCard(!openPostDetailCard);
      }}
      className='fixed top-20 md:w-[35%] w-[60%] h-[80vh] bg-white shadow-sm shadow-slate-600 rounded-xl z-40'
    >
      <div className='relative w-full h-full flex flex-col items-center justify-start py-2 px-4'>
        <div className={`w-full flex flex-row items-center justify-between py-2`}>
          <CardRow>
            <div className='w-full flex flex-col items-center justify-center'>
              <div className='w-full h-full p-2'>
                <h3 className='text-[20px] text-black dark:text-blue-600 font-bold line-clamp-2'>
                  {postItem && postItem!.title}
                </h3>
                <h3 className='text-[16px] text-slate-600 dark:text-slate-200 font-medium line-clamp-2'>
                  {postItem && postItem!.company.title}
                  Công ty công nghệ Soft Tech
                </h3>
                <h3 className='text-[16px] text-blue-600 dark:text-blue-600 font-bold line-clamp-2'>5 - 7 triệu</h3>
              </div>
              <div className='w-full h-full flex flex-row items-center justify-start gap-2 p-2'>
                <p className='text-[13px] bg-slate-200 text-slate-800 font-normal rounded-sm py-1 px-4'>Đà Nẵng</p>
                <p className='text-[13px] bg-slate-200 text-slate-800 font-normal rounded-sm py-1 px-4'>1 năm</p>
                <p className='text-[13px] bg-slate-200 text-slate-800 font-normal rounded-sm py-1 px-4'>Còn 1 ngày</p>
              </div>
            </div>
          </CardRow>
        </div>
        <div className='w-full h-[50vh] flex flex-col items-center justify-start px-2 gap-4 overflow-y-auto hide-scrollbar'>
          <RenderContent contents={description} title='Mô tả công việc' />
          <RenderContent contents={experience} title='Yêu cầu công việc' />
          <RenderContent contents={benefit} title='Quyền lợi' />
          <RenderContent contents={experience} title='Kỹ năng' />

          <div className='w-full'>
            <strong className='text-[16px] text-black dark:text-blue-600'>Thời gian làm việc :</strong>
            <ul className='list-disc px-4 py-3 flex flex-col gap-3'>
              <li className='text-[16px] text-black dark:text-white font-normal'>
                Từ thứ 2 đến thứ 6, thứ 7 và chủ nhật nghỉ
              </li>
            </ul>
          </div>
        </div>
        <div className='absolute bottom-0 w-full flex flex-row items-center justify-between px-4 py-2'>
          <Button
            onClick={() => alert('Click me')}
            className='border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white font-bold md:px-8 px-4'
            variant={'outline'}
            size={'sm'}
          >
            Ứng tuyển
          </Button>
          <Button
            onClick={() => alert('Click me')}
            className='w-[40%] bg-blue-600 hover:text-black hover:border-blue-600 hover:bg-blue-700 text-white font-bold px-4'
            variant={'outline'}
            size={'sm'}
          >
            Xem chi tiết
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostDetailCard;
