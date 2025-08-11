'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle, Loader2, Send } from 'lucide-react'

export default function Form() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        services: '',
        company: '',
        message: '',
    })

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
    const formRef = useRef<HTMLFormElement>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('submitting')

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            if (res.ok) {
                setStatus('success')
                setFormData({ name: '', phone: '', services: '', company: '', message: '' })
                // Reset form after animation completes
                setTimeout(() => {
                    setStatus('idle')
                }, 3000)
            } else {
                throw new Error('Submission failed')
            }
        } catch (error) {
            setStatus('error')
            // Auto-reset error state after 5 seconds
            setTimeout(() => {
                setStatus('idle')
            }, 5000)
        }
    }

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring" as const,
                stiffness: 100
            }
        }
    }

    const successVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { 
            scale: 1, 
            opacity: 1,
            transition: { type: "spring" as const, stiffness: 200 }
        },
        exit: { 
            scale: 0.8, 
            opacity: 0,
            transition: { ease: "easeIn" as const }
        }
    }

    return (
        <section className="relative py-16 bg-gradient-to-br from-[#222222] to-black overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-gray-700/30"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Form Section */}
                        <div className="p-8 md:p-12">
                            <motion.form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="space-y-6"
                            >
                                <motion.div variants={itemVariants}>
                                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
                                        Connect with our <span className="text-white">Experts</span>
                                    </h2>
                                    <p className="mt-2 text-gray-300">
                                        Let&#39;s collaborate to enhance your digital journey.
                                    </p>
                                </motion.div>

                                <AnimatePresence mode="wait">
                                    {status === 'idle' || status === 'submitting' ? (
                                        <motion.div
                                            key="form-fields"
                                            variants={containerVariants}
                                            className="space-y-6"
                                        >
                                            {/* Name */}
                                            <motion.div variants={itemVariants}>
                                                <label className="block text-sm font-medium text-gray-300 mb-1">
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                                                    placeholder="Your name"
                                                />
                                            </motion.div>

                                            {/* Phone */}
                                            <motion.div variants={itemVariants}>
                                                <label className="block text-sm font-medium text-gray-300 mb-1">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                                                    placeholder="+91 1234567890"
                                                />
                                            </motion.div>

                                            {/* Services + Company */}
                                            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-300 mb-1">
                                                        Services Neede
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="services"
                                                        value={formData.services}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                                                        placeholder="Web development, design, etc."
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-300 mb-1">
                                                        Company Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="company"
                                                        value={formData.company}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                                                        placeholder="Your company"
                                                    />
                                                </div>
                                            </motion.div>

                                            {/* Message */}
                                            <motion.div variants={itemVariants}>
                                                <label className="block text-sm font-medium text-gray-300 mb-1">
                                                    Tell us about your project
                                                </label>
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                    rows={4}
                                                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                                                    placeholder="Describe your project needs..."
                                                ></textarea>
                                            </motion.div>

                                            {/* Terms */}
                                            <motion.div variants={itemVariants} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="terms"
                                                    required
                                                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-600 rounded bg-gray-700"
                                                />
                                                <label htmlFor="terms" className="ml-2 block text-xs text-gray-300">
                                                    I accept the <a href="#" className="text-red-400 hover:underline">terms and conditions</a> and <a href="#" className="text-red-400 hover:underline">privacy policy</a>
                                                </label>
                                            </motion.div>

                                            {/* Submit Button */}
                                            <motion.div variants={itemVariants}>
                                                <button
                                                    type="submit"
                                                    disabled={status === 'submitting'}
                                                    className="w-full flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                                                >
                                                    {status === 'submitting' ? (
                                                        <>
                                                            <Loader2 className="animate-spin mr-2 h-5 w-5" />
                                                            Sending...
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Send className="mr-2 h-5 w-5" />
                                                            Send Message
                                                        </>
                                                    )}
                                                </button>
                                            </motion.div>
                                        </motion.div>
                                    ) : status === 'success' ? (
                                        <motion.div
                                            key="success-message"
                                            variants={successVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            className="flex flex-col items-center justify-center text-center p-8"
                                        >
                                            <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                                            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                            <p className="text-gray-300 mb-6">
                                                Thank you for contacting us. Our team will get back to you shortly.
                                            </p>
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => setStatus('idle')}
                                                className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
                                            >
                                                Send Another Message
                                            </motion.button>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="error-message"
                                            variants={successVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            className="flex flex-col items-center justify-center text-center p-8"
                                        >
                                            <XCircle className="h-16 w-16 text-red-500 mb-4" />
                                            <h3 className="text-2xl font-bold text-white mb-2">Submission Failed</h3>
                                            <p className="text-gray-300 mb-6">
                                                There was an error sending your message. Please try again later.
                                            </p>
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => setStatus('idle')}
                                                className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200"
                                            >
                                                Try Again
                                            </motion.button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.form>
                        </div>

                        {/* Visual Section */}
                        <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-[#171717] via-[#171717] to-red-900/30 p-12 relative">
                            <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')]"></div>
                            <div className="relative z-10 text-center">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                    className="mb-8"
                                >
                                    <div className="text-5xl font-bold text-white mb-2">Let&#39;s Build</div>
                                    <div className="text-5xl font-bold text-red-400">Something Amazing</div>
                                </motion.div>
                                
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                    className="text-gray-300 max-w-md mx-auto"
                                >
                                    <p className="mb-4">
                                        Our team of experts is ready to help you create exceptional digital experiences.
                                    </p>
                                    <p>
                                        Whether you need web development, design, or consultation, we&#39;ve got you covered.
                                    </p>
                                </motion.div>
                                
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8, duration: 1 }}
                                    className="mt-12"
                                >
                                    <div className="relative inline-block">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-lg blur opacity-75"></div>
                                        <div className="relative px-6 py-3 bg-gray-900 text-white font-medium rounded-lg">
                                            Innovation Starts Here
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}