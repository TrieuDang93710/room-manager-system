/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import CommonInput from '@/components/atoms/Input';
import Modal from '@/components/molecules/Modal';
import { handleBlurChecking } from '@/helpers/utils';
import useCombinedState from '@/hooks/useCombinedState';
import { CloseOutlined } from '@ant-design/icons';
import './AddBusiness.css';
import { addImage, addVideo, addInformation, addWorkPlace } from '@/lib/features/businesses/businessesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { useForm } from 'react-hook-form';
import useCloudinary from '@/hooks/useCloudinary';
import renderContent from '@/components/molecules/renderContent';
import renderAddContent from '@/components/molecules/renderAddContent';
import Image from 'next/image';
import useBusiness from '@/hooks/useBusiness';
import NotificationCustom from '@/helpers/notify';

interface AddBusinessProps {
  openAddBusiness: boolean;
  setOpenAddBusiness: (value: boolean) => void;
  onClick: () => void;
}

const AddBusiness = ({ onClick, setOpenAddBusiness, openAddBusiness }: AddBusinessProps) => {
  const { handleSubmit } = useForm();
  const { uploadFile } = useCloudinary();
  const { addBusiness, useBusinessSearch } = useBusiness();
  const { refetch } = useBusinessSearch();
  const dispatch = useDispatch();
  const businessData = useSelector((state: RootState) => state.businesses);
  console.log('businessData: ', businessData);

  const [openSections, setOpenSections] = useState<any>({
    image: false,
    video: false,
    information: false,
    workPlace: false
  });

  const [formData, setFormData] = useState<any>({
    image: '',
    video: '',
    information: { field: '', email: '', phone: '', address: '' },
    workPlace: {
      coordinate: '',
      latitude: '',
      national: '',
      city: '',
      district: '',
      village: ''
    }
  });

  const [state, setField] = useCombinedState({
    title: '',
    description: '',
    scale: '',
    titleError: '',
    descriptionError: '',
    scaleError: ''
  });

  const [logo, setLogo] = useState<string>('');

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
      case 'video':
        dispatch(addVideo(formData.video));
        break;
      case 'information':
        dispatch(addInformation(formData.information));
        break;
      case 'workPlace':
        dispatch(addWorkPlace(formData.workPlace));
        break;
      default:
        break;
    }
  };

  const onChangeHandler = (section: any, value: any) => {
    setFormData({ ...formData, [section]: value });
  };

  const addBusinessHandler = async () => {
    const title = state.title;
    const description = state.description;
    const scale = state.scale;

    const logoFile = new FormData();
    logoFile.append('file', logo);

    const imageFile = new FormData();
    const image_urls: any = [];
    businessData.image.map(async (item: any) => {
      imageFile.append('file', item);

      await uploadFile
        .mutateAsync({ file: imageFile })
        .then((result) => {
          image_urls.push(result.data.data.secure_url);
        })
        .catch((error) => console.log('error: ', error));
    });

    let logo_secure_url;

    await uploadFile
      .mutateAsync({ file: logoFile })
      .then((result) => {
        logo_secure_url = result.data.data.secure_url;
      })
      .catch((error) => console.log('error: ', error));

    const businessDto = {
      title: title,
      logo: logo_secure_url,
      description: description,
      scale: scale,
      images: image_urls,
      information: {
        field: businessData.information.field,
        email: businessData.information.email,
        phone: businessData.information.phone,
        detailAddress:
          businessData.workPlace.village +
          businessData.workPlace.district +
          businessData.workPlace.city +
          businessData.workPlace.national
      },
      work_place: {
        coordinate: businessData.workPlace.coordinate,
        latitude: businessData.workPlace.latitude,
        address: {
          national: businessData.workPlace.national,
          city: businessData.workPlace.city,
          district: businessData.workPlace.district,
          village: businessData.workPlace.village
        }
      }
    };

    console.log('businessDto: ', businessDto);

    await addBusiness
      .mutateAsync({ newBusiness: businessDto })
      .then((res) => {
        NotificationCustom('success', res.data.message);
        refetch();
      })
      .catch((error) => {
        NotificationCustom('error', error.message);
      });
  };

  return (
    <Modal
      className='bg-[#29292962] dark:bg-[#f8f8f817] h-screen w-full flex justify-center items-center right-0 animate-in'
      isOpen={openAddBusiness}
      hidden={false}
      onClose={() => setOpenAddBusiness(false)}
    >
      <div className='modal_container_add_business'>
        <form onSubmit={handleSubmit(addBusinessHandler)}>
          <div className='modal_header'>
            <p>Đăng ký công ty</p>
            <CloseOutlined
              onClick={onClick}
              className='cursor-pointer font-bold text-red-500 p-2 rounded-sm hover:bg-[#e3e3e3] dark:text-[#fff]'
            />
          </div>
          <div className='w-full h-[80%] py-1 gap-2 flex flex-col md:flex hide-scrollbar overflow-y-auto'>
            <div className='w-full flex items-center justify-center p-4 gap-2'>
              <Image
                alt='avatar'
                src='https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg'
                width='80'
                height='80'
                className='cursor-pointer'
              />
              <div className='w-[30%] flex flex-col items-start justify-center cursor-pointer gap-2'>
                <input
                  type='file'
                  accept='image/*'
                  className='text-[13px] font-normal'
                  onChange={(e: any) => setLogo(e.target.files[0])}
                />
                <p className='text-black text-[13px] font-normal'> Cap nhat</p>
              </div>
            </div>
            <CommonInput
              onblur={() => handleBlurChecking('text', 'titleError', state.title, setField)}
              inputValue={state.title}
              typeInput='text'
              setField={setField}
              field='title'
              error={state.titleError}
              placeholder='Tên công ty ...'
              label_title='Tên doanh nghiệp'
            />
            <CommonInput
              onblur={() => handleBlurChecking('text', 'descriptionError', state.description, setField)}
              inputValue={state.description}
              typeInput='text'
              setField={setField}
              field='description'
              error={state.descriptionError}
              placeholder='Nhập mô tả ...'
              label_title='Mô tả về doang nghiệp'
            />
            <CommonInput
              onblur={() => handleBlurChecking('text', 'scaleError', state.scale, setField)}
              inputValue={state.scale}
              typeInput='number'
              setField={setField}
              field='scale'
              error={state.scaleError}
              placeholder='Nhập quy mô doanh nghiệp ...'
              label_title='Quy mô'
            />

            {['image', 'video', 'information', 'workPlace'].map((section) => (
              <React.Fragment key={section}>
                {renderContent(section, toggleSection, openSections, businessData)}
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

export default AddBusiness;
