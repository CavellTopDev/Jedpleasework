import type { NextPage } from "next";
import Titlecontainer from "@/components/Titlecontainer";
import Hero2 from "@/components/Hero2";
import Testimoniallove from "@/components/wholetestimonial";
import Banner from "@/components/banner";
import Section from "@/components/section";
import Section2 from "@/components/section2";
import Bookingsection from "@/components/Booking";
import Footer from "@/components/footer";
import BookingDate from "@/components/componentdate";
import Headerlife from "@/components/header3";
import Affiliatebrands from "@/components/affiliatesection";
import Image from 'next/image';
import { MantineProvider } from '@mantine/core';
import Carouselly from "@/components/ui/carousel3";

const Mastercraft: NextPage = () => {
  return (
    <MantineProvider>
      <div className="w-full relative bg-white h-[6840px] overflow-hidden text-center text-21xl text-gray-100 font-plus-jakarta-sans">
        <Titlecontainer />
        <Hero2 />
        <Testimoniallove />
        <Banner />
        <Section />
        <Section2 />
        <Bookingsection />
        <Image
          className="absolute top-[5486.9px] left-[869px] w-[552px] h-[729.1px] housing"
          alt=""
          src="/Housing SVG.svg"
          height={729}
          width={552}
        />
        <Footer />
        <BookingDate />
        <Carouselly />
        <div className="absolute top-[0px] left-[0px] w-[1800px] h-[152px] container">
          <Headerlife />
          <Image
            className="absolute h-full w-[20.04%] top-[0%] right-[79.96%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover logo"
            alt=""
            src="/masterpiecelogo.svg"
            width={20}
            height={20}
          />
        </div>
        <Affiliatebrands />
      </div>
    </MantineProvider>
  );
};

export default Mastercraft;

