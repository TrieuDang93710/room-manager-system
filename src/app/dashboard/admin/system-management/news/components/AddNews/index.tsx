/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import CommonInput from '@/components/atoms/Input';
import Modal from '@/components/molecules/Modal';
import { handleBlurChecking } from '@/helpers/utils';
import useCombinedState from '@/hooks/useCombinedState';
import { CloseOutlined } from '@ant-design/icons';
import './AddNews.css';
import { useForm } from 'react-hook-form';
import useCloudinary from '@/hooks/useCloudinary';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import renderContent from '@/components/molecules/renderContent';
import renderAddContent from '@/components/molecules/renderAddContent';
import { addImage, addContactInformation } from '@/lib/features/newses/newsesSlice';
import useNews from '@/hooks/useNews';
import NotificationCustom from '@/helpers/notify';

interface AddFieldProps {
  openAddNews: boolean;
  setOpenAddNews: (value: boolean) => void;
  onClick: () => void;
}

const AddField = ({ onClick, setOpenAddNews, openAddNews }: AddFieldProps) => {
  const { handleSubmit } = useForm();
  const { uploadFile } = useCloudinary();
  const { refetch, addNews } = useNews();
  const dispatch = useDispatch();
  const newsData = useSelector((state: RootState) => state.newses);

  const [openSections, setOpenSections] = useState<any>({
    image: false,
    contact_information: false
  });

  const [formData, setFormData] = useState<any>({
    image: '',
    contact_information: { createBy: '', email: '', phone: '', note: '' }
  });

  const [state, setField] = useCombinedState({
    title: '',
    contents: '',
    titleError: '',
    contentsError: ''
  });

  const [banner, setBanner] = useState<string>('');

  const toggleSection = (section: string) => {
    setOpenSections((prev: { [x: string]: any }) => ({ ...prev, [section]: !prev[section] }));
  };

  const onSaveHandler = (e: { preventDefault: () => void }, section: string) => {
    e.preventDefault();
    setOpenSections((prev: any) => ({ ...prev, [section]: false }));

    switch (section) {
      case 'image':
        dispatch(addImage(formData.image));
        break;
      case 'contact_information':
        dispatch(addContactInformation(formData.contact_information));
        break;
      default:
        break;
    }
  };

  const onChangeHandler = (section: any, value: any) => {
    setFormData({ ...formData, [section]: value });
  };

  const addNewsHandler = async () => {
    const title = state.title;
    const contents = state.contents;

    const bannerFile = new FormData();
    bannerFile.append('file', banner);

    const image_urls: any = [];

    await newsData.image.map((item: any) => {
      const imageFile = new FormData();
      imageFile.append('file', item);

      uploadFile
        .mutateAsync({ file: imageFile })
        .then((result) => {
          image_urls.push(result.data.data.secure_url);
        })
        .catch((error) => console.log('error: ', error));
    });

    let banner_secure_url;

    await uploadFile
      .mutateAsync({ file: bannerFile })
      .then((result) => {
        banner_secure_url = result.data.data.secure_url;
      })
      .catch((error) => console.log('error: ', error));

    const newsDto = {
      title: title,
      contents: contents,
      banner: banner_secure_url,
      image: image_urls,
      information: {
        createBy: newsData.contact_information.createBy,
        email: newsData.contact_information.email,
        phone: newsData.contact_information.phone,
        note: newsData.contact_information.note
      }
    };
    console.log('newsDto: ', newsDto);
    await addNews
      .mutateAsync({ newsBody: newsDto })
      .then((result) => {
        NotificationCustom('success', result.data.message);
        refetch();
      })
      .catch((error) => {
        NotificationCustom('error', error.message);
      });
  };

  return (
    <Modal
      className='bg-[#29292962] dark:bg-[#f8f8f817] h-screen w-full flex justify-center items-center right-0 animate-in'
      isOpen={openAddNews}
      hidden={false}
      onClose={() => setOpenAddNews(false)}
    >
      <div className='modal_container_add_field'>
        <form onSubmit={handleSubmit(addNewsHandler)}>
          <div className='modal_header'>
            <p>Thêm mới</p>
            <CloseOutlined
              onClick={onClick}
              className='cursor-pointer font-bold text-red-500 p-2 rounded-sm hover:bg-[#e3e3e3] dark:text-[#fff]'
            />
          </div>
          <div className='w-full h-[80%] py-1 gap-2 flex flex-col md:flex overflow-y-auto'>
            <div className='w-full flex items-center justify-center p-4 gap-2'>
              <div className='w-[30%] flex flex-col items-start justify-center cursor-pointer gap-2'>
                <input
                  type='file'
                  accept='image/*'
                  className='text-[13px] font-normal'
                  onChange={(e: any) => setBanner(e.target.files[0])}
                />
                <p className='text-black text-[13px] font-normal'> Ảnh banner</p>
              </div>
            </div>
            <CommonInput
              onblur={() => handleBlurChecking('text', 'titleError', state.title, setField)}
              inputValue={state.title}
              typeInput='text'
              setField={setField}
              field='title'
              error={state.titleError}
              placeholder='Nhập tiêu đề ...'
              label_title='Tiêu đề'
            />
            <CommonInput
              onblur={() => handleBlurChecking('text', 'contentsError', state.contents, setField)}
              inputValue={state.contents}
              typeInput='text'
              setField={setField}
              field='contents'
              error={state.contentsError}
              placeholder='Nhập nội dung ...'
              label_title='Nôi dung'
            />
            {['image', 'contact_information'].map((section) => (
              <React.Fragment key={section}>
                {renderContent(section, toggleSection, openSections, newsData)}
                {openSections[section] && renderAddContent(section, onSaveHandler, onChangeHandler, formData)}
              </React.Fragment>
            ))}
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
