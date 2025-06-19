import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { BurgerMenuIcon, CloseIcon, HerreriaIcon } from "../assets/icons/icons";
import { handleSection, handleToTop } from "../utils/handleSection";

function NavItem({
  children,
  to,
  isScrolled,
}: {
  children: React.ReactNode;
  to: string;
  isScrolled: boolean;
}) {
  
  return (
    <li>
      <NavLink
        onClick={() => handleSection(to)}
        className={({ isActive }) => `font-josefin font-medium text-base relative group ${
          isScrolled ? "text-[#1D1D1D]/95 hover:text-[#161616]" : "lg:text-white"
        } ${isActive ? "text-black underline decoration-[2px] underline-offset-[6px]" : ""}`}
        to={to}
      >
        {children}
        <span
          className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
            isScrolled ? "bg-black" : "bg-black md:bg-white"
          }`}
        ></span>
      </NavLink>
    </li>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-[15px] lg:top-0 z-30 mx-auto w-[calc(100vw-20px)] lg:w-full ${
        isMenuOpen
          ? "rounded-t-[10px]"
          : "rounded-[10px] lg:rounded-none lg:rounded-b-[10px]"
      } flex justify-around items-center py-[13px] ${
        isScrolled
          ? "bg-[#F6F5F3] shadow-lg"
          : "bg-[#F6F5F3] shadow-lg lg:shadow-none lg:bg-transparent"
      } border border-white lg:border-none`}
    >
      <div onClick={handleToTop} className="flex items-end justify-center gap-2">
        <HerreriaIcon
          className={`${
            isScrolled ? "fill-black" : "fill-black lg:fill-white"
          }`}
        />
        <h2
          className={`md:hidden lg:block font-josefin font-semibold text-[24px] leading-[24px] ${
            isScrolled ? "text-black" : "lg:text-white"
          }`}
        >
          Herrería SG
        </h2>
      </div>
      <ol className="hidden md:flex items-center gap-4 list-none">
        <NavItem to="about" isScrolled={isScrolled}>
          Sobre nosotros
        </NavItem>
        <NavItem to="services" isScrolled={isScrolled}>
          Servicios
        </NavItem>
        {/*<NavItem to="/contacto" isScrolled={isScrolled}>Proyectos</NavItem>*/}
      </ol>

      <button onClick={() => handleSection('contact')} className="bg-[#111111] px-[20px] py-[5px] rounded-[5px] hover:bg-[#1a1a1a] hover:shadow-md transition-colors duration-300 hidden md:block">
        <Link
          className="text-white font-josefin font-medium text-[16px] leading-4"
          to="contact"
        >
          Contacto
        </Link>
      </button>
      <button
        className="md:hidden cursor-pointer hover:border hover:border-[#1D1D1D] active:border-[#1D1D1D] rounded-[5px] transition-all duration-300 p-1"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <CloseIcon className="size-[24px] fill-[#1D1D1D]/90 hover:fill-[#111111]" />
        ) : (
          <BurgerMenuIcon className="size-[24px] fill-[#1D1D1D] transition-transform duration-300 hover:fill-[#1a1a1a]" />
        )}
      </button>
      <div
        className={`${
          isMenuOpen ? "flex transition-all duration-300" : "hidden"
        } md:hidden fixed -z-10 top-[60px] w-[calc(100vw-20px)] py-[20px] bg-[#F6F5F3] flex flex-col items-center justify-between gap-4 rounded-b-[10px] border border-white border-t-0 shadow-lg`}
      >
        <ol className="flex flex-col items-center justify-center gap-4">
          <NavItem to="/" isScrolled={isScrolled}>
            Inicio
          </NavItem>
          <NavItem to="/about" isScrolled={isScrolled}>
            Sobre nosotros
          </NavItem>
          <NavItem to="/services" isScrolled={isScrolled}>
            Servicios
          </NavItem>
          {/*<NavItem to="/contacto" isScrolled={isScrolled}>Proyectos</NavItem>*/}
        </ol>
        <button className="bg-[#111111] px-[20px] py-[5px] rounded-[5px] hover:bg-[#1a1a1a] hover:shadow-md transition-colors duration-300">
          <Link
            className="text-white font-josefin font-medium text-[16px] leading-4"
            onClick={() => handleSection('contact')}
            to="contact"
          >
            Contacto
          </Link>
        </button>
      </div>
    </nav>
  );
}
