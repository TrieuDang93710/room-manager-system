import { AreaChartOutlined, BookOutlined, HomeOutlined, SettingOutlined } from '@ant-design/icons';

const funcOfManager = [
  { label: 'Thống Kê', icon: <AreaChartOutlined />, path: 'statistical' },
  { label: 'Quản Lý Bài Đăng', icon: <HomeOutlined />, path: 'post' },
  { label: 'Quản Lý Trạng Thái', icon: <HomeOutlined />, path: 'resume-status' },
  { label: 'Quản Lý Ứng Viên', icon: <HomeOutlined />, path: 'applicant' }
];

const funcOfApplicant = [
  { label: 'Hồ Sơ Cá Nhân', icon: <AreaChartOutlined />, path: 'profile' },
  { label: 'Trạng Thái Ứng Tuyển', icon: <HomeOutlined />, path: 'history' },
  { label: 'Quản Lý Đăng Ký', icon: <HomeOutlined />, path: 'resume' },
  { label: 'Người Theo Giỏi', icon: <SettingOutlined />, path: 'follower' },
  { label: 'Lưu Bài Đăng', icon: <BookOutlined />, path: 'saved' }
];

const funcOfAdmin = [
  { label: 'Thống Kê', icon: <AreaChartOutlined />, path: 'statistical' },
  {
    label: 'Quản Lý Các Chức Năng',
    icon: <HomeOutlined />,
    path: 'func-management',
    children: [
      { label: 'Quản Lý Linh Vuc', icon: <HomeOutlined />, path: 'field' },
      { label: 'Quản Lý Doanh Nghiep', icon: <HomeOutlined />, path: 'business' },
      { label: 'Quản Lý Bai Dang', icon: <HomeOutlined />, path: 'post' },
      { label: 'Quản Lý Nguoi Dung', icon: <HomeOutlined />, path: 'applicant' }
    ]
  },
  {
    label: 'Quản Lý Hệ Thống',
    icon: <HomeOutlined />,
    path: 'system-management',
    children: [
      { label: 'Quản Lý Tin Tuc', icon: <HomeOutlined />, path: 'news' },
      { label: 'Quản Lý Goi Tai Khoang', icon: <HomeOutlined />, path: 'service-package' },
      { label: 'Quản Lý Tài Khoản', icon: <HomeOutlined />, path: 'account' }
    ]
  }
];

export { funcOfAdmin, funcOfManager, funcOfApplicant };
