'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const ref = useRef(null); // 👈 Section reference
  const inView = useInView(ref, { once: true }); // 👈 Triggers once when in view
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      ref={ref}
      className="min-h-screen bg-black text-white px-6 md:px-16 py-20 flex items-center justify-center"
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full bg-[#1c1c1c] p-10 rounded-2xl shadow-xl"
      >
        <h2 className="text-4xl font-bold text-red-600 font-poppins mb-8 text-center">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 bg-black border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 bg-black border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
              required
            />
          </div>
          <textarea
            name="message"
            rows={6}
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 bg-black border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 transition duration-300 text-white px-6 py-3 rounded-md font-semibold w-full md:w-1/3 mx-auto block"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
