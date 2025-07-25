'use client';

import { Dialog } from '@headlessui/react';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';

type Service = {
    title: string;
    desc: string;
    background: string;
    icon: string;
    link: string;
};

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
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />

            {/* Modal */}
            <div className="fixed inset-0 flex items-center justify-center p-4 m-auto">
                <Dialog.Panel className="w-1/2 h-2/3 rounded-xl bg-black text-white shadow-xl overflow-hidden relative">

                    {/* Image Background */}
                    <div className="relative w-full h-1/2">
                        {/* Background Image */}
                        <Image
                            src={background}
                            alt={`${title} Background`}
                            fill
                            className="object-cover"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black z-10" />

                        {/* Icon on top */}
                        <div className="absolute top-4 left-4 bg-[#080808] p-2 rounded-full z-20">
                            <Image src={icon} width={24} height={24} alt={`${title} Icon`} />
                        </div>
                    </div>


                    {/* Text Content */}
                    <div className="p-6 space-y-3 m-6">
                        <Dialog.Title className="text-red-700 text-4xl font-bold mb-8 font-poppins ">{title}</Dialog.Title>
                        <p className="text-gray-300 text-lg font-poppins font-regular">{desc}</p>

                        <div className="flex justify-between items-center pt-4">
                            {/* Placeholder icons */}
                            <div className="flex gap-2">
                                <Image src="/icons/grid.png" alt="grid" width={20} height={20} />
                                <Image src="/icons/ai.png" alt="ai" width={20} height={20} />
                            </div>
                            <Link href={link}>
                                <button className="bg-red-700 hover:bg-white hover:text-red-700 transition-colors duration-300 text-white text-sm px-4 py-2 rounded-md">
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
