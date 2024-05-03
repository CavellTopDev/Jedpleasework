import type { NextPage } from "next";
import Title from "./title";

const Titlecontainer: NextPage = () => {
  return (
    <div className="absolute top-[169px] left-[calc(50%_-_290px)] w-[627px] h-[91px] flex flex-col items-center justify-start gap-[10px] titlestart">
        <Title />
        <div className="w-[845px] relative leading-[80%] font-extralight text-gray-300 inline-block h-[98px] shrink-0 masterpiece2">
          “where artistry meets precision”
        </div>
      </div>
  );
};

export default Titlecontainer;
