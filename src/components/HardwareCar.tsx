'use client';

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import serviceData from './ServiceList.json';
import ServiceModal from './Modal';
import { Service } from '@/types/Service';

export default function HardwareServicesCarousel() {
  const services: Service[] = serviceData.servicesList.electronics_and_hardware;
  const CARD_COUNT = services.length;
  const MIDDLE_INDEX = CARD_COUNT + 1; // because of added clone at the start

  const [currentIndex, setCurrentIndex] = useState(MIDDLE_INDEX);
  const [hovering, setHovering] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isCooldown, setIsCooldown] = useState(false);

  const controls = useAnimation();

  // Clone last and first for looping illusion
  const allCards: Service[] = [
    services[services.length - 5], // fifth last
    services[services.length - 4], // fourth last
    services[services.length - 3], // third last
    services[services.length - 2], // second last
    services[services.length - 1], // last
    ...services,
    ...services,
    ...services,
    ...services,
    ...services,
    services[0], // first
    services[1], // second
    services[2], // third
    services[3], // fourth
    services[4], // fifth
  ];


  useEffect(() => {
    if (hovering || typeof window === 'undefined' || window.innerWidth < 768) return;
    const interval = setInterval(() => {
      if (!isCooldown) {
        setCurrentIndex((prev) => prev + 1);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [hovering, isCooldown]);

  const handlePrev = () => {
    if (isCooldown) return;
    setIsCooldown(true);

    setCurrentIndex((prev) => prev - 1);

    setTimeout(() => setIsCooldown(false), 700);
  };

  const handleNext = () => {
    if (isCooldown) return;
    setCurrentIndex((prev) => prev + 1);
    setIsCooldown(true);
    setTimeout(() => setIsCooldown(false), 700);
  };

  const handleCardClick = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  useEffect(() => {
    const vw25 = typeof window !== 'undefined' ? window.innerWidth * 0.25 : 300;
    const gap = 40;
    const cardWidthWithGap = vw25 + gap;
    const targetX = -currentIndex * cardWidthWithGap + 50;

    controls
      .start({
        x: targetX,
        transition: { duration: 0.6, ease: 'easeInOut' },
      })
      .then(() => {
        if (currentIndex >= CARD_COUNT * 2 + 1) {
          setCurrentIndex(MIDDLE_INDEX);
          controls.set({ x: -MIDDLE_INDEX * cardWidthWithGap + 50 });
        } else if (currentIndex <= 0) {
          setCurrentIndex(CARD_COUNT);
          controls.set({ x: -CARD_COUNT * cardWidthWithGap + 50 });
        }
      });

    return () => controls.stop();
  }, [currentIndex, controls, CARD_COUNT]);

  return (
    <div className="relative w-full py-20 flex items-center justify-center">
      <div
        className="relative flex items-center max-w-[90vw] w-full"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <button
          onClick={handlePrev}
          className="hidden md:flex z-20 p-2 h-[300px] w-[50px] items-center justify-center rounded-l-2xl hover:bg-red-700 bg-black transition-all duration-300"
          aria-label="Previous"
          disabled={isCooldown}
        >
          <Image
            src="/svg/arrow-left.svg"
            alt="Previous"
            width={16}
            height={16}
            unoptimized
            loading="lazy"
            className="hover:scale-[1.2] transition-all duration-300"
          />
        </button>

        <div className="flex-1 overflow-hidden">
          <motion.div
            className="flex relative"
            animate={controls}
            initial={{
              x: (() => {
                const vw25 = typeof window !== 'undefined' ? window.innerWidth * 0.25 : 300;
                return -MIDDLE_INDEX * (vw25 + 40) + 50;
              })(),
            }}
            style={{
              minWidth: 'max-content',
              gap: '40px',
            }}
          >
            {allCards.map((service, idx) => {
              const isHovered = hoveredIndex === idx;
              return (
                <div
                  key={idx}
                  className="cursor-pointer flex-shrink-0"
                  onClick={() => handleCardClick(service)}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    width: '25vw',
                    minWidth: '25vw',
                    height: '300px',
                  }}
                >
                  <div
                    className="w-full h-full bg-white/10 backdrop-blur-2xl shadow-2xl shadow-black/30 text-white rounded-xl text-sm transition-all duration-300 relative"
                    style={
                      isHovered
                        ? {
                          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${service.background})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                          backdropFilter: 'blur(10px)',
                        }
                        : {}
                    }
                  >
                    <div className="flex flex-col justify-start w-full h-full px-5">
                      <div
                        className="rounded-full bg-white/20 w-20 h-20 flex justify-center items-center p-2 mb-2 relative top-5 left-5"
                        style={
                          isHovered
                            ? {
                              backgroundColor: '#A50424',
                              backdropFilter: 'blur(10px)',
                            }
                            : {}
                        }
                      >
                        <Image
                          src={service.icon}
                          alt={service.title}
                          width={50}
                          height={50}
                          className="mx-auto mb-2"
                        />
                      </div>
                      <div className="text-left relative m-5 top-5 transition-all duration-300">
                        <h1
                          className={`transition-all duration-500 text-2xl font-poppins font-semibold ${isHovered ? 'text-[#A50424]' : 'text-white'
                            }`}
                        >
                          {service.title}
                        </h1>
                        <p
                          className={`transition-all duration-800 font-poppins font-light ${isHovered ? 'text-lg md:font-semibold' : 'text-md'
                            }`}
                        >
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        <button
          onClick={handleNext}
          className="hidden md:flex z-20 p-2 h-[300px] w-[50px] items-center justify-center rounded-r-2xl hover:bg-red-700 bg-black transition-all duration-300"
          aria-label="Next"
          disabled={isCooldown}
        >
          <Image
            src="/svg/arrow-right.svg"
            alt="Next"
            width={16}
            height={16}
            unoptimized
            loading="lazy"
            className="hover:scale-[1.2] transition-all duration-300"
          />
        </button>
      </div>

      <ServiceModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        service={selectedService}
      />
    </div>
  );
}
