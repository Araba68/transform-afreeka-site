'use client';

import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import {
  
  FaFemale,
  FaBullhorn,
  FaHandshake,
  FaHandsHelping,
} from 'react-icons/fa';

const stats = [
 
  {
    label: 'Young Mothers Supported',
    value: 100,
    icon: <FaFemale size={32} />,
  },
  {
    label: 'Outreach',
    value: 10,
    icon: <FaBullhorn size={32} />,
  },
  {
    label: 'Partner Organizations',
    value: 8,
    icon: <FaHandshake size={32} />,
  },
  

  {
    label: 'Volunteers Engagement',
    value: 30,
    icon: <FaHandsHelping size={32} />,
  },
];

export default function ImpactSection() {
  return (
    <section
      id="impact"
      className="bg-brandYellow py-20 px-6 md:px-16 text-brandBlack"
      aria-labelledby="impact-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto text-center"
      >
        <h2
          id="impact-heading"
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Our Achievements
        </h2>
        <p className="text-lg text-brandBlack mb-12 max-w-3xl mx-auto">
          Transform Afreeka Foundation is proud of the transformation we have fostered through mentorship programs, outreach initiatives, and strategic partnerships.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-brandPurple"
            >
              <div className="flex justify-center text-brandPurple mb-3">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-extrabold text-brandBlack">
                <CountUp
                  end={stat.value}
                  duration={2}
                  separator=","
                  enableScrollSpy
                  scrollSpyOnce
                />
                +
              </h3>
              <p className="mt-1 text-sm text-gray-800 font-semibold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
