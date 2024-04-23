import type { NextPage } from "next";
import Image from 'next/image'


const Carousel: NextPage = () => {
  return (
    <div className="absolute top-[261px] left-[calc(50%_-_672px)] w-[1343px] h-[540.8px] flex flex-col items-center justify-start py-[37.6px] px-[60.2px] box-border gap-[22.6px]">
      <Image
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/Photowan.webp"
        width={752}
        height={390}
      />
      <div className="flex flex-row items-center justify-center p-[7.5px] gap-[7.5px]">
        <div className="flex flex-row items-start justify-start p-[7.5px]">
          <Image
            className="w-[22.6px] relative h-[22.6px]"
            alt=""
            src="/Arrow Left.svg"
            width={37}
            height={37}
          />
        </div>
        <div className="flex flex-row items-center justify-start p-[7.5px] gap-[9.4px]">
          <Image
            className="w-[15px] relative h-[15px]"
            alt=""
            src="/Dotindictaor.svg"
            width={15}
            height={15}
          />
          <Image
            className="w-[11.3px] relative h-[11.3px] opacity-[0.5]"
            alt=""
            src="/Dotindictaor.svg"
            width={15}
            height={15}
          />
          <Image
            className="w-[11.3px] relative h-[11.3px] opacity-[0.5]"
            alt=""
            src="/Dotindictaor.svg"
            width={15}
            height={15}
          />
          <Image
            className="w-[11.3px] relative h-[11.3px] opacity-[0.5]"
            alt=""
            src="/Dotindictaor.svg"
            width={15}
            height={15}
          />
          <Image
            className="w-[11.3px] relative h-[11.3px] opacity-[0.5]"
            alt=""
            src="/Dotindictaor.svg"
            width={15}
            height={15}
          />
        </div>
        <div className="flex flex-row items-start justify-start p-[7.5px]">
          <Image
            className="w-[22.6px] relative h-[22.6px]"
            alt=""
            src="/Arrow Right.svg"
            width={37}
            height={37}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
