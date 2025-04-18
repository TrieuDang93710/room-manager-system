import React from 'react';

interface RenderContentProps {
  contents: string[];
  title: string;
}

const RenderContent = ({ contents, title }: RenderContentProps) => {
  const descriptionItem = contents.map((item, index) => (
    <li key={index} className='text-[16px] text-black dark:text-white font-normal leading-8'>
      {item}
    </li>
  ));
  return (
    <div className='w-full flex flex-col items-start justify-start gap-2'>
      <strong className='text-[16px] text-black dark:text-blue-600 font-bold leading-8'>{title} : </strong>
      <ul className='list-disc px-4'>{descriptionItem}</ul>
    </div>
  );
};

export default RenderContent;
