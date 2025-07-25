'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-16 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-poppins text-red-600 mb-6">
          About Us
        </h2>
        <p className="text-gray-300 text-lg font-light leading-relaxed font-poppins">
          At <span className="text-white font-medium">Hands</span>, we merge cutting-edge AI with intuitive design to deliver intelligent software solutions. From advanced stock analysis to real-time user experience optimization, our platform empowers individuals and businesses to make smarter decisions—faster.
        </p>
        <p className="mt-4 text-gray-400 font-light text-md font-poppins">
          We believe in creating technology that’s transparent, reliable, and user-first. Our mission is to revolutionize how people interact with data, providing clarity in complexity.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/about-hero.jpg" // Replace with your own image path
            alt="About us"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
