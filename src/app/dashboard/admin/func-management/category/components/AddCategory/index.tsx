/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import CommonInput from '@/components/atoms/Input';
import Modal from '@/components/molecules/Modal';
import { handleBlurChecking } from '@/helpers/utils';
import useCombinedState from '@/hooks/useCombinedState';
import { CloseOutlined } from '@ant-design/icons';
import './AddCategory.css';
import { useForm } from 'react-hook-form';
import useApiPublic from '@/hooks/useApiPublic';
import NotificationCustom from '@/helpers/notify';
import useCategory from '@/hooks/useCategory';
import useField from '@/hooks/useFeild';

interface OptionInterface {
  value: string;
  label: string;
}

interface AddCategoryProps {
  openAddCategory: boolean;
  setOpenAddCategory: (value: boolean) => void;
  onClick: () => void;
}

const AddCategory = ({ onClick, setOpenAddCategory, openAddCategory }: AddCategoryProps) => {
  const [fieldOptionList, setFieldOptionList] = useState<OptionInterface[]>([]);
  const { fields } = useField();
  const { handleSubmit, reset } = useForm();
  const apiPublic = useApiPublic();
  const { refetch } = useCategory();

  const [filedId, setFiledId] = useState<string>('');
  const [state, setCategory] = useCombinedState({
    title: '',
    description: '',
    titleError: '',
    descriptionError: ''
  });

  useEffect(() => {
    const fieldOption = fields.map((item: any) => ({ label: item.title, value: item.id }));
    setFieldOptionList(fieldOption);
  }, [fields]);

  const addCategoryHandler = () => {
    const title = state.title;
    const description = state.description;

    const categoryDto = {
      title: title,
      description: description,
      fieldId: Number(filedId)
    };

    console.log('categoryDto: ', categoryDto);

    apiPublic
      .post('/category', categoryDto)
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
      isOpen={openAddCategory}
      hidden={false}
      onClose={() => setOpenAddCategory(false)}
    >
      <div className='modal_container_add_category'>
        <form onSubmit={handleSubmit(addCategoryHandler)}>
          <div className='modal_header'>
            <p>Thêm mới</p>
            <CloseOutlined
              onClick={onClick}
              className='cursor-pointer font-bold text-red-500 p-2 rounded-sm hover:bg-[#e3e3e3] dark:text-[#fff]'
            />
          </div>
          <div className='w-full h-[80%] py-1 gap-2 flex flex-col md:flex overflow-y-auto'>
            <CommonInput
              onblur={() => handleBlurChecking('text', 'titleError', state.title, setCategory)}
              inputValue={state.title}
              typeInput='text'
              setField={setCategory}
              field='title'
              error={state.titleError}
              placeholder='Nhap ho va ten ...'
              label_title='Ten linh vuc'
            />
            <CommonInput
              onblur={() => handleBlurChecking('text', 'descriptionError', state.description, setCategory)}
              inputValue={state.description}
              typeInput='text'
              setField={setCategory}
              field='description'
              error={state.descriptionError}
              placeholder='Nhap mo ta ...'
              label_title='Mo ta chi tiet'
            />
            <CommonInput
              typeInput='text'
              field='field'
              selectValue={filedId}
              setSelectValue={setFiledId}
              optionList={fieldOptionList}
              placeholder='Nhap mo ta ...'
              label_title='Lĩnh vực'
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

export default AddCategory;
