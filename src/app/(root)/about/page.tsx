'use client';

import Image from 'next/image';
import serviceData from '../../../components/ServiceList.json';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

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

  const [searchTerm, setSearchTerm] = useState('');

  const [hovering, setHovering] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<{ section: string; index: number } | null>(null);
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
      const isHovered = hoveredIndex?.section === section && hoveredIndex.index === i;

      return (
        <Link href={service.link || '#'} key={i} className="w-full">
          <div
            onMouseEnter={() => handleMouseEnter(section, i)}
            onMouseLeave={handleMouseLeave}
            className="flex flex-col items-start h-[270px] w-full bg-white/10 backdrop-blur-lg shadow-lg shadow-black/30 p-6 rounded-xl transition-all hover:scale-[1.02] duration-300"
            style={{
              ...(isHovered
                ? {
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${service.background})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }
                : {
                  backgroundColor: 'rgba(255,255,255,0.05)',
                }),
            }}
          >
            <div
              className="rounded-full bg-white/20 w-16 h-16 flex justify-center items-center p-2 mb-4"
              style={
                isHovered
                  ? {
                    backgroundColor: '#A50424',
                    backdropFilter: 'blur(10px)',
                  }
                  : {}
              }
            >
              <Image src={service.icon} alt={service.title} width={40} height={40} />
            </div>
            <h2
              className="text-white text-2xl font-semibold mb-2"
              style={{
                color: isHovered ? '#A50424' : 'white',
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
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0 h-full" />
        <div className="absolute h-150 bottom-5 left-20">
          <div className="flex mb-4">
            <h1 className="text-white text-6xl font-light font-poppins">Artificial</h1>
            <h1 className="text-red-700 text-6xl font-light font-poppins px-4">Intelligence</h1>
          </div>
          <div className="w-2/5">
            <p className="text-white/80 text-xl font-light font-poppins mt-10">
              End to end solution for our customers tailored to their needs is what makes us different. Not only it saves cost, but makes it easy for the customers to engage with our solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="relative z-10 w-full bg-black h-150 flex flex-col items-center justify-center text-white p-10">
        <h2 className="text-red-700 text-4xl md:text-4xl font-poppins font-medium">
          Transforming Ideas into Intelligent Solutions
        </h2>
        <p className="text-white/80 text-base md:text-xl font-poppins font-light mt-10 text-center">
          At Helekin, our AI capabilities are designed to help businesses unlock smarter, faster, and more scalable solutions. From intelligent automation to predictive analytics and machine learning models, we leverage the power of artificial intelligence to drive efficiency, uncover insights, and deliver real-world impact. Whether it&#39;s enhancing customer experiences or optimizing operations, our AI solutions are tailored to meet the unique needs of your business in the digital era.
        </p>
      </div>
      <div className="relative z-0 w-full flex flex-col bg-[url('/images/fafa.png')] bg-cover bg-center bg-no-repeat px-6 pb-30">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />

        <div className='flex justify-between items-baseline z-20'>
          <div className="relative z-10 w-full max-w-screen px-6 mx-auto mt-20">
            <h1 className="text-4xl font-poppins font-semibold text-red-700 mb-2 text-center">Core Values</h1>
          </div>
        </div>
        <div>
          <div className='mt-20 sm:mt-40 flex sm:flex-row flex-col items-center justify-center gap-5 '>
            <div className="flex flex-col items-start h-[250px] sm:w-[300px] w-full bg-white/10 backdrop-blur-lg shadow-lg shadow-black/30 p-6 rounded-xl transition-all hover:scale-[1.02] duration-300">

            </div>
            <div className="flex flex-col items-start h-[250px] sm:w-[300px] w-full bg-white/10 backdrop-blur-lg shadow-lg shadow-black/30 p-6 rounded-xl transition-all hover:scale-[1.02] duration-300 md:relative md:-top-30">

            </div>
            <div className="flex flex-col items-start h-[250px] sm:w-[300px] w-full bg-white/10 backdrop-blur-lg shadow-lg shadow-black/30 p-6 rounded-xl transition-all hover:scale-[1.02] duration-300">

            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 w-full mx-auto text-center bg-black pt-24">
        <h1 className="text-3xl font-poppins font-semibold text-red-700 mb-2 text-start ml-10">
          Client Projects
        </h1>
        <p className="text-white/80 text-base md:text-xl font-poppins font-light mt-5 mb-10 max-w-2xl text-start ml-10">
          Carefully Crafted Masterpieces that are designed to solve real-world problems.
        </p>
        <div className='mt-5 flex sm:flex-row flex-col items-center justify-center gap-5 px-10 '>
          <div className="flex flex-col items-start h-[300px] w-full bg-white/10 backdrop-blur-lg shadow-xl shadow-black/30 p-6 rounded-3xl transition-all hover:scale-[1.02] duration-300">

          </div>
          <div className="flex flex-col items-start h-[300px] w-full bg-white/10 backdrop-blur-lg shadow-xl shadow-black/30 p-6 rounded-3xl transition-all hover:scale-[1.02] duration-300">

          </div>
          <div className="flex flex-col items-start h-[300px] w-full bg-white/10 backdrop-blur-lg shadow-xl shadow-black/30 p-6 rounded-3xl transition-all hover:scale-[1.02] duration-300">

          </div>
        </div>
      </div>
    </div >
  );
}
