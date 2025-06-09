import React from 'react';
import { Link } from 'react-router';
import HeroImage from '../assets/flyer/hero_image.png'
export function Hero() {
    return (
        <div className='bg-linear-[-108deg] from-[#0f203b] to-45% to-[#1c396d]'>
            <section className="flex items-center justify-center gap-[140px] h-[420px]">
                <div className='flex flex-col items-start justify-center gap-[20px] max-w-lg'>
                    <h1 className='text-start font-onest font-semibold text-[40px] text-[#F6F5F3]'>👨‍🏭 Forjando Calidad, Creando Durabilidad</h1>
                    <p className='text-start font-josefin font-normal text-[16px] text-[#f6f5f3e6]'>En nuestro taller de herrería, combinamos tradición y tecnología para ofrecer piezas únicas y resistentes. Puertas, rejas, muebles y más, diseñados con precisión y pasión.</p>
                    <Link to="/servicios" className="text-[#F6F5F3] px-6 py-3 font-medium font-josefin text-[16px] hover:underline">
                        Nuestros servicios →
                    </Link>
                </div>
                <img src={HeroImage} alt="Hombre soldando" />
            </section>
            <svg className='w-full mx-auto' viewBox="0 0 1440 45" fill="current" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.55L34 11.7C69 18.85 137 32.825 206 35.1C274 37.375 343 27.95 411 18.85C480 9.425 549 0 617 0C686 0 754 9.425 823 11.7C891 13.975 960 9.425 1029 16.25C1097 23.4 1166 42.25 1234 44.525C1303 46.8 1371 32.825 1406 25.675L1440 18.85V117H1406C1371 117 1303 117 1234 117C1166 117 1097 117 1029 117C960 117 891 117 823 117C754 117 686 117 617 117C549 117 480 117 411 117C343 117 274 117 206 117C137 117 69 117 34 117H0V4.55Z" fill="#F6F5F3"/>
            </svg>
        </div>
    );
}