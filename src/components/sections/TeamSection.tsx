'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

const team: TeamMember[] = [
  { name: 'Mark Samo', role: 'Executive Director', image: 'mark-samo.jpg' },
  { name: 'John Buoro', role: 'Head Partnership & Collaboration', image: 'john-buoro.jpg' },
  { name: 'Maureen Nyatete', role: 'Board Secretary', image: 'maureen-nyatete.jpg' },
  { name: 'Aginga Odhiambo', role: 'Social Media Manager', image: 'aginga-odhiambo.jpg' },
  { name: 'Denis Samburuma', role: 'Volunteer Coordinator', image: 'denis-samburuma.jpg' },
  { name: 'Luyo Samson', role: 'IT Specialist', image: 'luyo-samson.jpg' },
  { name: 'Yvonneh Mtafuta', role: 'Head of Service Delivery', image: 'yvonneh-mtafuta.jpg' },
  { name: 'Milan Nyamoita', role: 'Community Mobilization Officer', image: 'milan-nyamoita.jpg' },
  { name: 'Horace Sigar', role: 'Finance Officer', image: 'horace-sigar.jpg' },
  { name: 'Francis Okanga', role: 'Monitoring and Evaluation', image: 'francis-okanga.jpg' },
];

export default function TeamSection() {
  return (
    <section id="team" className="bg-white py-20 px-6 md:px-16 text-brandBlack">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
        <p className="text-lg text-gray-700 mb-12">
          Meet the passionate individuals behind Transform Afreeka Foundation.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {team.map((member, index) => (
            <div
              key={index}
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
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
