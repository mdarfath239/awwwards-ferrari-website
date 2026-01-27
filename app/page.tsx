"use client";

import FerrariCanvas from "./components/FerrariCanvas";
import Navbar from "./components/Navbar";
import TextSection from "./components/TextSection";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="w-full bg-[#9e0e0e] text-white selection:bg-white selection:text-[#9e0e0e]">
<Navbar/>

      <div className="relative">
        {/* Canvas with car */}
        <FerrariCanvas />

        {/* Content Overlay - Absolute positioned over the 500vh container */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-20">

          {/* Section 1: Hero - Only visible in first screen */}
          <div className="absolute top-0 h-screen w-full flex flex-col overflow-hidden">

            {/* FERRARI Typography - Behind car in hero */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <h1 className="text-[18vw] md:text-[14vw] lg:text-[12vw] tracking-tight uppercase leading-none whitespace-nowrap text-white" style={{ fontFamily: "'Bungee Outline', cursive" }}>
                <span>FE</span>
                <span className="opacity-40">RR</span>
                <span>ARI</span>
              </h1>
            </div>

            {/* Specs Panel - Bottom Left */}
            <div className="absolute bottom-24 left-8 md:left-16 z-20 pointer-events-auto">
              <div className="space-y-2 font-mono text-xs md:text-sm uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <span className="text-white/60">Engine</span>
                  <span className="text-white/30">:</span>
                  <span className="text-white font-bold">V12</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white/60">Power</span>
                  <span className="text-white/30">:</span>
                  <span className="text-white font-bold">949HP</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white/60">0-100MPH</span>
                  <span className="text-white/30">:</span>
                  <span className="text-white font-bold">2.1S</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white/60">Top Speed</span>
                  <span className="text-white/30">:</span>
                  <span className="text-white font-bold">418 MPH</span>
                </div>
              </div>
            </div>

            {/* Description Text - Bottom Center */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-full max-w-3xl px-8 text-center">
              <p className="text-white/70 text-xs md:text-sm leading-relaxed font-light italic">
                Founded in 1939 by Enzo Ferrari (1898–1988), the company built its first car in 1940, adopted its current name in 1945, and began to produce its current line of road cars in 1947.
              </p>
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
