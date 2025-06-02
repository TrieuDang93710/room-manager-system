/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface MenuDataProps {
  data: any[];
}

const MenuData = ({ data }: MenuDataProps) => {
  const router = useRouter();

  const menuItem =
    data &&
    data.map((item, index) => (
      <li
        onClick={() => router.push(`${item.path}`)}
        key={index}
        className='w-full flex flex-row items-center justify-start gap-2 py-2 px-2 rounded-md hover:bg-blue-100'
      >
        <Image alt='' src={item.icon} width={15} height={15} />
        <Link
          href={item.path}
          className='w-full text-[14px] font-medium text-black hover:text-blue-600 flex items-center justify-between'
        >
          <p>{item.label}</p> {item.arrow_right}
        </Link>
      </li>
    ));
  return menuItem;
};

export default MenuData;
