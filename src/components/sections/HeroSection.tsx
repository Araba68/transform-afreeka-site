'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/images/hero1.jpg',
  '/images/hero2.jpg',
  '/images/hero3.jpg',
  '/images/hero4.jpg',
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const currentImage = images[current];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 py-24 text-brandBlack overflow-hidden"
    >
      {/* Slideshow Background */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={images[current]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={images[current]}
              alt={`Hero background ${current + 1}`}
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Transformation through{' '}
          <span className="text-brandPurple">empowerment</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl font-medium">
          Give us the chance, watch us lead.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#about"
            className="bg-brandBlack text-white px-6 py-3 rounded-2xl text-lg font-semibold hover:bg-opacity-90 transition"
          >
            Explore Our Work
          </a>
          <a
            href="#donate"
            className="bg-brandPurple text-white px-6 py-3 rounded-2xl text-lg font-semibold hover:bg-opacity-90 transition"
          >
            Donate Now
          </a>
        </div>
      </motion.div>
    </section>
  );
}
