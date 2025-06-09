import React from "react";
import "./style.css"
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { AboutUs } from "./components/about-us";


export default function App() {
  return (
    <main className="bg-[#F8FAFC] min-h-screen">
        <Navbar />
        <Hero />
        <AboutUs />
    </main>
  );
}