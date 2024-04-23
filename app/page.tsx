import type { NextPage } from "next";
import Title from "@/components/title";
import FrameComponent from "@/components/frame-component";
import TestimonialBanner1 from "@/components/testimonial-banner1";
import TestimonialBanner from "@/components/testimonial-banner";
import Section from "@/components/section";
import Footer from "@/components/footer";
import Carousel from "@/components/carousel";
import Header from "@/components/header";
import Image from 'next/image'

const Mastercraft: NextPage = () => {
  return (
    <div className="w-full relative bg-white h-[6840px] overflow-hidden text-center text-21xl text-gray-100 font-plus-jakarta-sans">
      <div className="absolute top-[169px] left-[calc(50%_-_230px)] w-[627px] h-[91px] flex flex-col items-center justify-start gap-[10px]">
        <Title />
        <div className="w-[845px] relative leading-[80%] font-extralight text-gray-300 inline-block h-[98px] shrink-0">
          “where artistry meets precision”
        </div>
      </div>
      <div className="absolute h-[10.02%] top-[12.65%] bottom-[78.33%] left-[calc(50%_-_700px)] w-[1400px] flex flex-col items-center justify-start pt-[25.5px] px-[25.5px] pb-[51px] box-border gap-[12px] text-[35px] text-slate-900 font-body-1-medium">
        <div className="w-[486px] flex flex-col items-center justify-start gap-[25.5px]">
          <div className="flex flex-row items-start justify-center">
            <div className="w-[916px] flex flex-col items-start justify-start gap-[12.7px]">
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
        <div className="w-[76.5px] rounded-[4.78px] bg-slate-900 h-[25.3px] flex flex-row items-center justify-center py-[6.4px] px-[12.7px] box-border text-left text-[11.2px] text-white">
          <a
            className="relative [text-decoration:underline] leading-[19.12px] font-medium text-[inherit]"
            href="https://ui.shadcn.com/docs/primitives/aspect-ratio"
            target="_blank"
          >
            View docs
          </a>
        </div>
        <Image
          className="w-[550px] relative rounded-[4.78px] h-[411px] object-cover"
          alt=""
          src="/phototwo.webp"
          width={550}
          height={441}
        />
      </div>
      <div className="absolute top-[4393px] left-[0px] w-[1440px] h-[797px]">
        <div className="absolute top-[3px] left-[0px] w-[1440px] flex flex-col items-center justify-start gap-[633px]">
          <div className="self-stretch relative bg-aquamarine-100 h-[57px]" />
          <div className="self-stretch overflow-hidden flex flex-row items-start justify-center py-0 pr-0 pl-[557px]">
            <div className="w-[1440px] relative bg-aquamarine-200 h-[57px] [transform:_rotate(-180deg)]" />
          </div>
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
        <div className="absolute top-[74px] left-[625px] w-[746.7px] flex flex-row items-end justify-between">
          <div className="w-[174px] h-[512.1px] overflow-hidden shrink-0 flex flex-col items-center justify-start">
            <div className="w-[174px] shadow-[0px_25.1px_33.42px_rgba(0,_0,_0,_0.25)] rounded-[8.36px] h-[462px] overflow-hidden shrink-0 flex flex-col items-start justify-center relative">
              <FrameComponent />
              <div className="w-[173.9px] !m-[0] absolute top-[0px] left-[0px] h-[156.7px] flex flex-col items-center justify-start z-[1]">
                <Image
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/businessman1.webp"
                  width={170}
                  height={155}
                />
              </div>
            </div>
          </div>
          <div className="w-[467.1px] overflow-hidden shrink-0 flex flex-row items-end justify-between">
            <div className="w-[191.7px] shadow-[0px_27.6px_36.85px_rgba(0,_0,_0,_0.25)] rounded-[9.21px] h-[430.1px] overflow-hidden shrink-0 flex flex-col items-start justify-center relative">
              <TestimonialBanner1 />
              <div className="w-[191.7px] !m-[0] absolute top-[0px] left-[0px] h-[172.7px] flex flex-col items-center justify-start z-[1]">
                <Image
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/businesswoman1.webp"
                  width={190}
                  height={170}
                />
              </div>
            </div>
            <div className="w-[206.1px] h-[492.1px] overflow-hidden shrink-0 flex flex-col items-center justify-start">
              <div className="w-[206.1px] shadow-[0px_29.7px_39.61px_rgba(0,_0,_0,_0.25)] rounded-[9.9px] h-[462.3px] overflow-hidden shrink-0 flex flex-col items-start justify-center relative">
                <TestimonialBanner />
                <div className="w-[206.1px] !m-[0] absolute top-[0px] left-[0px] h-[185.7px] flex flex-col items-center justify-start z-[1]">
                  <Image
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/businesswoman2.webp"
                    width={205}
                    height={185}

                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[2429px] left-[calc(50%_-_511px)] w-[1022.1px] h-[564px] text-left text-[22px]">
        <div className="absolute top-[0px] left-[27.5px] shadow-[0px_5.5px_5.5px_rgba(0,_0,_0,_0.25)] bg-whitesmoke w-[986.3px] h-[539.3px]" />
        <div className="absolute top-[146px] left-[630px] leading-[149.1%] whitespace-pre-wrap inline-block w-[355px] h-[274px]">{`With over 30 years of experience in the kitchen industry,we also install  fitted bedrooms, bathrooms & home offices. In addition, we undertake small building works such as plumbing, electrics, carpentry, flooring, tiling, painting & decorating. `}</div>
        <div className="absolute top-[82px] left-[630px] text-[35.8px] leading-[119.7%] text-black inline-block w-[355px] h-[54px]">
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
      <Section />
      <textarea
        className="[border:none] bg-[transparent] font-semibold font-plus-jakarta-sans text-13xl [outline:none] absolute top-[3204px] left-[calc(50%_-_431px)] w-[861px] flex flex-row items-center justify-center py-0 px-[171px] box-border text-gray-200"
        placeholder="Ready to Chat? Complete Our Form Then Book a Call !"
        defaultValue="Connect with us for a quick chat to explore your vision and goals. Our consultation not only refines your estimate but also pinpoints the ideal timing to initiate the design process."
      />
      <button className="cursor-pointer py-[9.3px] px-[12.4px] bg-[transparent] absolute top-[3474px] left-[calc(50%_-_68px)] shadow-[0px_75.5px_20.98px_rgba(27,_114,_93,_0.01),_0px_48.4px_19.46px_rgba(27,_114,_93,_0.06),_0px_27.1px_16.4px_rgba(27,_114,_93,_0.2),_0px_12.2px_12.21px_rgba(27,_114,_93,_0.35),_0px_3.1px_6.49px_rgba(27,_114,_93,_0.4)] rounded-[77342.22px] [background:linear-gradient(101.03deg,_#1b725d,_#1b725d)] box-border w-[136px] h-[54px] flex flex-row items-center justify-center border-[2px] border-solid border-teal-200">
        <div className="w-[84px] relative text-[11.4px] leading-[94%] uppercase font-medium font-plus-jakarta-sans text-white text-center inline-block shrink-0">
          BOOK CALL
        </div>
      </button>
      <Image
        className="absolute top-[5486.9px] left-[869px] w-[552px] h-[729.1px]"
        alt=""
        src="/Housing SVG.svg"
        height={729}
        width={552}
      />
      <Footer />
      <div className="absolute top-[3653px] left-[297px] rounded-[5px] box-border w-[845.8px] h-[502px] overflow-hidden text-smi-9 text-slategray font-body-1-medium border-[1px] border-dashed border-blueviolet">
        <div className="absolute top-[20px] left-[416px] shadow-[0px_34.7px_48.59px_rgba(0,_0,_0,_0.09)] [backdrop-filter:blur(32.13px)] flex flex-row items-start justify-start">
          <div className="w-[409.8px] relative shadow-[0px_7.2px_28.7px_rgba(0,_0,_0,_0.05)] rounded-[22.96px] bg-white h-[462px] overflow-hidden shrink-0">
            <div className="absolute top-[34.4px] left-[0px] w-[410.3px] flex flex-row items-center justify-start py-0 px-[34.4px] box-border gap-[146.3px] text-left text-sm text-dimgray-200">
              <div className="flex-1 relative tracking-[-0.15px] font-medium">
                Activity
              </div>
              <div className="flex flex-row items-start justify-start gap-[34.4px]">
                <Image
                  className="w-[23px] relative h-[23px] overflow-hidden shrink-0"
                  src=""
                  alt=""
                  width={20}
                  height={20}
                />
                <Image
                  className="w-[23px] relative h-[23px] overflow-hidden shrink-0 object-contain"
                  alt=""
                  src="/iconright.svg"
                  width={23}
                  height={23}
                />
              </div>
            </div>
            <Image
              className="absolute h-[3.12%] w-[2%] top-[8.57%] right-[44.09%] bottom-[88.31%] left-[53.9%] max-w-full overflow-hidden max-h-full object-contain"
              alt=""
              src="/Vector.svg"
              height={3}
              width={2}
            />
            <div className="absolute top-[34.4px] left-[246.8px] text-[20.1px] tracking-[-0.22px] font-medium text-primary-pressed text-left flex items-center w-[146.3px]">
              JAN 2022
            </div>
            <div className="absolute top-[86.9px] left-[26.7px] box-border w-[358.4px] h-[1.1px] border-t-[1.1px] border-solid border-neutral-blue-black-40" />
            <div className="absolute top-[110.5px] left-[-7.2px] w-[449.1px] h-[27.3px] flex flex-row items-start justify-between py-0 px-[34.4px] box-border">
              <div className="w-[45.9px] hidden flex-row items-start justify-start p-[5.7px] box-border">
                <div className="flex-1 relative uppercase font-medium">Mon</div>
              </div>
              <div className="w-[45.9px] hidden flex-row items-start justify-start p-[5.7px] box-border">
                <div className="flex-1 relative uppercase font-medium">tue</div>
              </div>
              <div className="w-[45.9px] hidden flex-row items-start justify-start p-[5.7px] box-border">
                <div className="flex-1 relative uppercase font-medium">wed</div>
              </div>
              <div className="w-[45.9px] hidden flex-row items-start justify-start p-[5.7px] box-border">
                <div className="flex-1 relative uppercase font-medium">thu</div>
              </div>
              <div className="w-[45.9px] hidden flex-row items-start justify-start p-[5.7px] box-border">
                <div className="flex-1 relative uppercase font-medium">fri</div>
              </div>
              <div className="w-[45.9px] hidden flex-row items-start justify-start p-[5.7px] box-border">
                <div className="flex-1 relative uppercase font-medium">sat</div>
              </div>
              <div className="w-[45.9px] hidden flex-row items-start justify-start p-[5.7px] box-border">
                <div className="flex-1 relative uppercase font-medium">sun</div>
              </div>
            </div>
            <div className="absolute top-[110.5px] left-[23.2px] w-[359.4px] h-[28.3px]">
              <div className="absolute top-[0.5px] left-[316.8px] w-[43.2px] h-[28.3px] flex flex-row items-start justify-start p-[5.7px] box-border">
                <div className="flex-1 relative uppercase font-medium">S</div>
              </div>
              <div className="absolute top-[0px] left-[0px] w-[43.2px] h-[28.3px] flex flex-row items-start justify-start p-[5.7px] box-border">
                <div className="flex-1 relative uppercase font-medium">M</div>
              </div>
              <div className="absolute top-[0px] left-[52.7px] w-[43.2px] h-[28.3px] flex flex-row items-start justify-start p-[5.7px] box-border">
                <div className="flex-1 relative uppercase font-medium">T</div>
              </div>
              <div className="absolute top-[0px] left-[105.4px] w-[43.2px] h-[28.3px] flex flex-row items-start justify-start p-[5.7px] box-border">
                <div className="flex-1 relative uppercase font-medium">W</div>
              </div>
              <div className="absolute top-[0px] left-[158.1px] w-[43.2px] h-[28.3px] flex flex-row items-start justify-start p-[5.7px] box-border">
                <div className="flex-1 relative uppercase font-medium">th</div>
              </div>
              <div className="absolute top-[0px] left-[210.8px] w-[43.2px] h-[28.3px] flex flex-row items-start justify-start p-[5.7px] box-border">
                <div className="flex-1 relative uppercase font-medium">F</div>
              </div>
              <div className="absolute top-[0px] left-[263.5px] w-[43.2px] h-[28.3px] flex flex-row items-start justify-start p-[5.7px] box-border">
                <div className="flex-1 relative uppercase font-medium">S</div>
              </div>
            </div>
            <div className="absolute top-[162.1px] left-[-7.2px] w-[426.1px] h-[274px] flex flex-col items-start justify-start gap-[23px] text-lg-7 text-teal-200">
              <div className="self-stretch flex flex-row items-start justify-between py-0 px-[34.4px]">
                <div className="w-[34.4px] relative rounded-[57.39px] bg-aliceblue h-[34.4px] overflow-hidden shrink-0">
                  <div className="absolute h-full w-full top-[0%] left-[0%] uppercase font-semibold flex items-center justify-center">
                    1
                  </div>
                </div>
                <div className="w-[34.4px] relative rounded-[57.39px] bg-lightsteelblue-100 h-[34.4px] overflow-hidden shrink-0">
                  <div className="absolute h-full w-full top-[0%] left-[0%] uppercase font-semibold flex items-center justify-center">
                    2
                  </div>
                </div>
                <div className="w-[34.4px] relative rounded-[57.39px] bg-lightsteelblue-300 h-[34.4px] overflow-hidden shrink-0">
                  <div className="absolute h-full w-full top-[0%] left-[0%] uppercase font-semibold flex items-center justify-center">
                    3
                  </div>
                </div>
                <div className="w-[45.9px] relative rounded-[57.39px] bg-lightsteelblue-100 box-border h-[45.9px] overflow-hidden shrink-0 border-[5.7px] border-solid border-mediumslateblue">
                  <div className="absolute h-[99.71%] w-[99.71%] top-[0%] left-[0%] uppercase font-semibold flex items-center justify-center">
                    4
                  </div>
                </div>
                <div className="w-[34.4px] relative rounded-[57.39px] bg-lavender h-[34.4px] overflow-hidden shrink-0">
                  <div className="absolute h-full w-full top-[0%] left-[0%] uppercase font-semibold flex items-center justify-center">
                    5
                  </div>
                </div>
                <div className="w-[34.4px] relative rounded-[57.39px] bg-lightsteelblue-100 h-[34.4px] overflow-hidden shrink-0">
                  <div className="absolute h-full w-full top-[0%] left-[0%] uppercase font-semibold flex items-center justify-center">
                    6
                  </div>
                </div>
                <div className="w-[34.4px] relative rounded-[57.39px] bg-aliceblue h-[34.4px] overflow-hidden shrink-0">
                  <div className="absolute h-full w-full top-[0%] left-[0%] uppercase font-semibold flex items-center justify-center">
                    7
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between py-0 px-[34.4px]">
                <div className="w-[34.4px] relative rounded-[57.39px] bg-aliceblue h-[34.4px] overflow-hidden shrink-0">
                  <div className="absolute h-full w-full top-[0%] left-[0%] uppercase font-semibold flex items-center justify-center">
                    8
                  </div>
                </div>
                <div className="w-[34.4px] relative rounded-[57.39px] bg-lightsteelblue-200 h-[34.4px] overflow-hidden shrink-0">
                  <div className="absolute h-full w-full top-[0%] left-[0%] uppercase font-semibold flex items-center justify-center">
                    9
                  </div>
                </div>
                <div className="w-[34.4px] relative rounded-[57.39px] bg-lightsteelblue-100 h-[34.4px] overflow-hidden shrink-0">
                  <div className="absolute h-full w-full top-[0%] left-[0%] uppercase font-semibold flex items-center justify-center">
                    10
                  </div>
                </div>
                <div className="w-[34.4px] relative rounded-[57.39px] bg-lightsteelblue-100 h-[34.4px] overflow-hidden shrink-0">
                  <div className="absolute h-full w-full top-[0%] left-[0%] uppercase font-semibold flex items-center justify-center">
                    11
                  </div>
                </div>
                <div className="w-[34.4px] relative rounded-[57.39px] bg-white h-[34.4px] overflow-hidden shrink-0">
                  <div className="absolute h-full w-full top-[0%] left-[0%] uppercase font-semibold flex items-center justify-center">
                    12
                  </div>
                </div>
                <div className="w-[34.4px] relative rounded-[57.39px] bg-lightsteelblue-300 h-[34.4px] overflow-hidden shrink-0">
                  <div className="absolute h-full w-full top-[0%] left-[0%] uppercase font-semibold flex items-center justify-center">
                    13
                  </div>
                </div>
                <div className="w-[34.4px] relative rounded-[57.39px] bg-aliceblue h-[34.4px] overflow-hidden shrink-0">
                  <div className="absolute h-full w-full top-[0%] left-[0%] uppercase font-semibold flex items-center justify-center">
                    14
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between py-0 px-[34.4px]">
                <div className="w-[34.4px] relative rounded-[57.39px] bg-aliceblue h-[34.4px] overflow-hidden shrink-0">
                  <div className="absolute h-full w-full top-[0%] left-[0%] uppercase font-semibold flex items-center justify-center">
                    15
                  </div>
                </div>
                <div className="w-[34.4px] relative rounded-[57.39px] bg-lightsteelblue-300 h-[34.4px] overflow-hidden shrink-0">
                  <div className="absolute h-full w-full top-[0%] left-[0%] uppercase font-semibold flex items-center justify-center">
                    16
                  </div>
                </div>
                <div className="w-[34.4px] relative rounded-[57.39px] bg-lightsteelblue-100 h-[34.4px] overflow-hidden shrink-0">
                  <div className="absolute h-full w-full top-[0%] left-[0%] uppercase font-semibold flex items-center justify-center">
                    17
                  </div>
                </div>
                <div className="w-[34.4px] relative rounded-[57.39px] bg-mediumslateblue h-[34.4px] overflow-hidden shrink-0">
                  <div className="absolute h-full w-full top-[0%] left-[0%] uppercase font-semibold flex items-center justify-center">
                    18
                  </div>
                </div>
                <div className="w-[34.4px] relative rounded-[57.39px] bg-mediumslateblue h-[34.4px] overflow-hidden shrink-0">
                  <div className="absolute h-full w-full top-[0%] left-[0%] uppercase font-semibold flex items-center justify-center">
                    19
                  </div>
                </div>
                <div className="w-[34.4px] relative rounded-[57.39px] bg-lightsteelblue-100 h-[34.4px] overflow-hidden shrink-0">
                  <div className="absolute h-full w-full top-[0%] left-[0%] uppercase font-semibold flex items-center justify-center">
                    20
                  </div>
                </div>
                <div className="w-[34.4px] relative rounded-[57.39px] bg-aliceblue h-[34.4px] overflow-hidden shrink-0">
                  <div className="absolute h-full w-full top-[0%] left-[0%] uppercase font-semibold flex items-center justify-center">
                    21
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between py-0 px-[34.4px]">
                <div className="w-[34.4px] relative rounded-[57.39px] bg-aliceblue h-[34.4px] overflow-hidden shrink-0">
                  <div className="absolute h-full w-full top-[0%] left-[0%] uppercase font-semibold flex items-center justify-center">
                    22
                  </div>
                </div>
                <div className="w-[34.4px] relative rounded-[57.39px] bg-lavender h-[34.4px] overflow-hidden shrink-0">
                  <div className="absolute h-full w-full top-[0%] left-[0%] uppercase font-semibold flex items-center justify-center">
                    23
                  </div>
                </div>
                <div className="w-[34.4px] relative rounded-[57.39px] bg-lightsteelblue-300 h-[34.4px] overflow-hidden shrink-0">
                  <div className="absolute h-full w-full top-[0%] left-[0%] uppercase font-semibold flex items-center justify-center">
                    24
                  </div>
                </div>
                <div className="w-[34.4px] relative rounded-[57.39px] bg-lightsteelblue-100 h-[34.4px] overflow-hidden shrink-0">
                  <div className="absolute h-full w-full top-[0%] left-[0%] uppercase font-semibold flex items-center justify-center">
                    25
                  </div>
                </div>
                <div className="w-[34.4px] relative rounded-[57.39px] bg-lightsteelblue-100 h-[34.4px] overflow-hidden shrink-0">
                  <div className="absolute h-full w-full top-[0%] left-[0%] uppercase font-semibold flex items-center justify-center">
                    26
                  </div>
                </div>
                <div className="w-[34.4px] relative rounded-[57.39px] bg-lightsteelblue-100 h-[34.4px] overflow-hidden shrink-0">
                  <div className="absolute h-full w-full top-[0%] left-[0%] uppercase font-semibold flex items-center justify-center">
                    27
                  </div>
                </div>
                <div className="w-[34.4px] relative rounded-[57.39px] bg-aliceblue h-[34.4px] overflow-hidden shrink-0">
                  <div className="absolute h-full w-full top-[0%] left-[0%] uppercase font-semibold flex items-center justify-center">
                    28
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between py-0 px-[34.4px] text-darkslateblue">
                <div className="w-[34.4px] relative rounded-[57.39px] bg-white h-[34.4px] overflow-hidden shrink-0 text-teal-200">
                  <div className="absolute h-full w-full top-[0%] left-[0%] uppercase font-semibold flex items-center justify-center">
                    29
                  </div>
                </div>
                <div className="w-[34.4px] relative rounded-[57.39px] bg-white h-[34.4px] overflow-hidden shrink-0 text-teal-200">
                  <div className="absolute h-full w-full top-[0%] left-[0%] uppercase font-semibold flex items-center justify-center">
                    30
                  </div>
                </div>
                <div className="w-[34.4px] relative rounded-[57.39px] bg-lightsteelblue-100 h-[34.4px] overflow-hidden shrink-0 text-teal-200">
                  <div className="absolute h-full w-full top-[0%] left-[0%] uppercase font-semibold flex items-center justify-center">
                    31
                  </div>
                </div>
                <div className="w-[34.4px] relative h-[34.4px]">
                  <div className="absolute h-full w-full top-[0%] left-[0%] uppercase font-medium flex items-center justify-center">
                    25
                  </div>
                </div>
                <div className="w-[34.4px] relative h-[34.4px]">
                  <div className="absolute h-full w-full top-[0%] left-[0%] uppercase font-medium flex items-center justify-center">
                    26
                  </div>
                </div>
                <div className="w-[34.4px] relative h-[34.4px]">
                  <div className="absolute h-full w-full top-[0%] left-[0%] uppercase font-medium flex items-center justify-center">
                    27
                  </div>
                </div>
                <div className="w-[34.4px] relative h-[34.4px]">
                  <div className="absolute h-full w-full top-[0%] left-[0%] uppercase font-medium flex items-center justify-center">
                    28
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[20px] left-[20px] flex flex-col items-start justify-start">
          <Image
            className="w-[364.8px] relative rounded-[9.32px] h-[266.3px] object-cover"
            alt=""
            src="/zoomcall.webp"
            width={365}
            height={266}
          />
          <div className="w-[364.8px] relative bg-teal-200 h-[230.3px] mt-[-36px]" />
        </div>
      </div>
      <Carousel />
      <div className="absolute top-[0px] left-[0px] w-[1800px] h-[152px]">
        <Header />
        <Image
          className="absolute h-full w-[20.04%] top-[0%] right-[79.96%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/masterpiecelogo.svg"
          width={20}
          height={20}
        />
      </div>
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
    </div>
  );
};

export default Mastercraft;
