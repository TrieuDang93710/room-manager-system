import React, { useState } from 'react';
import useCombinedState from '@/hooks/useCombinedState';
import './AddApply.css';
import AddApplyForm from '../AddApplyForm';

interface AddApplyProps {
  openAddApply: boolean;
  setOpenAddApply: (value: boolean) => void;
  onClick: () => void;
}

const AddApply = ({ openAddApply, setOpenAddApply }: AddApplyProps) => {
  const [state, setField] = useCombinedState({
    title: '',
    titleError: ''
  });
  const [resume, setResume] = useState<string>('');
  const [post, setPost] = useState<string>('');

  const handleCloseAddApply = () => {
    setOpenAddApply(!openAddApply);
  };

  return (
    <div
      className={`modal_container_add_apply ${openAddApply ? 'translate-y-0 opacity-100 duration-1000' : 'translate-y-full opacity-0 duration-1000'}`}
    >
      <AddApplyForm
        state={state}
        setField={setField}
        closeHandler={handleCloseAddApply}
        resume={resume}
        setResume={setResume}
        post={post}
        setPost={setPost}
      />
    </div>
  );
};

export default AddApply;
