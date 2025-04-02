import { PostCardSquareComponent } from '@/components/organisms/system/Card/PostCardSquare';
import { listRoom } from '@/faker/data';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const PostRender = () => {
  const router = useRouter();
  const [filteredItems] = useState(listRoom);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(2);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  console.log('currentItems: ', currentItems);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className='w-[90%] flex flex-col items-center gap-3 px-2'>
      <h2 className='text-2xl font-bold mt-8'>Bài Đăng Nổi Bật</h2>
      <div className='lg:w-[60%] md:w-3/4 w-full flex md:flex-row flex-1 items-center justify-center gap-2'>
        {Array.from({ length: 10 }).map((_, index) => (
          <p
            key={index}
            className='w-[20%] text-[14px] text-center truncate text-slate-950 mb-4 font-medium hover:text-green-500 hover:underline-offset-1 cursor-pointer'
          >
            Kinh doanh {index + 1}
          </p>
        ))}
      </div>
      <div className='w-full flex sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 flex-col items-center justify-around gap-3'>
        {Array.from({ length: 1 }).map((_, index) => (
          <PostCardSquareComponent key={index + 1} onClick={() => router.push(`/system/post/${index + 1}`)} />
        ))}
      </div>
      <div className='flex justify-center my-8'>
        {Array.from({ length: Math.ceil(filteredItems.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded-full ${
              currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PostRender;
