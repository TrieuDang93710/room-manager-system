'use client'
import Link from 'next/link';
import './Tabbar.css';
import { useRouter } from 'next/navigation';

interface TabBarProps {
  tabs?: { title: string; path: string }[];
}

const TabBar = ({ tabs }: TabBarProps) => {
  const router = useRouter();

  return (
    <div className='tab_container'>
      {tabs!.map((item, index) => (
        <h3 key={index} onClick={() => router.push(`/dashboard/applicant/${item.path}`)}>
          <Link href={`/dashboard/applicant/${item.path}`}>{item.title}</Link>
        </h3>
      ))}
    </div>
  );
};

export default TabBar;
