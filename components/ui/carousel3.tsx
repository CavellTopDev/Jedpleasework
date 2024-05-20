"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Carouselly() {
  const slides = [
    '/photoeight.webp',
    '/photofive.webp',
    '/photofour.webp',
    '/photonine.webp',
    '/photoseven.webp',
    '/photosix.webp',
    ,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="absolute top-[231px] left-[calc(50%_-_672px)] w-[1343px] h-[540.8px] flex flex-col items-center justify-start py-[37.6px] px-[60.2px] box-border gap-[22.6px]">
      <div className='max-w-[700px] h-[480px] w-full m-auto py-16 px-4 relative group'>
      <Image
  src={slides[currentIndex] || ''}
  className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
  alt={`Slide ${currentIndex + 1}`}
  width={500}
  height={500}
/>
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => setCurrentIndex(slideIndex)}
              className='text-2xl cursor-pointer'
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carouselly;
