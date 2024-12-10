'use client';
import { useState } from 'react';
import TabButton from './tab-button';
import flex from '@/config/flex.config';

const TabsCompt = () => {
  const [activeTab, setActiveTab] = useState<string>('infrastructure');
  const renderContent = () => {
    switch (activeTab) {
      case 'infrastructure':
        return <InfrastructureCompt />;
      case 'video':
        return <VideoCompt />;
      default:
        return null;
    }
  };
  return (
    <div className={'w-[90%] h-[100vh] m-auto gap-2 py-2 px-2 ' + flex({ direction: 'col', justifyContent: 'start' })}>
      <div className='py-2 flex gap-2'>
        <TabButton
          label='Infrastructure'
          isActive={activeTab === 'infrastructure'}
          onClick={() => setActiveTab('infrastructure')}
        />
        <TabButton label='Video' isActive={activeTab === 'video'} onClick={() => setActiveTab('video')} />
      </div>
      <div className='w-full h-full border'>{renderContent()}</div>
    </div>
  );
};

export default TabsCompt;

const InfrastructureCompt = () => {
  return (
    <div
      className='w-full h-full'
      style={{
        backgroundImage: `url('https://checkout.puffy.ca/cdn/shop/articles/aesthetic-room-decor-ideas-3_1600x.jpg?v=1638945930')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    ></div>
  );
};

const VideoCompt = () => {
  return (
    <div className='w-full h-full'>
      <video controls autoPlay width={600}>
        <source src={'@/public/video/room.mp4'} type='video/mp4' />
      </video>
    </div>
  );
};
