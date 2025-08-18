"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Loading from "../app/(root)/loading"; // Import your loading component

// Logo animation
const logoVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" as const } },
};

// Content animation (entire block moves together)
const contentBlockVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" as const, when: "beforeChildren", staggerChildren: 0.1 },
  },
};

export default function Aboutbanner() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const imagesToLoad = ["/images/logo.png"];
    let loadedCount = 0;

    imagesToLoad.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imagesToLoad.length) {
          setIsLoaded(true);
        }
      };
      img.onerror = () => {
        // Even if an image fails, still count it so UI isn't stuck forever
        loadedCount++;
        if (loadedCount === imagesToLoad.length) {
          setIsLoaded(true);
        }
      };
    });
  }, []);

  if (!isLoaded) {
    return <Loading />;
  }

  return (
    <div
      className="
        w-full bg-[#030303] flex flex-col md:flex-row
        items-center sm:justify-center justify-left gap-20
        py-10 md:py-20 px-3 md:px-10
        transition-all duration-500 ease-in-out border-b-1 border-[#F2F2F2]/20 border-t-1
      "
    >
      {/* Logo */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={logoVariants}
        className="flex-shrink-0 text-center"
      >
        <Image
          width={60}
          height={100}
          unoptimized
          loading="lazy"
          src="/images/logos/logo.webp"
          alt="Helekin Logo"
          className="
            xl:h-80 h-40 w-auto md:h-48 md:mt-0 mt-10
            transition-all duration-200 ease-in-out
            sm:mx-auto
          "
        />
      </motion.div>

      {/* Content as one block */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={contentBlockVariants}
        className="text-white w-full md:w-3/5 p-5 space-y-6"
      >
        <h2 className="text-red-700 text-3xl md:text-4xl font-poppins font-medium">
          About Us
        </h2>

        <h1 className="text-white text-xl md:text-3xl font-poppins font-medium leading-tight">
          Empowering Global Growth Through Smart Digital Solutions
        </h1>

        <p className="text-white/80 md:text-lg text-md font-regular font-poppins">
          At Helekin, we&#39;re passionate about helping businesses thrive in
          the digital age. As a startup driven by innovation and agility, we
          craft tailored digital solutions that solve real problems and unlock
          new opportunities. From building powerful digital experiences to
          scaling your ideas, we&#39;re here to support your journey every step
          of the way. Our mission is simple — to empower businesses worldwide
          with the tools, technology, and creativity they need to grow.
        </p>

        <Link
          href="/about"
          className="
            inline-block bg-[#070707]/10 border border-[#F2F2F2]/30 rounded-md
            md:px-6 md:py-3 sm:px-3 px-2 sm:py-2 py-2 text-md md:text-lg font-poppins
            hover:bg-white hover:text-red-700
            transition-colors duration-300 ease-in-out
          "
        >
          Learn More
        </Link>
      </motion.div>
    </div>
  );
}
