'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link'; // ✅ Import Link
import serviceData from './ServiceList.json';

const CARD_WIDTH = 300;
const CARD_GAP = 40;
const VISIBLE_CARDS = 3;

export default function SoftwareServicesCarousel() {
  const [visibleCards, setVisibleCards] = useState(VISIBLE_CARDS);
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const controls = useAnimation();
  const containerRef = useRef(null);

  const services = serviceData.servicesList.software;
  const allCards = [...services, ...services];

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth - 40;
      const cards = Math.floor(width / (CARD_WIDTH + CARD_GAP));
      setVisibleCards(cards);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const shift = () => {
    const total = services.length;
    const newIndex = (index + 1) % total;
    setIndex(newIndex);
    controls.start({
      x: -newIndex * (CARD_WIDTH + CARD_GAP),
      transition: { duration: 0.6, ease: 'easeInOut' },
    });
  };

  useEffect(() => {
    if (hovering) return;
    const interval = setInterval(() => shift(), 3000);
    return () => clearInterval(interval);
  }, [index, hovering]);

  const handlePrev = () => {
    const total = services.length;
    const newIndex = (index - 1 + total) % total;
    setIndex(newIndex);
    controls.start({
      x: -newIndex * (CARD_WIDTH + CARD_GAP),
      transition: { duration: 0.6, ease: 'easeInOut' },
    });
  };

  const handleNext = () => {
    shift();
  };

  return (
    <div
      className="relative w-full mt-10 overflow-hidden"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <motion.div
        ref={containerRef}
        className="flex"
        animate={controls}
        initial={{ x: 0 }}
        style={{ width: `${allCards.length * (CARD_WIDTH + CARD_GAP)}px` }}
      >
        {allCards.map((service, idx) => {
          const isHovered = hoveredIndex === idx;
          return (
            <Link href={service.link || '#'} key={idx} className="w-full">
              <div
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="w-[300px] h-[300px] bg-black text-white rounded-xl text-center text-sm mr-10 flex-shrink-0 hover:w-[500px] transition-all duration-300"
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
                <div className="flex flex-col justify-start w-[300px] h-[300px] hover:w-[500px] transition-all duration-300">
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
                    <h2
                      className={`transition-all duration-300 text-2xl font-poppins font-semibold ${
                        isHovered ? 'text-red-700' : 'text-white'
                      }`}
                    >
                      {service.title}
                    </h2>
                    <p
                      className={`transition-all duration-300 font-poppins font-light ${
                        isHovered ? 'text-lg' : 'text-md'
                      }`}
                    >
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </motion.div>

      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 -translate-y-1/2 bg-gradient-to-l from-black/10 to-black text-white p-2 h-[300px] w-[50px] hover:to-white/80 transition duration-300"
      >
        ←
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 -translate-y-1/2 bg-gradient-to-r from-black/10 to-black text-white p-2 h-[300px] w-[50px] hover:to-white/80 transition duration-300"
      >
        →
      </button>
    </div>
  );
}
