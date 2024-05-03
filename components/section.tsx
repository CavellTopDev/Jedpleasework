import type { NextPage } from "next";
import Card2 from "./ui/card2";
import Card1 from "./ui/card1";
import Card from "./ui/card";

const Section: NextPage = () => {
  return (
    <div className="absolute top-[1703px] left-[calc(50%_-_499px)] w-[1025.7px] flex flex-col items-center justify-start pt-[46.6px] px-[19.3px] pb-[36.2px] box-border text-left text-4xl-1 text-white font-lato section1">
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch h-[541px] flex flex-col items-start justify-start">
          <div className="self-stretch h-[542px] flex flex-row items-start justify-start gap-[23.1px]">
            <Card2 />
            <Card1 />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
