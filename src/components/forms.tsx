'use client'

import React from 'react'

export default function Form() {
    return (
        <section className="min-h-screen-lg bg-black text-white lg:px-12 flex items-center justify-center px-10 py-20 ">
            <div className="w-full flex flex-col lg:flex-row gap-8 items-start justify-between">

                {/* Left: Form */}
                <form className="w-full lg:w-2/3 space-y-6 md:px-20 ">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Get in touch with our <span className="text-red-500">Experts</span>
                    </h2>
                    <p className="text-sm text-gray-400">
                        Let&#39;s see how we can help enhance your user journey.
                    </p>

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-semibold mb-1">NAME</label>
                        <input
                            type="text"
                            className="w-full rounded-lg bg-zinc-800 text-white px-4 py-3 outline-none"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-sm font-semibold mb-1">PHONE NUMBER</label>
                        <input
                            type="text"
                            className="w-full rounded-lg bg-zinc-800 text-white px-4 py-3 outline-none"
                        />
                    </div>

                    {/* Services + Company */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full">
                            <label className="block text-sm font-semibold mb-1">SERVICES</label>
                            <input
                                type="text"
                                className="w-full rounded-lg bg-zinc-800 text-white px-4 py-3 outline-none"
                            />
                        </div>
                        <div className="w-full">
                            <label className="block text-sm font-semibold mb-1">COMPANY NAME</label>
                            <input
                                type="text"
                                className="w-full rounded-lg bg-zinc-800 text-white px-4 py-3 outline-none"
                            />
                        </div>
                    </div>

                    {/* Project Description */}
                    <div>
                        <label className="block text-sm font-semibold mb-1">
                            Tell us more about your project*
                        </label>
                        <textarea
                            rows={4}
                            className="w-full rounded-lg bg-zinc-800 text-white px-4 py-3 outline-none resize-none"
                        ></textarea>
                    </div>

                    {/* Terms */}
                    <div className="text-xs text-gray-400">
                        By continuing I accept the terms and conditions and privacy policy
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="bg-red-600 hover:bg-red-700 transition-all px-8 py-2 rounded-md font-medium text-white"
                        >
                            Submit
                        </button>
                    </div>
                </form>

                {/* Right: Cards Illustration (Desktop View) */}
                <div className="hidden lg:flex w-1/2 relative items-center justify-center m-auto p-20">
                    <div className="bg-[url('/images/product2.png')] bg-no-repeat bg-center bg-cover h-[200px] w-[200px] rounded-3xl flex items-center justify-center -right-20 relative z-30"></div>
                    <div className="bg-[url('/images/product1.png')] bg-no-repeat bg-center bg-cover h-[300px] w-[300px] rounded-3xl flex items-center justify-center drop-shadow-3xl shadow-black z-40"></div>
                    <div className="bg-[url('/images/product4.png')] bg-no-repeat bg-center bg-cover h-[200px] w-[200px] rounded-3xl flex items-center justify-center -left-20 relative z-30"></div>
                </div>
            </div>
        </section>
    )
}
