import { useGSAP } from "@gsap/react";
import { CONTACT } from "@/data/constants";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function Contact({ id }: { id: string }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    timeline
      .from(titleRef.current, {
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: "power3.out"
      })
      .from(descriptionRef.current, {
        duration: 0.8,
        x: -50,
        opacity: 0,
        ease: "power3.out"
      }, "-=0.5")
      .from(cardsRef.current?.children || [], {
        duration: 0.6,
        y: 30,
        opacity: 0,
        stagger: 0.1,
        ease: "power3.out"
      }, "-=0.6");

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };

  })
  return (
    <section ref={sectionRef} id={id} className="flex flex-col items-center justify-center gap-[20px] py-[40px] bg-[#F6F5F3]">
      <h2 ref={titleRef} className="font-josefin text-[32px] leading-[40px] text-[#1D1D1D] font-bold">
        {CONTACT.title}
      </h2>
      <p ref={descriptionRef} className="font-josefin text-[16px] text-[#1D1D1DD9] font-medium max-w-xl text-center">
        {CONTACT.subtitle}
      </p>
      <div ref={cardsRef} className="flex flex-col md:flex-row items-center justify-center gap-[30px] w-[calc(100%-40px)] lg:w-[1000px]">
        {CONTACT.items.map((item, index) => (
          <article key={index} className="flex flex-col items-center justify-center gap-[5px] bg-[#CFE2FA] rounded-[10px] p-[20px] aspect-[2/.75] md:aspect-[16/10] w-full">
            <div className="flex items-center justify-center size-[48px] rounded-[10px] bg-[#DEEBFB] text-white">
                {item.icon}
            </div>
            <h4 className="font-onest text-[20px] text-[#1D1D1D] font-semibold leading-[24px]">{item.title}</h4>
            <p className="font-onest text-[14px] text-[#1D1D1DD9] font-medium text-center w-[200px]">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
