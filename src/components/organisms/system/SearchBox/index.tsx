import { Button } from '@/components/ui/button';
import { DownOutlined, EnvironmentOutlined, SearchOutlined, UnorderedListOutlined } from '@ant-design/icons';
import CategoryCard from './components/CategoryCard';
import { useState } from 'react';
import AddressCard from './components/AddressCard';
import SearchHistoryCard from './components/SearchHistoryCard';

const SearchBox = () => {
  const [openCategoryCard, setOpenCategoryCard] = useState<boolean>(true);
  const [openAddressCard, setOpenAddressCard] = useState<boolean>(true);
  const [openSearchHistoryCard, setOpenSearchHistoryCard] = useState<boolean>(true);

  const handleOpenCategoryCard = () => {
    setOpenCategoryCard(!openCategoryCard);
  };

  const handleOpenAddressCard = () => {
    setOpenAddressCard(!openAddressCard);
  };

  const handleOpenSearchHistoryCard = () => {
    setOpenSearchHistoryCard(!openSearchHistoryCard);
  };

  return (
    <div className='w-[80%] relative'>
      <div className='relative w-full h-full flex flex-row items-center justify-between bg-white md:rounded-2xl rounded-xl md:px-2 px-0 py-2 my-4'>
        <Button
          onClick={handleOpenCategoryCard}
          className='bg-none text-black hover:text-blue-600 hover:border-blue-600 font-bold md:px-8 px-2'
          variant={'outline'}
          size={'lg'}
        >
          <UnorderedListOutlined />
          <p className='hidden md:block'>Danh mục</p>
        </Button>
        <div className='md:w-[50%] w-full h-full flex flex-row items-center'>
          <input
            type='search'
            name='search'
            placeholder='Vị trí tuyển dụng, tên công ty'
            className='h-11 w-full rounded-none border-r border-r-slate-300 border-l border-l-slate-300 placeholder:text-slate-800 focus:outline-none px-4'
            onFocus={handleOpenSearchHistoryCard}
            onBlur={handleOpenSearchHistoryCard}
          />
        </div>
        <Button
          onClick={handleOpenAddressCard}
          className='w-[20%] text-black border-slate-400 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600 font-bold md:flex hidden justify-between items-center px-4'
          variant={'outline'}
          size={'lg'}
        >
          <p className='inline-flex items-center w-[40%]'>
            <EnvironmentOutlined className='mr-2' />
            Địa điểm
          </p>
          <DownOutlined className='hidden md:block' />
        </Button>
        <Button
          onClick={() => alert('Click me')}
          className='bg-blue-600 hover:text-black hover:border-blue-600 hover:bg-blue-700 text-white font-bold md:px-8 px-4'
          variant={'outline'}
          size={'lg'}
        >
          <SearchOutlined />
          <p className='hidden md:block'>TÌm kiếm</p>
        </Button>
        <SearchHistoryCard
          openSearchHistoryCard={openSearchHistoryCard}
          setOpenSearchHistoryCard={setOpenSearchHistoryCard}
        />
        <AddressCard openAddressCard={openAddressCard} setOpenAddressCard={setOpenAddressCard} />
      </div>
      <CategoryCard openCategoryCard={openCategoryCard} setOpenCategoryCard={setOpenCategoryCard} />
    </div>
  );
};

export default SearchBox;
