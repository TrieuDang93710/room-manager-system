import {
  AreaChartOutlined,
  BookOutlined,
  HomeOutlined,
  QuestionCircleOutlined,
  SettingOutlined
} from '@ant-design/icons';
import { ReactNode } from 'react';

const funcOfLessor: Map<string, string>[] = [
  new Map<string, string>([['statistical', 'Thống Kê']]),
  new Map<string, string>([['room', 'Quản Lý Phòng Trọ']]),
  new Map<string, string>([['user-tenant', 'Quản Lý Khách Thuê Trọ']]),
  new Map<string, string>([['maintenance', 'Quản Lý Bảo Trì']]),
  new Map<string, string>([['contract', 'Quản Lý Hợp Đồng']]),
  new Map<string, string>([['requirement', 'Quản Lý Yêu Cầu']])
];

const funcOfAdmin: Map<string, string>[] = [
  new Map<string, string>([['statistical', 'Thống Kê']]),
  new Map<string, string>([['room', 'Quản Lý Phòng Trọ']]),
  new Map<string, string>([['account', 'Quản Lý Tài Khoản']])
];

const funcOfTenant: Map<string, string>[] = [
  new Map<string, string>([['profile', 'Hồ Sơ Cá Nhân']]),
  new Map<string, string>([['history', 'Lịch Sử Thuê Trọ']]),
  new Map<string, string>([['requirement-status', 'Trạng Thái Yêu Cầu']]),
  new Map<string, string>([['follower', 'Người Theo Giỏi']]),
  new Map<string, string>([['saved', 'Lưu Bài Đăng']]),
  new Map<string, string>([['message', 'Tin Nhắn']]),
  new Map<string, string>([['pass-change', 'Đổi Mật Khẩu']])
];

const iconOfLessor: Map<string, ReactNode>[] = [
  new Map<string, ReactNode>([['statistical', <AreaChartOutlined key={1} />]]),
  new Map<string, ReactNode>([['room', <HomeOutlined key={2} />]]),
  new Map<string, ReactNode>([['user-tenant', <HomeOutlined key={2} />]]),
  new Map<string, ReactNode>([['maintenance', <SettingOutlined key={3} />]]),
  new Map<string, ReactNode>([['contract', <BookOutlined key={4} />]]),
  new Map<string, ReactNode>([['requirement', <QuestionCircleOutlined key={5} />]])
];

const iconOfAdmin: Map<string, ReactNode>[] = [
  new Map<string, ReactNode>([['statistical', <AreaChartOutlined key={1} />]]),
  new Map<string, ReactNode>([['room', <HomeOutlined key={2} />]]),
  new Map<string, ReactNode>([['account', <HomeOutlined key={2} />]])
];

const iconOfTenant: Map<string, ReactNode>[] = [
  new Map<string, ReactNode>([['profile', <AreaChartOutlined key={1} />]]),
  new Map<string, ReactNode>([['history', <HomeOutlined key={2} />]]),
  new Map<string, ReactNode>([['requirement-status', <HomeOutlined key={2} />]]),
  new Map<string, ReactNode>([['follower', <SettingOutlined key={3} />]]),
  new Map<string, ReactNode>([['saved', <BookOutlined key={4} />]]),
  new Map<string, ReactNode>([['message', <BookOutlined key={5} />]]),
  new Map<string, ReactNode>([['pass-change', <QuestionCircleOutlined key={6} />]])
];

export { funcOfLessor, funcOfAdmin, funcOfTenant, iconOfLessor, iconOfAdmin, iconOfTenant };
