"use client";

import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div>
      {/* Hero */}
      <div className="relative h-[90vh] sm:h-180 w-full bg-[url('/svg/hero.svg')] bg-cover bg-center bg-no-repeat z-20 flex items-center">
        <div className="absolute inset-0 bg-[#030303]/70 backdrop-blur-sm z-0" />

        <div className="relative z-10 text-white w-full px-6 sm:px-10 max-w-4xl">
          {/* Title Section */}
          <div className="title mb-4 flex flex-col gap-3">
            <h1 className="font-poppins text-4xl font-light sm:text-6xl">
              From Concept to Creation
            </h1>
            <h2 className="font-poppins text-4xl font-light sm:text-6xl">
              We Build <span className="text-red-700">What Matters</span>
            </h2>
          </div>

          <div className="w-full">
            <p className="text-white/80 text-base sm:text-lg font-light font-poppins mt-4 sm:mt-6">
              From the first sketch to the final product, we transform ideas
              into functional, user-focused solutions. Whether it&#39;s digital
              design, hardware development, or full-scale systems, we&#39;re
              here to build what truly matters
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="relative z-10 w-full bg-[#030303] py-14 px-6 sm:px-10 flex flex-col items-center justify-center text-white">
        <h2 className="text-red-700 text-4xl md:text-4xl font-poppins font-medium">
          About Helekin
        </h2>
        <p className="text-white/80 text-base md:text-xl font-poppins font-light mt-10 text-center ">
          We are a creative tech studio dedicated to turning ideas into
          real-world solutions. Our work spans across digital and physical
          domains — from UI/UX design, website and app development to 3D
          printing, CAD design, and laser engraving. We also specialize in
          electronics prototyping, PCB design, hardware assembly, and IoT
          development, along with automation services like PLC programming and
          SCADA system design. With added expertise in FEA, CFD, and thermal
          analysis, we ensure every project is optimized for performance,
          usability, and reliability — bringing innovation to life from concept
          to creation.
        </p>
      </div>

      {/* Core Values */}
      <div className="relative z-0 w-full flex flex-col bg-[url('/images/fafa.png')] bg-cover bg-center bg-no-repeat px-6 pb-30">
        <div className="absolute inset-0 bg-[#030303]/50 backdrop-blur-sm z-0" />
        <div className="flex justify-between items-baseline z-20">
          <div className="relative z-10 w-full max-w-screen px-6 mx-auto mt-20">
            <h1 className="text-4xl font-poppins font-semibold text-center">
              <span className="text-red-700">Our Core </span>
              <span className="text-white">Values</span>
            </h1>
          </div>
        </div>

        <div>
          <div className="mt-20 sm:mt-40 flex flex-col items-center justify-center gap-8 px-4 sm:flex-row sm:items-start">
            {/* Card 01: Innovation */}
            <div className="flex h-[275px] w-full flex-col items-start rounded-2xl bg-white/10 p-6 shadow-lg shadow-[#030303]/30 backdrop-blur-lg transition-all duration-300 hover:scale-[1.02] sm:w-[300px]">
              <h1 className="text-7xl font-bold text-white/70">01</h1>
              <h2 className="mt-4 text-2xl font-semibold text-white">
                Innovation
              </h2>
              <p className="mt-2 text-white/80">
                We embrace bold ideas and new technologies to push boundaries
                and create meaningful solutions.
              </p>
            </div>

            {/* Card 02: Precision */}
            <div className="flex h-[275px] w-full flex-col items-start rounded-2xl bg-white/10 p-6 shadow-lg shadow-[#030303]/30 backdrop-blur-lg transition-all duration-300 hover:scale-[1.02] sm:mt-20 sm:w-[300px]">
              <h1 className="text-7xl font-bold text-white/70">02</h1>
              <h2 className="mt-4 text-2xl font-semibold text-white">
                Precision
              </h2>
              <p className="mt-2 text-white/80">
                Every detail matters — we build with accuracy, reliability, and
                engineering excellence.
              </p>
            </div>

            {/* Card 03: Simplicity */}
            <div className="flex h-[275px] w-full flex-col items-start rounded-2xl bg-white/10 p-6 shadow-lg shadow-[#030303]/30 backdrop-blur-lg transition-all duration-300 hover:scale-[1.02] sm:w-[300px]">
              <h1 className="text-7xl font-bold text-white/70">03</h1>
              <h2 className="mt-4 text-2xl font-semibold text-white">
                Simplicity
              </h2>
              <p className="mt-2 text-white/80">
                We believe in clear, intuitive design that enhances usability
                and removes complexity.
              </p>
            </div>

            {/* Card 04: Collaboration */}
            <div className="flex h-[275px] w-full flex-col items-start rounded-2xl bg-white/10 p-6 shadow-lg shadow-[#030303]/30 backdrop-blur-lg transition-all duration-300 hover:scale-[1.02] sm:mt-20 sm:w-[300px]">
              <h1 className="text-7xl font-bold text-white/70">04</h1>
              <h2 className="mt-4 text-2xl font-semibold text-white">
                Collaboration
              </h2>
              <p className="mt-2 text-white/80">
                Great things are built together — we work closely with clients
                and teams at every step.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Client Projects */}
      <div className="relative z-10 w-full mx-auto text-center bg-[#030303] pt-24">
        <h1 className="text-3xl font-poppins font-semibold text-red-700 mb-2 text-start ml-10">
          Client Projects
        </h1>

        <div className="mt-5 flex sm:flex-row flex-col items-center justify-center gap-5 px-10">
          <div className="flex flex-col items-start h-[300px] w-full bg-white/10 backdrop-blur-lg shadow-xl shadow-[#030303]/30 p-6 rounded-3xl transition-all hover:scale-[1.02] duration-300" />
          <div className="flex flex-col items-start h-[300px] w-full bg-white/10 backdrop-blur-lg shadow-xl shadow-[#030303]/30 p-6 rounded-3xl transition-all hover:scale-[1.02] duration-300" />
          <div className="flex flex-col items-start h-[300px] w-full bg-white/10 backdrop-blur-lg shadow-xl shadow-[#030303]/30 p-6 rounded-3xl transition-all hover:scale-[1.02] duration-300" />
        </div>
      </div>
    </div>
  );
}
