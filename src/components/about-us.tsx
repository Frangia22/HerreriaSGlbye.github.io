import React from "react";
import AboutUsImage from "../assets/flyer/about_us_image.png";
import { ABOUT_US } from "../data/constants";
export function AboutUs() {
  return (
    <section className="flex flex-col items-center justify-center gap-[20px] bg-[#F6F5F3] py-[40px] md:py-0">
      <h2 className="font-josefin text-[32px] leading-[40px] text-[#1D1D1D] font-bold">
        {ABOUT_US.title}
      </h2>
      <p className="font-josefin text-[16px] text-[#1D1D1DD9] font-medium text-center md:max-w-xl">
        {ABOUT_US.subtitle}
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-[20px] lg:gap-[80px] xl:gap-[140px] md:-translate-y-[40px]">
        <div className="hidden md:block md:relative aspect-[10/2] md:aspect-[4/3] w-[calc(100%-100px)] md:w-full md:scale-75 lg:scale-100">
          <div className="bg-[#DEEBFB] size-[90px] rounded-[5px] absolute top-[70px] -left-[20px]"></div>
          <img className="static z-[1] w-full h-full object-cover rounded-[10px]" src={AboutUsImage} alt="Hombre soldando" />
          <div className="bg-[#F5EEE1] size-[90px] rounded-[5px] absolute bottom-[70px] -right-[82%] z-[0]"></div>
        </div>
        <div className="block md:hidden aspect-[10/7]">
          <img src={AboutUsImage} alt="Hombre soldando" className="w-full h-full object-cover rounded-[10px]" />
        </div>
        <div className="flex flex-col items-start justify-center gap-[10px] w-[calc(100%-40px)] md:max-w-xs lg:max-w-md">
          {ABOUT_US.items.map((item, index) => (
            <div key={index} className="md:max-w-[400px] xl:max-w-none">
              <h3 className="font-josefin text-[20px] text-[#1D1D1D] font-semibold">
                {item.title}
              </h3>
              <p className="text-start font-josefin font-medium text-[14px] text-[#1D1D1DD9] prose">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
