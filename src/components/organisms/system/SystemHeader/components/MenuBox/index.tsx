/* eslint-disable @typescript-eslint/no-explicit-any */
import './MenuBox.css';
import MenuData from '../MenuData';

interface MenuBoxComponentProps {
  menuBox: boolean;
  setMenuBox: (value: boolean) => void;
  menus: any;
}

const MenuBoxComponent = ({ menuBox, setMenuBox, menus }: MenuBoxComponentProps) => {
  return (
    <div
      onMouseLeave={() => setMenuBox(false)}
      className={`menu_box_container transition transform opacity duration-700 ease-in-out ${menuBox ? 'translate-y-0 opacity-100 duration-700 ease-in-out z-30' : 'translate-y-full opacity-0 duration-700 ease-in-out z-10'}`}
    >
      <div className='w-[30%] h-full flex flex-col items-start justify-start'>
        <h3 className='text-[16px] font-medium text-slate-500 hover:text-blue-600 px-2'>
          {menus?.job && menus?.job.title}
        </h3>
        <ul className='w-full list-none list-inside flex flex-col items-start justify-start pb-3 gap-2'>
          <MenuData data={menus?.job && menus?.job.data} />
        </ul>
        <h3 className='text-[16px] font-medium text-slate-500 hover:text-blue-600 px-2'>
          {menus?.company && menus?.company.title}
        </h3>
        <ul className='w-full list-none list-inside flex flex-col items-start justify-start pb-3 gap-2'>
          <MenuData data={menus?.company && menus?.company.data} />
        </ul>
        <h3 className='text-[16px] font-medium text-slate-500 hover:text-blue-600 px-2'>
          {menus?.profile && menus?.profile.title}
        </h3>
        <ul className='w-full list-none list-inside flex flex-col items-start justify-start pb-3 gap-2'>
          <MenuData data={menus?.profile && menus?.profile.data} />
        </ul>
      </div>
      <div className='w-[70%] h-full'>
        <h3 className='text-[16px] font-medium text-slate-500 hover:text-blue-600 px-2'>
          {menus?.position && menus?.position.title}
        </h3>
        <ul className='w-full list-none list-inside flex flex-col items-start justify-start pb-3 gap-2'>
          <MenuData data={menus?.position && menus?.position.data} />
        </ul>
        <h3 className='text-[16px] font-medium text-slate-500 hover:text-blue-600 px-2'>
          {menus?.profile_manager && menus?.profile_manager.title}
        </h3>
        <ul className='w-full list-none list-inside flex flex-col items-start justify-start pb-3 gap-2'>
          <MenuData data={menus?.profile_manager && menus?.profile_manager.data} />
        </ul>
      </div>
    </div>
  );
};

export default MenuBoxComponent;
