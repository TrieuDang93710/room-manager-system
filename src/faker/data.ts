import BannerInterface from '@/interfaces/banner/banner';
// import svg
import shopping_cart from '@/public/svgs/shopping_cart.svg';
import key from '@/public/svgs/key.svg';
import quality from '@/public/svgs/quality.svg';

import {} from './../public/images/banner_1.jpg'

const banner_1 = './../public/images/banner_1.jpg';
const banner_2 = '../images/banner_2.jpg';
const banner_3 = '../images/banner_3.jpg';

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
  { month: 'January', doanh_thu: 186, chi_phi: 80 },
  { month: 'February', doanh_thu: 305, chi_phi: 200 },
  { month: 'March', doanh_thu: 237, chi_phi: 120 },
  { month: 'April', doanh_thu: 73, chi_phi: 190 },
  { month: 'May', doanh_thu: 209, chi_phi: 130 },
  { month: 'June', doanh_thu: 214, chi_phi: 140 }
];

const chartDataCircle = [
  { browser: 'chrome', visitors: 275, fill: 'var(--color-chrome)' },
  { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
  { browser: 'firefox', visitors: 187, fill: 'var(--color-firefox)' },
  { browser: 'edge', visitors: 173, fill: 'var(--color-edge)' },
  { browser: 'other', visitors: 90, fill: 'var(--color-other)' }
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

const banners: BannerInterface[] = [
  {
    title: 'Khu Trọ Cao Cấp',
    subTitle: 'Giá Cả Sinh Viên',
    descriptions: 'K29/8 Trần Đức Tháo - Phường Hòa Cường Nam - Quận Hải Châu - Tp Đà Nẵng',
    image_url: 'https://static.vecteezy.com/system/resources/previews/001/829/377/non_2x/agents-who-find-jobs-for-job-seekers-and-companies-that-need-professional-workers-for-career-interview-flat-illustration-concept-for-landing-page-web-ui-banner-flyer-poster-template-background-free-vector.jpg'
  },
  {
    title: 'Khu Trọ Cao Cấp',
    subTitle: 'Giá Cả Sinh Viên',
    descriptions: 'K29/8 Trần Đức Tháo - Phường Hòa Cường Nam - Quận Hải Châu - Tp Đà Nẵng',
    image_url: 'https://static.vecteezy.com/system/resources/previews/001/829/377/non_2x/agents-who-find-jobs-for-job-seekers-and-companies-that-need-professional-workers-for-career-interview-flat-illustration-concept-for-landing-page-web-ui-banner-flyer-poster-template-background-free-vector.jpg'
  },
  {
    title: 'Khu Trọ Cao Cấp',
    subTitle: 'Giá Cả Sinh Viên',
    descriptions: 'K29/8 Trần Đức Tháo - Phường Hòa Cường Nam - Quận Hải Châu - Tp Đà Nẵng',
    image_url: 'https://static.vecteezy.com/system/resources/previews/001/829/377/non_2x/agents-who-find-jobs-for-job-seekers-and-companies-that-need-professional-workers-for-career-interview-flat-illustration-concept-for-landing-page-web-ui-banner-flyer-poster-template-background-free-vector.jpg'
  }
];

export { listRoom, chartData, chartDataCircle, pageSizeList, introductions, banners, listLessor };
