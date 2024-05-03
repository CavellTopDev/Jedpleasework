import type { NextPage } from "next";
import Image from 'next/image';


const Banner: NextPage = () => {
  return (
    <div className="absolute top-[2429px] left-[calc(50%_-_511px)] w-[1022.1px] h-[564px] text-left text-[22px]">
        <div className="absolute top-[0px] left-[27.5px] shadow-[0px_5.5px_5.5px_rgba(0,_0,_0,_0.25)] bg-whitesmoke w-[986.3px] h-[539.3px] banner" />
        <div className="absolute top-[146px] left-[630px] leading-[149.1%] whitespace-pre-wrap inline-block w-[355px] h-[274px] bannertext2">{`With over 30 years of experience in the kitchen industry,we also install  fitted bedrooms, bathrooms & home offices. In addition, we undertake small building works such as plumbing, electrics, carpentry, flooring, tiling, painting & decorating. `}</div>
        <div className="absolute top-[82px] left-[630px] text-[35.8px] leading-[119.7%] text-black inline-block w-[355px] h-[54px] bannertext1">
          Crafted Installations
        </div>
        <div className="absolute top-[37.1px] left-[79.8px] bg-teal-200 w-[509px] h-[398.9px]" />
        <Image
          className="absolute top-[59.2px] left-[59.2px] rounded-[11.91px] w-[501.1px] h-[426.7px] object-cover"
          alt=""
          src="/photofive.webp"
          width={501}
          height={426}
        />
      </div>
  );
};

export default Banner;