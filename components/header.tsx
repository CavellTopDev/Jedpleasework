"use client"
import type { NextPage } from "next";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Headbutton from "./ui/headerbuttons";


const Header: NextPage = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    
    <div className="absolute h-[55.2%] w-[70.2%] top-[0%] right-[0%] bottom-[44.8%] left-[39.8%] text-center text-sm text-white font-small-3">
      {viewportWidth > 750 && <Headbutton />}
      {viewportWidth <= 750 && (
        <button className="absolute top-[34.48%] left-[37.44%] text-sm tracking-[0.2px] leading-[18px] font-semibold font-small-3 text-white text-center">
          <Image
            src="/menu.svg"
            width={50}
            height={50}
            alt="Menu"
          />
        </button>
      )}
    </div>
  );
};

export default Header;
