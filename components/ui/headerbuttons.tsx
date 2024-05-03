import * as React from "react";

export default function Headbutton() {
  return (
    <div>
      <div className="absolute top-[calc(50%_-_41.95px)] left-[0px] bg-silver w-[1152px] h-[84px] hidden" />
      <div className="absolute top-[calc(50%_-_12.95px)] right-[296.9px] flex flex-row items-start justify-start gap-[28px]">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lg tracking-[0.2px] leading-[24px] font-medium font-small-3 text-teal-100 text-center inline-block">
          Contact Us
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lg tracking-[0.2px] leading-[24px] font-medium font-small-3 text-title-text text-center inline-block">
          FAQ’s
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lg tracking-[0.2px] leading-[24px] font-medium font-small-3 text-title-text text-center inline-block">
          Blog
        </button>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[13px] right-[47.9px] w-[195px] h-[58px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-17xl bg-teal-100 box-border border-[2px] border-solid border-white" />
          <div className="absolute top-[34.48%] left-[37.44%] text-sm tracking-[0.2px] leading-[18px] font-semibold font-small-3 text-white text-center">
            LOGIN
          </div>
        </div>
      </button>
    </div>
  );
}
