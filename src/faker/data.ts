/* eslint-disable @typescript-eslint/no-explicit-any */
import shopping_cart from '@/public/svgs/shopping_cart.svg';
import key from '@/public/svgs/key.svg';
import quality from '@/public/svgs/quality.svg';
import business from '@/public/images/business.png';
import logistic from '@/public/images/logistic.png';
import it from '@/public/images/IT.png';
import care from '@/public/images/care.png';
import build from '@/public/images/build.png';
import car from '@/public/images/car.png';
import banner_1 from '@/public/images/banner_2.jpg';
import banner_2 from '@/public/images/banner_3.jpg';
import banner_3 from '@/public/images/banner_4.jpg';

import {} from './../public/images/banner_1.jpg';

const listRoom = [
  {
    _id: 1,
    name: 'Chung cư mini',
    description: 'string',
    price: 3500000
  },
  {
    _id: 2,
    name: 'Thue tro nguyen can',
    description: 'string',
    price: 4500000
  },
  {
    _id: 3,
    name: 'Thue tro nguyen can',
    description: 'string',
    price: 4500000
  },
  {
    _id: 4,
    name: 'Thue tro nguyen can',
    description: 'string',
    price: 4500000
  }
];
const listLessor = [
  {
    _id: 1,
    name: 'Chung cư mini',
    description: 'string',
    price: 3500000
  }
];
const chartData = [
  { month: 'January', Tong_bai_dang: 186, Da_huy: 80 },
  { month: 'February', Tong_bai_dang: 305, Da_huy: 200 },
  { month: 'March', Tong_bai_dang: 237, Da_huy: 120 },
  { month: 'April', Tong_bai_dang: 73, Da_huy: 190 },
  { month: 'May', Tong_bai_dang: 209, Da_huy: 130 },
  { month: 'June', Tong_bai_dang: 214, Da_huy: 140 }
];

const chartDataCircle = [
  { browser: 'chrome', visitors: 1, fill: 'var(--color-chrome)' },
  { browser: 'safari', visitors: 1, fill: 'var(--color-safari)' }
  // { browser: 'firefox', visitors: 187, fill: 'var(--color-firefox)' },
  // { browser: 'edge', visitors: 173, fill: 'var(--color-edge)' },
  // { browser: 'other', visitors: 90, fill: 'var(--color-other)' }
];

const pageSizeList = [
  { value: '10', label: '10 / page' },
  { value: '25', label: '25 / page' },
  { value: '50', label: '50 / page' },
  { value: '100', label: '100 / page' }
];

const introductions = [
  {
    id: 1,
    icon: shopping_cart,
    title: 'Safe',
    descriptions:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quae dolores recusandae, non vitae minima repudiandae, eos inventore, ea exercitationem harum rem. Molestias, veritatis? Necessitatibus commodi esse distinctio suscipit nisi.'
  },
  {
    id: 2,
    icon: key,
    title: 'Security',
    descriptions:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quae dolores recusandae, non vitae minima repudiandae, eos inventore, ea exercitationem harum rem. Molestias, veritatis? Necessitatibus commodi esse distinctio suscipit nisi.'
  },
  {
    id: 3,
    icon: quality,
    title: 'Quality',
    descriptions:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quae dolores recusandae, non vitae minima repudiandae, eos inventore, ea exercitationem harum rem. Molestias, veritatis? Necessitatibus commodi esse distinctio suscipit nisi.'
  }
];

const banners: any[] = [
  {
    image_url: banner_1.src
  },
  {
    image_url: banner_2.src
  },
  {
    image_url: banner_3.src
  }
];

const approveStatus = [
  { label: 'Đã duyệt', value: 'approved' },
  { label: 'Không phù hợp', value: 'reject' },
  { label: 'Xóa', value: 'cancelled' },
  { label: 'Đã xem hồ sơ', value: 'seen' },
  { label: 'Hồ sơ phù hợp', value: 'success' },
  { label: 'Hồ sơ không phù hợp', value: 'reject' }
];

const fields = [
  { label: 'Quản trị kinh doanh', value: 'Quản trị kinh doanh' },
  { label: 'Kinh tế', value: 'Kinh tế' },
  { label: 'Công nghệ thông tin', value: 'Công nghệ thông tin' }
];

const addresses = [
  { label: 'Đà Nẵng', value: 'Đà Nẵng' },
  { label: 'Quảng Nam', value: 'Quảng Nam' },
  { label: 'Huế', value: 'Huế' }
];
const workTypes = [
  { label: 'Toàn thời gian', value: 'fulltime' },
  { label: 'Bán thời gian', value: 'parttime' }
];

const filterPost = [
  { title: 'address', value: ['Đà Nẵng', 'Quảng Nam', 'Quảng Ngãi'] },
  { title: 'salary', value: ['1 - 2 triệu', '3 triệu', '> 5 triệu'] },
  { title: 'experience', value: ['Không yêu cầu', 'Dưới 1 năm kinh nghiệm', '2 năm kinh nghiệm'] },
  { title: 'job', value: ['Dà Nẵng', 'Quảng Nam', 'Quảng Ngãi'] }
];

const featuredIndustry = [
  {
    id: 1,
    image: business.src,
    title: 'Kinh doanh - Bán hàng',
    quantity: 11230
  },
  {
    id: 2,
    image: logistic.src,
    title: 'Quản lý chuổi cung ứng',
    quantity: 11230
  },
  {
    id: 3,
    image: it.src,
    title: 'Công nghệ thông tin',
    quantity: 11230
  },
  {
    id: 4,
    image: care.src,
    title: 'Chăm só khách hàng',
    quantity: 11230
  },
  {
    id: 5,
    image: build.src,
    title: 'Công nghệ xây dựng',
    quantity: 11230
  },
  {
    id: 6,
    image: car.src,
    title: 'Công nghệ ô tô',
    quantity: 11230
  }
];

interface OptionInterface {
  value: string;
  label: string;
}

const roles: OptionInterface[] = [
  { label: 'Ứng viên', value: 'applicant' },
  { label: 'Quản lý đại diện công ty', value: 'manager' },
  { label: 'Quản trị viên hệ thống', value: 'admin' }
];

export {
  listRoom,
  chartData,
  chartDataCircle,
  pageSizeList,
  introductions,
  banners,
  listLessor,
  approveStatus,
  fields,
  addresses,
  workTypes,
  filterPost,
  featuredIndustry,
  roles
};
