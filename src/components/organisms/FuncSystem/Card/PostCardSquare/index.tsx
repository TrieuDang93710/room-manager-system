import { FieldTimeOutlined, HomeOutlined } from '@ant-design/icons';
import CardSquare from '../Square';
import CurrencyFormatted from '@/config/currency.config';

interface PostCardSquareComponentProps {
  onClick?: () => void;
}

export const PostCardSquareComponent = ({ onClick }: PostCardSquareComponentProps) => {
  return (
    <CardSquare>
      <div className='w-full px-2'>
        <p className='text-[13px] text-slate-800 font-normal'>Kinh doanh</p>
        <h3 className='text-[18px] text-black font-bold py-2 line-clamp-2'>Nhan vien phuc vu</h3>
        <p className='text-[13px] text-slate-800 font-normal py-1'>
          <HomeOutlined className='font-bold text-black mr-2' /> 29 Tran Duc Thao
        </p>
        <p className='text-[13px] text-slate-800 font-normal py-1'>
          <strong className='font-bold text-black'>Hinh thuc : </strong>Toan thoi gian
        </p>
        <p className='text-[13px] text-slate-800 font-normal py-1'>
          <strong className='font-bold text-black line-clamp-2'>Yeu cau : </strong>Chi nam, nhanh nhen va thao vac.
        </p>
        <p className='text-[13px] text-slate-800 font-normal py-1'>
          <strong className='font-bold text-black'>Luong : </strong>
          {CurrencyFormatted({ value: 20000, code: 'VND' })} / gio
        </p>
        <div className='w-full flex justify-between'>
          <p className='text-[13px] text-slate-800 font-normal py-1'>
            <strong className='font-bold text-black'>Time : </strong>06/03/2025
          </p>
          <p className='text-[13px] text-slate-800 font-normal py-1'>
            <strong className='font-bold text-black'>
              <FieldTimeOutlined /> :{' '}
            </strong>
            1 days
          </p>
        </div>
        <p className='text-[13px] text-slate-800 font-normal py-1'>
          <strong className='font-bold text-black'>Cap nhat : </strong>2 ngay truoc.
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
