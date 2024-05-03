import type { NextPage } from "next";
import Image from 'next/image';


const Hero2: NextPage = () => {
  return (
    <div className="absolute h-[10.02%] top-[12.65%] bottom-[78.33%] left-[calc(50%_-_700px)] w-[1400px] flex flex-col items-center justify-start pt-[25.5px] px-[25.5px] pb-[51px] box-border gap-[12px] text-[35px] text-slate-900 font-body-1-medium hero2">
        <div className="w-[386px] flex flex-col items-center justify-start gap-[25.5px]">
          <div className="flex flex-row items-start justify-center">
            <div className="w-[550px] flex flex-col items-start justify-start gap-[12.7px]">
              <div className="self-stretch relative tracking-[-0.01em] leading-[61px]">
                Elevating Kitchen Installations
              </div>
              <div className="self-stretch relative text-[20px] leading-[22.31px] font-plus-jakarta-sans text-slate-600">
                <p className="m-0 whitespace-pre-wrap">{`We at Masterpiece Installations, pride ourselves in fulfilling our clients wishes with skill  & precision. `}</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">{`During every step of the process, we work closely with the client to ensure total satisfaction. `}</p>
              </div>
            </div>
          </div>
          <div className="self-stretch relative box-border h-[0.8px] border-t-[0.8px] border-solid border-slate-200" />
        </div>
        
        <Image
          className="w-[550px] relative rounded-[4.78px] h-[411px] object-cover"
          alt=""
          src="/phototwo.webp"
          width={550}
          height={441}
        />
      </div>
  );
};

export default Hero2;