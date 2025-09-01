'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const programs = [
  {
    title: 'Adolescent Mentorship Program',
    description:
      'Conducted in partnership with the Mukuru Rescue Center and neighboring schools, this program focuses on mentorship, life skills development, and SRHR education for adolescents.',
  },
  {
    title: "Children’s Home Outreach",
    description:
      'We visit local children’s homes to provide tailored mentorship in sexual and reproductive health, as well as guidance and counseling sessions designed to support emotional and mental well-being.',
  },
];

export default function ButterflyProgramSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="butterfly-program" className="bg-white py-20 px-6 md:px-16 text-brandBlack">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          The Butterfly Program
        </h2>
        <p className="text-center text-lg text-gray-700 mb-10">
          Our 3-year flagship initiative supporting adolescents and teen mothers through targeted mentorship and outreach.
        </p>

        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {programs.map((p, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                active === index
                  ? 'bg-brandPurple text-white shadow-lg'
                  : 'bg-gray-100 text-brandBlack hover:bg-gray-200'
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        <div className="bg-gray-50 p-6 rounded-2xl shadow-inner border border-gray-200">
          <h3 className="text-2xl font-semibold mb-2 text-brandPurple">
            {programs[active].title}
          </h3>
          <p className="text-gray-700">{programs[active].description}</p>
        </div>
      </motion.div>
    </section>
  );
}
