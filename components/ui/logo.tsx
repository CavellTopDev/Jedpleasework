import * as React from "react";
import Image from 'next/image'

function Logo() {
  return (
    <Image
      src="/logo31.svg"
      className="w-full aspect-[1.85] max-w-[150px] logo"
      width={125}
      height={50} 
      alt={""}    
      />
  );
}

export default Logo