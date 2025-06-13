import React from 'react';
import { Link } from 'react-router';
import { HerreriaIcon } from '../assets/icons/icons';

export function Navbar() {
    return (
        <nav className='fixed lg:static top-[25px] lg:top-0 z-10 mx-auto shadow-lg lg:shadow-none w-[calc(100vw-40px)] lg:w-full rounded-[10px] lg:rounded-none  flex justify-around items-center py-[13px] bg-[#F6F5F3] border border-white lg:border-none'>
            <div className='flex items-end justify-center gap-2'>
                <HerreriaIcon className={'fill-black'} />
                <h2 className='md:hidden lg:block font-josefin font-semibold text-[24px] leading-[24px]'>Herrería SG</h2>
            </div>
            <ol className='hidden md:flex items-center gap-4 list-none'>
                <li>
                    <Link className='font-josefin font-medium text-[16px]' to="/">Sobre nosotros</Link>
                </li>
                <li>
                    <Link className='font-josefin font-medium text-base' to="/servicios">Servicios</Link>
                </li>
                <li>
                    <Link className='font-josefin font-medium text-base' to="/contacto">Proyectos</Link>
                </li>
            </ol>

            <button className='bg-[#111111] px-[20px] py-[5px] rounded-[5px] hover:bg-[#1a1a1a] hover:shadow-md transition-colors duration-300 hidden md:block'>
                <Link className='text-white font-josefin font-medium text-[16px] leading-4' to="/contact">Contacto</Link>
            </button>
        </nav>
    )
}