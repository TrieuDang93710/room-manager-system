'use client'
import { useEffect, useState } from 'react'
import BannerCommon from './banner'
import { banners } from '@/faker/data'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isHovered, setIsHovered] = useState<boolean>(false)

  const prevSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length)
  }

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length)
  }

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide()
      }, 6000)

      return () => {
        clearInterval(interval)
      }
    }
  }, [isHovered])

  // Handle mouse over event
  const handleMouseOver = (): void => {
    setIsHovered(true)
  }

  // Handle mouse leave event
  const handleMouseLeave = (): void => {
    setIsHovered(false)
  }

  return (
    <div className='relative flex flex-col items-center justify-end w-full h-[40vh] md:h-[60vh]'>
      <div onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave} className='relative w-full h-full'>
        <BannerCommon banners={banners[currentIndex]} />
      </div>
      <button onClick={prevSlide} className='absolute left-0 hover:bg-green-700 p-2 rounded-l'>
        <ChevronLeft className='text-green-600 text-3xl group-hover:text-white hover:text-slate-50' />
      </button>
      <button onClick={nextSlide} className='absolute right-0 hover:bg-green-700 p-2 rounded-r'>
        <ChevronRight className='text-green-600 text-3xl group-hover:text-white hover:text-slate-50' />
      </button>
      <div className='absolute bottom-3 flex justify-center mt-4'>
        {banners.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-10 mx-1 ${
              index === currentIndex ? 'bg-green-500 rounded-xl' : 'bg-slate-300 rounded-xl'
            } transition-all duration-500 ease-in-out`}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default BannerCarousel
