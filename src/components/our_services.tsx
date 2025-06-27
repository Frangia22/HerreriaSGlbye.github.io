import React, { useRef } from "react";
import { OUR_SERVICES, OUR_WORK_PROCESS } from "@/data/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function OurServices({ id }: { id: string }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const sectionWorkProcessRef = useRef<HTMLDivElement>(null);
  const titleWorkProcessRef = useRef<HTMLHeadingElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom 20%",
        toggleActions: "play pause reverse reverse",
      },
    });

    timeline
      .from(titleRef.current, {
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: "power3.out",
      })
      .from(
        descriptionRef.current,
        {
          duration: 0.6,
          y: 30,
          opacity: 0,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .from(
        cardsRef.current?.children || [],
        {
          duration: 0.6,
          y: 50,
          opacity: 0,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.3"
      )
      .from(titleWorkProcessRef.current, {
        duration: 0.8,
        y: 50,
        opacity: 0.2,
        ease: "power3.out",
      })
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  });

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionWorkProcessRef.current,
        start: "top bottom",
        end: "bottom 60%",
        toggleActions: "play pause reverse reverse",
      },
    });
    timeline.from(
      stepsRef.current?.children || [],
      {
        duration: 0.5,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out",
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  })
  return (
    <section
      ref={sectionRef}
      id={id}
      className="flex flex-col items-center justify-center gap-[20px] my-[40px]"
    >
      <h2
        ref={titleRef}
        className="font-josefin text-[32px] leading-[40px] text-[#1D1D1D] font-bold"
      >
        Nuestros servicios
      </h2>
      <p
        ref={descriptionRef}
        className="font-josefin text-[16px] text-[#1D1D1DD9] font-medium max-w-xl text-center"
      >
        Ofrecemos una amplia gama de servicios de herrería y metalúrgica para
        satisfacer todas sus necesidades
      </p>
      <div
        ref={cardsRef}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-[20px] gap-y-[30px] w-[calc(100%-40px)] lg:max-w-[1000px]"
      >
        {OUR_SERVICES.items.map((item, index) => (
          <div
            key={index}
            className="aspect-[16/9] flex flex-col md:flex-row justify-center items-center gap-[25px] p-[20px] bg-white/5 border border-[#D8D8D8] rounded-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-[2px]"
          >
            {item.icon}
            <div className="flex flex-col justify-center items-center md:items-start gap-[5px] w-[calc(100%-76px)]">
              <h3 className="font-josefin text-[18px] text-[#1D1D1D] font-semibold">
                {item.title}
              </h3>
              <p className="font-josefin font-medium text-[14px] text-[#1D1D1DD9] text-center md:text-start">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="font-josefin text-[32px] leading-[40px] text-[#1D1D1D] font-bold text-center mt-[50px] px-[20px] md:px-0">
        Nuestro proceso de trabajo
      </h2>
      <div ref={sectionWorkProcessRef} className="w-full mb-[40px]">
        <h2 ref={titleWorkProcessRef} className="sr-only">
          Nuestro proceso de trabajo
        </h2>
        <div ref={stepsRef}>
          <ol className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-[1000px] mx-auto px-2 sm:px-0">
            {OUR_WORK_PROCESS.items.map((item, index) => (
              <li
                key={index}
                className="relative flex-1 flex flex-col items-center"
              >
                <div
                  className={`hidden md:block absolute w-full left-0 top-[60px] h-[4px] bg-[#0F203B] z-0 ${
                    index === 0
                      ? "rounded-l-[10px]"
                      : index === 3
                      ? "rounded-r-[10px]"
                      : ""
                  }`}
                ></div>
                <span className="flex items-center justify-center size-[45px] text-[18px] rounded-full bg-linear-[-108deg] from-[#0f203b] to-45% to-[#1c396d] z-10 text-[#F6F5F3] font-bold border-4 border-white shadow-lg">
                  {index + 1}
                </span>
                <div className="my-[10px] md:mt-[30px] text-center px-2 bg-white p-[20px] aspect-[3/1] md:aspect-auto md:p-0 md:bg-transparent rounded-[10px] shadow-sm border border-slate-100 md:border-none md:shadow-none">
                  <h4 className="font-josefin text-[18px] text-[#1D1D1D] font-semibold">
                    {item.title}
                  </h4>
                  <p className="font-josefin font-medium text-[14px] text-[#1D1D1DD9] w-[calc(100%-40px)] md:w-[180px] mx-auto">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
