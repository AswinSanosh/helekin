"use client";

import Image from "next/image";
import serviceData from "../../../../components/ServiceList.json";
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
      <div className="relative h-[90vh] sm:h-180 w-full bg-[url('/svg/hero.svg')] bg-cover bg-center bg-no-repeat z-20 flex items-center">
        <div className="absolute inset-0 bg-[#030303]/70 backdrop-blur-sm z-0" />
        <div className="relative z-10 text-white w-full px-6 sm:px-10 max-w-4xl">
          <div className="mb-4 flex flex-col sm:flex-row gap-3">
            <h1 className="text-4xl sm:text-6xl font-light font-poppins">
              App
            </h1>
            <h1 className="text-4xl sm:text-6xl text-red-700 font-light font-poppins">
              Development
            </h1>
          </div>
          <div className="w-full sm:w-3/4">
            <p className="text-white/80 text-base sm:text-lg font-light font-poppins mt-4 sm:mt-6">
              We craft high-performance Android and iOS apps with seamless
              functionality, elegant UI, and robust backends.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full bg-[#030303] py-14 px-6 sm:px-10 flex flex-col items-center justify-center text-white">
        <h2 className="text-red-700 text-3xl sm:text-4xl font-poppins font-medium text-center">
          Transforming Ideas into Intelligent Solutions
        </h2>
        <p className="text-white/80 text-base sm:text-xl font-poppins font-light mt-6 sm:mt-10 text-center">
          At Helekin, we specialize in turning your ideas into powerful mobile
          applications. Whether it&#39;s a native iOS, Android, or
          cross-platform app, we leverage cutting-edge technology to build fast,
          secure, and user-friendly mobile experiences that keep your audience
          connected, wherever they are.
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
          Featured Mobile Apps
        </h1>
        <p className="text-white/80 text-base sm:text-xl font-poppins font-light mt-5 mb-10 max-w-2xl text-start">
          Our portfolio highlights our expertise in mobile app innovation and
          creating seamless, user-centric designs.
        </p>
        <div className="mt-5 flex sm:flex-row flex-col items-center justify-center gap-5 px-10 ">
          <div className="flex flex-col items-start h-[300px] w-full bg-white/10 backdrop-blur-lg shadow-xl shadow-[#030303]/30 p-6 rounded-3xl transition-all hover:scale-[1.02] duration-300"></div>
          <div className="flex flex-col items-start h-[300px] w-full bg-white/10 backdrop-blur-lg shadow-xl shadow-[#030303]/30 p-6 rounded-3xl transition-all hover:scale-[1.02] duration-300"></div>
          <div className="flex flex-col items-start h-[300px] w-full bg-white/10 backdrop-blur-lg shadow-xl shadow-[#030303]/30 p-6 rounded-3xl transition-all hover:scale-[1.02] duration-300"></div>
        </div>

        <div className="mt-20 flex flex-col sm:flex-row items-start justify-between gap-10 sm:gap-5">
          <div className="w-full sm:w-1/3 flex flex-col">
            <h2 className="text-red-700 text-3xl sm:text-4xl font-poppins font-medium text-left">
              Transforming Ideas into Intelligent Solutions
            </h2>
            <p className="text-white/80 text-base sm:text-xl font-poppins font-light mt-6 sm:mt-10 text-left">
              We design and develop with a mobile-first mindset, focusing on
              performance, usability across diverse devices, and optimizing for
              the unique challenges of the mobile ecosystem. Our process
              includes rigorous testing, performance tuning, and navigating the
              app store submission process for you.
            </p>
          </div>

          <div className="w-full sm:w-2/3 flex flex-col items-start">
            <div className="flex flex-col items-center justify-center md:items-center mt-2 gap-8 w-full">
              <div className="flex items-center justify-between bg-white/10 backdrop-blur-lg shadow-lg shadow-[#030303]/30 p-6 w-full sm:w-3/4">
                <h1 className="font-poppins text-lg sm:text-2xl font-medium text-white">
                  Native or Cross-Platform: Which is right for me?
                </h1>
                <h1 className="font-poppins text-2xl sm:text-3xl font-medium text-white">
                  +
                </h1>
              </div>
              <div className="flex items-center justify-between bg-white/10 backdrop-blur-lg shadow-lg shadow-[#030303]/30 p-6 w-full sm:w-3/4">
                <h1 className="font-poppins text-lg sm:text-2xl font-medium text-white">
                  How do you handle app store submissions?
                </h1>
                <h1 className="font-poppins text-2xl sm:text-3xl font-medium text-white">
                  +
                </h1>
              </div>
              <div className="flex items-center justify-between bg-white/10 backdrop-blur-lg shadow-lg shadow-[#030303]/30 p-6 w-full sm:w-3/4">
                <h1 className="font-poppins text-lg sm:text-2xl font-medium text-white">
                  What is your process for testing mobile apps?
                </h1>
                <h1 className="font-poppins text-2xl sm:text-3xl font-medium text-white">
                  +
                </h1>
              </div>
              <div className="flex items-center justify-between bg-white/10 backdrop-blur-lg shadow-lg shadow-[#030303]/30 p-6 w-full sm:w-3/4">
                <h1 className="font-poppins text-lg sm:text-2xl font-medium text-white">
                  Can you integrate my app with existing systems?
                </h1>
                <h1 className="font-poppins text-2xl sm:text-3xl font-medium text-white">
                  +
                </h1>
              </div>
            </div>
          </div>
        </div>

        <h1 className="font-poppins text-3xl sm:text-4xl text-white mb-4 mt-20">
          Ready to build your app?
        </h1>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto text-base sm:text-lg">
          Let&#39;s bring your mobile app idea to life with a beautiful
          interface and powerful functionality that captivates users.
        </p>
        <Link href="/contact">
          <button className="bg-red-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg hover:bg-red-800 transition-colors duration-300 text-base sm:text-lg cursor-pointer">
            Schedule a Consultation
          </button>
        </Link>
      </div>
    </div>
  );
}
