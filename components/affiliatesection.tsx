import * as React from "react";
import Image from 'next/image'

function Affiliatebrands() {
  return (
    
      <div className="absolute top-[5510px] left-[161px] w-[495px] flex flex-col items-center justify-end gap-[17px] text-13xl text-black">
        <div className="self-stretch relative tracking-[0.1px] leading-[42px] font-semibold">
          Trusted Brands We Work With !
        </div>
        <div className="w-[395px] overflow-hidden flex flex-col items-end justify-center text-left text-base text-title-text font-small-3">
          <div className="w-[284px] flex flex-col items-start justify-start">
            <div className="self-stretch relative tracking-[0.2px] leading-[24px]">
              <p className="m-0 font-medium">{`At Masterpiece Installations, we collaborate with industry leading brands with every project. Here are just some of our associated brands: `}</p>
              <p className="m-0 font-medium">&nbsp;</p>
              <p className="m-0 font-medium">Kitchen Manufacturers:</p>
              <ul className="m-0 text-inherit pl-[21px]">
                <li className="mb-0">
                  <span className="font-semibold">Crown Kitchens</span>
                </li>
                <li className="mb-0">
                  <span className="font-semibold">Bespoke Kitchens</span>
                </li>
              </ul>
              <p className="m-0 font-semibold">&nbsp;</p>
              <p className="m-0 font-medium">
                Kitchen Fixtures and Appliances:
              </p>
              <ul className="m-0 text-inherit pl-[21px]">
                <li className="mb-0">
                  <span className="font-semibold">Franke Sinks</span>
                </li>
                <li className="mb-0">
                  <span className="font-semibold">Armitage Sinks</span>
                </li>
                <li className="mb-0">
                  <span className="font-semibold">Quooker Taps</span>
                </li>
                <li className="mb-0">
                  <span className="font-semibold">Neff Appliances</span>
                </li>
                <li className="mb-0">
                  <span className="font-semibold">Miele Appliances</span>
                </li>
              </ul>
              <p className="m-0 font-semibold">&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
  
  );
}

export default Affiliatebrands