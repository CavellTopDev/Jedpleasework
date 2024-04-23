import type { NextPage } from "next";
import Image from 'next/image'

const TestimonialBanner1: NextPage = () => {
  return (
    <div className="self-stretch bg-white h-[430.1px] flex flex-col items-start justify-center pt-[185.4px] px-[18.4px] pb-[18.4px] box-border gap-[20.2px] z-[0] text-left text-xs-5 text-black font-manrope">
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="relative font-extrabold">Mr Bollom</div>
        <div className="relative text-3xs-2 text-dimgray-100 mt-[-2px]">
          Maidstone, Kent
        </div>
      </div>
      <div className="self-stretch relative text-xs font-body-1-medium">
        “Our design came through and it was exactly as we wanted it to look. Our
        fitters Leroy and Jed (Masterpiece Installations) were methodical and
        took their time in making sure everything went in perfectly and it did”.
      </div>
      <div className="self-stretch flex flex-col items-start justify-center">
        <div className="[filter:drop-shadow(0px_39.4px_83.76px_rgba(21,_21,_21,_0.15))] flex flex-row items-center justify-start">
        <Image
            className="w-[23.5px] relative h-[23.5px]"
            alt=""
            src="/Star.svg"
            width={25}
            height={25}
          />
          <Image
            className="w-[23.5px] relative h-[23.5px]"
            alt=""
            src="/Star.svg"
            width={25}
            height={25}
          />
          <Image
            className="w-[23.5px] relative h-[23.5px]"
            alt=""
            src="/Star.svg"
            width={25}
            height={25}
          />
          <Image
            className="w-[23.5px] relative h-[23.5px]"
            alt=""
            src="/Star.svg"
            width={25}
            height={25}
          />
          <Image
            className="w-[23.5px] relative h-[23.5px]"
            alt=""
            src="/Star.svg"
            width={25}
            height={25}
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialBanner1;
