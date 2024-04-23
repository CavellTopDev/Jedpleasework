import type { NextPage } from "next";
import Image from 'next/image'

const FrameComponent: NextPage = () => {
  return (
    <div className="self-stretch bg-white h-[462px] flex flex-col items-start justify-center pt-[168.2px] px-[16.7px] pb-[16.7px] box-border gap-[18.3px] z-[0] text-left text-2xs-4 text-black font-manrope">
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="relative font-extrabold">Mrs Rossetti</div>
        <div className="relative text-4xs-4 text-dimgray-100 mt-[-1.8px]">
          Welwyn Garden City, Hertfordshire
        </div>
      </div>
      <div className="self-stretch relative text-smi-5 font-body-1-medium">
        “We are delighted with our kitchen which is now the hub of our house and
        we cannot wait to use them in the near future to renovate our utility /
        boot room”.
      </div>
      <div className="self-stretch flex flex-col items-start justify-center">
        <div className="[filter:drop-shadow(0px_35.7px_75.98px_rgba(21,_21,_21,_0.15))] flex flex-row items-center justify-start">
          <Image
            className="w-[21.3px] relative h-[21.3px]"
            alt=""
            src="/Star.svg"
            width={20}
            height={20}
          />
          <Image
            className="w-[21.3px] relative h-[21.3px]"
            alt=""
            src="/Star.svg"
            width={20}
            height={20}
          />
          <Image
            className="w-[21.3px] relative h-[21.3px]"
            alt=""
            src="/Star.svg"
            width={20}
            height={20}
          />
          <Image
            className="w-[21.3px] relative h-[21.3px]"
            alt=""
            src="/Star.svg"
            width={20}
            height={20}
          />
          <Image
            className="w-[21.3px] relative h-[21.3px]"
            alt=""
            src="/Star.svg"
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
