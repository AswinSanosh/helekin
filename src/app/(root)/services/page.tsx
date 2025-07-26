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
            <div className="relative h-180 w-full bg-[url('/svg/hero.svg')] bg-cover bg-center bg-no-repeat z-20 flex items-center">
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0" />
                <div className="relative z-10 text-white w-full px-10 max-w-4xl">

                    <div className="mb-4 flex flex-row gap-3">

                        <h1 className="text-white text-6xl font-extralight font-poppins">Crafting</h1>
                        <h1 className="text-red-700 text-6xl font-light font-poppins px-4">Experiences</h1>
                    </div>
                    <h1 className="text-white text-6xl font-extralight font-poppins">That Evoke Emotions</h1>
                    <div className="w-3/4">
                        <p className="text-white/60 text-lg font-extralight font-poppins mt-4">
                            End to end solution for our customers tailored to their needs is what makes us different. Not only it saves cost, but makes it easy for the customers to engage with our solutions.
                        </p>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="relative z-0 w-full flex flex-col bg-[url('/images/fafa.png')] bg-cover bg-center bg-no-repeat px-6 pb-30">
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />

                <div className='flex justify-between items-baseline z-20'>
                    <div className="relative z-10 w-full max-w-screen px-6 mx-auto mt-20">
                        <h1 className="text-3xl font-poppins font-semibold text-red-700 mb-2">Our Services</h1>
                    </div>
                    <div className="relative w-full max-w-sm mr-20">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Image src="/images/search.svg" width={20} height={20} alt="Search" />
                        </div>
                        <input
                            type="text"
                            className="w-full text-center pl-10 pr-4 py-2 bg-white/20 rounded-md focus:outline-none focus:border-1 focus:border-red-700"
                            placeholder="Search Services"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
                {searchTerm.trim() && (
                    <div className="relative z-10 w-full max-w-screen px-6 mx-auto mt-16">
                        <h1 className="font-poppins text-2xl text-white mb-4">Related Services</h1>
                        <div className="grid gap-6 md:grid-cols-[repeat(auto-fit,minmax(300px,100px))]">
                            {renderServiceCards(
                                [...Softservices, ...Hardservices, ...ThreeDservices].filter((service) =>
                                    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                    service.desc.toLowerCase().includes(searchTerm.toLowerCase())
                                ),
                                'search'
                            )}
                        </div>
                    </div>
                )}
                {!searchTerm.trim() && (
                    <>
                        {/* Software Section */}
                        <div className="relative z-10 w-full max-w-screen px-6 mx-auto mt-16">
                            <h1 className="font-poppins text-2xl text-white mb-4">Software Services</h1>
                            <div className="grid gap-6 md:grid-cols-[repeat(auto-fit,minmax(300px,100px))]">
                                {renderServiceCards(Softservices, 'software')}
                            </div>
                        </div>

                        {/* Hardware Section */}
                        <div className="relative z-10 w-full max-w-screen px-6 mx-auto mt-16">
                            <h1 className="font-poppins text-2xl text-white mb-4">Electronics and Hardware Services</h1>
                            <div className="grid gap-6 md:grid-cols-[repeat(auto-fit,minmax(300px,100px))]">
                                {renderServiceCards(Hardservices, 'hardware')}
                            </div>
                        </div>

                        {/* 3D Printing Section */}
                        <div className="relative z-10 w-full max-w-screen px-6 mx-auto mt-16 mb-20">
                            <h1 className="font-poppins text-2xl text-white mb-4">3D Printing Services</h1>
                            <div className="grid gap-6 md:grid-cols-[repeat(auto-fit,minmax(300px,100px))]">
                                {renderServiceCards(ThreeDservices, 'threed')}
                            </div>
                        </div>
                    </>
                )}

            </div>
        </div>
    );
}
