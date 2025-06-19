import React from "react";
import "./style.css"
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { AboutUs } from "./components/about-us";
import { OurServices } from "./components/our_services";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";


export default function App() {
  return (
    <main className="bg-[#F8FAFC] min-h-screen">
        <Navbar />
        <Hero />
        <AboutUs id="about" />
        <OurServices id="services" />
        <Contact id="contact" />
        <Footer />
    </main>
  );
}