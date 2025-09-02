'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function WhoWeAreSection() {
  return (
    <section className="py-20 px-6 md:px-16 text-brandBlack bg-white min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto"
      >
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center">Who We Are</h2>

        {/* Philosophy Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">The Afreeka Philosophy</h3>
          <p className="mb-4">
            &quot;Afreeka&quot; is an acronym of the fundamental principles that define our philosophy when dealing with clients,
            members, and the community. It symbolizes our vision of impacting teenage and young mothers across Africa.
          </p>

          <ul className="list-disc list-inside space-y-2 mb-6">
            <li><strong>A</strong> - Acceptance</li>
            <li><strong>F</strong> - Faith</li>
            <li><strong>R</strong> - Responsibility</li>
            <li><strong>E</strong> - Empathy</li>
            <li><strong>E</strong> - Excellence</li>
            <li><strong>K</strong> - Kindness</li>
            <li><strong>A</strong> - Accountability</li>
          </ul>

          <h4 className="text-xl font-semibold mt-8 mb-2">1. Faith</h4>
          <p className="mb-4">
            At TAF, we believe in the Holy Scriptures as originally given by God. Our programs encourage spiritual
            growth and holistic development. We partner with Christian institutions to mentor and support youth.
          </p>

          <h4 className="text-xl font-semibold mt-8 mb-2">2. Philanthropy</h4>
          <p className="mb-4">
            We believe that collective goodwill can create a more equitable society. Our members and associates embrace
            volunteering and empowerment through empathy and kindness.
          </p>

          <h4 className="text-xl font-semibold mt-8 mb-2">3. Attitude</h4>
          <p>
            A positive attitude can lead to transformation. We encourage young mothers and adolescents to accept their
            past, stay accountable, and pursue excellence with determination.
          </p>
        </div>

        {/* Objectives Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Our Objectives</h3>

          <h4 className="text-xl font-semibold text-brandPurple mb-2">Main Objective</h4>
          <p className="mb-6">
            To provide holistic transformation to adolescents, young mothers, and children by offering training,
            empowerment, and exposure to life-changing innovations.
          </p>

          <h4 className="text-xl font-semibold text-brandPurple mb-2">Specific Objectives</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Build capacity and sensitize young mothers and communities on SRHR, SGBV, and other preventable illnesses
              like HIV and STIs.
            </li>
            <li>
              Mobilize resources and establish educational, training opportunities, and scholarships.
            </li>
            <li>
              Ensure young mothers and children are safe and protected at home, school, and in the community through
              advocacy and capacity building.
            </li>
            <li>
              Reduce stigma around mental health among adolescents and youths.
            </li>
            <li>
              Facilitate rehabilitation of traumatized caregivers and young mothers through counseling, therapy, and
              skills exchange.
            </li>
            <li>
              Support community-led initiatives using sustainable technologies to foster self-reliance.
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
