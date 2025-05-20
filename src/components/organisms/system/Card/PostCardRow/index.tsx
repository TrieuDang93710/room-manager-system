/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  EyeOutlined,
  FieldTimeOutlined,
  HeartOutlined,
  HomeOutlined,
  MessageOutlined,
  MoneyCollectOutlined
} from '@ant-design/icons';
import CardRow from '../Row';
import { useAuth } from '@/hooks/auth/useAuth';
import ExpiredPostChecking from '@/helpers/expired-check';

interface PostCardRowProps {
  applied?: string;
  approved?: boolean;
  postItem?: any;
}

const PostCardRow = ({ postItem, applied }: PostCardRowProps) => {
  const { user } = useAuth();
  const { days, expired } = ExpiredPostChecking(postItem && postItem!.createAt, postItem && postItem!.duration);

  if (!postItem) {
    return 'Not found';
  }

  return (
    <CardRow logo={postItem && postItem.company.logo}>
      <div className='w-full h-full p-2'>
        <h3 className='text-[18px] text-black dark:text-blue-600 font-bold line-clamp-2'>{postItem && postItem!.title}</h3>
        <h3 className='text-[18px] text-black dark:text-blue-600 font-normal line-clamp-2'>{postItem && postItem!.company.title}</h3>
        {user && user!.role[0] === 'applicant' && (
          <p className='text-[14px] text-slate-900 font-normal py-2 line-clamp-2'>Cap nhat 1 days truoc.</p>
        )}
        {user && user!.role[0] !== 'applicant' ? (
          <div className='w-full flex sm:flex-row flex-col justify-between py-4'>
            <div className='sm:w-3/4 w-full flex flex-row justify-start items-center gap-8'>
              <p className='text-[14px] text-slate-800 font-normal py-1'>
                <HomeOutlined className='font-bold text-black dark:text-blue-600 mr-2' /> 29 Tran Duc Thao
              </p>
              {user && user!.role[0] === 'applicant' ? (
                <p className='text-[14px] text-slate-800 font-normal py-1'>
                  <FieldTimeOutlined className='font-bold text-black dark:text-blue-600 mr-2' /> Còn
                  <strong className='font-bold'> {days < expired && expired - days} </strong> giờ để ứng tuyển
                </p>
              ) : (
                <p className='text-[14px] text-slate-800 font-normal py-1'>
                  <FieldTimeOutlined className='font-bold text-black dark:text-blue-600 mr-2' /> Tạo vào ngày{' '}
                  {postItem && postItem!.createAt}
                </p>
              )}
            </div>
            {postItem && postItem!.status[0] !== 'approved' && (
              <div className='w-1/3 flex flex-row justify-end items-center gap-4 px-2'>
                <p className='text-[14px] text-white font-normal bg-purple-500 px-2 rounded-md cursor-pointer hover:bg-purple-400 active:shadow-md active:shadow-purple-500 py-1'>
                  <HomeOutlined className='font-bold mr-2' /> Sửa
                </p>
                <p className='text-[14px] text-white font-normal bg-red-400 px-2 rounded-md cursor-pointer hover:bg-red-300 active:shadow-md active:shadow-red-400 py-1'>
                  <HomeOutlined className='font-bold mr-2' /> Xóa
                </p>
              </div>
            )}
            {user && user!.role[0] === 'applicant' && (
              <div className='sm:w-[30%] w-full flex gap-2'>
                <button className='w-full px-2 py-2 cursor-pointer rounded-md text-white text-[16px] font-bold bg-blue-500 line-clamp-1'>
                  Ứng tuyển ngay
                </button>
                <HeartOutlined className='bg-blue-50 text-blue-600 font-medium cursor-pointer p-2' />
              </div>
            )}
          </div>
        ) : (
          <>
            {(applied && applied === 'applied') ||
            applied === 'seen' ||
            applied === 'success' ||
            applied === 'reject' ? (
              <div className='w-full flex flex-col items-start justify-center'>
                <div className='w-full flex sm:flex-row flex-col justify-between py-2'>
                  <p className='text-[14px] text-slate-800 font-normal py-1'>
                    Hồ sơ ứng tuyển :{' '}
                    <strong className='text-blue-600 font-bold underline cursor-pointer'>Tải hồ sơ</strong>
                  </p>
                  <div className='sm:w-[50%] w-full flex gap-2'>
                    <button className='w-full px-2 py-1 cursor-pointer rounded-md text-blue-600 text-[16px] font-bold hover:bg-blue-100 bg-slate-200 line-clamp-1'>
                      <MessageOutlined /> Nhắn tin
                    </button>
                    <button className='w-full px-2 py-1 cursor-pointer rounded-md text-blue-600 text-[16px] font-bold hover:bg-blue-100 bg-slate-200 line-clamp-1'>
                      <EyeOutlined /> Xem hồ sơ
                    </button>
                  </div>
                </div>
                <p
                  className={`text-[14px] font-medium py-1 ${applied && applied === 'applied' ? 'text-blue-600' : 'text-orange-600'}`}
                >
                  {applied}
                </p>
              </div>
            ) : (
              <div className='w-full flex sm:flex-row flex-col justify-between py-4'>
                <div className='sm:w-3/4 w-full flex flex-row justify-start items-center gap-8'>
                  <p className='text-[14px] text-slate-800 font-normal py-1'>
                    <HomeOutlined className='font-bold text-black dark:text-blue-600 mr-2' /> 29 Tran Duc Thao
                  </p>
                  {user && user!.role[0] === 'applicant' ? (
                    <p className='text-[14px] text-slate-800 font-normal py-1'>
                      <FieldTimeOutlined className='font-bold text-black dark:text-blue-600 mr-2' /> Còn
                      <strong className='font-bold'> {days < expired && (expired - days).toFixed()} </strong> ngày để
                      ứng tuyển
                    </p>
                  ) : (
                    <p className='text-[14px] text-slate-800 font-normal py-1'>
                      <FieldTimeOutlined className='font-bold text-black dark:text-blue-600 mr-2' /> Tạo vào ngày{' '}
                      {postItem && postItem!.createAt}
                    </p>
                  )}
                </div>
                {postItem && postItem!.status[0] !== 'approved' && (
                  <div className='w-1/3 flex flex-row justify-end items-center gap-4 px-2'>
                    <p className='text-[14px] text-white font-normal bg-purple-500 px-2 rounded-md cursor-pointer hover:bg-purple-400 active:shadow-md active:shadow-purple-500 py-1'>
                      <HomeOutlined className='font-bold mr-2' /> Sửa
                    </p>
                    <p className='text-[14px] text-white font-normal bg-red-400 px-2 rounded-md cursor-pointer hover:bg-red-300 active:shadow-md active:shadow-red-400 py-1'>
                      <HomeOutlined className='font-bold mr-2' /> Xóa
                    </p>
                  </div>
                )}
                {user && user!.role[0] === 'applicant' && (
                  <div className='sm:w-[30%] w-full flex gap-2'>
                    <button className='w-full px-2 py-2 cursor-pointer rounded-md text-white text-[16px] font-bold bg-blue-500 line-clamp-1'>
                      Ứng tuyển ngay
                    </button>
                    <HeartOutlined className='bg-blue-50 text-blue-600 font-medium cursor-pointer p-2' />
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
      {user && user!.role[0] === 'applicant' ? (
        <p className='absolute right-4 top-2 text-end text-green-600 text-[18px] font-bold'>
          <MoneyCollectOutlined />
          {postItem && !postItem.salary ? postItem.salary : 'Thõa thuận'}
        </p>
      ) : (
        <p
          className={`absolute right-4 top-2 text-end text-[18px] font-bold ${postItem && postItem.status[0] !== 'approved' ? 'text-orange-500' : 'text-green-600'}`}
        >
          <MoneyCollectOutlined /> {postItem && postItem.status[0]}
        </p>
      )}
    </CardRow>
  );
};

export default PostCardRow;
