import AddComponent from '@/components/molecules/AddComp';

const MoreDetailInformation = () => {
  return (
    <div className='w-full flex flex-col items-start justify-center py-4 px-8 gap-4'>
      <AddComponent title='Kinh nghiem' action={true}>
        <div className='w-full flex flex-col items-start justify-start gap-4'>
          {Array.from({ length: 1 }).map((_, index) => (
            <div
              key={index + 1}
              className='w-2/3 flex flex-col items-start justify-start gap-4 p-2 border border-green-500'
            >
              <div className='w-full flex flex-row items-start justify-between'>
                <div className='w-1/3 flex flex-col items-start justify-center gap-2'>
                  <h3 className='text-black text-[20px] font-bold line-clamp-2'>Nhan vien sale</h3>
                  <p className='text-black text-[14px] font-normal line-clamp-1'>Cong ty ABC</p>
                </div>
                <p className='text-black text-[16px] font-medium'>2018 - 2020</p>
              </div>
              <ul className='list-disc flex flex-col items-start justify-start gap-2 px-8'>
                {Array.from({ length: 4 }).map((_, index) => (
                  <li key={index + 1} className='text-black text-[16px] font-normal line-clamp-2'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </AddComponent>
      <AddComponent title='Chuyen mon' action={true}>
        {Array.from({ length: 3 }).map((_, index) => (
          <h3 key={index} className='text-black text-[16px] font-normal'>
            Giao tiep cuon hut
          </h3>
        ))}
      </AddComponent>
    </div>
  );
};

export default MoreDetailInformation;
