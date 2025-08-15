'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="fixed sm:bottom-10 sm:right-10 bottom-3 right-3 z-50">
            <div className="flex flex-col items-end">
                {/* Contact Icon (Trigger Hover) */}
                <div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="cursor-pointer relative"
                >
                    <Link href="/contact" className="z-50">
                        <Image
                            src="/svg/contact.svg"
                            alt="Contact"
                            width={70}
                            height={70}
                            className="transition-transform duration-300 hover:scale-110 sm:w-auto w-12"
                        />
                    </Link>

                    {/* Expandable Social Icons */}
                    <div
                        className={`absolute bottom-full right-0 flex flex-col items-end gap-2 transition-all duration-500 ease-in-out overflow-hidden 
              ${isHovered ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                        <Link href="https://wa.me/+918943963650">
                            <Image
                                src="/svg/Whatsapp.svg"
                                alt="Whatsapp"
                                width={70}
                                height={70}
                                className="transition-transform duration-300 hover:scale-110"
                            />
                        </Link>
                        {/*<Link href="/Linkedin">
                            <Image
                                src="/svg/LinkedIn.svg"
                                alt="LinkedIn"
                                width={70}
                                height={70}
                                className="transition-transform duration-300 hover:scale-110"
                            />
                        </Link>*/}
                        <Link href="https://www.instagram.com/helekin.tech/">
                            <Image
                                src="/svg/Instagram.svg"
                                alt="Instagram"
                                width={70}
                                height={70}
                                className="transition-transform duration-300 hover:scale-110"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
