import React, { useState } from 'react';
import { pageSizeList } from '@/faker/data';
import SelectionComponent from '@/components/atoms/Selection';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

const PaginationComponent = () => {
  const [pageSize, setPageSize] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [disabled, setDisabled] = useState<boolean>(false);

  const handlePageInc = () => {
    const inc = currentPage + 1;
    if (inc > 100) {
      setCurrentPage(100);
      setDisabled(!disabled);
    } else {
      setCurrentPage(inc);
    }
  };

  const handlePageDec = () => {
    const dec = currentPage - 1;
    if (dec <= 0) {
      setCurrentPage(1);
      setDisabled(!disabled);
    } else {
      setCurrentPage(dec);
    }
  };

  // const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const selectValue = Number(e.target.value);
  //   setPageSize(selectValue);
  // };

  return (
    <div className='pagination_box'>
      <div className='input_group'>
        <button type='submit' onClick={handlePageDec} className={`button_manager_style `}>
          <ArrowLeftOutlined />
        </button>
        <ul className='gap-2'>
          <li className='text-[#1e1e1e] font-[14px] dark:text-[#e2e2e2]'>{currentPage}</li>
        </ul>
        <button type='submit' onClick={handlePageInc} className={`button_manager_style `}>
          <ArrowRightOutlined />
        </button>
      </div>
      <SelectionComponent
        optionList={pageSizeList}
        value={String(pageSize)}
        setValue={setPageSize}
      />
    </div>
  );
};

export default PaginationComponent;
