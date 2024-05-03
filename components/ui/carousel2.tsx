"use client"
import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image'

export default function EmblaCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 200000 })
    ]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className="embla">
            <div className='embla__viewport mx-auto mt-12 h-56 max-w-lg border' ref={emblaRef}>
                <div className="embla__container h-full">
                <div className="embla__slide flex items-center justify-center">
                <Image
                  src="/logo31.svg"
                  className="w-full h-full object-cover"
              width={125}
             height={125} 
            alt={""}    
                />
</div>
                    <div className="embla__slide flex items-center justify-center">
                    <Image
                  src="/logo31.svg"
                  className="w-full h-full object-cover"
              width={125}
             height={125} 
            alt={""}    
                />
                    </div>
                    <div className="embla__slide flex items-center justify-center">
                    <Image
      src="/logo31.svg"
      className="w-full h-full object-cover"
      width={125}
      height={125} 
      alt={""}    
      />
                    </div>
                </div>
            </div>
            <div>
                <button className='embla__prev' onClick={scrollPrev}>
                    Prev
                </button>
                <button className='embla__next' onClick={scrollNext}>
                    Next
                </button>
            </div>
        </div>
    );
}
