'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const pathname = usePathname()
  const [hidden, setHidden] = useState(false)
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
      {/* Main Nav Bar Container */}
      <div className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-2xl text-white xl:hidden">
        {/* Top section with logo */}
        <div className="flex items-center justify-between px-4 py-3 shadow shadow-black/30">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logowrite.png"
              alt="logo"
              width={100}
              height={100}
              loading="lazy"
              className="h-6 w-auto"
            />
          </Link>
        </div>

        {/* Mobile Nav Links */}
        {/* Mobile Nav Links */}
        <nav className="flex flex-wrap justify-center gap-4 px-4 py-2 text-sm font-poppins font-light border-t border-white/10 xl:hidden">
          {navLinks.map(({ href, label }) => (
            label === 'Contact Us' ? null : (
              <Link
                key={href}
                href={href}
                className={`no-underline transition hover:text-white/60 ${pathname === href ? 'text-red-500 font-medium' : 'text-white'
                  }`}
              >
                {label}
              </Link>
            )
          ))}
        </nav>
      </div>

      {/* Desktop Nav (unchanged) */}
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
            className={`z-20 top-8 py-2 px-5 shadow-lg shadow-black/30 rounded-lg backdrop-blur-2xl
              flex items-center justify-between gap-16
              font-poppins text-white text-lg font-light
              text-center whitespace-nowrap flex-nowrap
              transition-colors duration-300
              ${isAtTop ? 'bg-white/5' : 'bg-black/30'}
            `}
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`no-underline transition hover:text-white/60 ${pathname === href ? 'text-red-500 font-medium font-poppins' : 'text-white'}`}
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
