'use client';

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import serviceData from './ServiceList.json';
import ServiceModal from './Modal';
import { Service } from '@/types/Service';
import Loading from '../app/(root)/loading';

export default function ThreedSoftwareServicesCarousel() {
  const services: Service[] = serviceData.servicesList.threed;
  const CARD_COUNT = services.length;
  const MIDDLE_INDEX = CARD_COUNT + 1;

  const [currentIndex, setCurrentIndex] = useState(MIDDLE_INDEX);
  const [hovering, setHovering] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isCooldown, setIsCooldown] = useState(false);
  const [initialX, setInitialX] = useState<number | null>(null);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  const controls = useAnimation();

  // Clone items for infinite scroll illusion
  const allCards: Service[] = React.useMemo(
    () => [
      services[services.length - 3],
      services[services.length - 2],
      services[services.length - 1],
      ...services,
      ...services,
      ...services,
      services[0],
      services[1],
      services[2],
    ],
    [services]
  );

  // Preload all images
  useEffect(() => {
    const imageUrls = [
      ...allCards.map((s) => s.icon),
      ...allCards.map((s) => s.background),
      '/svg/arrow-left.svg',
      '/svg/arrow-right.svg',
    ];

    let loadedCount = 0;

    const handleLoad = () => {
      loadedCount++;
      if (loadedCount === imageUrls.length) {
        setIsPageLoaded(true);
      }
    };

    imageUrls.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      if (img.complete) {
        handleLoad();
      } else {
        img.onload = handleLoad;
        img.onerror = handleLoad;
      }
    });
  }, [allCards]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const vwPercent = window.innerWidth < 768 ? 0.45 : 0.25;
      const vwWidth = window.innerWidth * vwPercent;
      const gap = window.innerWidth < 768 ? 20 : 40;
      const cardWidthWithGap = vwWidth + gap;
      const calculatedX = -MIDDLE_INDEX * cardWidthWithGap + 50;
      setInitialX(calculatedX);
    }
  }, []);

  useEffect(() => {
    if (hovering) return;
    const interval = setInterval(() => {
      if (!isCooldown) {
        setCurrentIndex((prev) => prev + 1);
      }
    }, 2500);
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
    if (initialX === null || typeof window === 'undefined') return;

    const vwPercent = window.innerWidth < 768 ? 0.45 : 0.25;
    const vwWidth = window.innerWidth * vwPercent;
    const gap = window.innerWidth < 768 ? 10 : 40;
    const cardWidthWithGap = vwWidth + gap;
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
  }, [currentIndex, controls, CARD_COUNT, initialX, MIDDLE_INDEX]);

  if (!isPageLoaded || initialX === null) return <Loading />;

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div className="relative sm:w-full py-2 sm:py-20 flex items-center justify-center">
      <div
        className="relative flex items-stretch max-w-[90vw] w-full"
        onMouseEnter={() => !isMobile && setHovering(true)}
        onMouseLeave={() => !isMobile && setHovering(false)}
      >
        {/* Prev button */}
        <button
          onClick={handlePrev}
          className="z-20 absolute -left-2 top-1/2 -translate-y-1/2 w-8 sm:w-12 h-[170px] sm:h-[300px] flex items-center justify-center 
                     hover:bg-red-700 bg-[#030303]/50 backdrop-blur-md rounded-l-md border border-[#F2F2F2]/20 
                     transition-all duration-300"
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
            className="w-4 h-4 sm:w-6 sm:h-6 hover:scale-[1.2] transition-all duration-300"
          />
        </button>

        {/* Carousel track */}
        <div className="flex-1 overflow-hidden">
          <motion.div
            className="flex relative"
            animate={controls}
            initial={{ x: initialX }}
            style={{
              minWidth: 'max-content',
              gap:
                typeof window !== 'undefined' && window.innerWidth < 768
                  ? '10px'
                  : '40px',
            }}
          >
            {allCards.map((service, idx) => {
              const isHovered = !isMobile && hoveredIndex === idx;
              return (
                <div
                  key={idx}
                  className="cursor-pointer flex-shrink-0 h-[170px] sm:h-[300px]"
                  onClick={() => handleCardClick(service)}
                  onMouseEnter={() => !isMobile && setHoveredIndex(idx)}
                  onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                  style={{
                    width: isMobile ? '45vw' : '25vw',
                    minWidth: isMobile ? '45vw' : '25vw',
                  }}
                >
                  <div
                    className="w-full h-full bg-[#070707]/30 border border-[#F2F2F2]/30 rounded-md backdrop-blur-2xl shadow-2xl shadow-[#030303]/30 text-white text-sm transition-all duration-300 relative"
                    style={
                      isHovered
                        ? {
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${service.background})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backdropFilter: 'blur(10px)',
                          }
                        : {}
                    }
                  >
                    <div className="flex flex-col justify-start w-full h-full px-2 sm:px-5 bg-black/30">
                      <div
                        className="rounded-full bg-white/10 border border-[#F2F2F2]/30 w-10 h-10 sm:w-17 sm:h-17 flex justify-center items-center p-1 sm:p-2 mb-2 relative top-2 sm:top-5 left-2 sm:left-5"
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
                          width={40}
                          height={40}
                          className="m-auto h-8 w-8 sm:h-12 sm:w-12 object-contain p-1"
                        />
                      </div>
                      <div className="text-left relative m-2 sm:m-5 top-2 sm:top-5 transition-all duration-300">
                        <h1
                          className={`transition-all duration-500 font-poppins font-semibold ${
                            isMobile ? 'text-sm' : 'text-lg sm:text-2xl'
                          } ${
                            isHovered ? 'text-[#ff0033]' : 'text-white'
                          }`}
                        >
                          {service.title}
                        </h1>
                        <p
                          className={`transition-all duration-800 font-poppins font-light ${
                            isHovered
                              ? 'text-[0.7rem] md:text-lg'
                              : 'md:text-[0.9rem] text-[0.5rem]'
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

        {/* Next button */}
        <button
          onClick={handleNext}
          className="z-20 absolute -right-2 top-1/2 -translate-y-1/2 w-8 h-[170px] sm:h-[300px] sm:w-12 flex items-center justify-center 
                     hover:bg-red-700 bg-[#030303]/50 backdrop-blur-md rounded-r-md border border-[#F2F2F2]/20 
                     transition-all duration-300"
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
            className="w-4 h-4 sm:w-6 sm:h-6 hover:scale-[1.2] transition-all duration-300"
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
