import { ArrowRightOutlined } from '@ant-design/icons';
import search from '@/public/svgs/search.svg';

const job_menu = {
  job: {
    title: 'Việc làm',
    data: [
      { icon: search, label: 'Tìm kiếm việc làm', path: '/system/post-filter', arrow_right: <ArrowRightOutlined /> },
      {
        icon: search,
        label: 'Tìm kiếm việc làm trên bản đồ',
        path: '/system/post-map',
        arrow_right: <ArrowRightOutlined />
      },
      {
        icon: search,
        label: 'Việc làm đã lưu',
        path: '/dashboard/applicant/saved',
        arrow_right: <ArrowRightOutlined />
      },
      { icon: search, label: 'Việc làm đã ứng tuyển', path: '#', arrow_right: <ArrowRightOutlined /> }
    ]
  },
  company: {
    title: 'Công ty',
    data: [
      { icon: search, label: 'Danh sách công ty', path: '/system/business', arrow_right: <ArrowRightOutlined /> },
      { icon: search, label: 'Tìm kiếm ứng viên', path: '/system/applicant', arrow_right: <ArrowRightOutlined /> }
    ]
  },
  position: {
    title: 'Việc làm theo vị trí ngành nghề',
    data: [
      { icon: search, label: 'Nhân viên phục vụ', path: '#', arrow_right: <ArrowRightOutlined /> },
      { icon: search, label: 'Lập trình viên', path: '#', arrow_right: <ArrowRightOutlined /> },
      { icon: search, label: 'Chăm sóc khách hàng', path: '#', arrow_right: <ArrowRightOutlined /> }
    ]
  }
};

const profile_menu = {
  profile: {
    title: 'Tạo hồ sơ đăng ký',
    data: [
      { icon: search, label: 'Tạo hồ sơ', path: '#', arrow_right: <ArrowRightOutlined /> },
      { icon: search, label: 'Tải CV lên', path: '#', arrow_right: <ArrowRightOutlined /> }
    ]
  },
  profile_manager: {
    title: 'Quản lý hồ sơ đăng ký',
    data: [
      { icon: search, label: 'Danh sách hồ sơ đăng ký', path: '#', arrow_right: <ArrowRightOutlined /> },
      { icon: search, label: 'Danh sách hồ sơ đã ứng tuyển', path: '#', arrow_right: <ArrowRightOutlined /> }
    ]
  }
};

export { job_menu, profile_menu };
