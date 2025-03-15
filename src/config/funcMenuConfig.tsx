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
  new Map<string, string>([['post', 'Quản Lý Bài Đăng']]),
  new Map<string, string>([['resume-status', 'Quản Lý Trạng Thái']]),
  new Map<string, string>([['applicant', 'Quản Lý Ứng Viên']])
];

const iconOfLessor: Map<string, ReactNode>[] = [
  new Map<string, ReactNode>([['statistical', <AreaChartOutlined key={1} />]]),
  new Map<string, ReactNode>([['post', <HomeOutlined key={2} />]]),
  new Map<string, ReactNode>([['resume-status', <HomeOutlined key={3} />]]),
  new Map<string, ReactNode>([['applicant', <HomeOutlined key={4} />]])
];

const funcOfAdmin: Map<string, string>[] = [
  new Map<string, string>([['statistical', 'Thống Kê']]),
  new Map<string, string>([['post', 'Quản Lý Bài Đăng']]),
  new Map<string, string>([['account', 'Quản Lý Tài Khoản']]),
  new Map<string, string>([['account', 'Quản Lý Dịch vụ']])
];

const iconOfAdmin: Map<string, ReactNode>[] = [
  new Map<string, ReactNode>([['statistical', <AreaChartOutlined key={1} />]]),
  new Map<string, ReactNode>([['post', <HomeOutlined key={2} />]]),
  new Map<string, ReactNode>([['account', <HomeOutlined key={3} />]]),
  new Map<string, ReactNode>([['account', <HomeOutlined key={4} />]])
];

const funcOfTenant: Map<string, string>[] = [
  new Map<string, string>([['profile', 'Hồ Sơ Cá Nhân']]),
  new Map<string, string>([['history', 'Trạng Thái Ứng Tuyển']]),
  new Map<string, string>([['resume', 'Quản Lý Đăng Ký']]),
  new Map<string, string>([['follower', 'Người Theo Giỏi']]),
  new Map<string, string>([['saved', 'Lưu Bài Đăng']])
];

const iconOfTenant: Map<string, ReactNode>[] = [
  new Map<string, ReactNode>([['profile', <AreaChartOutlined key={1} />]]),
  new Map<string, ReactNode>([['history', <HomeOutlined key={2} />]]),
  new Map<string, ReactNode>([['resume', <HomeOutlined key={3} />]]),
  new Map<string, ReactNode>([['follower', <SettingOutlined key={4} />]]),
  new Map<string, ReactNode>([['saved', <BookOutlined key={5} />]])
];

export { funcOfLessor, funcOfAdmin, funcOfTenant, iconOfLessor, iconOfAdmin, iconOfTenant };
