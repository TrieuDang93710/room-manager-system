import { AreaChartOutlined, BookOutlined, HomeOutlined, SettingOutlined } from '@ant-design/icons';

const funcOfManager = [
  { label: 'Thống kê', icon: <AreaChartOutlined />, path: 'statistical' },
  { label: 'Quản lý bằng đăng', icon: <HomeOutlined />, path: 'post' },
  { label: 'Đăng lý công ty', icon: <HomeOutlined />, path: 'business' },
  { label: 'Quản lý trạng thái', icon: <HomeOutlined />, path: 'resume-status' },
  { label: 'Quản lý ứng viên', icon: <HomeOutlined />, path: 'applicant' },
  { label: 'Quản lý hóa đơn', icon: <HomeOutlined />, path: 'service-bill' }
];

const funcOfApplicant = [
  // { label: 'Hồ Sơ Cá Nhân', icon: <AreaChartOutlined />, path: 'profile' },
  { label: 'Trạng thái ứng tuyển', icon: <HomeOutlined />, path: 'history' },
  { label: 'Quản lý đăng ký', icon: <HomeOutlined />, path: 'resume' },
  { label: 'Theo dõi', icon: <SettingOutlined />, path: 'follower' },
  { label: 'Bài đăng đã lưu', icon: <BookOutlined />, path: 'saved' }
];

const funcOfAdmin = [
  { label: 'Thống kê', icon: <AreaChartOutlined />, path: 'statistical' },
  {
    label: 'Quản lý các chức năng',
    icon: <HomeOutlined />,
    path: 'func-management',
    children: [
      { label: 'Quản lý lĩnh vực', icon: <HomeOutlined />, path: 'field' },
      { label: 'Quản lý nhóm nghề', icon: <HomeOutlined />, path: 'category' },
      { label: 'Quản lý doanh nghiệp', icon: <HomeOutlined />, path: 'business' },
      { label: 'Quản lý bài đăng', icon: <HomeOutlined />, path: 'post' }
    ]
  },
  {
    label: 'Quản lý hệ thống',
    icon: <HomeOutlined />,
    path: 'system-management',
    children: [
      { label: 'Quản lý tin tức', icon: <HomeOutlined />, path: 'news' },
      { label: 'Quản lý gói tài khoản', icon: <HomeOutlined />, path: 'service-package' },
      { label: 'Quản lý tài khoản', icon: <HomeOutlined />, path: 'account' },
      { label: 'Hóa đơn', icon: <HomeOutlined />, path: 'service-bill' },
      { label: 'Đánh giá hệ thống', icon: <HomeOutlined />, path: 'reviewer' },
    ]
  }
];

export { funcOfAdmin, funcOfManager, funcOfApplicant };
