import { HomeOutlined } from '@ant-design/icons';
import CardSquare from '../Square';

interface PostingApplicantComponentProps {
  onClick?: () => void;
}

export const PostingApplicantComponent = ({ onClick }: PostingApplicantComponentProps) => {
  return (
    <CardSquare>
      <div className='w-full px-2'>
        <p className='text-[13px] text-slate-800 font-normal'>Nhan vien phuc vu</p>
        <h3 className='text-[18px] text-black font-bold py-2 line-clamp-2'>Dang Binh Trieu</h3>
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
        className='w-1/2 py-2 rounded-md text-green-500 text-[16px] font-bold hover:bg-green-200 hover:text-green-800 active:shadow-sm active:shadow-gray-600'
      >
        Xem them
      </button>
    </CardSquare>
  );
};
