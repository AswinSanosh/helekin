'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const services = [
  { title: 'Web Dev', desc: 'Websites & Portals' },
  { title: 'Mobile', desc: 'iOS & Android Apps' },
  { title: 'AI', desc: 'Machine Learning' },
  { title: 'UI/UX', desc: 'Design & Prototypes' },
  { title: 'Cloud', desc: 'AWS, Azure, GCP' },
  { title: 'DevOps', desc: 'Automation & CI/CD' },
];

const CARD_WIDTH = 300;
const CARD_GAP = 40; // Tailwind gap-10 = 2.5rem
const VISIBLE_CARDS = 3; // Default; will auto-adjust based on screen

export default function SoftwareServicesCarousel() {
  const [visibleCards, setVisibleCards] = useState(VISIBLE_CARDS);
  const [index, setIndex] = useState(0);
  const controls = useAnimation();
  const containerRef = useRef(null);

  const allCards = [...services, ...services]; // duplicate for loop

  // Resize handling to adapt visible cards
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth - 40; // account for px-20
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
    const interval = setInterval(() => shift(), 3000);
    return () => clearInterval(interval);
  }, [index]);

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
    <div className="relative w-full mt-10 overflow-hidden">
      <motion.div
        ref={containerRef}
        className="flex"
        animate={controls}
        initial={{ x: 0 }}
        style={{ width: `${allCards.length * (CARD_WIDTH + CARD_GAP)}px` }}
      >
        {allCards.map((service, idx) => (
          <div
            key={idx}
            className="w-[300px] h-[300px] bg-white/10 text-white rounded-xl p-2 text-center text-sm mr-10 flex-shrink-0"
          >
            <h2 className="font-bold text-xs">{service.title}</h2>
            <p className="text-[10px] mt-1 text-white/70">{service.desc}</p>
          </div>
        ))}
      </motion.div>

      {/* Arrows */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 -translate-y-1/2 bg-gradient-to-l from-transparent to-transparent text-white p-2 h-[300px] w-[50px] hover:to-white/40 transition duration-300"
      >
        ←
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 -translate-y-1/2 bg-gradient-to-r from-transparent to-transparent text-white p-2 h-[300px] w-[50px] hover:to-white/40 transition duration-300"

      >
        →
      </button>
    </div>
  );
}
