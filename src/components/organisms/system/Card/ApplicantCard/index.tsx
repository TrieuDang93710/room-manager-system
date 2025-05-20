/* eslint-disable @typescript-eslint/no-explicit-any */
import { HomeOutlined } from '@ant-design/icons';
import CardSquare from '../Square';

interface ApplicantCardComponentProps {
  onClick: (id: any) => void;
  itemDetail: any;
}

export const ApplicantCardComponent = ({ onClick, itemDetail }: ApplicantCardComponentProps) => {
  if (!itemDetail) {
    return 'Error';
  }

  return (
    <CardSquare>
      <div className='w-full px-2'>
        <p className='text-[13px] text-slate-800 font-normal'>{itemDetail && itemDetail!.job}</p>
        <h3 className='text-[18px] text-black font-bold py-2 line-clamp-2'>{itemDetail && itemDetail!.title}</h3>
        <p className='text-[13px] text-slate-800 font-normal py-1'>
          <HomeOutlined className='font-bold text-black mr-2' /> 29 Tran Duc Thao
        </p>
        <p className='text-[13px] text-slate-800 font-normal py-1'>
          <strong className='font-bold text-black'>Gioi tinh : </strong>Nam
        </p>
        <p className='text-[13px] text-slate-800 font-normal py-1'>
          <strong className='font-bold text-black'>Tuoi : </strong>22
        </p>
        <p className='text-[13px] text-slate-800 font-normal py-1'>
          <strong className='font-bold text-black'>Trinh do : </strong>Dai hoc chinh quy
        </p>
        <p className='text-[13px] text-slate-800 font-normal py-1'>
          <strong className='font-bold text-black line-clamp-2'>Kinh nghiem : </strong>1 nam kinh nghiem
        </p>
        <p className='text-[13px] text-slate-800 font-normal py-1'>
          <strong className='font-bold text-black'>Trang thai : </strong>Cong khai
        </p>
      </div>
      <button
        onClick={onClick}
        className='w-1/2 py-2 z-50 rounded-md text-blue-600 text-[16px] font-bold hover:bg-blue-200 hover:text-blue-600 active:shadow-sm active:shadow-gray-600 cursor-pointer'
      >
        Xem them
      </button>
    </CardSquare>
  );
};
