'use client';

import Link from 'next/link';
import Accordion from '@/components/GenericAccordion';
import { motion } from 'framer-motion';
import Loading from '../app/(root)/loading';
import { useEffect, useState } from 'react';

// Define types for FAQ and Service
type FAQItem = {
  question: string;
  answer: string;
};

type ServiceData = {
  background: string;
  title: string;
  desc: string;
  'about-title': string;
  'about-desc': string;
  'whatweoffer-images': string[];
  'featured-projects-desc': string;
  'featured-projects-images': string[];
  'approach-title': string;
  'approach-desc': string;
  'service-FAQ': FAQItem[];
  consultQN: string;
  'consult-answer': string;
};

export default function MotionServicePage({ service }: { service: ServiceData }) {
  const [isLoading, setIsLoading] = useState(true);

  // Preload all images
  useEffect(() => {
    const imageUrls: string[] = [
      service.background,
      ...(service['whatweoffer-images'] || []),
      ...(service['featured-projects-images'] || []),
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
        // still count errored images so loading doesn't hang forever
        loadedCount++;
        if (loadedCount === totalImages) {
          setIsLoading(false);
        }
      };
    });
  }, [service]);

  if (isLoading) {
    return <Loading />;
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div
        className="background relative h-[90vh] sm:h-180 w-full bg-cover bg-center bg-no-repeat z-20 flex items-center"
        style={{ backgroundImage: `url(${service.background})` }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0 " />
        <div className="relative z-10 text-white w-full px-6 sm:px-10 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            variants={fadeInUp}
            className="title mb-4 flex flex-col sm:flex-row gap-3"
          >
            <h1 className="text-4xl sm:text-6xl font-light font-poppins">
              {service.title.split(' ')[0]}
            </h1>
            <h1 className="text-4xl sm:text-6xl text-red-700 font-light font-poppins">
              {service.title.split(' ').slice(1).join(' ')}
            </h1>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.1 }}
            variants={fadeInUp}
            className="desc w-full sm:w-3/4"
          >
            <p className="text-white/80 text-base sm:text-lg font-light font-poppins mt-4 sm:mt-6">
              {service.desc}
            </p>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <div className="relative z-10 w-full bg-[#030303] border-b-1 border-[#F2F2F2]/20 border-t-1 py-14 px-6 sm:px-10 flex flex-col items-center justify-center text-white">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
          className="about-title text-red-700 text-3xl sm:text-4xl font-poppins font-medium text-center"
        >
          {service['about-title']}
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.1 }}
          variants={fadeInUp}
          className="about-desc text-white/80 text-base sm:text-xl font-poppins font-light mt-6 sm:mt-10 text-center"
        >
          {service['about-desc']}
        </motion.p>
      </div>

      {/* Our Approach */}
      <div className="relative z-10 w-screen mx-auto bg-[#030303] px-6 sm:px-10 py-20 md:pt-50">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-start justify-between gap-10 sm:gap-20">
          <div className="w-full sm:w-1/3 flex flex-col">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              variants={fadeInUp}
              className="text-red-700 text-3xl sm:text-4xl font-poppins font-medium text-left"
            >
              {service['approach-title']}
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.1 }}
              variants={fadeInUp}
              className="text-white/80 text-base sm:text-xl font-poppins font-light mt-6 sm:mt-10 text-left"
            >
              {service['approach-desc']}
            </motion.p>
          </div>

          {/* FAQ */}
          <div className="w-full sm:w-2/3 flex flex-col items-start">
            <div className="flex flex-col items-center sm:items-start mt-2 gap-4 w-full">
              {service['service-FAQ'].map((faq, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  variants={fadeInUp}
                  className="w-full"
                >
                  <Accordion question={faq.question} answer={faq.answer} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 w-full bg-[#030303] py-20 px-6 sm:px-10 text-center">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
          className="font-poppins text-3xl sm:text-4xl text-white mb-4"
        >
          {service.consultQN}
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.1 }}
          variants={fadeInUp}
          className="text-white/50 mb-8 max-w-2xl mx-auto text-base sm:text-lg"
        >
          {service['consult-answer']}
        </motion.p>
        <Link href="/contact">
          <motion.button
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeInUp}
            className="bg-red-900 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg hover:bg-white hover:text-red-900 transition-colors duration-300 text-base sm:text-lg cursor-pointer"
          >
            Schedule a Consultation
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
