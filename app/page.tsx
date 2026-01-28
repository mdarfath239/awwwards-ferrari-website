"use client";

import FerrariCanvas from "./components/FerrariCanvas";
import Navbar from "./components/Navbar";
import TextSection from "./components/TextSection";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="w-full bg-[#9e0e0e] text-white selection:bg-white selection:text-[#9e0e0e]">
      <Navbar />

      <div className="relative">
        {/* Canvas with car */}
        <FerrariCanvas />

        {/* Content Overlay - Absolute positioned over the 500vh container */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-20">

          {/* Section 1: Hero - Only visible in first screen */}
          <div className="absolute top-0 h-screen w-full flex flex-col overflow-hidden">

            {/* FERRARI Typography - Behind the car video, only in hero */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none -z-10">
              <h1 className="text-[18vw] md:text-[14vw] lg:text-[12vw] tracking-tight uppercase leading-none whitespace-nowrap text-white" style={{ fontFamily: "'Bungee Outline', cursive" }}>
                <span>FE</span>
                <span style={{ filter: 'blur(2px)' }}>RRA</span>
                <span>RI</span>
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


        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1a202c] text-white relative z-20">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">

            {/* Column 1 - About */}
            <div>
              <h4 className="text-white/50 uppercase tracking-widest text-xs font-semibold mb-6">About</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">About</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Submit an issue</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">GitHub Repo</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Slack</a></li>
              </ul>
            </div>

            {/* Column 2 - Getting Started */}
            <div>
              <h4 className="text-white/50 uppercase tracking-widest text-xs font-semibold mb-6">Getting Started</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Introduction</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Documentation</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Usage</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Globals</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Elements</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Collections</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Themes</a></li>
              </ul>
            </div>

            {/* Column 3 - Resources */}
            <div>
              <h4 className="text-white/50 uppercase tracking-widest text-xs font-semibold mb-6">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">API</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Form ValidationsProduct</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Visibility</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Accessibility</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Community</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Design Defined</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Marketplace</a></li>
              </ul>
            </div>

            {/* Column 4 - Social Media */}
            <div className="col-span-2 md:col-span-1 lg:col-span-2">
              <h4 className="text-white/50 uppercase tracking-widest text-xs font-semibold mb-6">Social Media</h4>
              <p className="text-white/70 text-sm mb-6 max-w-xs">
                Follow us on social media to find out the latest updates on our progress.
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-4">
                {/* Twitter */}
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* GitHub */}
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
                {/* Facebook */}
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                {/* Dribbble */}
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.424 25.424 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.9 53.9 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.245.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-white/50 text-sm">
              © 2020 flow-ui. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Security</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Sitemap</a>
            </div>

            {/* Language Selector */}
            <div className="flex items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer">
              <span className="text-sm">English</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
