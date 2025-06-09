import React from "react";
import AboutUsImage from "../assets/flyer/about_us_image.png";
import { ABOUT_US } from "../data/constants";
export function AboutUs() {
  return (
    <section className="flex flex-col items-center justify-center gap-[20px] bg-[#F6F5F3]">
      <h2 className="font-josefin text-[32px] leading-[40px] text-[#1D1D1D] font-bold">
        {ABOUT_US.title}
      </h2>
      <p className="font-josefin text-[16px] text-[#1D1D1DD9] font-medium max-w-xl">
        {ABOUT_US.subtitle}
      </p>
      <div className="flex items-center justify-center gap-[140px] -translate-y-[40px]">
        <div className="relative">
          <div className="bg-[#DEEBFB] size-[90px] rounded-[5px] absolute top-[70px] -left-[20px]"></div>
          <img className="static z-[1]" src={AboutUsImage} alt="Hombre soldando" />
          <div className="bg-[#F5EEE1] size-[90px] rounded-[5px] absolute bottom-[70px] -right-[82%] z-[0]"></div>
        </div>
        <div className="flex flex-col items-start justify-center gap-[10px] max-w-md">
          {ABOUT_US.items.map((item, index) => (
            <div key={index}>
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
