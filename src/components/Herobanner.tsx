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
    <div className="relative sm:h-screen h-3/4 w-full bg-[url('/svg/hero.svg')] bg-cover bg-center bg-no-repeat z-20 flex items-center">
      {/* Tint Overlay */}
      <div className='h-screen w-full z-0'>
        <div className="text-left p-6 md:p-10 text-white absolute  bottom-0 md:bottom-10 left-0 md:left-10 max-w-full">
          <div className="relative">
            <h1 className="text-white heading-extralight whitespace-nowrap">
              Digital acceleration service
            </h1>

            <div className="flex flex-nowrap md:flex-nowrap max-w-[50vw] max-h-[50vh] whitespace-nowrap">
              <h1 className="text-white heading-extralight mb-4 flex-shrink-0">
                for
              </h1>
              <h1 className="text-red-700 heading-extralight mb-4 pl-3 flex-shrink-0">
                {displayedText}
              </h1>
            </div>
          </div>
          <h1 className="text-white subheading-extralight mt-4 mb-4">
            Design. Development. Consulting.
          </h1>

          <h1 className="text-white para-bold mt-8 mb-4 hidden sm:block">
            Why Choose Us?
          </h1>

          <div className="sm:flex flex-col md:flex-row gap-5 mt-5 hidden">
            <div className="bg-white/20 rounded-lg h-auto md:h-[150px] w-full md:w-[250px] shadow-lg shadow-black/30 p-3">
              <h1 className="text-white para-semibold">
                Built for Startups
              </h1>
              <p className="text-white subpara-light mt-1">
                We understand the unique challenges startups face and tailor our solutions to help you succeed.
              </p>
            </div>

            <div className="bg-white/20 rounded-lg h-auto md:h-[150px] w-full md:w-[250px] shadow-lg shadow-black/30 p-3">
              <h1 className="text-white para-semibold">
                Expert Team
              </h1>
              <p className="text-white subpara-light mt-1">
                Our team of experts brings years of experience in digital acceleration.
              </p>
            </div>

            <div className="bg-white/20 rounded-lg h-auto md:h-[150px] w-full md:w-[250px] shadow-lg shadow-black/30 p-3">
              <h1 className="text-white para-semibold">
                End-to-End Service
              </h1>
              <p className="text-white subpara-light mt-1">
                We provide customized solutions that fit your specific needs and goals.
              </p>
            </div>
          </div>
          <div className='flex justify-center md:justify-start'>
            <button className="bg-red-800 rounded-xl w-3/4 md:w-60 p-4 text-xl md:text-3xl mt-8 hover:cursor-pointer hover:bg-white hover:text-red-700 duration-300 font-poppins">
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
