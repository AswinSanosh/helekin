"use client";

import Image from "next/image";
import serviceData from "@/components/ServiceList.json";
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface Service {
  title: string;
  desc: string;
  icon: string;
  background: string;
  link?: string;
}

export default function Services() {
  const Softservices = serviceData.servicesList.software;
  const Hardservices = serviceData.servicesList.electronics_and_hardware;
  const ThreeDservices = serviceData.servicesList.threed;

  const [searchTerm, setSearchTerm] = useState("");
  const [hovering, setHovering] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<{
    section: string;
    index: number;
  } | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (hovering) return;
    const interval = setInterval(() => shift(), 3000);
    return () => clearInterval(interval);
  }, [index, hovering]);

  const shift = () => {
    const total = Softservices.length;
    const newIndex = (index + 1) % total;
    setIndex(newIndex);
  };

  const handleMouseEnter = (section: string, i: number) => {
    setHoveredIndex({ section, index: i });
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setHovering(false);
  };

  const renderServiceCards = (services: Service[], section: string) =>
    services.map((service, i) => {
      const isHovered =
        hoveredIndex?.section === section && hoveredIndex.index === i;

      return (
        <Link href={service.link || "#"} key={i} className="w-full">
          <div
            onMouseEnter={() => handleMouseEnter(section, i)}
            onMouseLeave={handleMouseLeave}
            className="flex flex-col items-start h-[270px] w-full bg-white/10 backdrop-blur-lg shadow-lg shadow-[#030303]/30 p-6 rounded-xl transition-all hover:scale-[1.02] duration-300"
            style={{
              ...(isHovered
                ? {
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${service.background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }
                : {
                    backgroundColor: "rgba(255,255,255,0.05)",
                  }),
            }}
          >
            <div
              className="rounded-full bg-white/20 w-16 h-16 flex justify-center items-center p-2 mb-4"
              style={
                isHovered
                  ? {
                      backgroundColor: "#A50424",
                      backdropFilter: "blur(10px)",
                    }
                  : {}
              }
            >
              <Image
                src={service.icon}
                alt={service.title}
                width={40}
                height={40}
              />
            </div>
            <h2
              className="text-white text-2xl font-semibold mb-2"
              style={{
                color: isHovered ? "#A50424" : "white",
              }}
            >
              {service.title}
            </h2>
            <p className="text-white/80 text-sm">{service.desc}</p>
          </div>
        </Link>
      );
    });

  return (
    <div>
      {/* Hero */}
      <div className="h-180 w-full bg-[url('/svg/hero.svg')] bg-cover bg-center bg-no-repeat z-20">
        <div className="absolute inset-0 bg-[#030303]/70 backdrop-blur-sm z-0 h-full" />
        <div className="absolute h-150 bottom-5 left-20">
          <div className="flex mb-4">
            <h1 className="text-white text-6xl font-light font-poppins">IoT</h1>
            <h1 className="text-red-700 text-6xl font-light font-poppins px-4">
              Integration
            </h1>
          </div>
          <div className="w-2/5">
            <p className="text-white/80 text-xl font-light font-poppins mt-10">
              We develop embedded systems with seamless IoT connectivity,
              enabling remote monitoring and control through scalable cloud
              platforms.
            </p>
          </div>
        </div>
      </div>
      <div className="relative z-10 w-full bg-[#030303] h-150 flex flex-col items-center justify-center text-white p-10">
        <h2 className="text-red-700 text-4xl md:text-4xl font-poppins font-medium">
          Transforming Ideas into Intelligent Solutions
        </h2>
        <p className="text-white/80 text-base md:text-xl font-poppins font-light mt-10 text-center">
          At Helekin, we engineer end-to-end IoT solutions that bring your
          physical products online. From firmware development on embedded
          devices to building scalable cloud platforms for data ingestion and
          analysis, we create a connected ecosystem that unlocks new
          efficiencies and data-driven insights for your business.
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
          <div className="mt-20 sm:mt-40 flex sm:flex-row flex-col items-center justify-center gap-5">
            <div className="flex flex-col items-start h-[250px] sm:w-[300px] w-full bg-white/10 backdrop-blur-lg shadow-lg shadow-[#030303]/30 p-6 rounded-xl transition-all hover:scale-[1.02] duration-300"></div>
            <div className="flex flex-col items-start h-[250px] sm:w-[300px] w-full bg-white/10 backdrop-blur-lg shadow-lg shadow-[#030303]/30 p-6 rounded-xl transition-all hover:scale-[1.02] duration-300 md:relative md:-top-30"></div>
            <div className="flex flex-col items-start h-[250px] sm:w-[300px] w-full bg-white/10 backdrop-blur-lg shadow-lg shadow-[#030303]/30 p-6 rounded-xl transition-all hover:scale-[1.02] duration-300"></div>
          </div>
        </div>
      </div>
      <div className="relative z-10 w-full mx-auto text-center bg-[#030303] pt-24">
        <h1 className="text-3xl font-poppins font-semibold text-red-700 mb-2 text-start ml-10">
          Featured IoT Solutions
        </h1>
        <p className="text-white/80 text-base md:text-xl font-poppins font-light mt-5 mb-10 max-w-2xl text-start ml-10">
          Our portfolio demonstrates our capability in deploying smart,
          connected devices that solve real-world problems.
        </p>
        <div className="mt-5 flex sm:flex-row flex-col items-center justify-center gap-5 px-10">
          <div className="flex flex-col items-start h-[300px] w-full bg-white/10 backdrop-blur-lg shadow-xl shadow-[#030303]/30 p-6 rounded-3xl transition-all hover:scale-[1.02] duration-300"></div>
          <div className="flex flex-col items-start h-[300px] w-full bg-white/10 backdrop-blur-lg shadow-xl shadow-[#030303]/30 p-6 rounded-3xl transition-all hover:scale-[1.02] duration-300"></div>
          <div className="flex flex-col items-start h-[300px] w-full bg-white/10 backdrop-blur-lg shadow-xl shadow-[#030303]/30 p-6 rounded-3xl transition-all hover:scale-[1.02] duration-300"></div>
        </div>
        <div className="mt-50 flex sm:flex-row flex-col items-start justify-betweem gap-5 px-20">
          <div className="w-1/3 flex flex-col">
            <h2 className="text-red-700 text-4xl md:text-4xl font-poppins font-medium text-left">
              Transforming Ideas into Intelligent Solutions
            </h2>
            <p className="text-white/80 text-base md:text-xl font-poppins font-light mt-10 text-left">
              Our framework covers the full IoT lifecycle: from hardware
              prototyping and firmware development to selecting connectivity
              protocols, building the cloud platform, and developing the final
              application layer for data analytics and user interaction.
            </p>
          </div>
          <div className="w-2/3 flex flex-col items-start">
            <div className="flex flex-col items-center justify-center md:items-center mt-2 gap-8 w-full">
              <div className="flex items-center justify-between bg-white/10 backdrop-blur-lg shadow-lg shadow-[#030303]/30 p-6 md:w-3/4 w-full">
                <h1 className="font-poppins text-2xl font-medium text-white">
                  Which wireless protocols do you use for IoT?
                </h1>
                <h1 className="font-poppins text-3xl font-medium text-white">
                  +
                </h1>
              </div>
              <div className="flex items-center justify-between bg-white/10 backdrop-blur-lg shadow-lg shadow-[#030303]/30 p-6 md:w-3/4 w-full">
                <h1 className="font-poppins text-2xl font-medium text-white">
                  How do you ensure the security of IoT devices?
                </h1>
                <h1 className="font-poppins text-3xl font-medium text-white">
                  +
                </h1>
              </div>
              <div className="flex items-center justify-between bg-white/10 backdrop-blur-lg shadow-lg shadow-[#030303]/30 p-6 md:w-3/4 w-full">
                <h1 className="font-poppins text-2xl font-medium text-white">
                  What cloud platforms do you use for IoT data?
                </h1>
                <h1 className="font-poppins text-3xl font-medium text-white">
                  +
                </h1>
              </div>
              <div className="flex items-center justify-between bg-white/10 backdrop-blur-lg shadow-lg shadow-[#030303]/30 p-6 md:w-3/4 w-full">
                <h1 className="font-poppins text-2xl font-medium text-white">
                  Can you integrate IoT data with our existing software?
                </h1>
                <h1 className="font-poppins text-3xl font-medium text-white">
                  +
                </h1>
              </div>
            </div>
          </div>
        </div>
        <h1 className="font-poppins text-4xl text-white mb-4 mt-50">
          Ready to Build a Connected Future?
        </h1>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
          Transform your business with intelligent devices and data-driven
          insights. Lets start your IoT journey today.
        </p>
        <Link href="/contact">
          <button className="bg-red-700 text-white font-semibold py-3 px-8 rounded-lg hover:bg-red-800 transition-colors duration-300 text-lg cursor-pointer">
            Schedule a Consultation
          </button>
        </Link>
      </div>
    </div>
  );
}
