import { CONTACT } from "../data/constants";
import { HerreriaIcon } from "../assets/icons/icons";
import React from "react";

export function Contact({ id }: { id: string }) {
  return (
    <section id={id} className="flex flex-col items-center justify-center gap-[20px] py-[40px] bg-[#F6F5F3]">
      <h2 className="font-josefin text-[32px] leading-[40px] text-[#1D1D1D] font-bold">
        {CONTACT.title}
      </h2>
      <p className="font-josefin text-[16px] text-[#1D1D1DD9] font-medium max-w-xl text-center">
        {CONTACT.subtitle}
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-[30px] w-[calc(100%-40px)] lg:w-[1000px]">
        {CONTACT.items.map((item, index) => (
          <article key={index} className="flex flex-col items-center justify-center gap-[5px] bg-[#CFE2FA] rounded-[10px] p-[20px] aspect-[2/.75] md:aspect-[16/10] w-full">
            <div className="flex items-center justify-center size-[48px] rounded-[10px] bg-[#DEEBFB] text-white">
                <HerreriaIcon className="size-[32px] fill-[#0F203B]" />
            </div>
            <h4 className="font-onest text-[20px] text-[#1D1D1D] font-semibold leading-[24px]">{item.title}</h4>
            <p className="font-onest text-[14px] text-[#1D1D1DD9] font-medium text-center w-[200px]">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
