import type { NextPage } from "next";
import Image from 'next/image'

const Footer: NextPage = () => {
  return (
    <div className="absolute top-[6340px] left-[0px] w-[1440px] h-[500px] text-left text-lg text-main-dark font-small-3 footer">
      <div className="absolute h-full w-full top-[-0.54%] right-[0%] bottom-[0.54%] left-[0%] bg-white" />
      <Image
        className="absolute h-[71.42%] w-[97.4%] top-[3.78%] right-[1.3%] bottom-[24.8%] left-[1.31%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/Rectangle 57.svg"
        width="97"
        height="70"
      />
      <Image
        className="absolute h-[23.72%] w-[97.4%] top-[71.7%] right-[1.3%] bottom-[4.58%] left-[1.31%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/Rectangle 55.svg"
        width={100}
        height={20}  
      />
      <div className="absolute top-[81.74%] left-[3.3%] text-sm tracking-[0.1px] leading-[18px] font-medium text-gray-400 whitespace-pre-wrap">
        Privacy Policy / Personal Information / Terms of Service
      </div>
      <Image
        className="absolute h-[9.16%] w-[12.24%] top-[78.98%] right-[34.37%] bottom-[11.86%] left-[53.39%] max-w-full overflow-hidden max-h-full"
        alt=""
        src=""
      />
      <div className="absolute top-[81.74%] right-[276px] text-sm tracking-[0.1px] leading-[18px] font-medium text-gray-400">
        2021
      </div>
      <div className="absolute top-[62.8%] left-[3.3%] text-xs tracking-[0.2px] leading-[16px] text-title-text">
        We do not take your data from you
      </div>
      <div className="absolute h-[22.8%] w-[7.29%] top-[20.14%] right-[81.51%] bottom-[57.06%] left-[11.2%] flex flex-col items-start justify-start gap-[12px] footersubtitles">
        <div className="relative tracking-[0.2px] leading-[24px] font-medium">
          Get started
        </div>
        <div className="flex flex-col items-start justify-start gap-[12px] text-sm text-title-text">
          <div className="relative tracking-[0.1px] leading-[18px] font-medium">
            Facebook
          </div>
          <div className="relative tracking-[0.1px] leading-[18px] font-medium">
            Instagram
          </div>
          <div className="relative tracking-[0.1px] leading-[18px] font-medium">
            *comanynum
          </div>
        </div>
      </div>
      <div className="absolute h-[22.8%] w-[4.58%] top-[20.14%] right-[64.33%] bottom-[57.06%] left-[31.08%] flex flex-col items-start justify-start gap-[12px] footersubtitles2">
          
        </div>
      </div>
    
  );
};

export default Footer;
