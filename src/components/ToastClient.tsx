'use client'

import { useEffect, useState } from 'react'
import {
    toast,
    ToastContainer,
    ToastPosition,
    ToastOptions
} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface ToastClientProps extends ToastOptions {
  message: string
  progressBarColor?: string
}

export default function ToastClient({
  message,
  type = 'info',
  autoClose = 1500,
  progressBarColor,
  ...rest
}: ToastClientProps) {
  const [containerClass, setContainerClass] = useState<string>('')

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    const resolvedPosition: ToastPosition = isMobile ? 'bottom-center' : 'top-right'

    setContainerClass(isMobile ? 'pt-20 px-5' : 'p-6')

    toast(message, {
      type,
      position: resolvedPosition,
      autoClose,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'dark',
      ...rest
    })
  }, [message, type, autoClose, rest])

  return (
    <ToastContainer
      className={containerClass}
      newestOnTop
      toastStyle={progressBarColor ? { '--toastify-color-progress': progressBarColor } as React.CSSProperties : undefined}
    />
  )
}
