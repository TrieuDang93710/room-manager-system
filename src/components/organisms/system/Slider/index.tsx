'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface SliderCommonProps {
  Component: React.ElementType;
  items: unknown[];
}

const SliderCommon = ({ Component, items }: SliderCommonProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [visibleCount, setVisibleCount] = useState<number>(2);

  const updateVisibleCount = () => {
    const width = window.innerWidth;
    if (width < 368) {
      setVisibleCount(1);
    } else if (width < 768) {
      setVisibleCount(2);
    } else if (width < 992) {
      setVisibleCount(3);
    } else {
      setVisibleCount(4);
    }
  };

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => {
      window.removeEventListener('resize', updateVisibleCount);
    };
  }, []);

  const prevSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  if (currentIndex > items.length - 3) {
    console.log(currentIndex);
    setCurrentIndex(0);
  }

  const itemList = items
    .slice(currentIndex, currentIndex + visibleCount)
    .map((item, index) => <Component key={index} item={item} />);

  return (
    <div className='space-x-4 gap-4 cursor-pointer flex'>
      {itemList}
      <div className='absolute right-0 top-5 flex items-center justify-between'>
        <button onClick={prevSlide} className='hover:bg-green-700 p-2 rounded-l'>
          <ChevronLeft className='text-green-600 text-3xl group-hover:text-white hover:text-slate-50' />
        </button>
        <button onClick={nextSlide} className='hover:bg-green-700 p-2 rounded-r'>
          <ChevronRight className='text-green-600 text-3xl group-hover:text-white hover:text-slate-50' />
        </button>
      </div>
    </div>
  );
};

export default SliderCommon;
