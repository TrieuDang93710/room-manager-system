'use client'
import Modal from '@/components/molecules/Modal';
import './style.css';

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <Modal
      isOpen={true}
      onClose={() => alert('me')}
      hidden={false}
      className='z-30 min-h-screen fixed flex flex-row items-start justify-center right-0 rounded-none bg-[#9c9c9c12]'
    >
      <div className='lds-ripple w-full flex flex-col items-end gap-6 snap-y mt-20 md:px-3'>
        <div></div>
        <div></div>
      </div>
    </Modal>
  );
}
