/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { Card } from '@/components/molecules/Card';
import PaginationComponent from '@/components/molecules/Pagination/pagination';
import SearchComponent from '@/components/molecules/Search';
import TableComponent from '@/components/molecules/Table';
import MaintenanceCard from '@/components/organisms/manager/MaintenanceCard';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { chartConfig, chartConfigCircle } from '@/config/chart.config';
import { chartData, chartDataCircle } from '@/faker/data';
import usePost from '@/hooks/usePost';
import useUser from '@/hooks/useUser';
import { FileExcelOutlined, NumberOutlined, TeamOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { CartesianGrid, Line, LineChart, Pie, PieChart, XAxis } from 'recharts';

const StatisticalAdminPage = () => {
  const { usePostsSearch } = usePost();
  const { posts } = usePostsSearch();
  const { users } = useUser();
  const [postSort, setPostSort] = useState<any[]>([]);
  const [postRemoved, setPostRemoved] = useState<any[]>([]);

  useEffect(() => {
    setPostSort(posts.sort((a: any, b: any) => a.id - b.id));
    setPostRemoved(posts.filter((item: any) => item.status[0] === 'cancelled'));
  }, [posts]);

  const headers = ['#', 'Tiêu đề', 'Lĩnh vực', 'Doanh nghiệp', 'Địa điểm', 'Trạng thái'];

  const renderRow = (post: any) => (
    <>
      <td className='truncate px-2'>{post.id}</td>
      <td className='truncate px-2'>{post.title}</td>
      <td className='truncate px-2'>{post.type_of_post.title}</td>
      <td className='truncate px-2'>{post.company.title}</td>
      <td className='truncate px-2'>{post.company.work_place.address.city}</td>
      <td className={`truncate px-2 ${post.status[0] !== 'approved' ? 'text-orange-600 font-bold' : 'text-green-600'}`}>
        {post.status[0]}
      </td>
    </>
  );

  return (
    <div className='relative w-full h-screen bg-[#f7f7f7] dark:bg-[#242424] flex flex-col items-end gap-6 snap-y pt-20 md:px-3'>
      <div className='w-full h-fit py-3 px-3 flex-col justify-center md:gap-3 gap-y-2'>
        <div className='flex sm:flex-row flex-col sm:items-center sm:justify-start items-start justify-start border shadow-sm shadow-slate-500 rounded-sm px-2 py-1 gap-1'>
          <h3 className='text-[16px] text-black font-bold hover:text-blue-500 hover:underline-offset-1 cursor-default px-2 py-1'>
            Thống kê chung
          </h3>
        </div>
        <div className='w-full border h-[75vh] border-green-500 flex flex-col items-center justify-start hide-scrollbar overflow-y-auto gap-4 p-4 mt-4'>
          <div className='w-full py-3 md:flex justify-center items-center md:gap-3 gap-y-2'>
            <MaintenanceCard
              count={postSort.length}
              title='Tổng bài đăng'
              icon={<NumberOutlined className='text-blue-500' />}
            />
            <MaintenanceCard
              count={postRemoved.length}
              title='Bài đăng đã bị hủy'
              icon={<FileExcelOutlined className='text-red-500' />}
            />
            <MaintenanceCard
              count={users.length}
              title='Tổng số người dùng'
              icon={<TeamOutlined className='text-blue-500' />}
            />
          </div>
          <div className='w-full py-3 md:pr-10 md:flex md:gap-3 gap-y-2'>
            <Card className='md:w-1/2 w-full dark:bg-[#1a1a1a] mb-5'>
              <p className='text-[#292929] dark:text-[#e6e6e6] font-bold text-[15px] pb-3'>Thống kê bài đăng</p>
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
                    <Line
                      dataKey='Da_huy'
                      type='monotone'
                      stroke='var(--color-desktop)'
                      strokeWidth={2}
                      dot={true}
                    />
                    <Line dataKey='Tong_bai_dang' type='monotone' stroke='var(--color-mobile)' strokeWidth={2} dot={true} />
                  </LineChart>
                </ChartContainer>
              </Card>
            </Card>
            <Card className='md:w-1/2 w-full dark:bg-[#1a1a1a]'>
              <p className='text-[#292929] font-bold text-[15px] pb-10 dark:text-[#e6e6e6]'>Thống kê tài khoản</p>
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
          <div className='w-full dark:bg-[#1a1a1a00] md:pr-10'>
            <Card className='w-full dark:bg-[#ffffff00]'>
              <p className='text-[#292929] font-bold text-[15px] pb-2 dark:text-blue-600'>Danh Sách Các Bài Đăng</p>
              <p className='text-[#333333] font-bold text-[12px] pb-4 dark:text-blue-600'>
                Dưới đây là thống kê các bài đăng mới nhất trên hệ thống.
              </p>
              <div className='flex items-end justify-end'>
                <SearchComponent />
              </div>
              <br />
              <TableComponent headers={headers} data={postSort} renderRow={renderRow} />
              <div className='w-full flex justify-end h-1/2 py-2'>
                <PaginationComponent />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticalAdminPage;
