'use client';

import React from 'react';
import { FaBullhorn, FaHeartbeat, FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

const THEMATIC_AREAS = [
  {
    title: 'Advocacy',
    icon: <FaBullhorn size={40} className="text-brandPurple" />,
    description:
      'We run sensitization campaigns and community outreach to raise awareness on issues affecting adolescents and teen mothers.',
  },
  {
    title: 'Health',
    icon: <FaHeartbeat size={40} className="text-brandPurple" />,
    description:
      'Our initiatives cover WASH, Menstrual Health, SRHR, mental health, and maternal health to empower youth with knowledge and care.',
  },
  {
    title: 'Education',
    icon: <FaGraduationCap size={40} className="text-brandPurple" />,
    description:
      'We provide mentorship, life skills training, and capacity building to help young people realize their full potential.',
  },
];

export default function ThematicAreasSection() {
  return (
    <section id="thematic-areas" className="bg-gray-50 py-20 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-brandBlack mb-4">
          What We Do
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Our work is anchored in three core pillars that drive community transformation.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {THEMATIC_AREAS.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-brandPurple hover:shadow-xl transition"
            >
              <div className="mb-4 flex justify-center">{area.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
              <p className="text-gray-700">{area.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
