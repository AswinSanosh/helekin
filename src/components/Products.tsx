"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Loading from "../app/(root)/loading";

export default function Products() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const imageUrls = [
      "/images-webp/product2.webp",
      "/images-webp/product1.webp",
      "/images-webp/product4.webp",
    ];

    let loadedCount = 0;
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imageUrls.length) {
          setIsLoaded(true);
        }
      };
      img.onerror = () => {
        // Even if an image fails, count it as loaded to avoid blocking forever
        loadedCount++;
        if (loadedCount === imageUrls.length) {
          setIsLoaded(true);
        }
      };
    });
  }, []);

  if (!isLoaded) {
    return <Loading />;
  }

  return (
    <div className=" h-full w-full flex flex-col bg-gradient-to-b from-[#070707] to-black md:px-6 px-3 pb-30">
      <div className="relative z-10 w-full max-w-screen md:px-6 px-3 mx-auto pt-20">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
          className="sm:text-3xl text-2xl font-poppins font-semibold text-red-700 mb-2"
        >
          Products
        </motion.h1>

        {/* Description + Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between mt-2 gap-4"
        >
          <div className="flex flex-col items-start md:w-1/2">
            <p className="sm:text-lg text-md font-extralight font-poppins text-white/80">
              Browse our collection of high-quality, custom-built tech solutions
              designed for everyday use and professional applications. From
              software applications to hardware devices, we offer a range of
              products that enhance productivity and streamline your workflow.
            </p>
          </div>
          <Link
            href="/products"
            className="bg-[#070707]/10 border border-[#F2F2F2]/30 rounded-md
              sm:px-6 px-3 sm:py-3 py-2 sm:text-lg text-sm font-poppins
              hover:bg-white hover:text-red-700
              transition-colors duration-300 ease-in-out text-white
              cursor-pointer relative items-end ml-auto"
          >
            View All
          </Link>
        </motion.div>

        {/* Images */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.2,
                duration: 1,
                ease: "easeOut",
              },
            },
          }}
          className="mt-20 flex flex-row items-center justify-center gap-6"
        >
          {[
            "bg-[url('/images-webp/product2.webp')] md:h-[400px] h-[150px] md:w-[400px] w-[100px] relative md:-right-20 -right-10 z-0",
            "bg-[url('/images-webp/product1.webp')] md:h-[500px] h-[200px] md:w-[500px] w-[200px] relative z-20",
            "bg-[url('/images-webp/product4.webp')] md:h-[400px] h-[150px] md:w-[400px] w-[100px] relative md:-left-20 -left-10 z-0",
          ].map((classes, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className={`${classes} bg-no-repeat bg-center bg-cover rounded-xl flex items-center justify-center drop-shadow-3xl shadow-[#030303]`}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
