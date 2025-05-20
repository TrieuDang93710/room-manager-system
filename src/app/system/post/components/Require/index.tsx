/* eslint-disable @typescript-eslint/no-explicit-any */
import { SortAscendingOutlined } from "@ant-design/icons"

interface RequireInformationProps {
    postItem: any
}

const RequireInformation = ({postItem}: RequireInformationProps) => {
    return (
        <div className='w-full flex flex-col items-start justify-start rounded-md shadow-sm shadow-slate-600 dark:shadow-md dark:shadow-blue-600 gap-4 px-2 py-4'>
        <h3 className='font-bold text-[20px] text-black dark:text-blue-600 mb-4'>Thong tin chung</h3>
        <div className='w-full flex flex-row items-center justify-start gap-4'>
          <SortAscendingOutlined className='font-bold p-2 rounded-full bg-blue-500 text-white hover:bg-blue-200 hover:text-blue-600' />
          <p className='w-full flex flex-col items-start text-[16px] text-black dark:text-white text-start font-bold line-clamp-3 leading-6'>
            <strong className='font-normal dark:text-blue-600'>Cấp bậc : </strong>
            <span>{postItem && postItem!.require.level}</span>
          </p>
        </div>
        <div className='w-full flex flex-row items-center justify-start gap-4'>
          <SortAscendingOutlined className='font-bold p-2 rounded-full bg-blue-500 text-white hover:bg-blue-200 hover:text-blue-600' />
          <p className='w-full flex flex-col items-start text-[16px] text-black dark:text-white text-start font-bold line-clamp-3 leading-6'>
            <strong className='font-normal dark:text-blue-600'>Trình độ : </strong>
            <span>{postItem && postItem!.require.education}</span>
          </p>
        </div>
        <div className='w-full flex flex-row items-center justify-start gap-4'>
          <SortAscendingOutlined className='font-bold p-2 rounded-full bg-blue-500 text-white hover:bg-blue-200 hover:text-blue-600' />
          <p className='w-full flex flex-col items-start text-[16px] text-black dark:text-white text-start font-bold line-clamp-3 leading-6'>
            <strong className='font-normal dark:text-blue-600'>Số luọng tuyển : </strong>
            <span>{postItem && postItem!.require.quantity} nguoi</span>
          </p>
        </div>
        <div className='w-full flex flex-row items-center justify-start gap-4'>
          <SortAscendingOutlined className='font-bold p-2 rounded-full bg-blue-500 text-white hover:bg-blue-200 hover:text-blue-600' />
          <p className='w-full flex flex-col items-start text-[16px] text-black dark:text-white text-start font-bold line-clamp-3 leading-6'>
            <strong className='font-normal dark:text-blue-600'>Hình thức làm việc : </strong>
            <span>{postItem && postItem!.work_type}</span>
          </p>
        </div>
      </div>
    )
}

export default RequireInformation