import type { NextPage } from "next";
import Image from 'next/image'

const TestimonialBanner: NextPage = () => {
  return (
    <div className="self-stretch bg-white h-[462.3px] flex flex-col items-start justify-center pt-[199.3px] px-[19.8px] pb-[19.8px] box-border gap-[21.7px] z-[0] text-left text-smi-4 text-black font-manrope">
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="relative font-extrabold">Mr Everett</div>
        <div className="relative text-3xs-9 text-dimgray-100 mt-[-2.2px]">
          Islington, London
        </div>
      </div>
      <div className="self-stretch relative text-xs font-body-1-medium inline-block h-32 shrink-0">
        “Masterpiece should hold their head high... Thanks to this company my
        wife and I now have a showroom standard kitchen.. everybody we dealt
        with acted with professionalism, efficiency and good humour”.
      </div>
      <div className="self-stretch flex flex-col items-start justify-center">
        <div className="[filter:drop-shadow(0px_42.3px_90.03px_rgba(21,_21,_21,_0.15))] flex flex-row items-center justify-start">
        <Image
            className="w-[25.2px] relative h-[25.2px]"
            alt=""
            src="/Star.svg"
            width={25}
            height={25}
          />
          <Image
            className="w-[25.2px] relative h-[25.2px]"
            alt=""
            src="/Star.svg"
            width={25}
            height={25}
          />
          <Image
            className="w-[25.2px] relative h-[25.2px]"
            alt=""
            src="/Star.svg"
            width={25}
            height={25}
          />
          <Image
            className="w-[25.2px] relative h-[25.2px]"
            alt=""
            src="/Star.svg"
            width={25}
            height={25}
          />
          <Image
            className="w-[25.2px] relative h-[25.2px]"
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

export default TestimonialBanner;

