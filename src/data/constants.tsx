import { GrillIcon, LadderIcon, LocationIcon, MobileHomeIcon, ScheduleIcon, ToolsIcon, TrailerIcon, WeldingIcon, WhatsappIcon } from "../assets/icons/icons"
import React from "react"


export const ABOUT_US = {
    title: "Sobre nosotros",
    subtitle: "En HerreríaSG, nos especializamos en la fabricación y montaje de estructuras metálicas de alta calidad, adaptadas a las necesidades de cada cliente.",
    items: [
        {
            title: "Como PyME comprometida con la excelencia",
            description: "Combinamos experiencia, precisión y materiales de primera para garantizar resultados duraderos y funcionales.",
        },
        {
            title: "Más de diez años de trayectoria",
            description: "Con más de diez años de trayectoria en el rubro, nuestro equipo de expertos trabaja con dedicación para ofrecer soluciones a medida, asegurando la máxima calidad en cada proyecto. Nuestra misión es brindar productos que fusionen resistencia, diseño y funcionalidad, manteniendo siempre un enfoque personalizado.",
        }
    ]
}

export const OUR_SERVICES = {
    title: "Nuestros servicios",
    subtitle: "Ofrecemos una amplia gama de servicios de herrería y metalúrgica para satisfacer todas sus necesidades",
    items: [
        {
            title: "Trailers a medida",
            description: "Necesitas un trailer para una moto, auto o lancha, no dudes en consultarnos.",
            icon: <TrailerIcon className="size-[36px] fill-[#0F203B]"/>,
        },
        {
            title: "Reparación de casillas",
            description: "Reparación exterior e interior, instalación de agua y eléctrica.",
            icon: <MobileHomeIcon className="size-[36px] stroke-[#0F203B]"/>,
        },
        {
            title: "Escaleras y barandas",
            description: "Realizamos tu escalera a tu gusto y baranda.",
            icon: <LadderIcon className="size-[36px] stroke-[#0F203B]"/>,
        },
        {
            title: "Parillas",
            description: "Parrillas móviles, sistema de elevación de parrilla, brasero, palita, atizador, asador a la estaca y horno peruano.",
            icon: <GrillIcon className="size-[36px] fill-[#0F203B]"/>,
        },
        {
            title: "Reparación de carros",
            description: "Cambios de masa, eje, colocación de guardabarros, acondicionamiento en general.",
            icon: <ToolsIcon className="size-[36px] stroke-[#0F203B]"/>,
        },
        {
            title: "Rejas y portones",
            description: "Fabricación de rejas y portones residenciales e industriales.",
            icon: <WeldingIcon className="size-[36px] fill-[#0F203B]"/>,
        }
    ]
}

export const OUR_WORK_PROCESS = {
    title: "Nuestro proceso de trabajo",
    items: [
        {
            title: "Consulta",
            description: "Discutimos sus necesidades y visión del proyecto",
        },
        {
            title: "Presupuesto",
            description: "Sacamos el costo del proyecto",
        },
        {
            title: "Fabricación",
            description: "Fabricamos con materiales de alta calidad",
        },
        {
            title: "Instalación",
            description: "Entregamos e instalamos el producto final",
        }
    ]
}

export const CONTACT = {
    title: "Contacto",
    subtitle: "¿Tienes un proyecto en mente? Contáctanos y le ayudamos a hacerlo realidad",
    items: [
        {
            icon: <LocationIcon className="size-[32px] fill-[#0F203B]" />,
            title: "Dirección",
            description: "Colon 77, Laboulaye, Córdoba",
        },
        {
            icon: <ScheduleIcon className="size-[32px] fill-[#0F203B]" />,
            title: "Horario",
            description: "Lun-Vie: 8:00 - 18:00",
        },
        {
            icon: <WhatsappIcon className="size-[32px] fill-[#0F203B]" />,
            title: "Celular",
            description: "+543385401988",
        }
    ]
}