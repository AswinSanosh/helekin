'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const pathname = usePathname()
  const [hidden, setHidden] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)

  const lastY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY > lastY.current && currentY > 10) {
        setHidden(true) // scroll down
      } else if (currentY < lastY.current) {
        setHidden(false) // scroll up
      }
      lastY.current = currentY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY >= window.innerHeight ? false : true)
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
      {/* Mobile Top Bar (Logo + Burger) */}
      <div className="xl:hidden fixed top-0 left-0 w-full z-50 bg-[#030303] flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logowrite.png"
            alt="logo"
            width={80}
            height={80}
            loading="lazy"
            className="h-6 w-auto"
          />
        </Link>
        <button onClick={() => setIsSidebarOpen(true)}>
          <Image
            width={24}
            height={24}
            loading="lazy"
            src="/svg/burger.svg"
            alt="menu"
            className={`w-6 h-6 transition ${isSidebarOpen ? 'text-red-700 font-medium' : 'text-white'}`}
          />
        </button>
      </div>

      {/* Desktop Nav */}
      <div className="flex justify-between absolute top-0 left-0 w-full z-40">
        <div className="max-w-[300px] w-full h-auto absolute md:top-10 md:left-10 top-8 left-3 xl:flex hidden">
          <Link href="/" className="flex items-center gap-1 md:gap-3 text-center align-middle">
            <Image
              src="/images/logowrite.png"
              alt="logo"
              width={100}
              height={100}
              loading="lazy"
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
            className={`z-20 top-8 py-2 px-5 shadow-lg shadow-[#030303]/30 rounded-lg backdrop-blur-sm
              flex items-center justify-between gap-16
              font-poppins text-white text-lg font-light
              text-center whitespace-nowrap flex-nowrap
              transition-colors duration-300
              ${isAtTop ? 'bg-white/1' : 'bg-[#030303]/30'}
            `}
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`no-underline transition hover:text-white/60 ${
                  pathname === href ? 'text-red-500 font-medium font-poppins' : 'text-white'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed xl:hidden top-0 right-0 h-full w-64 bg-[#030303]/20 backdrop-blur-xl shadow-lg shadow-[#030303]/30 z-50 transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Close Icon */}
        <div className="fixed top-4 right-4 z-50">
          <button onClick={() => setIsSidebarOpen(false)}>
            <Image width={10} height={10} loading="lazy" src="/svg/close.svg" alt="close" className="w-8 h-6" />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="mt-24 flex flex-col gap-6 px-6 text-white font-poppins font-regular text-lg xl:hidden">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsSidebarOpen(false)}
              className={`no-underline transition ${
                pathname === href ? 'text-red-700 font-medium' : 'text-white'
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
