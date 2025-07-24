'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'

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
           // check if at top
        lastY.current = currentY
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])

  useEffect(() => {
    const handleScroll = () => {  
      setIsAtTop(window.scrollY >= window.innerHeight ? false : true) // adjust threshold as needed
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
      {/* Main Nav Bar */}
      <div className="flex justify-between absolute top-0 left-0 w-full z-50">
        <Link href="/" className="flex gap-3 left-10 z-20 relative items-center">
          <img src="/images/logo.png" alt="logo" className="z-20 relative top-8 left-5 h-auto w-9" />
          <img src="/svg/helekinlogo.svg" alt="logo-text" className="z-20 relative top-8 left-5 h-auto w-32" />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className={`
            hidden xl:flex fixed top-8 left-1/2 -translate-x-1/2 backdrop-blur-xl rounded-lg
            text-white text-lg font-poppins font-light z-50
            transition-transform duration-300 ease-in-out
            ${hidden ? '-translate-y-50 ' : 'translate-y-0'}
          `}
        >
          <div
            className={`
              z-20 top-8 py-2 px-5 shadow-lg shadow-black/30 rounded-lg
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
                className={`no-underline transition hover:text-white/60 ${
                  pathname === href ? 'text-red-500 font-medium font-poppins' : 'text-white'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="xl:hidden z-30 absolute right-5 top-8">
          <button onClick={() => setIsSidebarOpen(true)}>
            <img src="/images/menu.svg" alt="menu" className="w-12" />
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed xl:hidden top-0 right-0 h-full w-64 bg-white/13 backdrop-blur-xs shadow-lg shadow-black/30 z-50 transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Close Icon */}
        <div className="absolute top-8 right-5 z-50">
          <button onClick={() => setIsSidebarOpen(false)}>
            <img src="/images/close.svg" alt="close" className="w-12" />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="mt-24 flex flex-col gap-6 px-6 text-black font-poppins font-regular text-lg xl:hidden">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsSidebarOpen(false)}
              className={`no-underline transition ${
                pathname === href ? 'text-red-700 font-medium' : 'text-black'
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
