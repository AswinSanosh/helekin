'use client'

import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

type AccordionProps = {
  question: string
  answer: string
}

export default function Accordion({ question, answer }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-[#1e1e1e] border border-[#333] mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-[11vh] flex justify-between items-center px-6 py-4 text-left"
      >
        <h1 className={twMerge("accordion", "text-white subheading-base")}>
          {question}
        </h1>
        <span className="text-white subtitle-light transition duration-300 ease-in-out">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <p className={twMerge("accordans", "text-gray-400 px-6 pb-6 para-light")}>
          {answer}
        </p>
      )}
    </div>
  )
}
