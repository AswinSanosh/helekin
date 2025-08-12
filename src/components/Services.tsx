'use client'

import Link from 'next/link'
import SoftwareServicesCarousel from './SoftwareCar'
import HardwareServicesCarousel from './HardwareCar'
import ThreedServicesCarousel from './ThreedCar'
import { motion } from 'framer-motion'

export default function Services() {
  return (
    <div className="relative z-0 min-h-full w-full flex flex-col bg-[url('/images/fafa.png')] bg-cover bg-center bg-no-repeat px-6 pb-30">
      <div className="absolute inset-0 bg-[#030303]/95 backdrop-blur-sm z-0 h-full w-full" />

      <div className="w-full m-auto">
        {/* Intro Section */}
        <motion.div
          className="relative z-10 w-full max-w-screen px-6 mx-auto mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: false }}
        >
          <h1 className="text-3xl font-poppins font-semibold text-red-700 mb-2">
            Explore What We Do Best
          </h1>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-center mt-2 gap-4">
            <div className="flex flex-col items-start md:w-1/2">
              <p className="text-lg font-extralight font-poppins text-white/80">
                Browse our collection of high-quality, custom-built tech solutions designed for everyday use and professional applications. From software applications to hardware devices, we offer a range of products that enhance productivity and streamline your workflow.
              </p>
            </div>

            <Link
              href="/services"
              className="md:inline-block bg-[#070707]/10 border border-[#F2F2F2]/30 rounded-md hidden
              md:px-6 md:py-3 px-3 py-2 text-base md:text-lg font-poppins
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
          className="relative z-10 w-full max-w-screen px-6 mx-auto mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: false }}
        >
          <div className="flex justify-between">
            <h1 className="font-poppins text-2xl text-white">Software Services</h1>
          </div>
          <div className="block md:hidden mt-2 text-white/80 text-sm font-poppins">
            We craft tailored software solutions including web apps, mobile platforms, and internal tools. Our services focus on performance, scalability, and clean UI/UX to help your business thrive in the digital world.
          </div>
          <div className="hidden md:block">
            <SoftwareServicesCarousel />
          </div>
        </motion.div>

        {/* Hardware Section */}
        <motion.div
          className="relative z-10 w-full max-w-screen px-6 mx-auto mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: false }}
        >
          <div className="flex justify-between">
            <h1 className="font-poppins text-2xl text-white">Electronics and Hardware Services</h1>
          </div>
          <div className="block md:hidden mt-2 text-white/80 text-sm font-poppins">
            We design and build embedded systems, IoT devices, and smart electronics. From prototyping to final production, our hardware services cover all phases of the product development cycle.
          </div>
          <div className="hidden md:block">
            <HardwareServicesCarousel />
          </div>
        </motion.div>

        {/* 3D Printing Section */}
        <motion.div
          className="relative z-10 w-full max-w-screen px-6 mx-auto mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: false }}
        >
          <div className="flex justify-between">
            <h1 className="font-poppins text-2xl text-white">3D Printing Services</h1>
          </div>
          <div className="block md:hidden mt-2 text-white/80 text-sm font-poppins">
            Our 3D printing service provides rapid prototyping and custom part fabrication using high-quality materials. Perfect for makers, engineers, and creative professionals needing fast, precise results.
          </div>
          <Link
            href="/services"
            className="inline-block bg-[#070707]/10 border border-[#F2F2F2]/30 rounded-md md:hidden mt-10
                md:px-6 md:py-3 px-3 py-2 text-base md:text-lg font-poppins
                hover:bg-white hover:text-red-700
                transition-colors duration-300 ease-in-out text-white
                cursor-pointer"
          >
            View All
          </Link>
          <div className="hidden md:block">
            <ThreedServicesCarousel />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
