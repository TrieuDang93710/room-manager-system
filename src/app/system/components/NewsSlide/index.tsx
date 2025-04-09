/* eslint-disable @next/next/no-img-element */
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './NewsSlide.css';

const NewsSlide = () => {
  return (
    <div className='slide_container'>
      <h2 className='h2_heading'>Tin Tức Nỗi Bậc</h2>
      <div className='slide_content'>
        <div className='left_content'>
          <div className='w-3/4 h-[40vh] relative group overflow-hidden cursor-pointer flex flex-row items-center justify-center z-10 px-2'>
            <div className='w-full flex flex-col items-start justify-start gap-4'>
              <div className='w-full flex flex-col items-start justify-start gap-2'>
                <h2 className='text-[20px] text-black font-medium font-sans line-clamp-2'>
                  Vấn đề công nghệ thông tin trong thời đại ngày nay
                </h2>
                <p className='text-[16px] text-black font-normal font-sans'>Công nghệ</p>
              </div>
              <p className='text-[14px] text-black font-normal font-sans line-clamp-4 leading-6'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, autem! Distinctio dicta rerum,
                accusantium, totam illum maxime nam incidunt ipsum eveniet cum odio nemo voluptates, accusamus sed
                voluptatem corrupti omnis! Excepturi, architecto! Necessitatibus molestias aspernatur, pariatur
                voluptatum sapiente maxime, accusamus laboriosam inventore, facere molestiae temporibus quidem quibusdam
                impedit iste sint repellat minus omnis? Recusandae, quos aut eveniet sapiente enim expedita! Hic earum
                excepturi nesciunt soluta facilis optio reiciendis. Cupiditate ipsam voluptatum aut amet nobis obcaecati
                commodi debitis dolores architecto. Expedita voluptates ratione voluptas magni tenetur molestias nulla
                architecto enim asperiores.
              </p>
              <div className='w-full flex flex-col items-start justify-start gap-2'>
                <p className='text-[14px] text-black font-normal font-sans'>
                  <strong>Người đăng : </strong>Lorem, ipsum dolor sit amet
                </p>
                <p className='text-[14px] text-black font-normal font-sans'>
                  <strong>Ngày đăng : </strong>16/04/2025
                </p>
              </div>
            </div>
            <div
              className='absolute bottom-0 left-0 right-0 w-full h-full flex flex-row items-center justify-center bg-[#01010113] translate-y-full opacity-0  
              group-hover:translate-y-0 group-hover:opacity-100  
              transition transform opacity duration-700 ease-in-out'
            >
              <button className='px-4 py-2 text-[13px] text-white font-bold bg-blue-600 border-[2px] border-blue-600 rounded-md active:shadow-sm active:shadow-blue-500'>
                Xem thêm
              </button>
            </div>
          </div>
        </div>
        <div className='right_content'>
          <img
            className='rounded-md shadow-md shadow-slate-600'
            src='https://www.mnp.ca/-/media/foundation/integrations/personnel/2020/12/16/13/57/personnel-image-4483.jpg?h=800&iar=0&w=600&hash=833D605FDB6AC3C2D2915F6BF8B4ADA4'
            alt=''
            width={240}
            height={240}
          />
        </div>
      </div>
      <button onClick={() => alert('previous slide')} className='absolute left-0 hover:bg-green-700 p-2 rounded-l'>
        <ChevronLeft className='text-green-600 text-3xl group-hover:text-white hover:text-slate-50' />
      </button>
      <button onClick={() => alert('next slide')} className='absolute right-0 hover:bg-green-700 p-2 rounded-r'>
        <ChevronRight className='text-green-600 text-3xl group-hover:text-white hover:text-slate-50' />
      </button>
      <div className='absolute bottom-3 flex justify-center mt-4'>
        {/* {banners.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-10 mx-1 ${
              index === currentIndex ? 'bg-green-500 rounded-xl' : 'bg-slate-300 rounded-xl'
            } transition-all duration-500 ease-in-out`}
          ></div>
        ))} */}
      </div>
    </div>
  );
};

export default NewsSlide;
