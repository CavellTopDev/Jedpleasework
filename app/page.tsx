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
import Testimoniallove from "@/components/wholetestimonial";
import Titlecontainer from "@/components/Titlecontainer";
import BookingDate from "@/components/componentdate";
import Hero2 from "@/components/Hero2";
import Banner from "@/components/banner";
import Bookingsection from "@/components/Booking";
import Affiliatebrands from "@/components/affiliatesection";
import Headerlife from "@/components/header3";
import Section2 from "@/components/section2";

const Mastercraft: NextPage = () => {
  return (
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
      <Carousel />
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
  );
};

export default Mastercraft;
