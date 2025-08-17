'use client';

import { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import { Service } from '../types/Service';
import Loading from '../app/(root)/loading';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
}

export default function ServiceModal({ isOpen, onClose, service }: Props) {
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);

  useEffect(() => {
    if (!service) return;

    const imageSources = [service.background, service.icon];
    let loadedCount = 0;

    const handleLoad = () => {
      loadedCount++;
      if (loadedCount === imageSources.length) {
        setIsImagesLoaded(true);
      }
    };

    imageSources.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = handleLoad;
      img.onerror = handleLoad;
    });
  }, [service]);

  if (!service) return null;

  const { title, desc, background, icon, link } = service;

  if (!isImagesLoaded) {
    return <Loading />;
  }

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#030303]/50 backdrop-blur-sm"
        aria-hidden="true"
      />

      {/* Modal wrapper */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel
          className="
            relative rounded-md border border-[#F2F2F2]/20 bg-[#030303] text-white shadow-xl overflow-hidden
            w-[90vw] md:w-[50vw] 
            h-[50vh] md:h-[75vh]
          "
        >
          {/* Background Image */}
          <div className="relative w-full h-2/5 md:h-2/4">
            <Image
              src={background}
              alt={`${title} Background`}
              fill
              className="object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/30 to-[#030303] z-10" />
            {/* Icon */}
            <div className="absolute top-3 left-3 bg-[#a00000] p-2 md:p-3 rounded-full z-20 border border-white/20">
              <Image
                src={icon}
                width={32}
                height={32}
                alt={`${title} Icon`}
                className="h-6 w-6 md:h-8 md:w-8"
              />
            </div>
          </div>

          {/* Content */}
          <div className="relative p-4 md:p-6 space-y-2 md:space-y-4 h-3/5 md:h-2/4 overflow-auto">
            <Dialog.Title className="text-red-700 text-base md:text-3xl font-bold">
              {title}
            </Dialog.Title>
            <p className="text-gray-300 text-xs md:text-base leading-relaxed">
              {desc}
            </p>

            <div className="flex justify-end items-center pt-2 md:pt-4">
              <Link href={link}>
                <button className="bg-red-700 hover:bg-white hover:text-red-700 transition-colors duration-300 text-white text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-md">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-white hover:text-red-500 transition-colors duration-300 z-50"
          >
            <AiOutlineClose size={24} />
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
