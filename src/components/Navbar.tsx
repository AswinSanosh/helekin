'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import {
  Home,
  Users,
  Settings,
  Box,
  Headphones,
} from 'lucide-react' // icons package

export default function Navbar() {
  const pathname = usePathname()
  const [hidden, setHidden] = useState(false)

  const lastY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY > lastY.current && currentY > 10) {
        setHidden(true)
      } else if (currentY < lastY.current) {
        setHidden(false)
      }
      lastY.current = currentY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/about', icon: Users, label: 'About Us' },
    { href: '/services', icon: Settings, label: 'Services' },
    { href: '/products', icon: Box, label: 'Products' },
    { href: '/contact', icon: Headphones, label: 'Contact Us' },
  ]

  return (
    <>
      {/* Mobile Top Logo */}
      <div className="xl:hidden absolute top-0 left-0 w-full h-[50px] z-50 flex items-center justify-start px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/svg/logowithname.svg"
            alt="logo"
            width={110}
            height={40}
            priority
            className="md:h-7 w-auto h-5"
          />
        </Link>
      </div>

      {/* Mobile Bottom Navbar */}
      <div className="xl:hidden fixed bottom-2 left-1/2 -translate-x-1/2 w-[97vw] h-[55px] z-50 bg-[#070707]/70 border border-[#F2F2F2]/10 backdrop-blur-md flex items-center justify-around px-4 shadow-md rounded-md">
        {navLinks.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center justify-center transition ${
              pathname === href ? 'text-red-500' : 'text-white hover:text-red-400'
            }`}
          >
            <Icon size={27} strokeWidth={1.8} />
          </Link>
        ))}
      </div>

      {/* Desktop Nav (unchanged) */}
      <div className="flex justify-between absolute top-0 left-0 w-full z-40">
        <div className="max-w-[300px] w-full h-auto absolute md:top-10 md:left-10 top-8 left-3 xl:flex hidden">
          <Link href="/" className="flex items-center gap-1 md:gap-3">
            <Image
              src="/images/logowrite.png"
              alt="logo"
              width={100}
              height={100}
              className="lg:h-9 w-auto h-6"
            />
          </Link>
        </div>

        <nav
          className={`hidden xl:flex fixed top-8 left-1/2 -translate-x-1/2 rounded-lg
            text-white text-lg font-poppins font-light z-50
            transition-transform duration-300 ease-in-out
            ${hidden ? '-translate-y-50 ' : 'translate-y-0'}
          `}
        >
          <div
            className="z-20 top-8 py-2 px-5 shadow-lg shadow-[#030303]/30 backdrop-blur-2xl
              flex items-center justify-between gap-16
              font-poppins text-white text-lg font-light
              bg-[#070707]/30 border border-[#F2F2F2]/10 rounded-md"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`no-underline transition hover:text-white/60 ${
                  pathname === href ? 'text-red-500 font-medium' : 'text-white'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  )
}
