/* eslint-disable @typescript-eslint/no-explicit-any */
import { AgentCardComponent } from '@/components/organisms/system/Card/AgentCard';
import useBusiness from '@/hooks/useBusiness';
import { useRouter } from 'next/navigation';

const RecruitmentRepresentative = () => {
  const router = useRouter();
  const { useBusinessSearch } = useBusiness();
  const { businesses } = useBusinessSearch({});

  return (
    <div className='sm:w-[70%] w-full flex flex-col items-center mt-4'>
      <h2 className='text-2xl font-bold py-2 text-blue-600'>Các Công Ty Đăng Tuyển</h2>
      <div
        className={`${businesses.length <= 4 ? 'flex flex-row items-center justify-center' : 'sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'} w-[90%] gap-4 px-4 py-10`}
      >
        {businesses.map((item: any, index: any) => (
          <AgentCardComponent
            key={index + 1}
            companyItem={item}
            onClick={() => router.push(`/system/business/${index + 1}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default RecruitmentRepresentative;
