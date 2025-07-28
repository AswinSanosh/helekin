"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface Service {
  title: string;
  desc: string;
  icon: string;
  background: string;
  link?: string;
}

export default function Contact() {
  return (
    <div>
      <div className="relative h-[90vh] sm:h-180 w-full bg-[url('/svg/hero.svg')] bg-cover bg-center bg-no-repeat z-20 flex items-center">
        <div className="absolute inset-0 bg-[#030303]/70 backdrop-blur-sm z-0" />
        <div className="relative z-10 text-white w-full px-6 sm:px-10 max-w-4xl">
          <div className="mb-4 flex flex-col sm:flex-row gap-3">
            <h1 className="text-4xl sm:text-6xl font-light font-poppins">
              Web
            </h1>
            <h1 className="text-4xl sm:text-6xl text-red-700 font-light font-poppins">
              Development
            </h1>
          </div>
          <div className="w-full sm:w-3/4">
            <p className="text-white/80 text-base sm:text-lg font-light font-poppins mt-4 sm:mt-6">
              We build high-performance, responsive websites that drive
              engagement and deliver results for your business, ensuring a
              flawless user experience on any device.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full bg-[#030303] py-14 px-6 sm:px-10 flex flex-col items-center justify-center text-white">
        <h2 className="text-red-700 text-3xl sm:text-4xl font-poppins font-medium text-center">
          Transforming Ideas into Intelligent Solutions
        </h2>
        <p className="text-white/80 text-base sm:text-xl font-poppins font-light mt-6 sm:mt-10 text-center">
          At Helekin, our web development services are designed to establish
          your brand&#39;s authority online. From stunning landing pages to
          complex web applications, we leverage the latest technologies to build
          fast, secure, and scalable websites. We focus on clean code, intuitive
          UI/UX, and robust backend architecture to create a digital experience
          that captivates your audience and achieves your business goals.
        </p>
      </div>

      <div className="relative z-0 w-full flex flex-col bg-[url('/images/fafa.png')] bg-cover bg-center bg-no-repeat px-6 pb-30">
        <div className="absolute inset-0 bg-[#030303]/50 backdrop-blur-sm z-0" />
        <div className="flex justify-between items-baseline z-20">
          <div className="relative z-10 w-full max-w-screen px-6 mx-auto mt-20">
            <h1 className="text-3xl font-poppins font-semibold text-red-700 mb-2 text-center">
              What We Offer
            </h1>
          </div>
        </div>
        <div>
          <div className="mt-12 sm:mt-40 flex flex-col sm:flex-row items-center justify-center gap-5">
            <div className="flex flex-col items-start h-[250px] w-full sm:w-[300px] bg-white/10 backdrop-blur-lg shadow-lg shadow-[#030303]/30 p-6 rounded-xl transition-all hover:scale-[1.02] duration-300"></div>
            <div className="flex flex-col items-start h-[250px] w-full sm:w-[300px] bg-white/10 backdrop-blur-lg shadow-lg shadow-[#030303]/30 p-6 rounded-xl transition-all hover:scale-[1.02] duration-300 md:relative md:-top-30"></div>
            <div className="flex flex-col items-start h-[250px] w-full sm:w-[300px] bg-white/10 backdrop-blur-lg shadow-lg shadow-[#030303]/30 p-6 rounded-xl transition-all hover:scale-[1.02] duration-300"></div>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full mx-auto text-center bg-[#030303] pt-24 px-6 sm:px-10">
        <h1 className="text-2xl sm:text-3xl font-poppins font-semibold text-red-700 mb-2 text-start">
          Featured Web Projects
        </h1>
        <p className="text-white/80 text-base sm:text-xl font-poppins font-light mt-5 mb-10 max-w-2xl text-start">
          Our portfolio showcases our commitment to excellence and innovation in
          web design and development.
        </p>
        <div className="mt-5 flex sm:flex-row flex-col items-center justify-center gap-5">
          <div className="flex flex-col items-start h-[300px] w-full bg-white/10 backdrop-blur-lg shadow-xl shadow-[#030303]/30 p-6 rounded-3xl transition-all hover:scale-[1.02] duration-300"></div>
          <div className="flex flex-col items-start h-[300px] w-full bg-white/10 backdrop-blur-lg shadow-xl shadow-[#030303]/30 p-6 rounded-3xl transition-all hover:scale-[1.02] duration-300"></div>
          <div className="flex flex-col items-start h-[300px] w-full bg-white/10 backdrop-blur-lg shadow-xl shadow-[#030303]/30 p-6 rounded-3xl transition-all hover:scale-[1.02] duration-300"></div>
        </div>

        <div className="mt-50 flex flex-col sm:flex-row items-start justify-between gap-10 sm:gap-5">
          <div className="w-full sm:w-1/3 flex flex-col">
            <h2 className="text-red-700 text-3xl sm:text-4xl font-poppins font-medium text-left">
              Transforming Ideas into Intelligent Solutions
            </h2>
            <p className="text-white/80 text-base sm:text-xl font-poppins font-light mt-6 sm:mt-10 text-left">
              Our approach is centered on collaboration and transparency. We use
              an Agile development process that keeps you involved at every
              step, from initial concept to final deployment. We believe in
              building partnerships, not just projects, ensuring the final
              product is a true reflection of your vision and is built to last.
            </p>
          </div>

          <div className="w-full sm:w-2/3 flex flex-col items-start">
            <div className="flex flex-col items-center justify-center md:items-center mt-2 gap-8 w-full">
              <div className="flex items-center justify-between bg-white/10 backdrop-blur-lg shadow-lg shadow-[#030303]/30 p-6 w-full sm:w-3/4">
                <h1 className="font-poppins text-lg sm:text-2xl font-medium text-white">
                  How do you ensure websites are mobile-friendly?
                </h1>
                <h1 className="font-poppins text-2xl sm:text-3xl font-medium text-white">
                  +
                </h1>
              </div>
              <div className="flex items-center justify-between bg-white/10 backdrop-blur-lg shadow-lg shadow-[#030303]/30 p-6 w-full sm:w-3/4">
                <h1 className="font-poppins text-lg sm:text-2xl font-medium text-white">
                  What is your process for launching a new website?
                </h1>
                <h1 className="font-poppins text-2xl sm:text-3xl font-medium text-white">
                  +
                </h1>
              </div>
              <div className="flex items-center justify-between bg-white/10 backdrop-blur-lg shadow-lg shadow-[#030303]/30 p-6 w-full sm:w-3/4">
                <h1 className="font-poppins text-lg sm:text-2xl font-medium text-white">
                  Do you provide ongoing maintenance and support?
                </h1>
                <h1 className="font-poppins text-2xl sm:text-3xl font-medium text-white">
                  +
                </h1>
              </div>
              <div className="flex items-center justify-between bg-white/10 backdrop-blur-lg shadow-lg shadow-[#030303]/30 p-6 w-full sm:w-3/4">
                <h1 className="font-poppins text-lg sm:text-2xl font-medium text-white">
                  Which technologies do you specialize in?
                </h1>
                <h1 className="font-poppins text-2xl sm:text-3xl font-medium text-white">
                  +
                </h1>
              </div>
            </div>
          </div>
        </div>

        <h1 className="font-poppins text-3xl sm:text-4xl text-white mb-4 mt-50">
          Ready to build your website?
        </h1>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto text-base sm:text-lg">
          Let&#39;s turn your vision into a stunning, high-performing website
          that grows with your business.
        </p>
        <Link href="/contact">
          <button className="bg-red-700 mb-50 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg hover:bg-red-800 transition-colors duration-300 text-base sm:text-lg cursor-pointer">
            Schedule a Consultation
          </button>
        </Link>
      </div>
    </div>
  );
}
