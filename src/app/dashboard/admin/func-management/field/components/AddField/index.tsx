import React from 'react';
import CommonInput from '@/components/atoms/Input';
import Modal from '@/components/molecules/Modal';
import { handleBlurChecking } from '@/helpers/utils';
import useCombinedState from '@/hooks/useCombinedState';
import { CloseOutlined } from '@ant-design/icons';
import './AddField.css';
import { useForm } from 'react-hook-form';
import useApiPublic from '@/hooks/useApiPublic';
import useField from '@/hooks/useFeild';
import NotificationCustom from '@/helpers/notify';

interface AddFieldProps {
  openAddField: boolean;
  setOpenAddField: (value: boolean) => void;
  onClick: () => void;
}

const AddField = ({ onClick, setOpenAddField, openAddField }: AddFieldProps) => {
  const [state, setField] = useCombinedState({
    title: '',
    description: '',
    slug: '',
    titleError: '',
    descriptionError: '',
    slugError: ''
  });

  const { handleSubmit, reset } = useForm();
  const apiPublic = useApiPublic();
  const { refetch } = useField();

  const addFieldHandler = () => {
    const title = state.title;
    const description = state.description;
    const slug = state.title.toLowerCase().replaceAll(' ', '-');

    const fieldDto = {
      title: title,
      slug: slug,
      description: description
    };

    apiPublic
      .post('category', fieldDto)
      .then((res) => {
        console.log('res: ', res.data.data);
        NotificationCustom('success', res.data.data.message);
        refetch();
        reset();
      })
      .catch((error) => {
        console.log('error: ', error);
        NotificationCustom('error', error);
      });
  };

  return (
    <Modal
      className='bg-[#29292962] dark:bg-[#f8f8f817] h-screen w-full flex justify-center items-center right-0 animate-in'
      isOpen={openAddField}
      hidden={false}
      onClose={() => setOpenAddField(false)}
    >
      <div className='modal_container_add_field'>
        <form onSubmit={handleSubmit(addFieldHandler)}>
          <div className='modal_header'>
            <p>Thêm mới</p>
            <CloseOutlined
              onClick={onClick}
              className='cursor-pointer font-bold text-red-500 p-2 rounded-sm hover:bg-[#e3e3e3] dark:text-[#fff]'
            />
          </div>
          <div className='w-full h-[80%] py-1 gap-2 flex flex-col md:flex overflow-y-auto'>
            <CommonInput
              onblur={() => handleBlurChecking('text', 'titleError', state.title, setField)}
              inputValue={state.title}
              typeInput='text'
              setField={setField}
              field='title'
              error={state.titleError}
              placeholder='Nhap ho va ten ...'
              label_title='Ten linh vuc'
            />
            <CommonInput
              onblur={() => handleBlurChecking('text', 'descriptionError', state.description, setField)}
              inputValue={state.description}
              typeInput='text'
              setField={setField}
              field='description'
              error={state.descriptionError}
              placeholder='Nhap mo ta ...'
              label_title='Mo ta chi tiet'
            />
          </div>
          <button className='modal_button' type='submit'>
            SAVE
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default AddField;
