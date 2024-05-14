import React from 'react';
import Image from 'next/image';
import type { NextPage } from "next";
import FrameComponent from "@/components/frame-component";
import TestimonialBanner1 from "@/components/testimonial-banner1";
import TestimonialBanner from "@/components/testimonial-banner";



const Testimoniallove: NextPage = () => {
  return (
    <div className="absolute top-[4393px] left-[0px] w-[1440px] h-[797px]">
        <div className="absolute top-[3px] left-[0px] w-[1440px] flex flex-col items-center justify-start gap-[633px] testimonialband">
          <div className="self-stretch relative bg-aquamarine-100 h-[57px]" />
          
            <div className="w-[1440px] relative bg-aquamarine-200 h-[57px]" />
          </div>
        
        <div className="absolute h-[79.8%] w-full top-[7.15%] right-[0%] bottom-[13.05%] left-[0%] bg-teal-200 overflow-hidden">
          <div className="absolute top-[-3545px] left-[222.1px] bg-gainsboro w-[937.2px] h-[1483.9px] overflow-hidden" />
          <div className="absolute top-[0px] left-[-141.2px] w-[1300.5px] overflow-hidden flex flex-col items-start justify-center">
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-between">
              <Image
                className="w-[698.2px] relative h-[636px] object-cover"
                alt=""
                src="/testimonialpic.webp"
                width={700}
                height={640}
              />
              <div className="w-[492px] overflow-hidden shrink-0 flex flex-col items-center justify-start">
                <div className="self-stretch relative h-[449.8px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[74px] left-[625px] w-[650.7px] flex flex-row items-end justify-between testimonial1">
          <div className="w-[174px] h-[512.1px] overflow-hidden shrink-0 flex flex-col items-center justify-start testimonialcard1">
            <div className="w-[174px] shadow-[0px_25.1px_33.42px_rgba(0,_0,_0,_0.25)] rounded-[8.36px] h-[462px] overflow-hidden shrink-0 flex flex-col items-start justify-center relative frame1">
              <FrameComponent />
              <div className="w-[180.9px] !m-[0] absolute top-[0px] left-[0px] h-[156.7px] flex flex-col items-center justify-start z-[1]">
                <Image
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/Rossetti.webp"
                  width={176}
                  height={155}
                />
              </div>
            </div>
          </div>
          <div className="w-[467.1px] overflow-hidden shrink-0 flex flex-row items-end justify-between">
            <div className="w-[191.7px] shadow-[0px_27.6px_36.85px_rgba(0,_0,_0,_0.25)] rounded-[9.21px] h-[430.1px] overflow-hidden shrink-0 flex flex-col items-start justify-center relative testimonialcard2">
              <TestimonialBanner1 />
              <div className="w-[191.7px] !m-[0] absolute top-[0px] left-[0px] h-[172.7px] flex flex-col items-center justify-start z-[1]">
                <Image
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/Bolton.webp"
                  width={192}
                  height={170}
                />
              </div>
            </div>
            <div className="w-[206.1px] h-[492.1px] overflow-hidden shrink-0 flex flex-col items-center justify-start testimonialcard3">
              <div className="w-[206.1px] shadow-[0px_29.7px_39.61px_rgba(0,_0,_0,_0.25)] rounded-[9.9px] h-[462.3px] overflow-hidden shrink-0 flex flex-col items-start justify-center relative">
                <TestimonialBanner />
                <div className="w-[206.1px] !m-[0] absolute top-[0px] left-[0px] h-[185.7px] flex flex-col items-center justify-start z-[1]">
                  <Image
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/Page.webp"
                    width={206}
                    height={185}

                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Testimoniallove;
