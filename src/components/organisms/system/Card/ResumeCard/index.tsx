/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DeleteOutlined,
  DownloadOutlined,
  EditOutlined,
  HomeOutlined,
  ShareAltOutlined,
  ToTopOutlined
} from '@ant-design/icons';
import CardSquare from '../Square';

interface ResumeCardComponentProps {
  onClick: () => void;
  resumeItem?: any;
  updateHandler?: () => void;
}

const ResumeCardComponent = ({ onClick, resumeItem, updateHandler }: ResumeCardComponentProps) => {
  if (!resumeItem) {
    throw new Error('error');
  }
  return ( 
    <CardSquare logo={resumeItem.image}>
      <div className='w-full px-2'>
        <p className='text-[13px] text-slate-800 dark:text-blue-600 font-normal'>{resumeItem.job}</p>
        <h3 className='text-[18px] text-black dark:text-blue-600 font-bold py-2 line-clamp-2'>{resumeItem.title}</h3>
        <p className='text-[13px] text-slate-800 font-normal py-1'>
          <HomeOutlined className='font-bold text-black dark:text-blue-600 mr-2' />{' '}
          {/* {resumeItem.applicant.user.address !== null ? resumeItem.applicant.user.address.village : 'Chưa cập nhật'} */}
          Chưa cập nhật
        </p>
        <p className='text-[13px] text-slate-800 font-normal py-1'>
          <strong className='font-bold text-black dark:text-blue-600'>Cap nhat : </strong> Sua <EditOutlined onClick={updateHandler} />
        </p>
        <div className='w-full flex md:flex-row md:justify-between flex-col items-center justify-center gap-2 py-2'>
          <button className='p-2 cursor-pointer rounded-sm text-blue-800 hover:text-white text-[10px] font-medium hover:bg-blue-500 bg-blue-100'>
            <ToTopOutlined />
          </button>
          <button className='p-2 cursor-pointer rounded-sm text-blue-800 hover:text-white text-[10px] font-medium hover:bg-blue-500 bg-blue-100'>
            <ShareAltOutlined />
          </button>
          <button className='p-2 cursor-pointer rounded-sm text-blue-800 hover:text-white text-[10px] font-medium hover:bg-blue-500 bg-blue-100'>
            <DownloadOutlined />
          </button>
          <DeleteOutlined />
        </div>
        <p className='text-[13px] text-slate-800 font-normal py-1'>
          <strong className='font-bold text-black dark:text-blue-600'>Cap nhat : </strong>2 ngay truoc.
        </p>
      </div>
      <button
        onClick={onClick}
        className='py-2 px-2 rounded-md text-blue-600 text-[16px] font-bold hover:bg-blue-200 hover:text-blue-600 active:shadow-sm active:shadow-gray-600'
      >
        Xem them
      </button>
    </CardSquare>
  );
};

export default ResumeCardComponent;
