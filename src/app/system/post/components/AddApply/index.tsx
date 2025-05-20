import React, { useState } from 'react';
import Modal from '@/components/molecules/Modal';
import useCombinedState from '@/hooks/useCombinedState';
import './AddApply.css';
import AddApplyForm from '../AddApplyForm';

interface AddApplyProps {
  openAddApply: boolean;
  setOpenAddApply: (value: boolean) => void;
  onClick: () => void;
}

const AddApply = ({ onClick, setOpenAddApply, openAddApply }: AddApplyProps) => {
  const [state, setField] = useCombinedState({
    title: '',
    titleError: ''
  });
  const [resume, setResume] = useState<string>('');
  const [post, setPost] = useState<string>('');

  return (
    <Modal
      className='bg-[#29292962] dark:bg-[#1b1b1b5d] h-screen w-full flex justify-center items-center right-0 animate-in'
      isOpen={openAddApply}
      hidden={false}
      onClose={() => setOpenAddApply(false)}
    >
      <div className='modal_container_add_apply'>
        <AddApplyForm
          state={state}
          setField={setField}
          closeHandler={onClick}
          resume={resume}
          setResume={setResume}
          post={post}
          setPost={setPost}
        />
      </div>
    </Modal>
  );
};

export default AddApply;
