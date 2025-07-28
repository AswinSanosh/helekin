'use client';

import Image from 'next/image';
import React from 'react';

export default function About() {
  return (
    <div>
      {/* Hero */}
      <div className="relative h-[90vh] sm:h-180 w-full bg-[url('/svg/hero.svg')] bg-cover bg-center bg-no-repeat z-20 flex items-center">
        <div className="absolute inset-0 bg-[#030303]/70 backdrop-blur-sm z-0" />
        <div className="relative z-10 text-white w-full px-6 sm:px-10 max-w-4xl">
          <div className="mb-4 flex flex-col sm:flex-row gap-3">
            <h1 className="text-4xl sm:text-6xl font-light font-poppins">About</h1>
            <h1 className="text-4xl sm:text-6xl text-red-700 font-light font-poppins">Helekin</h1>
          </div>
          <div className="w-full">
            <p className="text-white/80 text-base sm:text-lg font-light font-poppins mt-4 sm:mt-6">
              We are a passionate team of freelancers providing end-to-end services in <span className="text-red-700">Software Development</span>, <span className="text-red-700">Electronics & Hardware</span>, and <span className="text-red-700">3D Design & Printing</span>. From building modern websites, UI/UX design, and SEO to advanced PCB design, IoT solutions, and CAD modeling – we turn ideas into intelligent, real-world solutions. Our agile structure ensures personalized attention, cost-efficiency, and flexibility tailored to each client’s unique needs.
            </p>
          </div>
        </div>
      </div>

      {/* AI Section */}
      <div className="relative z-10 w-full bg-[#030303] h-150 flex flex-col items-center justify-center text-white p-10">
        <h2 className="text-red-700 text-4xl md:text-4xl font-poppins font-medium">
          Transforming Ideas into Intelligent Solutions
        </h2>
        <p className="text-white/80 text-base md:text-xl font-poppins font-light mt-10 text-center">
          At Helekin, our AI capabilities are designed to help businesses unlock smarter, faster, and more scalable solutions. From intelligent automation to predictive analytics and machine learning models, we leverage the power of artificial intelligence to drive efficiency, uncover insights, and deliver real-world impact. Whether it&#39;s enhancing customer experiences or optimizing operations, our AI solutions are tailored to meet the unique needs of your business in the digital era.
        </p>
      </div>

      {/* Core Values */}
      <div className="relative z-0 w-full flex flex-col bg-[url('/images/fafa.png')] bg-cover bg-center bg-no-repeat px-6 pb-30">
        <div className="absolute inset-0 bg-[#030303]/50 backdrop-blur-sm z-0" />
        <div className="flex justify-between items-baseline z-20">
          <div className="relative z-10 w-full max-w-screen px-6 mx-auto mt-20">
            <h1 className="text-4xl font-poppins font-semibold text-red-700 mb-2 text-center">
              Core Values
            </h1>
          </div>
        </div>
        <div>
          <div className="mt-20 sm:mt-40 flex sm:flex-row flex-col items-center justify-center gap-5">
            <div className="flex flex-col items-start h-[250px] sm:w-[300px] w-full bg-white/10 backdrop-blur-lg shadow-lg shadow-[#030303]/30 p-6 rounded-xl transition-all hover:scale-[1.02] duration-300" />
            <div className="flex flex-col items-start h-[250px] sm:w-[300px] w-full bg-white/10 backdrop-blur-lg shadow-lg shadow-[#030303]/30 p-6 rounded-xl transition-all hover:scale-[1.02] duration-300 md:relative md:-top-30" />
            <div className="flex flex-col items-start h-[250px] sm:w-[300px] w-full bg-white/10 backdrop-blur-lg shadow-lg shadow-[#030303]/30 p-6 rounded-xl transition-all hover:scale-[1.02] duration-300" />
          </div>
        </div>
      </div>

      {/* Client Projects */}
      <div className="relative z-10 w-full mx-auto text-center bg-[#030303] pt-24">
        <h1 className="text-3xl font-poppins font-semibold text-red-700 mb-2 text-start ml-10">
          Client Projects
        </h1>
        <p className="text-white/80 text-base md:text-xl font-poppins font-light mt-5 mb-10 max-w-2xl text-start ml-10">
          Carefully Crafted Masterpieces that are designed to solve real-world problems.
        </p>
        <div className="mt-5 flex sm:flex-row flex-col items-center justify-center gap-5 px-10">
          <div className="flex flex-col items-start h-[300px] w-full bg-white/10 backdrop-blur-lg shadow-xl shadow-[#030303]/30 p-6 rounded-3xl transition-all hover:scale-[1.02] duration-300" />
          <div className="flex flex-col items-start h-[300px] w-full bg-white/10 backdrop-blur-lg shadow-xl shadow-[#030303]/30 p-6 rounded-3xl transition-all hover:scale-[1.02] duration-300" />
          <div className="flex flex-col items-start h-[300px] w-full bg-white/10 backdrop-blur-lg shadow-xl shadow-[#030303]/30 p-6 rounded-3xl transition-all hover:scale-[1.02] duration-300" />
        </div>
      </div>
    </div>
  );
}
