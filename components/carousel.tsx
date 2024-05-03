import type { NextPage } from "next";
import Image from 'next/image'
import EmblaCarousel from "./ui/carousel2";


const Carousel: NextPage = () => {
  return (
    <div className="absolute top-[261px] left-[calc(50%_-_672px)] w-[1343px] h-[540.8px] flex flex-col items-center justify-start py-[37.6px] px-[60.2px] box-border gap-[22.6px]">
     <EmblaCarousel/>
      
    
    </div>
  );
};

export default Carousel;
