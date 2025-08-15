"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Script from "next/script";

export default function About() {
  return (
    <div>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EFC5PVB5DW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EFC5PVB5DW');
          `}
        </Script>
      </head>
      {/* Hero */}
      <div className="relative h-[90vh] sm:h-180 w-full bg-[url('/images/hero.png')] bg-cover bg-center bg-no-repeat z-20 flex items-center">
        <div className="absolute inset-0 bg-[#030303]/70 backdrop-blur-sm z-0" />

        <div className="relative z-10 text-white w-full px-6 sm:px-10 max-w-4xl">
          {/* Title Section */}
          <div className="title mb-4 flex flex-col gap-3">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="font-poppins text-4xl font-light sm:text-6xl"
            >
              From Concept to Creation
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
              className="font-poppins text-4xl font-light sm:text-6xl"
            >
              We Build <span className="text-red-700">What Matters</span>
            </motion.h2>
          </div>

          <div className="w-full">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false}}
              className="text-white/80 text-base sm:text-lg font-light font-poppins mt-4 sm:mt-6"
            >
              From the first sketch to the final product, we transform ideas
              into functional, user-focused solutions. Whether it&#39;s digital
              design, hardware development, or full-scale systems, we&#39;re
              here to build what truly matters
            </motion.p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="relative z-10 w-full bg-[#030303] border-b-1 border-[#F2F2F2]/20 border-t-1 py-14 px-6 sm:px-10 flex flex-col items-center justify-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-red-700 text-4xl md:text-4xl font-poppins font-medium"
        >
          About Helekin
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false}}
          className="text-white/80 text-base md:text-xl font-poppins font-light mt-10 text-center "
        >
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
        </motion.p>
      </div>

      {/* Core Values */}
      <div className="relative z-0 w-full flex flex-col bg-[url('/images/fafa.png')] bg-cover bg-center bg-no-repeat px-6 pb-30">
        <div className="absolute inset-0 bg-[#030303]/95 backdrop-blur-sm z-0" />
        <div className="flex justify-between items-baseline z-20">
          <div className="relative z-10 w-full max-w-screen px-6 mx-auto mt-20">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="text-4xl font-poppins font-semibold text-center"
            >
              <span className="text-red-700">Our Core </span>
              <span className="text-white">Values</span>
            </motion.h1>
          </div>
        </div>

        <div>
          <div className="mt-20 sm:mt-40 flex flex-col items-center justify-center gap-8 px-4 sm:flex-row sm:items-start">
            {[
              {
                num: "01",
                title: "Innovation",
                desc: "We embrace bold ideas and new technologies to push boundaries and create meaningful solutions.",
              },
              {
                num: "02",
                title: "Precision",
                desc: "Every detail matters — we build with accuracy, reliability, and engineering excellence.",
              },
              {
                num: "03",
                title: "Simplicity",
                desc: "We believe in clear, intuitive design that enhances usability and removes complexity.",
              },
              {
                num: "04",
                title: "Collaboration",
                desc: "Great things are built together — we work closely with clients and teams at every step.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className={`flex h-[275px] w-full flex-col items-start bg-[#070707]/30 border border-[#F2F2F2]/30 rounded-md p-6 shadow-lg shadow-[#030303]/30 backdrop-blur-lg transition-all duration-300 hover:scale-[1.02] sm:w-[300px] ${
                  i % 2 === 1 ? "sm:mt-20" : ""
                }`}
              >
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: false }}
                  className="text-7xl font-bold text-white/70"
                >
                  {card.num}
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: false }}
                  className="mt-4 text-2xl font-semibold text-white"
                >
                  {card.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: false }}
                  className="mt-2 text-white/80"
                >
                  {card.desc}
                </motion.p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client Projects */}
      <div className="relative z-10 w-full mx-auto text-center bg-gradient-to-b from-[#070707] to-black border-t border-white/20 py-24">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-3xl font-poppins font-semibold text-red-700 mb-2 text-start ml-10"
        >
          Client Projects
        </motion.h1>

        <div className="mt-5 flex sm:flex-row flex-col items-center justify-center gap-5 px-10">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: false }}
              className="flex flex-col items-start h-[300px] w-full bg-white/10 backdrop-blur-lg shadow-xl shadow-[#030303]/30 p-6 rounded-3xl transition-all hover:scale-[1.02] duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
