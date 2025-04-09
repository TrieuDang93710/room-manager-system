/* eslint-disable @typescript-eslint/no-explicit-any */
import { HomeOutlined, SlackSquareOutlined, UsergroupAddOutlined } from '@ant-design/icons';

interface BusinessInformationProps {
  postItem: any;
}

const BusinessInformation = ({ postItem }: BusinessInformationProps) => {
  return (
    <div className='w-full flex flex-col items-center justify-start rounded-md shadow-sm shadow-slate-600 dark:shadow-md dark:shadow-blue-600 px-2 py-4'>
      <div className='w-full flex flex-row items-center justify-start gap-3'>
        <div
          className='w-[20%] h-[10vh] bg-center bg-contain bg-no-repeat'
          style={{
            backgroundImage:
              "url('https://www.freeiconspng.com/thumbs/business-icon-png/corporate-icon-png-autocorrect-for-business-13.png')"
          }}
        ></div>
        <h3 className='text-black dark:text-blue-600 font-bold line-clamp-3'>{postItem && postItem!.company.title}</h3>
      </div>
      <p className='w-full text-[16px] text-black dark:text-white text-start font-bold line-clamp-2 leading-8'>
        <strong className='font-normal dark:text-blue-600'>
          <UsergroupAddOutlined /> Quy mô :
        </strong>
        {postItem && postItem!.company.scale} nhân viên
      </p>
      <p className='w-full text-[16px] text-black dark:text-white text-start font-bold line-clamp-2 leading-8'>
        <strong className='font-normal dark:text-blue-600'>
          <SlackSquareOutlined /> Lĩnh vực :
        </strong>
        {postItem && postItem!.type_of_post.title}
      </p>
      <p className='w-full text-[16px] text-black dark:text-white text-start font-bold line-clamp-2 leading-8'>
        <strong className='font-normal dark:text-blue-600'>
          <HomeOutlined /> Địa điểm :
        </strong>
        {postItem && postItem!.company.work_place.address.city}
      </p>
    </div>
  );
};

export default BusinessInformation;
