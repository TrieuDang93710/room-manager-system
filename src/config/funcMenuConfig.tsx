import {
  AreaChartOutlined,
  BookOutlined,
  HomeOutlined,
  QuestionCircleOutlined,
  SettingOutlined
} from '@ant-design/icons';
import { ReactNode } from 'react';

const funcOfLessor: Map<string, string>[] = [
  new Map<string, string>([['statistical', 'Thong ke']]),
  new Map<string, string>([['room', 'Quan ly phong tro']]),
  new Map<string, string>([['user-tenant', 'Quan ly khach thue']]),
  new Map<string, string>([['maintenance', 'Quan ly bao tri']]),
  new Map<string, string>([['contract', 'Quan ly hop dong']]),
  new Map<string, string>([['requirement', 'Quan ly yeu cau']])
];

const funcOfAdmin: Map<string, string>[] = [
  new Map<string, string>([['statistical', 'Thong ke']]),
  new Map<string, string>([['room', 'Quan ly phong tro']]),
  new Map<string, string>([['account', 'Quan ly tai khoan']])
];

const funcOfTenant: Map<string, string>[] = [
  new Map<string, string>([['profile', 'Ho so ca nhan']]),
  new Map<string, string>([['history', 'Lich su thue tro']]),
  new Map<string, string>([['requirement-status', 'Trang thai yeu cau']]),
  new Map<string, string>([['follower', 'Nguoi theo gioi']]),
  new Map<string, string>([['saved', 'Luu bai dang']]),
  new Map<string, string>([['message', 'Tin nhan']]),
  new Map<string, string>([['pass-change', 'Doi mat khau']])
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
