'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FaHandsHelping,
  FaShieldAlt,
  FaUsers,
  FaBalanceScale,
  FaHeart,
} from 'react-icons/fa';
import { createClient } from 'contentful';

// Map icon names from Contentful to actual icon components
const iconMap = {
  FaHandsHelping,
  FaShieldAlt,
  FaUsers,
  FaBalanceScale,
  FaHeart,
};

export default function AboutSection() {
  const [aboutData, setAboutData] = useState<any>(null);

  useEffect(() => {
    async function fetchAbout() {
      const client = createClient({
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
      });
      // Replace 'about' with your actual content type ID if different
      const res = await client.getEntries({ content_type: 'about' });
      if (res.items.length > 0) {
        setAboutData(res.items[0].fields);
      }
    }
    fetchAbout();
  }, []);

  if (!aboutData) return <div>Loading...</div>;

  // Parse core values from JSON object if needed
  let coreValues: Array<{ label: string; icon: string }> = [];
  if (aboutData.coreValues) {
    if (Array.isArray(aboutData.coreValues)) {
      coreValues = aboutData.coreValues;
    } else if (typeof aboutData.coreValues === 'string') {
      try {
        coreValues = JSON.parse(aboutData.coreValues);
      } catch {
        coreValues = [];
      }
    } else if (typeof aboutData.coreValues === 'object') {
      // If it's an object, convert to array if needed
      coreValues = Object.values(aboutData.coreValues);
    }
  }

  return (
    <section
      id="about"
      className="bg-white py-20 px-6 md:px-16 text-brandBlack scroll-mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            {aboutData.title}
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            {aboutData.introDescription}
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-brandPurple mb-1">
                {aboutData.missionTitle}
              </h3>
              <p>{aboutData.missionText}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brandPurple mb-1">
                {aboutData.visionTitle}
              </h3>
              <p>{aboutData.visionText}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brandPurple mb-2">
                Core Values
              </h3>
              <ul className="space-y-2">
                {coreValues.map(
                  (
                    value: { label: string; icon: string },
                    idx: number
                  ) => {
                    const Icon =
                      iconMap[value.icon as keyof typeof iconMap];
                    return (
                      <li key={idx} className="flex items-center">
                        {Icon && (
                          <Icon className="text-brandPurple w-5 h-5 mr-2" />
                        )}
                        <span>{value.label}</span>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full aspect-[4/3] md:aspect-square rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={
              aboutData.image?.fields?.file?.url
                ? `https:${aboutData.image.fields.file.url}`
                : '/images/about.jpg'
            }
            alt={aboutData.imageAltText || 'About Image'}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </motion.div>
    </section>
  );
}