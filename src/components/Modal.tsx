'use client';

import { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import { Service } from '../types/Service'; // ✅ Use your actual import path
import Loading from '../app/(root)/loading'; // ✅ Import your Loading component

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

        imageSources.forEach(src => {
            const img = new window.Image();
            img.src = src;
            img.onload = handleLoad;
            img.onerror = handleLoad; // fail-safe in case an image fails
        });

    }, [service]);

    if (!service) return null;

    const { title, desc, background, icon, link } = service;

    // Show loading until images are fully loaded
    if (!isImagesLoaded) {
        return <Loading />;
    }

    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50">
            {/* Backdrop */}
            <div className="fixed inset-0 bg-[#030303]/50 backdrop-blur-sm" aria-hidden="true" />

            {/* Modal */}
            <div className="fixed inset-0 flex items-center justify-center p-4 m-auto h-full w-full">
                <Dialog.Panel className="ms:w-[50vw] w-[50vw] md:h-[75vh] h-[50vh] rounded-md border border-[#F2F2F2]/20 bg-[#030303] text-white shadow-xl overflow-hidden relative">
                    {/* Image Background */}
                    <div className="relative w-full md:h-2/4 h-1/4">
                        {/* Background Image */}
                        <Image
                            src={background}
                            alt={`${title} Background`}
                            fill
                            className="object-cover"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/30 to-[#030303] z-10" />

                        {/* Icon on top */}
                        <div className="absolute top-4 left-4 bg-[#a00000] p-3 rounded-full z-20 m-auto border-white/20 border">
                            <Image src={icon} width={36} height={36} alt={`${title} Icon`} className='h-8 w-8 '/>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="p-6 space-y-3 m-6 h-2/4">
                        <Dialog.Title className="text-red-700 text-sm md:text-3xl font-bold mb-8 ">{title}</Dialog.Title>
                        <p className="text-gray-300 para-base">{desc}</p>

                        <div className="flex justify-between items-center pt-4">
                            <Link href={link}>
                                <button className="bg-red-700 subpara-base absolute bottom-5 right-5 hover:bg-white hover:text-red-700 transition-colors duration-300 text-white text-sm px-4 py-2 rounded-md">
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-4xl font-extrabold text-white transition-colors duration-300 hover:text-white z-50"
                    >
                        <AiOutlineClose size={20} />
                    </button>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
}
