"use client";

import Link from "next/link";
import SoftwareServicesCarousel from "./SoftwareCar";
import HardwareServicesCarousel from "./HardwareCar";
import ThreedServicesCarousel from "./ThreedCar";
import { motion } from "framer-motion";
import Loading from "../app/(root)/loading";
import { useState, useEffect } from "react";
import { Box, Computer, Laptop } from "lucide-react";
import { Cpu } from "lucide-react";

export default function Services() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Collect static background + all carousel images
    const imageUrls: string[] = [
      "/images-webp/fafa.webp",
    ];

    let loadedCount = 0;
    const totalImages = imageUrls.length;

    if (totalImages === 0) {
      setIsLoading(false);
      return;
    }

    imageUrls.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setIsLoading(false);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setIsLoading(false);
        }
      };
    });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="relative z-0 min-h-full w-full flex flex-col bg-[url('/images-webp/fafa.webp')] bg-cover bg-center bg-no-repeat sm:px-6 px-3 sm:pb-30 pb-20">
      <div className="absolute inset-0 bg-[#030303]/95 backdrop-blur-sm z-0 h-full w-full" />

      <div className="w-full m-auto">
        {/* Intro Section */}
        <motion.div
          className="relative z-10 w-full max-w-screen sm:px-6 px-3 mx-auto mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <h1 className="sm:text-3xl text-2xl font-poppins font-semibold text-red-700 mb-2">
            Explore What We Do Best
          </h1>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-center mt-2 gap-4">
            <div className="flex flex-col items-start md:w-1/2">
              <p className="sm:text-lg text-md font-extralight font-poppins text-white/80">
                Browse our collection of high-quality, custom-built tech
                solutions designed for everyday use and professional
                applications. From software applications to hardware devices, we
                offer a range of products that enhance productivity and
                streamline your workflow.
              </p>
            </div>

            <Link
              href="/services"
              className="bg-[#070707]/10 border border-[#F2F2F2]/30 rounded-md
              sm:px-6 px-3 sm:py-3 py-2 sm:text-lg text-sm font-poppins
              hover:bg-white hover:text-red-700
              transition-colors duration-300 ease-in-out text-white
              cursor-pointer relative items-end ml-auto"
            >
              View All
            </Link>
          </div>
        </motion.div>

        {/* Software Section */}
        <motion.div
          className="relative z-10 w-full sm:px-6 px-3 mx-auto mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: false }}
        >
            <div className="flex justify-left ">
            <Laptop className="w-7 h-7 text-white mr-2" />
            <h1 className="font-poppins sm:text-2xl text-xl text-white">
              Software Services
            </h1>
            </div>
          <SoftwareServicesCarousel />
        </motion.div>

        {/* Hardware Section */}
        <motion.div
          className="relative z-10 w-full max-w-screen sm:px-6 px-3 mx-auto mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: false }}
        >
          <div className="flex justify-left">
            <Cpu className="w-7 h-7 text-white mr-2" />
            <h1 className="font-poppins sm:text-2xl text-xl text-white">
              Electronics and Hardware Services
            </h1>
          </div>
          <HardwareServicesCarousel />
        </motion.div>

        {/* 3D Printing Section */}
        <motion.div
          className="relative z-10 w-full max-w-screen sm:px-6 px-3 mx-auto mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: false }}
        >
          <div className="flex justify-left">
            <Box className="w-7 h-7 text-white mr-2" />
            <h1 className="font-poppins sm:text-2xl text-xl text-white">
              3D Services
            </h1>
          </div>
          <ThreedServicesCarousel />
        </motion.div>
      </div>
    </div>
  );
}
