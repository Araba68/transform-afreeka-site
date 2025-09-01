'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function PillarsPage() {
  return (
    <section className="py-20 px-6 md:px-16 text-brandBlack bg-gray-50 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">Our Pillars</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-brandPurple mb-2">Empower</h3>
            <p>
              Adolescents and young mothers are empowered with opportunities to positively impact their lives, their
              families, and the world around them.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-brandPurple mb-2">Equip</h3>
            <p>
              We provide individual literacy instruction, foundational skills development, and life skills training
              to prepare youth and young mothers for success.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-brandPurple mb-2">Restore</h3>
            <p>
              Through mental health programs, counseling, medical care, and dignity-based support, we help restore the
              mind, body, and spirit of the communities we serve.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
