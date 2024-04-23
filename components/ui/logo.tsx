import * as React from "react";
import Image from 'next/image'

function Logo() {
  return (
    <Image
      src="/logo31.svg"
      className="w-full aspect-[1.85] max-w-[279px]"
      width={279}
      height={152} 
      alt={""}    
      />
  );
}

export default Logo