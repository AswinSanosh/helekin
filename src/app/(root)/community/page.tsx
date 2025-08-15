// app/not-found.jsx
'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Script from 'next/script'

export default function ProductPage() {
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
                <h1 className="text-7xl font-bold text-red-500 mb-4">Coming Soon</h1>
                <p className="mb-6 text-sm text-gray-400 max-w-lg mx-auto">
                    This page is currently under development as we&#39;re working to bring you an updated and engaging experience.
                    Check back soon for updates or return to the homepage for more available features.
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
