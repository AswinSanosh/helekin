'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const fullText = 'business growth.'
  const [displayedText, setDisplayedText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index])
        setIndex((prev) => prev + 1)
      }, 50)
      return () => clearTimeout(timeout)
    }
  }, [index, fullText])

  return (
    <div className="w-full min-h-[500px] h-screen bg-[url('/svg/hero.svg')] bg-cover bg-center bg-no-repeat">
      {/*<div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/30 to-black/50 z-0 h-full/4" />*/}
      <div className='h-1/3 w-1/3'>
        <div className="text-left p-6 md:p-10 text-white absolute bottom-0 md:bottom-10 left-0 md:left-10 max-w-full">
          <h1 className="text-white text-4xl md:text-6xl font-extralight mb-4 font-poppins">
            Digital acceleration service
          </h1>

          <div className="flex flex-wrap md:flex-nowrap">
            <h1 className="text-white text-4xl md:text-6xl font-extralight font-poppins mb-4">
              for
            </h1>
            <h1 className="text-red-700 text-4xl md:text-6xl font-light font-poppins mb-4 pl-3">
              {displayedText}
            </h1>
          </div>

          <h1 className="text-white text-xl md:text-2xl font-extralight mt-4 mb-4 font-poppins">
            Design. Development. Consulting.
          </h1>

          <h1 className="text-white text-lg md:text-xl font-bold mt-8 mb-4 font-poppins">
            Why Choose Us?
          </h1>

          <div className="flex flex-col md:flex-row gap-5 mt-5">
            <div className="bg-white/20 rounded-lg h-auto md:h-[150px] w-full md:w-[250px] shadow-lg shadow-black/30 p-4">
              <h1 className="text-white text-base md:text-lg font-semibold font-poppins">
                Built for Startups
              </h1>
              <p className="text-white text-sm font-light font-poppins mt-2">
                We understand the unique challenges startups face and tailor our solutions to help you succeed.
              </p>
            </div>

            <div className="bg-white/20 rounded-lg h-auto md:h-[150px] w-full md:w-[250px] shadow-lg shadow-black/30 p-4">
              <h1 className="text-white text-base md:text-lg font-semibold font-poppins">
                Expert Team
              </h1>
              <p className="text-white text-sm font-light font-poppins mt-2">
                Our team of experts brings years of experience in digital acceleration.
              </p>
            </div>

            <div className="bg-white/20 rounded-lg h-auto md:h-[150px] w-full md:w-[250px] shadow-lg shadow-black/30 p-4">
              <h1 className="text-white text-base md:text-lg font-semibold font-poppins">
                End-to-End Service
              </h1>
              <p className="text-white text-sm font-light font-poppins mt-2">
                We provide customized solutions that fit your specific needs and goals.
              </p>
            </div>
          </div>

          <button className="bg-red-800 rounded-xl w-full md:w-60 p-4 text-xl md:text-3xl mt-8 hover:cursor-pointer hover:bg-white hover:text-red-700 duration-300 font-poppins">
            Get Quote
          </button>
        </div>
      </div>
    </div>
  )
}
