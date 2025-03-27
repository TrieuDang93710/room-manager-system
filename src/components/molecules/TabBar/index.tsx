import Link from 'next/link';
import './Tabbar.css';

interface TabBarProps {
  tabs?: { title: string; path: string }[];
}

const TabBar = ({ tabs }: TabBarProps) => {
  return (
    <div className='tab_container'>
      {tabs!.map((item, index) => (
        <h3 key={index}>
          <Link href={`/dashboard/applicant/${item.path}`}>{item.title}</Link>
        </h3>
      ))}
    </div>
  );
};

export default TabBar;
