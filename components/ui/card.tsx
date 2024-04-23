import type { NextPage } from "next";

const Card: NextPage = () => {
  return (
    <div className="flex-1 rounded-[3.85px] h-[485px] flex flex-col items-start justify-start py-[57.8px] px-[34.7px] box-border bg-[url('/phototen.webp')] bg-cover bg-no-repeat bg-[top] text-left text-4xl-1 text-white font-lato">
      <div className="self-stretch flex-1 flex flex-col items-start justify-start">
        <div className="self-stretch relative tracking-[-0.15px] leading-[130%]">
          03
        </div>
      </div>
    </div>
  );
};

export default Card;
