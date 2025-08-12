'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const pathname = usePathname()
  const [hidden, setHidden] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

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
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'Contact Us' },
  ]

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="xl:hidden fixed top-0 left-0 w-full h-[50px] z-50 bg-[#070707] border-b border-[#F2F2F2]/20 backdrop-blur-md flex items-center justify-between px-5 py-4 shadow-md">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logowrite.png"
            alt="logo"
            width={110}
            height={40}
            priority
            className="h-8 w-auto"
          />
        </Link>
        <button
          onClick={() => setIsSidebarOpen(true)}
          aria-label="Open menu"
          className="p-2 rounded-md hover:bg-white/10 transition"
        >
          <Image
            src="/svg/burger.svg"
            alt="menu"
            width={28}
            height={28}
            priority
            className="w-7 h-7"
          />
        </button>
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
              className="lg:h-10 w-auto h-6"
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

      {/* Mobile Sidebar */}
      <div
        className={`fixed xl:hidden top-0 right-0 h-full w-72 max-w-[85%] bg-[#030303]/95 backdrop-blur-xl shadow-lg z-50 transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-md hover:bg-white/10 transition"
          >
            <Image
              src="/svg/close.svg"
              alt="close"
              width={24}
              height={24}
              priority
            />
          </button>
        </div>

        {/* Links */}
        <div className="mt-4 flex flex-col gap-6 px-6 text-white font-poppins font-medium text-lg overflow-y-auto">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsSidebarOpen(false)}
              className={`transition ${
                pathname === href ? 'text-red-500' : 'hover:text-red-400'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
