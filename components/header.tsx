import type { NextPage } from "next";

const Header: NextPage = () => {
  return (
    <div className="absolute h-[55.2%] w-[60.2%] top-[0%] right-[0%] bottom-[44.8%] left-[39.8%] text-center text-sm text-white font-small-3">
      <div className="absolute top-[calc(50%_-_41.95px)] left-[0px] bg-silver w-[1152px] h-[84px] hidden" />
      <div className="absolute top-[calc(50%_-_12.95px)] right-[296.9px] flex flex-row items-start justify-start gap-[28px]">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lg tracking-[0.2px] leading-[24px] font-medium font-small-3 text-title-text text-center inline-block">{`Masterpiece Installations `}</button>
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
      <div className="absolute top-[calc(50%_-_29.95px)] right-[47.9px] w-[195px] h-[58px] hidden">
        <div className="absolute top-[0px] left-[0px] rounded-17xl bg-main-dark flex flex-row items-center justify-center py-5 px-14">
          <div className="relative tracking-[0.2px] leading-[18px] font-semibold">
            SIGNIN
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[13px] right-[47.9px] w-[195px] h-[58px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-17xl bg-teal-100 box-border border-[2px] border-solid border-white" />
          <div className="absolute top-[34.48%] left-[37.44%] text-sm tracking-[0.2px] leading-[18px] font-semibold font-small-3 text-white text-center">
            LOGIN
          </div>
        </div>
      </button>
      <div className="absolute top-[32px] left-[400px] w-[446px] h-[35px] hidden text-left text-base text-secondary-text">
        
        <div className="absolute h-full top-[0%] bottom-[0%] left-[0px] w-[446px]">
          <div className="absolute h-[68.57%] top-[0%] left-[25px] tracking-[0.1px] leading-[24px] flex items-center w-[335px]">{`Search by topic, website, or RSS link `}</div>
          <div className="absolute h-2/5 w-[47.42%] top-[-68.57%] left-[-17.98%] text-2xs tracking-[0.2px] leading-[14px] text-inactive-states hidden items-center">{` `}</div>
          <div className="absolute h-[8.57%] top-[99.71%] bottom-[-8.29%] left-[0px] box-border w-[449px] border-t-[3px] border-solid border-main-color" />
        </div>
      </div>
      <div className="absolute top-[24px] left-[297px] text-11xl tracking-[0.1px] leading-[42px] font-semibold text-inactive-states hidden">
        blog
      </div>
      <div className="absolute top-[27px] left-[78px] w-[212px] h-8 hidden text-6xl text-teal-100">
        <b className="absolute top-[6.25%] left-[-1.89%] tracking-[0.2px] uppercase">
          MASTERPIECE
        </b>
        <b className="absolute top-[0%] left-[66.51%] text-sm tracking-[0.2px] hidden text-gray-1 whitespace-pre-wrap">
          {" "}
          LIMITED
        </b>
      </div>
    </div>
  );
};

export default Header;
