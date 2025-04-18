/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useEffect, useState } from 'react';
import SearchComponent from '@/components/molecules/Search';
import TableComponent from '@/components/molecules/Table';
import ButtonCommon from '@/components/atoms/ButtonCommon';
import PaginationComponent from '@/components/molecules/Pagination/pagination';
import { DeleteOutlined, PlusOutlined, ReadOutlined } from '@ant-design/icons';
import './field.css';
import AddField from './components/AddField';
import useField from '@/hooks/useFeild';
import Remove from './components/Remove';

const FieldManagerPage = () => {
  const [openAddField, setOpenAddField] = useState<boolean>(false);
  const [openRemoveModal, setOpenRemoveModal] = useState<boolean>(false);
  const [fieldId, setFieldId] = useState<number>(0);
  const [fieldSort, setFieldSort] = useState<any[]>([]);
  const { fields } = useField();

  useEffect(() => {
    setFieldSort(fields.sort((a: any, b: any) => a.id - b.id));
  }, [fields]);

  const closeAddFieldHandler = () => {
    setOpenAddField(!openAddField);
  };

  const closeRemoveHandler = () => {
    setOpenRemoveModal(!openRemoveModal);
  };

  const headers = ['#', 'Tiêu đề', 'Ngày tạo', 'Xử lý'];

  const renderRow = (field: any) => (
    <>
      <td className='truncate px-2'>{field.id}</td>
      <td className='truncate px-2'>{field.title}</td>
      <td className='truncate px-2'>{field.createAt}</td>
      <td className='flex items-center justify-center sm:gap-2 px-2'>
        <ReadOutlined className='cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 p-3' />
        <DeleteOutlined
          onClick={() => {
            setOpenRemoveModal(!openRemoveModal);
            setFieldId(field.id);
          }}
          className='cursor-pointer rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 p-3'
        />
      </td>
    </>
  );

  return (
    <div className='relative w-full h-screen bg-[#f7f7f7] dark:bg-[#242424] flex flex-col items-end gap-6 snap-y pt-20 md:px-3'>
      <div className='w-full py-2 px-2 flex-col justify-center md:gap-3 gap-y-2'>
        <div className='w-full flex sm:flex-row flex-col sm:items-center sm:justify-between items-start justify-start border shadow-sm shadow-slate-500 rounded-sm px-2 gap-1'>
          <h3 className='text-[16px] text-black font-bold hover:text-blue-500 hover:underline-offset-1 cursor-default p-2'>
            Quản lý lĩnh vực
          </h3>
          <div className='w-1/2 flex justify-end items-center gap-3'>
            <div className='border border-slate-300 hover:border-green-500 cursor-pointer rounded-sm px-4 py-1'>
              <select className='px-2 border-none bg-transparent'>
                <option className='border-none bg-transparent checked:bg-transparent' value=''>
                  Trạng thái
                </option>
                <option className='border-none bg-transparent checked:bg-transparent' value='applied'>
                  Đã ứng tuyển
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className='md:flex md:flex-row flex-col gap-5 items-end justify-between my-6 px-2'>
          <div className='lg:w-[50%] md:w-2/3 w-full truncate flex justify-start gap-2'>
            <ButtonCommon onClick={closeAddFieldHandler} icon={<PlusOutlined />} title='Thêm lĩnh vực' />
            <ButtonCommon onClick={() => alert('Click me')} icon={<PlusOutlined />} title='Excel' />
          </div>
          <SearchComponent />
        </div>

        <TableComponent headers={headers} data={fieldSort} renderRow={renderRow} />

        <div className='w-full flex justify-end py-1'>
          <PaginationComponent />
        </div>
      </div>
      <AddField openAddField={openAddField} setOpenAddField={setOpenAddField} onClick={closeAddFieldHandler} />
      <Remove
        openRemove={openRemoveModal}
        setOpenRemove={setOpenRemoveModal}
        onClick={closeRemoveHandler}
        id={fieldId}
      />
    </div>
  );
};

export default FieldManagerPage;
