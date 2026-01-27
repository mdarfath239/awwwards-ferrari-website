"use client";

import FerrariCanvas from "./components/FerrariCanvas";
import Navbar from "./components/Navbar";
import TextSection from "./components/TextSection";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="w-full bg-[#9e0e0e] text-white selection:bg-white selection:text-[#9e0e0e]">


      <div className="relative">
        <FerrariCanvas />

        {/* Content Overlay - Absolute positioned over the 500vh container */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">

          {/* Section 1: Hero (0-15%) */}
          <div className="absolute top-0 h-screen w-full flex items-end justify-center pb-32 overflow-hidden">
            {/* Blurred Background F1-Style Text */}
            <div className="absolute inset-0 flex items-end justify-center pb-32 pointer-events-none select-none z-0">
              <h1 className="text-[20vw] md:text-[25vw] font-black italic tracking-tighter text-white/5 blur-sm md:blur-md uppercase leading-none scale-110">
                FERRARI
              </h1>
            </div>

            <div className="relative z-10">
              <TextSection align="center">
                <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-4 uppercase drop-shadow-2xl">Fer<span className="text-white/60">rar</span>i<span className="text-white/40">F1</span></h1>
                <p className="text-xl md:text-3xl font-light text-white/90 tracking-wide">Engineering speed at its absolute limit.</p>
                <div className="w-24 h-1 bg-white/20 mt-8 mb-4"></div>
                <p className="text-sm md:text-base text-red-200 uppercase tracking-[0.3em]">Precision · Aerodynamics · Power</p>
              </TextSection>
            </div>
          </div>

          {/* Section 2: Engineering Reveal (15-40%) */}
          <div className="absolute top-[20%] left-0 w-full md:w-1/2">
            <TextSection align="left">
              <span className="text-red-300 font-mono text-sm tracking-widest mb-2">01. AERODYNAMICS</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">Designed for <br />dominance.</h2>
              <p className="text-lg md:text-xl text-white/80 max-w-md font-light">Every surface sculpts airflow. Every millimeter matters. Precision-engineered to extract maximum downforce with minimal drag.</p>
            </TextSection>
          </div>

          {/* Section 3: Aerodynamics (40-65%) */}
          <div className="absolute top-[45%] right-0 w-full md:w-1/2">
            <TextSection align="right">
              <span className="text-red-300 font-mono text-sm tracking-widest mb-2">02. CONTROL</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">Control at <br />300 km/h.</h2>
              <ul className="text-lg md:text-xl text-white/80 space-y-4 text-right font-light">
                <li className="border-r-2 border-white/20 pr-4">Advanced airflow management</li>
                <li className="border-r-2 border-white/20 pr-4">Extreme stability through corners</li>
                <li className="border-r-2 border-white/20 pr-4">Absolute balance under braking</li>
              </ul>
            </TextSection>
          </div>

          {/* Section 4: Power (65-85%) */}
          <div className="absolute top-[70%] left-0 w-full flex justify-center">
            <TextSection align="center">
              <span className="text-red-300 font-mono text-sm tracking-widest mb-2">03. PERFORMANCE</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Power, refined.</h2>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
                A hybrid power unit engineered for relentless performance.<br />
                Efficiency, reliability, and raw speed — perfectly balanced.
              </p>
            </TextSection>
          </div>

          {/* Section 5: Finale (85-100%) */}
          <div className="absolute top-[90%] w-full h-screen flex items-center justify-center">
            <TextSection align="center">
              <h2 className="text-5xl md:text-8xl font-bold mb-8 uppercase tracking-tighter">Born from <br />racing.</h2>
              <button className="bg-white text-[#740A03] px-10 py-4 rounded-full font-bold text-lg tracking-wider hover:bg-gray-100 hover:scale-105 transition-all shadow-xl cursor-pointer pointer-events-auto">
                Explore the Car
              </button>
              <div className="mt-8 flex gap-8 text-white/40 uppercase text-xs tracking-widest">
                <span>View Specifications</span>
                <span>Configurator</span>
              </div>
            </TextSection>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* Footer */}
      <footer className="bg-black text-white border-t border-white/10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

          {/* Column 1 - Facebook / About Us */}
          <div className="border-b md:border-b-0 lg:border-r border-white/10 p-8 md:p-12 flex flex-col justify-between h-[400px] hover:bg-white/5 transition-colors group/col">
            <a href="#" className="flex items-center justify-between group cursor-pointer">
              <span className="text-xl font-medium">Facebook</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 duration-300" />
            </a>

            <div>
              <h4 className="text-white/40 uppercase tracking-widest text-xs font-bold mb-6">About Us</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors block">Pricing</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors block">Contact</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors block">FAQ</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors block">Blog</a></li>
              </ul>
            </div>
          </div>

          {/* Column 2 - Twitter / Support */}
          <div className="border-b md:border-b-0 lg:border-r border-white/10 p-8 md:p-12 flex flex-col justify-between h-[400px] hover:bg-white/5 transition-colors group/col">
            <a href="#" className="flex items-center justify-between group cursor-pointer">
              <span className="text-xl font-medium">Twitter</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 duration-300" />
            </a>

            <div>
              <h4 className="text-white/40 uppercase tracking-widest text-xs font-bold mb-6">Support</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors block">Help Center</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors block">Terms</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors block">Privacy</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors block">Security</a></li>
              </ul>
            </div>
          </div>

          {/* Column 3 - Youtube / Community */}
          <div className="border-b md:border-b-0 lg:border-r border-white/10 p-8 md:p-12 flex flex-col justify-between h-[400px] hover:bg-white/5 transition-colors group/col">
            <a href="#" className="flex items-center justify-between group cursor-pointer">
              <span className="text-xl font-medium">Youtube</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 duration-300" />
            </a>

            <div>
              <h4 className="text-white/40 uppercase tracking-widest text-xs font-bold mb-6">Community</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors block">Forum</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors block">Events</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors block">Partners</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors block">Affiliates</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors block">Career</a></li>
              </ul>
            </div>
          </div>

          {/* Column 4 - Instagram / Press */}
          <div className="p-8 md:p-12 flex flex-col justify-between h-[400px] hover:bg-white/5 transition-colors group/col">
            <a href="#" className="flex items-center justify-between group cursor-pointer">
              <span className="text-xl font-medium">Instagram</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 duration-300" />
            </a>

            <div>
              <h4 className="text-white/40 uppercase tracking-widest text-xs font-bold mb-6">Press</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors block">Investors</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors block">Terms of Use</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors block">Privacy Policy</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors block">Cookie Policy</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors block">Legal</a></li>
              </ul>
            </div>
          </div>

        </div>
      </footer>
    </main>
  );
}
