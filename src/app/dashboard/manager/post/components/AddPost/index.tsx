import React from 'react';
import CommonInput from '@/components/atoms/Input';
import Modal from '@/components/molecules/Modal';
import { handleBlurChecking } from '@/helpers/utils';
import useCombinedState from '@/hooks/useCombinedState';
import { CloseOutlined } from '@ant-design/icons';
import './AddPost.css';

interface AddPostProps {
  openAddPost: boolean;
  setOpenAddPost: (value: boolean) => void;
  onClick: () => void;
}

const AddPost = ({ onClick, setOpenAddPost, openAddPost }: AddPostProps) => {
  const [state, setField] = useCombinedState({
    name: '',
    address: '',
    price: '',
    createBy: '',
    nameError: '',
    addressError: '',
    priceError: '',
    createByError: ''
  });

  const options = [{ label: 'Kinh doanh', value: '1' }];

  return (
    <Modal
      className='bg-[#29292962] dark:bg-[#f8f8f817] h-screen w-full flex justify-center items-center right-0 animate-in'
      isOpen={openAddPost}
      hidden={false}
      onClose={() => setOpenAddPost(false)}
    >
      <div className='modal_container_add_post'>
        <form>
          <div className='modal_header'>
            <p>Thêm mới</p>
            <CloseOutlined
              onClick={onClick}
              className='cursor-pointer font-bold text-red-500 p-2 rounded-sm hover:bg-[#e3e3e3] dark:text-[#fff]'
            />
          </div>
          <div className='w-full h-[80%] py-1 gap-2 flex flex-col md:flex hide-scrollbar overflow-y-auto'>
            <CommonInput
              onblur={() => handleBlurChecking('text', 'nameError', state.name, setField)}
              inputValue={state.name}
              typeInput='text'
              setField={setField}
              field='name'
              error={state.nameError}
              placeholder='Nhap ho va ten ...'
              label_title='Vi tri tuyen dung'
            />
            <CommonInput
              onblur={() => handleBlurChecking('text', 'addressError', state.address, setField)}
              inputValue={state.address}
              typeInput='text'
              setField={setField}
              field='address'
              error={state.addressError}
              placeholder='Nhap mo ta ...'
              label_title='Mo ta cong viec'
            />
            <div className='w-full flex md:flex-row flex-col items-center justify-between'>
              <CommonInput
                onblur={() => handleBlurChecking('text', 'addressError', state.address, setField)}
                inputValue={state.address}
                typeInput='text'
                setField={setField}
                field='address'
                error={state.addressError}
                optionList={options}
                placeholder='Nhap mo ta ...'
                label_title='Linh vuc'
              />
              <CommonInput
                onblur={() => handleBlurChecking('text', 'addressError', state.address, setField)}
                inputValue={state.address}
                typeInput='text'
                setField={setField}
                field='address'
                error={state.addressError}
                optionList={options}
                placeholder='Nhap mo ta ...'
                label_title='Noi lam viec'
              />
            </div>
            <p className='text-slate-900 text-[14px] font-bold px-2'>Yeu cau cua cong viec :</p>
            <div className='w-full flex md:flex-row flex-col items-center justify-between'>
              <CommonInput
                onblur={() => handleBlurChecking('text', 'addressError', state.address, setField)}
                inputValue={state.address}
                typeInput='text'
                setField={setField}
                field='address'
                error={state.addressError}
                placeholder='Nhap mo ta ...'
                label_title='Tuoi'
              />
              <CommonInput
                onblur={() => handleBlurChecking('text', 'addressError', state.address, setField)}
                inputValue={state.address}
                typeInput='text'
                setField={setField}
                field='address'
                error={state.addressError}
                placeholder='Nhap mo ta ...'
                label_title='Kinh nghiem'
              />
            </div>
            <div className='w-full flex md:flex-row flex-col items-center justify-between'>
              <CommonInput
                onblur={() => handleBlurChecking('text', 'addressError', state.address, setField)}
                inputValue={state.address}
                typeInput='text'
                setField={setField}
                field='address'
                error={state.addressError}
                placeholder='Nhap mo ta ...'
                label_title='Gioi tinh'
              />
              <CommonInput
                onblur={() => handleBlurChecking('text', 'addressError', state.address, setField)}
                inputValue={state.address}
                typeInput='text'
                setField={setField}
                field='address'
                error={state.addressError}
                placeholder='Nhap mo ta ...'
                label_title='So luong'
              />
            </div>
            <div className='w-full flex md:flex-row flex-col items-center justify-between'>
              <CommonInput
                onblur={() => handleBlurChecking('text', 'addressError', state.address, setField)}
                inputValue={state.address}
                typeInput='text'
                setField={setField}
                field='address'
                error={state.addressError}
                placeholder='Nhap mo ta ...'
                label_title='Mo ta yeu cau'
              />
              <CommonInput
                onblur={() => handleBlurChecking('text', 'addressError', state.address, setField)}
                inputValue={state.address}
                typeInput='date'
                setField={setField}
                field='address'
                error={state.addressError}
                placeholder='Nhap mo ta ...'
                label_title='Den han'
              />
            </div>
          </div>
          <button className='modal_button' type='submit'>
            SAVE
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default AddPost;
