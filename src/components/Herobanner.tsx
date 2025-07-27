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
    <div className="relative md:h-screen min-h-[100vh] w-full bg-[url('/svg/hero.svg')] bg-cover bg-center bg-no-repeat z-20 flex items-end justify-start overflow-x-hidden pt-20">
      <div className="text-left p-10 px-5 md:px-10 text-white flex flex-col justify-end items-start w-full sm:pl-10 h-full">
        <div className="relative">
          <h1 className="text-white heading-light max-heading-light-lg">
            Digital acceleration services
          </h1>

          <div className="flex gap-2 sm:gap-3 justify-bottom sm:flex-nowrap max-w-[90vw] sm:max-w-[50vw] max-h-[50vh]">
            <h1 className="text-white heading-light max-heading-light-lg mb-4 flex-shrink-0">
              for
            </h1>
            <h1 className="text-red-700 heading-light max-heading-light-lg mb-4 flex-shrink-0">
              {displayedText}
            </h1>
          </div>
        </div>

        <h1 className="text-white subheading-extralight max-subheading-extralight-lg mb-4">
          Design. Development. Consulting.
        </h1>

        <h1 className="text-white para-bold max-para-bold-md mt-5 mb-4">
          Why Choose Us?
        </h1>

        <div className="flex flex-col md:flex-row gap-5 mt-3">
          {[
            {
              title: 'Built for Startups',
              desc: 'We understand the unique challenges startups face and tailor our solutions to help you succeed.',
            },
            {
              title: 'Expert Team',
              desc: 'Our team of experts brings years of experience in digital acceleration.',
            },
            {
              title: 'End-to-End Service',
              desc: 'We provide customized solutions that fit your specific needs and goals.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 rounded-lg h-auto md:h-[140px] w-full md:w-[250px] shadow-lg shadow-black/30 backdrop-blur-sm p-3"
            >
              <h1 className="text-white para-semibold max-para-semibold-md">{item.title}</h1>
              <p className="text-white subpara-light max-subpara-light-md mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center md:justify-start w-full items-center text-center">
          <button className="bg-red-800 rounded-xl w-[80%] md:w-50 p-4 subheading-light md:text-3xl mt-8 hover:cursor-pointer hover:bg-white hover:text-red-700 duration-300 font-poppins mx-auto md:mx-0">
            Get Quote
          </button>
        </div>
      </div>
    </div>
  )
}
