// src/app/about/team/page.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const teamMembers = [
  { name: 'Mark Samo', role: 'Executive Director', image: 'mark_samo.jpg' },
  { name: 'John Buoro', role: 'Head Partnership & Collaboration', image: 'partnership.jpg' },
  { name: 'Maureen Nyatete', role: 'Secretary & Mental Health Champion', image: 'secretary.jpg' },
  { name: 'Horace Sigar', role: 'Finance Officer', image: 'finance.jpg' },
  { name: 'Alex Mutia', role: 'Resource Mobilization Officer', image: 'alex-mutia.jpg' },
  { name: 'Denis Samburuma', role: 'Volunteer Coordinator', image: 'vol_coordinator.jpg' },
  { name: 'Yvonneh Mtafuta', role: 'Head, Service Delivery', image: 'yvonneh-mtafuta.jpg' },
  { name: 'Kelvin Mutati', role: 'Head, Social Work', image: 'kelvin-mutati.jpg' },
  { name: 'Luyo Samson', role: 'IT Specialist', image: 'it_specialist.jpg' },
  { name: 'Aginga Odhiambo', role: 'Social Media Manager', image: 'social_media_manager.jpg' },
  { name: 'Millian Nyamoita', role: 'Advocacy Officer', image: 'advocacy.jpg' },
  { name: 'Francis Okanga', role: 'Community Mobilization Officer', image: 'mobilization.jpg' },
  { name: 'Mackson Suchi', role: 'Community Mobilization Officer', image: 'mackson-suchi.jpg' },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen py-20 px-6 md:px-16 text-brandBlack bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Our Team</h1>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          Transform Afreeka Foundation is powered by a team of passionate associate members dedicated to our mission. Each member contributes their skills and time as volunteers to drive lasting community change.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition"
            >
              <div className="w-24 h-24 mx-auto mb-4 relative rounded-full overflow-hidden">
                <Image
                  src={`/images/team/${member.image}`}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-lg font-semibold">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <p className="text-sm text-gray-500">
            * Board of Management oversees governance and strategy. Details available upon request.
          </p>
        </div>
      </div>
    </main>
  );
}
