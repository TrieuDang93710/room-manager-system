interface CheckboxCardProps {
  title?: string;
  array?: [];
}

const CheckboxCard = ({ title }: CheckboxCardProps) => {
  const n = 5;
  const render = n > 5 ? 4 : n;
  return (
    <div className='w-full px-2 flex flex-col justify-start items-start gap-2'>
      <p className='text-[14px] text-slate-800 font-bold'>{title}</p>
      <ul className='w-full py-1 list-none'>
        {Array.from({ length: render }).map((_, index) => (
          <li key={index} className='w-full flex flex-row items-center justify-start py-1 gap-2'>
            <input type='checkbox' className='size-4 text-green-500' />
            <p className='text-[13px] font-normal text-black'>Kinh doanh</p>
          </li>
        ))}
        {!(n < 4) && (
          <li className='w-full flex flex-row items-center justify-start px-3 mt-2'>
            <p className='text-[13px] font-normal text-black'>Xem them</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default CheckboxCard;
