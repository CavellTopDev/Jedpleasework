import type { NextPage } from "next";


const Bookingsection: NextPage = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center px-16 text-center max-w-[861px] max-md:px-5 bookingcard">
      <div className="flex flex-col justify-center max-w-full w-[519px]">
     <div className="text-3xl font-semibold tracking-tight leading-8 text-zinc-950 max-md:max-w-full">
      Ready to Chat? Complete Our Form Then Book a Call !
     </div>
     <div className="mt-3.5 text-lg leading-6 text-slate-600 max-md:max-w-full">
      Connect with us for a quick chat to explore your vision and goals. Our
      consultation not only refines your estimate but also pinpoints the
      ideal timing to initiate the design process.
     </div>
      <button className="cursor-pointer mt-4 py-[9.3px] px-[12.4px] bg-[transparent] shadow-[0px_75.5px_20.98px_rgba(27,_114,_93,_0.01),_0px_48.4px_19.46px_rgba(27,_114,_93,_0.06),_0px_27.1px_16.4px_rgba(27,_114,_93,_0.2),_0px_12.2px_12.21px_rgba(27,_114,_93,_0.35),_0px_3.1px_6.49px_rgba(27,_114,_93,_0.4)] rounded-[77342.22px] bg-gradient-to-b from-teal-500 to-teal-600 w-[136px] h-[54px] flex items-center justify-center border-[2px] border-solid border-teal-200 buttonone">
      <div className="relative text-[11.4px] leading-[94%] uppercase font-medium font-plus-jakarta-sans text-white text-center">
        BOOK CALL
       </div>
      </button>
     </div>
    </div>
    
  );
};

export default Bookingsection;