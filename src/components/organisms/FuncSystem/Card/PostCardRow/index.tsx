import { FieldTimeOutlined, HeartOutlined, HomeOutlined, MoneyCollectOutlined } from '@ant-design/icons';
import CardRow from '../Row';

const PostCardRow = () => {
  return (
    <CardRow>
      <div className='w-full h-full p-2'>
        <h3 className='text-[18px] text-black font-bold line-clamp-2'>Nhan vien phuc vu</h3>
        <h3 className='text-[18px] text-black font-normal line-clamp-2'>Quan cafe Minh Tan</h3>
        <p className='text-[14px] text-slate-900 font-normal py-2 line-clamp-2'>Cap nhat 1 days truoc.</p>
        <div className='w-full flex sm:flex-row flex-col justify-between py-4'>
          <div className='sm:w-3/4 w-full flex flex-row justify-start items-center gap-8'>
            <p className='text-[14px] text-slate-800 font-normal py-1'>
              <HomeOutlined className='font-bold text-black mr-2' /> 29 Tran Duc Thao
            </p>
            <p className='text-[14px] text-slate-800 font-normal py-1'>
              <FieldTimeOutlined className='font-bold text-black mr-2' /> Con <strong className='font-bold'>24</strong>{' '}
              gio de ung tuyen
            </p>
          </div>
          <div className='sm:w-[30%] w-full flex gap-2'>
            <button className='w-full px-2 py-2 rounded-md text-white text-[16px] font-bold bg-green-500 line-clamp-1'>
              Ung tuyen ngay
            </button>
            <HeartOutlined className='bg-slate-100 text-green-500 font-medium cursor-pointer p-2' />
          </div>
        </div>
      </div>
      <p className='absolute right-4 top-2 text-end text-green-600 text-[18px] font-bold'>
        <MoneyCollectOutlined /> Thoa thuan
      </p>
    </CardRow>
  );
};

export default PostCardRow;
