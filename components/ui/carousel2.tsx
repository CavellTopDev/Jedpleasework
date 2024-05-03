"use client"
import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image'

export default function EmblaCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 2000 })
    ]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className="embla">
            <div className='embla__viewport mx-auto mt-2 h-100 max-w-lg' ref={emblaRef}>
                <div className="embla__container h-full">
                <div className="embla__slide flex items-center justify-center">
        <Image
          src="/photosix.webp"
          className="w-full h-full object-cover"
          width={384}
          height={347}
          alt=""
        />
</div>
<div className="embla__slide flex items-center justify-center">
        <Image
          src="/photofour.webp"
          className="w-full h-full object-cover"
          width={384}
          height={347}
          alt=""
        />
                    </div>
                    <div className="embla__slide flex items-center justify-center">
        <Image
          src="/photothree.webp"
          className="w-full h-full"
          width={384}
          height={347}
          alt=""
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
