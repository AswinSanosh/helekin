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
    <div className="relative h-screen w-full bg-[url('/svg/hero.svg')] bg-cover bg-center bg-no-repeat z-20 flex items-center">
      {/* Tint Overlay */}
      <div className='h-screen w-full z-0'>
        <div className="text-left p-6 md:p-10 text-white absolute  bottom-0 md:bottom-10 left-0 md:left-10 max-w-full">
          <h1 className="text-white heading-extralight">
            Digital acceleration service
          </h1>

          <div className="flex flex-wrap md:flex-nowrap max-w-[50vw] max-h-[50vh]">
            <h1 className="text-white heading-extralight mb-4">
              for
            </h1>
            <h1 className="text-red-700 heading-extralight mb-4 pl-3">
              {displayedText}
            </h1>
          </div>


          <h1 className="text-white subheading-extralight mt-4 mb-4">
            Design. Development. Consulting.
          </h1>

          <h1 className="text-white subheading-bold mt-8 mb-4">
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
