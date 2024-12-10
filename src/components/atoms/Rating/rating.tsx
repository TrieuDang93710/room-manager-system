'use client';
import { StarFilled } from '@ant-design/icons';
import { useState } from 'react';
interface RatingCommonProps {
  ratings: number | undefined;
  maxRating: number | undefined;
}
const RatingCommon = ({ ratings, maxRating }: RatingCommonProps) => {
  const [rating, setRating] = useState<number>(0);
  const handleRating = (index: number) => {
    setRating(index + 1);
  };
  return (
    <div className='w-full flex gap-2'>
      {Array.from({ length: maxRating! }, (_, index) => (
        <StarFilled
          key={index}
          onClick={() => handleRating(index)}
          className={`border-none text-xl ${index < ratings! || index < rating ? 'text-yellow-400' : 'text-slate-300'}`}
        />
      ))}
    </div>
  );
};

export default RatingCommon;
