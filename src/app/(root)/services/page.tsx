"use client";

import Image from "next/image";
import serviceData from "../../../components/ServiceList.json";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Loading from "./loading";

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

  const [isLoading, setIsLoading] = useState(true);

  // helper function for preloading
  const preloadImages = (srcArray: string[]) => {
    return Promise.all(
      srcArray.map(
        (src) =>
          new Promise<void>((resolve) => {
            const img = document.createElement("img");
            img.src = src;
            img.onload = () => resolve();
            img.onerror = () => resolve();
          })
      )
    );
  };

  useEffect(() => {
    const handleFullLoad = async () => {
      // collect all image URLs (background + icons)
      const allImages = [
        ...Softservices.map((s) => s.background),
        ...Softservices.map((s) => s.icon),
        ...Hardservices.map((s) => s.background),
        ...Hardservices.map((s) => s.icon),
        ...ThreeDservices.map((s) => s.background),
        ...ThreeDservices.map((s) => s.icon),
      ].filter(Boolean);

      await preloadImages(allImages);
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      handleFullLoad();
    } else {
      window.addEventListener("load", handleFullLoad);
      return () => window.removeEventListener("load", handleFullLoad);
    }
  }, []);

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: false }}
            onMouseEnter={() => handleMouseEnter(section, i)}
            onMouseLeave={handleMouseLeave}
            className="flex flex-col items-start h-[270px] w-full backdrop-blur-lg shadow-lg shadow-black/30 p-6 bg-[#070707]/30 border border-[#F2F2F2]/30 rounded-md transition-all hover:scale-[1.02] duration-300"
            style={{
              ...(isHovered
                ? window.innerWidth >= 1024
                  ? {
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${service.background})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                  : {
                      backgroundColor: "rgba(255,255,255,0.05)",
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
                className="w-full h-full object-contain p-1"
              />
            </div>
            <h2
              className="text-white text-2xl font-semibold mb-2 max-sm:text-xl max-sm:leading-snug"
              style={{
                color: isHovered ? "red" : "white",
              }}
            >
              {service.title}
            </h2>
            <p className="text-white/80 text-sm max-sm:text-xs">
              {service.desc}
            </p>
          </motion.div>
        </Link>
      );
    });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      {/* Hero */}
      <div className="relative h-[90vh] w-full bg-[url('/images-webp/hero.webp')] bg-cover bg-center bg-no-repeat z-20 flex items-center">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0 " />
        <div className="relative z-10 text-white w-full px-10 max-w-4xl max-sm:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="mb-4 flex flex-row gap-3 max-sm:flex-col max-sm:gap-1"
          >
            <h1 className="text-white text-6xl font-extralight font-poppins max-sm:text-4xl">
              Crafting
            </h1>
            <h1 className="text-red-700 text-6xl font-light font-poppins px-4 max-sm:px-0 max-sm:text-4xl">
              Experiences
            </h1>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-white text-6xl font-extralight font-poppins max-sm:text-4xl"
          >
            That Evoke Emotions
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
            className="w-3/4 max-sm:w-full"
          >
            <p className="text-white/60 text-lg font-extralight font-poppins mt-4 max-sm:text-sm">
              End to end solution for our customers tailored to their needs is
              what makes us different. Not only it saves cost, but makes it easy
              for the customers to engage with our solutions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative z-0 w-full flex flex-col bg-[url('/images-webp/fafa.webp')] bg-cover bg-center bg-no-repeat px-6 pb-30 max-sm:px-4">
        <div className="absolute inset-0 bg-[#030303]/95 backdrop-blur-sm z-0 h-full w-full" />

        {/* Heading + Search */}
        <div className="flex justify-between items-baseline z-20 max-sm:flex-col max-sm:gap-6 max-sm:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="relative z-10 w-full max-w-screen px-6 mx-auto mt-20 max-sm:px-0"
          >
            <h1 className="text-3xl font-poppins font-semibold text-red-700 mb-2 max-sm:text-2xl">
              Our Services
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className="relative w-full max-w-sm mr-20 max-sm:mr-0 max-sm:max-w-full"
          >
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Image
                src="/svg/search.svg"
                width={20}
                height={20}
                alt="Search"
              />
            </div>
            <input
              type="text"
              className="w-full text-center pl-10 pr-4 py-2 bg-[#070707]/30 border border-[#F2F2F2]/30 rounded-md focus:outline-none focus:border-1 focus:border-red-700 text-white placeholder-white/70"
              placeholder="Search Services"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </motion.div>
        </div>

        {/* Filtered or Categorized Services */}
        {searchTerm.trim() && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="relative z-10 w-full max-w-screen px-6 mx-auto mt-16 max-sm:px-0"
          >
            <h1 className="font-poppins text-2xl text-white mb-4 max-sm:text-xl">
              Related Services
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-sm:grid-cols-1">
              {renderServiceCards(
                [...Softservices, ...Hardservices, ...ThreeDservices].filter(
                  (service) =>
                    service.title
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    service.desc
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                ),
                "search"
              )}
            </div>
          </motion.div>
        )}

        {!searchTerm.trim() && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="relative z-10 w-full max-w-screen px-6 mx-auto mt-16 max-sm:px-0 "
            >
              <h1 className="font-poppins text-2xl text-white mb-4 max-sm:text-xl">
                Software Services
              </h1>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-sm:grid-cols-1">
                {renderServiceCards(Softservices, "software")}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="relative z-10 w-full max-w-screen px-6 mx-auto mt-16 max-sm:px-0"
            >
              <h1 className="font-poppins text-2xl text-white mb-4 max-sm:text-xl">
                Electronics and Hardware Services
              </h1>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-sm:grid-cols-1">
                {renderServiceCards(Hardservices, "hardware")}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="relative z-10 w-full max-w-screen px-6 mx-auto mt-16 mb-20 max-sm:px-0"
            >
              <h1 className="font-poppins text-2xl text-white mb-4 max-sm:text-xl">
                3D Printing Services
              </h1>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-sm:grid-cols-1">
                {renderServiceCards(ThreeDservices, "threed")}
              </div>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}
