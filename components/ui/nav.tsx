import * as React from "react";

function Nav() {
  return (
    <div className="flex gap-5 tracking-wide text-center max-w-[766px] max-md:flex-wrap">
      <div className="flex flex-auto gap-5 justify-between px-5 my-auto text-lg font-medium leading-6 text-zinc-800 max-md:flex-wrap">
        <div>Masterpiece Installations </div>
        <div className="text-teal-700">Contact Us</div>
        <div>FAQ’s</div>
        <div>Blog</div>
      </div>
      <div className="flex flex-col justify-center text-sm font-semibold leading-5 text-white whitespace-nowrap">
        <div className="flex flex-col justify-center bg-white">
          <div className="justify-center items-center px-16 py-6 bg-teal-700 border-2 border-white border-solid rounded-[36px] max-md:px-5">
            LOGIN
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav


