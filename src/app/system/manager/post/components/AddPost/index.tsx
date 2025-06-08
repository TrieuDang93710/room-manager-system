import React, { useState } from 'react';
import Modal from '@/components/molecules/Modal';
import useCombinedState from '@/hooks/useCombinedState';
import './AddPost.css';
import AddPostForm from '../AddPostForm';

interface AddPostProps {
  openAddPost: boolean;
  setOpenAddPost: (value: boolean) => void;
  onClick: () => void;
}

const AddPost = ({ onClick, setOpenAddPost, openAddPost }: AddPostProps) => {
  const [state, setField] = useCombinedState({
    title: '',
    description: '',
    duration: '',
    salary: '',
    benefit: '',
    gender: '',
    age: '',
    experience: '',
    quantity: '',
    level: '',
    education: '',
    skill: '',
    time: '',
    detail: '',
    titleError: '',
    descriptionError: '',
    durationError: '',
    salaryError: '',
    benefitError: '',
    genderError: '',
    ageError: '',
    experienceError: '',
    quantityError: '',
    levelError: '',
    educationError: '',
    skillError: '',
    timeError: '',
    detailError: ''
  });
  const [typeOfPost, setTypeOfPost] = useState<string>('');
  const [business, setBusiness] = useState<string>('');
  
  return (
    <Modal
      className='bg-[#29292962] dark:bg-[#f8f8f817] h-screen w-full flex justify-center items-center right-0 animate-in'
      isOpen={openAddPost}
      hidden={false}
      onClose={() => setOpenAddPost(false)}
    >
      <div className='modal_container_add_post'>
        <AddPostForm
          state={state}
          setField={setField}
          closeHandler={onClick}
          typeOfPost={typeOfPost}
          setTypeOfPost={setTypeOfPost}
          business={business}
          setBusiness={setBusiness}
        />
      </div>
    </Modal>
  );
};

export default AddPost;
