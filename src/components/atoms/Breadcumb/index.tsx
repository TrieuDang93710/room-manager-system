import { DoubleRightOutlined } from '@ant-design/icons';
import Link from 'next/link';

interface BreadcrumbLink {
  url: string;
  label: string;
  prefixIcon?: React.ElementType;
}

interface BreadCrumbCommonProps {
  breadcrumbs: BreadcrumbLink[];
  currentUrl: string;
  mode?: 'light' | 'dark';
}

const BreadCrumbCommon = ({ breadcrumbs, currentUrl }: BreadCrumbCommonProps) => {
  return (
    <div className='container flex flex-wrap justify-start mt-2 py-2'>
      {breadcrumbs.map((link, index) => (
        <div key={link.url} className='flex items-center'>
          {link.url === currentUrl ? (
            <span
              className={`text-base cursor-default font-medium mr-2 gap-3 flex dark:text-gray-600 dark:hover:text-slate-100 text-green-600 hover:text-green-800`}
            >
              <Link href={`${link.url}`} className='cursor-default'>
                {link.prefixIcon && <link.prefixIcon />}
              </Link>
              <Link href={`${link.url}`} className='cursor-default'>
                {link.label}
              </Link>
            </span>
          ) : (
            <Link href={link.url} className='text-primary text-base cursor-pointer dark:text-gray-600 dark:hover:text-slate-100'>
              {link.prefixIcon && <link.prefixIcon />}
              <span className='font-medium mx-2'>{link.label}</span>
            </Link>
          )}
          {index !== breadcrumbs.length - 1 && (
            <span className={`text-s px-2 dark:text-gray-400 text-green-600`}>
              <DoubleRightOutlined />
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumbCommon;
