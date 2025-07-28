// app/not-found.jsx
'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()
  const [secondsLeft, setSecondsLeft] = useState(5)

  useEffect(() => {
    if (secondsLeft === 0) {
      router.push('/')
      return
    }

    const interval = setInterval(() => {
      setSecondsLeft(prev => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [secondsLeft, router])

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#030303] text-white px-6">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-2xl mb-2">Page Not Found</p>
        <p className="mb-4 text-gray-400">
          Sorry, the page you are looking for does not exist.
        </p>
        <p className="mb-6 text-sm text-gray-400">
          Redirecting to homepage in <span className="font-bold">{secondsLeft}</span> second{secondsLeft !== 1 ? 's' : ''}...
        </p>
        <Link
          href="/"
          className="inline-block rounded-lg bg-red-700 hover:bg-white hover:text-red-700 px-6 py-3 text-white font-semibold transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
