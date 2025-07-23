'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link';

export default function Hero() {
  const fullText = 'business growth.'
  const [displayedText, setDisplayedText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index])
        setIndex((prev) => prev + 1)
      }, 50) // speed
      return () => clearTimeout(timeout)
    }
  }, [index, fullText])

  return (

    <div className="w-full h-full bg-[url('/svg/hero.svg')] bg-cover bg-center bg-no-repeat">
      <div className="text-left p-10 text-white bottom-10 absolute left-10 ">
        {/*---------------------------*/}

        <h1 className="text-white text-6xl font-extralight mb-4 font-poppins">Digital accelaration service</h1>
        <div className="flex">
          <h1 className="text-white text-6xl font-extralight font-poppins mb-4">for </h1>
          <h1 className="text-red-700 text-6xl font-light font-poppins mb-4 pl-3">
            {displayedText}
          </h1>
        </div>
        <h1 className="text-white text-2xl font-extralight mt-5 mb-4 font-poppins">Design.Development.Consulting.</h1>
        <h1 className="text-white text-xl font-bold mt-10 mb-4 font-poppins">Why Choose Us?</h1>
        <div className='flex gap-5 mt-5'>
          <div className='bg-white/20 rounded-lg h-[150px] w-[250px] shadow-lg shadow-black/30 p-3 flex flex-col'>
            <h1 className='text-white text-lg font-semibold font-poppins'>Built for Startups</h1>
            <p className='text-white text-sm font-light font-poppins mt-2'>We understand the unique challenges startups face and tailor our solutions to help you succeed.</p>
          </div>
          <div className='bg-white/20 rounded-lg h-[150px] w-[250px] shadow-lg shadow-black/30 p-3 flex flex-col'>
            <h1 className='text-white text-lg font-semibold font-poppins '>Expert Team</h1>
            <p className='text-white text-sm font-light font-poppins mt-2'>Our team of experts brings years of experience in digital acceleration.</p>
          </div>
          <div className='bg-white/20 rounded-lg h-[150px] w-[250px] shadow-lg shadow-black/30 p-3 flex flex-col'>
            <h1 className='text-white text-lg font-semibold font-poppins'>End-to-End Service</h1>
            <p className='text-white text-sm font-light font-poppins mt-2'>We provide customized solutions that fit your specific needs and goals.</p>
          </div>
        </div>
        <button className=' bg-red-800 rounded-xl w-60 p-5 text-3xl mt-10 hover:cursor-pointer hover:bg-white hover:text-red-700 duration-300 font-poppins'>Get Quote</button>
        {/*--------------------------*/}
      </div>
      <div className="fixed bottom-10 right-10 group z-50">
        <div className="flex flex-col-reverse gap-0.5">
          
          {/* Contact (hover trigger) */}
          <Link href="/contact">
            <img src="/svg/contact.svg" alt="Contact" />
          </Link>

          {/* Icons that appear when hovering the group (including Contact or others) */}
          <Link href="/Whatsapp">
            <img
              src="/svg/Whatsapp.svg"
              alt="Whatsapp"
              className="transition-all duration-200 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
            />
          </Link>
          <Link href="/Linkedin">
            <img
              src="/svg/LinkedIn.svg"
              alt="LinkedIn"
              className="transition-all duration-400 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
            />
          </Link>
          <Link href="/instagram">
            <img
              src="/svg/Instagram.svg"
              alt="Instagram"
              className="transition-all duration-600 translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
            />
          </Link>
          
        </div>
      </div>
    </div>
  );
}
