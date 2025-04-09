import { AgentCardComponent } from '@/components/organisms/system/Card/AgentCard';
import { useRouter } from 'next/navigation';

const RecruitmentRepresentative = () => {
  const router = useRouter();

  return (
    <div className='w-[90%] flex flex-col items-center'>
      <h2 className='text-2xl font-bold py-2'>Dai dien don vi tuyen dung</h2>
      <div className='w-[90%] flex sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 flex-col items-center justify-around gap-4 py-10'>
        {Array.from({ length: 4 }).map((_, index) => (
          <AgentCardComponent key={index + 1} onClick={() => router.push(`/system/business/${index + 1}`)} />
        ))}
      </div>
    </div>
  );
};

export default RecruitmentRepresentative;
