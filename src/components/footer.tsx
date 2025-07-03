import { handleSection, handleToTop } from "../utils/handleSection";
import {
  FacebookIcon,
  HerreriaIcon,
  InstagramIcon,
  WhatsappIcon,
} from "../assets/icons/icons";
import React from "react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="w-full bg-[#0F203B]">
      <div className="flex flex-col md:flex-row items-center justify-around gap-[20px] md:gap-0 py-[20px] border-b border-[#F6F5F3]/70">
        <div
          onClick={handleToTop}
          className="flex items-end justify-center gap-[25px]"
        >
          <HerreriaIcon className="size-[40px] fill-[#F6F5F3]" />
          <Link
            to="/"
            className="font-josefin text-[24px] leading-[32px] font-semibold text-[#F6F5F3]"
          >
            Herrería SG
          </Link>
        </div>
        <ul className="flex items-center gap-[20px]">
          <Link to="https://www.instagram.com/herreriasglbye/">
            <InstagramIcon className="size-[24px] fill-[#EDF4FC]/90 hover:fill-[#F6F5F3] hover:scale-125 transition-all duration-300" />
          </Link>
          <Link to="https://wa.me/543385402464">
            <WhatsappIcon className="size-[24px] fill-[#EDF4FC]/90 hover:fill-[#F6F5F3] hover:scale-125 transition-all duration-300" />
          </Link>
          <Link to="https://www.facebook.com/oscarsergiogabriel.giachero">
            <FacebookIcon className="size-[24px] stroke-[#EDF4FC]/90 hover:scale-125 transition-all duration-300 stroke-2 fill-transparent hover:stroke-[#F6F5F3] hover:fill-transparent" />
          </Link>
        </ul>
        <ul className="flex items-center gap-[20px] text-[#F6F5F3]/95 hover:text-[#F6F5F3] font-josefin text-[14px] leading-[20px] font-medium">
          <li>
            <Link onClick={() => handleSection("about")} to="about">
              Sobre nosotros
            </Link>
          </li>
          <li>
            <Link onClick={() => handleSection("services")} to="services">
              Servicios
            </Link>
          </li>
          <li>
            <Link onClick={() => handleSection("contact")} to="contact">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
      <div className="py-[40px]">
        <p className="font-josefin text-[14px] font-medium text-[#F6F5F3]/85 text-center">
          2025 Herrería SG. Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
