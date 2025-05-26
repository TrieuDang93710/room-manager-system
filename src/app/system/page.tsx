'use client';
import 'react-multi-carousel/lib/styles.css';
import ReviewUs from './components/Review';
import ServicePackage from './components/Service';
import RecruitmentRepresentative from './components/Representative';
import PostRender from './components/PostRender';
import FeaturedIndustry from './components/FeatureIndustry';
import { useState } from 'react';
import PostDetailCard from './components/PostDetailCard';
import SystemLayout from './layout';

const SystemPage = () => {
  const [openPostDetailCard, setOpenPostDetailCard] = useState<boolean>(false);
  const [postId, setPostId] = useState<number>(0);

  return (
    <SystemLayout>
      <PostRender
        openPostDetailCard={openPostDetailCard}
        setOpenPostDetailCard={setOpenPostDetailCard}
        setPostId={setPostId}
      />
      <FeaturedIndustry />
      <RecruitmentRepresentative />
      <ReviewUs />
      <ServicePackage />
      {openPostDetailCard && (
        <PostDetailCard
          postId={postId}
          openPostDetailCard={openPostDetailCard}
          setOpenPostDetailCard={setOpenPostDetailCard}
        />
      )}
    </SystemLayout>
  );
};

export default SystemPage;
