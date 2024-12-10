import BannerInterface from '@/interfaces/banner/banner';
// import svg
import shopping_cart from '@/public/svgs/shopping_cart.svg';
import key from '@/public/svgs/key.svg';
import quality from '@/public/svgs/quality.svg';
// import images
// import banner_url_1 from "@/public/images/banner.jpeg"

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
    title: 'Khu tro cao cap',
    subTitle: 'Gia ca sinh vien',
    descriptions: 'K29/8 Tran Duc Thao, Hoa Cuong Nam, Hai Chau, Da Nang',
    image_url: 'https://www.home-designing.com/wp-content/uploads/2013/10/glass-wall.jpeg'
  },
  {
    title: 'Khu tro cao cap',
    subTitle: 'Gia ca sinh vien',
    descriptions: 'K29/8 Tran Duc Thao, Hoa Cuong Nam, Hai Chau, Da Nang',
    image_url: 'https://archiadvisor.com/wp-content/uploads/2019/02/interior-layout.jpg'
  },
  {
    title: 'Khu tro cao cap',
    subTitle: 'Gia ca sinh vien',
    descriptions: 'K29/8 Tran Duc Thao, Hoa Cuong Nam, Hai Chau, Da Nang',
    image_url: 'https://planner5d.com/blog/content/images/2024/06/rooms-in-the-house.jpg'
  }
];

export { listRoom, chartData, chartDataCircle, pageSizeList, introductions, banners, listLessor };
