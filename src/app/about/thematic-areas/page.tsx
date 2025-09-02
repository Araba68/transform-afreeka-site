// src/app/about/thematic-areas/page.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaBullhorn, FaBook, FaHeartbeat } from 'react-icons/fa';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ThematicAreasPage() {
  return (
    <main className="min-h-screen py-20 px-6 md:px-16 text-brandBlack bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Thematic Areas</h1>

        <p className="mb-8">
          All our programs fall under three main thematic areas — Advocacy, Education, and Health. These areas
          help us implement targeted, impactful initiatives that empower adolescents and young mothers in the
          informal settlements of Mukuru.
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.section
            variants={cardVariants}
            className="bg-brandYellow p-6 rounded-xl shadow-md"
          >
            <div className="flex items-center gap-4 mb-2">
              <FaBullhorn className="animate-bounce text-white text-3xl bg-brandBlack p-2 rounded-full" />
              <h2 className="text-2xl font-semibold">1. Advocacy</h2>
            </div>
            <p>
              Advocacy is a powerful tool for delivering impact when the focus is on adolescents and young mothers. It serves
              as both a catalyst for systemic change and a means to amplify the voices of those often marginalized in the
              community. This includes community forums, public engagement events, and social media awareness campaigns.
              Advocacy at TAF goes beyond awareness — it is about shifting power and embedding sustainable solutions into
              the systems that affect our target population.
            </p>
          </motion.section>

          <motion.section
            variants={cardVariants}
            className="bg-brandPurple p-6 rounded-xl shadow-md text-white"
          >
            <div className="flex items-center gap-4 mb-2">
              <FaBook className="animate-bounce text-brandYellow text-3xl bg-white p-2 rounded-full" />
              <h2 className="text-2xl font-semibold">2. Education</h2>
            </div>
            <p>
              We treat education as a key tool to overcome structural barriers and empower our communities. Education at
              TAF goes beyond formal schooling — it includes life skills programs, mentorship, tech empowerment,
              partnerships with schools and TVET institutions, and advocacy for educational access and retention.
              We believe knowledge, skills, and critical thinking are essential for long-term empowerment.
            </p>
          </motion.section>

          <motion.section
            variants={cardVariants}
            className="bg-brandBlack p-6 rounded-xl shadow-md text-white"
          >
            <div className="flex items-center gap-4 mb-2">
              <FaHeartbeat className="animate-bounce text-brandYellow text-3xl bg-white p-2 rounded-full" />
              <h2 className="text-2xl font-semibold">3. Health</h2>
            </div>
            <p>
              Health is the cornerstone of our initiatives. Our programs cover SRHR (Sexual and Reproductive Health Rights),
              MHM (Menstrual Hygiene Management), mental health, maternal health, and WASH (Water, Sanitation, and Hygiene).
              Through integration of these services, we address the holistic needs of adolescents and young mothers, promote
              well-being, and support resilience through counseling, group therapy, and healthcare education.
            </p>
          </motion.section>
        </motion.div>
      </div>
    </main>
  );
}
