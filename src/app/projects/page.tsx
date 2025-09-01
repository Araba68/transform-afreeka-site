// src/app/projects/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Adolescent Mental Health Campaign',
    description:
      'We visit residential care institutions and children’s homes to provide mental health support and sexual reproductive health education to adolescents.',
    image: '/images/projects/adol1.jpg',
    category: 'Health',
  },
  {
    title: 'My Hygiene, My Responsibility',
    description:
      'We visit local primary schools to provide WASH and MHM awareness training, equipping students with essential personal hygiene knowledge.',
    image: '/images/projects/hygiene2.jpg',
    category: 'Health & Education',
  },
  {
    title: 'Community Advocacy Forums',
    description:
      'Engaging forums and campaigns focused on shifting power dynamics and embedding long-term sustainable solutions in community systems.',
    image: '/images/projects/gbv1.jpg',
    category: 'Advocacy',
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-20 px-6 md:px-16 bg-white text-brandBlack">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Our Projects</h1>
        <p className="text-center max-w-2xl mx-auto mb-16 text-lg">
          Our programs span multiple areas including health, education, and advocacy — each project tailored to bring sustainable change to the lives of adolescents and young mothers in Mukuru.
        </p>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-brandPurple mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-3">{project.description}</p>
                <span className="inline-block text-sm font-medium text-brandYellow bg-black px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
