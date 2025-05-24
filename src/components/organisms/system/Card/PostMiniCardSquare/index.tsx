import CurrencyFormatted from '@/config/currency.config';
import CardSquare from '../Square';
import { Button } from '@/components/ui/button';
import { HeartOutlined } from '@ant-design/icons';

interface PostMiniCardSquareProps {
  onHover: () => void;
}

const PostMiniCardSquare = ({ onHover }: PostMiniCardSquareProps) => {
  return (
    <CardSquare onHover={onHover}>
      <div className='w-full px-2'>
        <h3 className='text-[18px] text-black dark:text-blue-800 font-bold py-2 line-clamp-2'>
          Nhân viên kinh doanh - đi làm ngay
        </h3>
        <p className='text-[13px] text-slate-800 font-normal py-1'>Công ty cổ phần và đầu tư tiến đạt</p>
        <div className='w-full flex flex-row items-center justify-between'>
          <div className='w-full flex md:flex-row flex-col md:items-center items-start gap-2'>
            <p className='text-[13px] bg-slate-200 text-slate-800 font-normal rounded-full py-1 px-2'>
              {CurrencyFormatted({ value: 20000, code: 'VND' })}
            </p>
            <p className='text-[13px] bg-slate-200 text-slate-800 font-normal rounded-full py-1 px-2'>Đà Nẵng</p>
          </div>
          <Button
            onClick={() => alert('Click me')}
            className='right-2 w-9 text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white font-bold rounded-full flex justify-center items-center p-2'
            variant={'outline'}
            size={'sm'}
          >
            <HeartOutlined />
          </Button>
        </div>
      </div>
    </CardSquare>
  );
};

export default PostMiniCardSquare;
