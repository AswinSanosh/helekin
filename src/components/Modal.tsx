'use client';

import { Dialog } from '@headlessui/react';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import { Service } from '../types/Service'; // ✅ Use your actual import path

interface Props {
    isOpen: boolean;
    onClose: () => void;
    service: Service | null;
}

export default function ServiceModal({ isOpen, onClose, service }: Props) {
    if (!service) return null;

    const { title, desc, background, icon, link } = service;

    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50">
            {/* Backdrop */}
            <div className="fixed inset-0 bg-[#030303]/50 backdrop-blur-sm" aria-hidden="true" />

            {/* Modal */}
            <div className="fixed inset-0 flex items-center justify-center p-4 m-auto h-full w-full">
                <Dialog.Panel className="ms:w-[50vw] w-[50vw] md:h-[75vh] h-[75vh] rounded-xl bg-[#030303] text-white shadow-xl overflow-hidden relative">
                    {/* Image Background */}
                    <div className="relative w-full h-1/3">
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
                        <div className="absolute top-4 left-4 bg-[#080808] p-2 rounded-full z-20">
                            <Image src={icon} width={24} height={24} alt={`${title} Icon`} />
                        </div>
                    </div>


                    {/* Text Content */}
                    <div className="p-6 space-y-3 m-6">
                        <Dialog.Title className="text-red-700 title-bold mb-8 ">{title}</Dialog.Title>
                        <p className="text-gray-300 para-base">{desc}</p>

                        <div className="flex justify-between items-center pt-4">
                            {/* Placeholder icons */}
                            <div className="flex gap-2">
                                <Image src="/icons/grid.png" alt="grid" width={20} height={20} />
                                <Image src="/icons/ai.png" alt="ai" width={20} height={20} />
                            </div>
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
