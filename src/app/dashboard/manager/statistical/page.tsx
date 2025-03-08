'use client';
import { Card } from '@/components/molecules/Card';
import PaginationComponent from '@/components/molecules/Pagination/pagination';
import SearchComponent from '@/components/molecules/Search';
import MaintenanceCard from '@/components/organisms/FuncManager/maintenance-card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { chartConfig, chartConfigCircle } from '@/config/chart.config';
import { chartData, chartDataCircle, listRoom } from '@/faker/data';
import { BarChartOutlined } from '@ant-design/icons';
import { CartesianGrid, Line, LineChart, Pie, PieChart, XAxis } from 'recharts';

const StatisticalManagerPage = () => {
  return (
    <div className='w-full flex flex-col items-end gap-6 snap-y pt-20 md:px-3'>
      <div className='md:w-[84%] w-full py-3 md:pr-10 md:flex justify-center items-center md:gap-3 gap-y-2'>
        {listRoom.map((r) => {
          return <MaintenanceCard key={r._id} title='Tổng Phòng' icon={<BarChartOutlined />} />;
        })}
      </div>
      <div className='md:w-[84%] w-full py-3 md:pr-10 md:flex md:gap-3 gap-y-2'>
        <Card className='md:w-1/2 w-full dark:bg-[#1a1a1a] mb-5'>
          <p className='text-[#292929] dark:text-[#e6e6e6] font-bold text-[15px] pb-3'>Thống Kê Doanh Thu</p>
          <Card className='w-full dark:bg-[#ffffff00]'>
            <ChartContainer className='dark:bg-[#1a1a1a]' config={chartConfig}>
              <LineChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: 12,
                  right: 12
                }}
                className='dark:bg-none'
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey='month'
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Line dataKey='doanh_thu' type='monotone' stroke='var(--color-desktop)' strokeWidth={2} dot={true} />
                <Line dataKey='chi_phi' type='monotone' stroke='var(--color-mobile)' strokeWidth={2} dot={true} />
              </LineChart>
            </ChartContainer>
          </Card>
        </Card>
        <Card className='md:w-1/2 w-full dark:bg-[#1a1a1a]'>
          <p className='text-[#292929] font-bold text-[15px] pb-10 dark:text-[#e6e6e6]'>Các Khoản Chi</p>
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
      <div className='md:w-[84%] w-full dark:bg-[#1a1a1a00] md:pr-10'>
        <Card className='w-full dark:bg-[#ffffff00] h-1/2'>
          <p className='text-[#292929] font-bold text-[15px] pb-2 dark:text-[#e6e6e6]'>Danh Sách Phòng Cho Thuê</p>
          <p className='text-[#333333] font-bold text-[12px] pb-4 dark:text-[#e6e6e6]'>Mô tả</p>
          <div className='flex items-end justify-end'>
            <SearchComponent />
          </div>
          <br />
          {/* <TableComponent /> */}
          <div className='w-full flex justify-end h-1/2 py-2'>
            <PaginationComponent />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default StatisticalManagerPage;
