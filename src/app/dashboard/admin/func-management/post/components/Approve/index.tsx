/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import CommonInput from '@/components/atoms/Input';
import Modal from '@/components/molecules/Modal';
import { CloseOutlined } from '@ant-design/icons';
import './Approve.css';
import { approveStatus } from '@/faker/data';
import { useForm } from 'react-hook-form';
import usePost from '@/hooks/usePost';

interface ApproveProps {
  openApprove: boolean;
  setOpenApprove: (value: boolean) => void;
  onClick: () => void;
  id: any;
}

const Approve = ({ onClick, setOpenApprove, openApprove, id }: ApproveProps) => {
  const [status, setStatus] = useState<string>('');
  const { approvePost, usePostsSearch } = usePost();
  const {refetch} = usePostsSearch()
  const { handleSubmit } = useForm();

  const approveHandler = async () => {
    await approvePost.mutateAsync({ id: id, status: [status] });
    refetch();
  };
  return (
    <Modal
      className='bg-[#29292962] dark:bg-[#f8f8f817] h-screen w-full flex justify-center items-center right-0 animate-in'
      isOpen={openApprove}
      hidden={false}
      onClose={() => setOpenApprove(false)}
    >
      <div className='modal_container_approve'>
        <form className='flex flex-col items-center justify-start' onSubmit={handleSubmit(approveHandler)}>
          <div className='modal_header'>
            <p>Duyệt</p>
            <CloseOutlined
              onClick={onClick}
              className='cursor-pointer font-bold text-red-500 p-2 rounded-sm hover:bg-[#e3e3e3] dark:text-[#fff]'
            />
          </div>
          <div className='w-full h-[80%] py-1 gap-2 flex flex-col md:flex overflow-y-auto'>
            <CommonInput
              typeInput='text'
              selectValue={status}
              setSelectValue={setStatus}
              optionList={approveStatus}
              placeholder='Nhap ho va ten ...'
              label_title='Trạng thái'
            />
          </div>
          <button className='approve_button' type='submit'>
            SAVE
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default Approve;
