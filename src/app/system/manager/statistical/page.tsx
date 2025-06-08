'use client';
import { Card } from '@/components/molecules/Card';
import MaintenanceCard from '@/components/organisms/manager/MaintenanceCard';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { chartConfigCircle } from '@/config/chart.config';
import { chartDataCircle } from '@/faker/data';
import { useAuth } from '@/hooks/auth/useAuth';
import { NumberOutlined } from '@ant-design/icons';
import { Pie, PieChart } from 'recharts';

const StatisticalManagerPage = () => {
  const auth = useAuth();
  const { user } = auth;
  // const [newsTotal, setNewsTotal] = useState<number>(0);
  // let total: number = 0;

  // useEffect(() => {
  //   user!.manager?.packages.map((item: any) => {
  //     total = total + item.news_quantity;
  //     setNewsTotal(total);
  //   });
  // }, [total, setNewsTotal, user]);

  return (
    <div className='relative w-full h-screen flex flex-col items-end gap-6 snap-y md:px-3'>
      <div className='w-full h-fit py-3 px-3 flex-col justify-center md:gap-3 gap-y-2'>
        <div className='flex sm:flex-row flex-col sm:items-center sm:justify-start items-start justify-start border shadow-sm shadow-slate-500 dark:bg-blue-700 dark:border-none rounded-sm px-2 py-1 gap-1'>
          <h3 className='text-[16px] text-black dark:text-white font-bold hover:text-blue-500 hover:underline-offset-1 cursor-default px-2 py-1'>
            Thống kê chung
          </h3>
        </div>
        <div className='w-full h-[75vh] flex flex-col items-center justify-start hide-scrollbar overflow-y-auto gap-4 p-4 mt-4'>
          <div className='w-full py-3 flex md:flex-row flex-col md:justify-center justify-start items-center gap-3'>
            <MaintenanceCard
              count={user && user!.manager?.news}
              title='Tổng số tin cho phép'
              icon={<NumberOutlined className='text-blue-500' />}
            />
            <MaintenanceCard
              count={0}
              title='Số tin đã đăng ký gói mới'
              icon={<NumberOutlined className='text-blue-500' />}
            />
            <MaintenanceCard
              count={user && user!.manager?.news - user!.manager?.posts.length}
              title='Tổng số tin còn lại'
              icon={<NumberOutlined className='text-blue-500' />}
            />
          </div>
          <div className='w-full py-3 md:pr-10 flex flex-row items-start justify-start gap-3 gap-y-2'>
            <Card className='md:w-1/2 w-full dark:bg-[#1a1a1a]'>
              <p className='text-[#292929] font-bold text-[15px] pb-10 dark:text-blue-600'>Các Khoản Chi</p>
              <Card className='w-full dark:bg-[#ffffff00]'>
                <ChartContainer
                  config={chartConfigCircle}
                  className='dark:bg-[#1a1a1a] mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground'
                >
                  <PieChart>
                    <ChartTooltip content={<ChartTooltipContent className='dark:text-[#ffffff]' hideLabel />} />
                    <Pie data={chartDataCircle} dataKey='visitors' label nameKey='browser' />
                  </PieChart>
                </ChartContainer>
              </Card>
            </Card>
          </div>
          {/* <div className='w-full dark:bg-[#1a1a1a00] md:pr-10'>
            <Card className='w-full dark:bg-[#ffffff00]'>
              <p className='text-[#292929] font-bold text-[15px] pb-2 dark:text-blue-600'>Danh Sách Các Bài Đăng</p>
              <p className='text-[#333333] font-bold text-[12px] pb-4 dark:text-blue-600'>
                Dưới đây là thống kê các bài đăng mới nhất trên hệ thống.
              </p>
              <div className='flex items-end justify-end'>
                <SearchComponent />
              </div>
              <br />
              <div className='w-full flex justify-end h-1/2 py-2'>
                <PaginationComponent />
              </div>
            </Card>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default StatisticalManagerPage;
