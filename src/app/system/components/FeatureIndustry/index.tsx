/* eslint-disable @typescript-eslint/no-explicit-any */
import CardSquare from "@/components/organisms/system/Card/Square"
import { Button } from "@/components/ui/button"
import { featuredIndustry } from "@/faker/data"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"

const FeaturedIndustry = () => {
    return (
        <div className='w-[80%] flex flex-col items-center gap-3 px-2'>
        <div className='w-full flex flex-row items-center justify-between px-4'>
          <h2 className='text-2xl text-blue-600 font-bold mt-8'>Những ngành nghề nỗi bật</h2>
          <div className='flex flex-row items-center justify-center gap-4'>
            <Button
              onClick={() => alert('Click me')}
              className='w-9 text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white font-bold rounded-full flex justify-center items-center p-2'
              variant={'outline'}
              size={'sm'}
            >
              <LeftOutlined className='hidden md:block' />
            </Button>
            <Button
              onClick={() => alert('Click me')}
              className='w-9 text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white font-bold rounded-full flex justify-center items-center p-2'
              variant={'outline'}
              size={'sm'}
            >
              <RightOutlined className='hidden md:block' />
            </Button>
          </div>
        </div>
        <div className='w-full flex sm:grid md:grid-cols-3 sm:grid-cols-2 flex-col items-center justify-around gap-3 px-4 py-2'>
          {featuredIndustry.map((item: any) => (
            <CardSquare key={item.id} logo={item.image}>
              <div className='w-full px-2 flex flex-col items-center justify-start'>
                <h3 className='text-[18px] text-black dark:text-blue-800 font-bold py-2 line-clamp-2'>{item.title}</h3>
                <p className='text-[13px] text-blue-600 font-normal py-1'>{item.quantity} việc làm</p>
              </div>
            </CardSquare>
          ))}
        </div>
      </div>
    )
}

export default FeaturedIndustry