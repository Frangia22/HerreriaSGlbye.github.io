import React, { useRef } from "react";
import AboutUsImage from "@/assets/flyer/about_us_image.png";
import { ABOUT_US } from "@/data/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { WeldingAnimationIcon } from "@/assets/icons/icons";

gsap.registerPlugin(ScrollTrigger);
export function AboutUs({ id }: { id: string }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const weldingAnimationRef = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add(
      {
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)",
      },
      (context) => {
        if (context?.conditions?.isMobile) {
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top center",
              toggleActions: "play pause reverse reverse",
            },
          });
          timeline
            .from(
              imageRef.current,
              {
                duration: 0.8,
                x: -50,
                opacity: 0,
                stagger: 0.2,
                ease: "power3.inOut",
              },
              "-=0.3"
            )
            .from(
              contentRef.current?.children || [],
              {
                duration: 0.6,
                y: 30,
                opacity: 0,
                stagger: 0.2,
                ease: "power3.inOut",
              },
              "-=0.3"
            );
        }
        if (context?.conditions?.isDesktop) {
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top center",
              toggleActions: "play pause reverse reverse",
            },
          });
          timeline.to(
            weldingAnimationRef.current,
            {
              duration: 2.5,
              x: 0,
              y: 100,
              ease: "power1.inOut",
              stagger: 0.2,
            },
          );          
        }
      },
      {
        scope: sectionRef.current,
      }
    );
  });

  return (
    <section
      id={id}
      ref={sectionRef}
      className="flex flex-col items-center justify-center gap-[20px] bg-[#F6F5F3] py-[40px]"
    >
      <h2
        ref={titleRef}
        className="font-josefin text-[32px] leading-[40px] text-[#1D1D1D] font-bold"
      >
        {ABOUT_US.title}
      </h2>
      <p className="font-josefin text-[16px] text-[#1D1D1DD9] font-medium text-center w-[calc(100%-40px)] md:max-w-xl">
        {ABOUT_US.subtitle}
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-[20px] lg:gap-[80px] xl:gap-[140px] mb-[40px]">
        <div
          ref={imageRef}
          className="hidden md:block md:relative aspect-[10/2] md:aspect-[4/3] w-[calc(100%-100px)] md:w-full md:scale-75 lg:scale-100"
        >
          <div className="bg-[#DEEBFB] size-[90px] rounded-[5px] absolute -top-[20px] -left-[20px] z-0"></div>
          <img
            className="relative z-[2] w-full h-full object-cover rounded-[10px]"
            src={AboutUsImage}
            alt="Hombre soldando"
          />
          <WeldingAnimationIcon
            ref={weldingAnimationRef}
            className="absolute top-[40px] -right-[62px] size-[90px] z-[1]"
          />
          <div className="bg-[#F5EEE1] size-[90px] rounded-[5px] absolute -bottom-[20px] -right-[20px] z-[0]"></div>
        </div>
        <div className="block md:hidden aspect-[10/7]">
          <img
            ref={imageRef}
            src={AboutUsImage}
            alt="Hombre soldando"
            className="w-[calc(100%-40px)] h-full object-cover rounded-[10px] mx-auto"
          />
        </div>
        <div
          ref={contentRef}
          className="flex flex-col items-start justify-center gap-[10px] w-[calc(100%-40px)] md:max-w-xs lg:max-w-md"
        >
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
