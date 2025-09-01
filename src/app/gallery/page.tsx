'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const galleryCategories = [
  {
    title: 'My Hygiene My Responsibility',
    images: [
      '/images/gallery/hygiene1.jpg',
      '/images/gallery/hygiene2.jpg',
      '/images/gallery/hygiene3.jpg',
      '/images/gallery/hygiene4.jpg',
    ],
  },
  {
    title: 'Inaugural AGM',
    images: [
      '/images/gallery/agm1.jpg',
      '/images/gallery/agm2.jpg',
      '/images/gallery/agm3.jpg',
    ],
  },
  {
    title: 'CBO Management Training at Office of Social Development Embakasi',
    images: [
      '/images/gallery/cbo_mgt1.jpg',
      '/images/gallery/cbo_mgt2.jpg',
      '/images/gallery/cbo_mgt3.jpg',
     
    ],
  },
  {
    title: 'Adolescents Mental Health Program',
    images: [
      '/images/gallery/adol1.jpg',
      '/images/gallery/adol2.jpg',
      '/images/gallery/adol3.jpg',
    ],

  },
  {
    title: 'GBV Summit - London School of Hygiene and Tropical Medicine',
    images: [
      '/images/gallery/gbv1.jpg',
      '/images/gallery/gbv2.jpg',
    ],
  },
];

// Optional: adjust object-fit for known problematic images
const getImageStyle = (src: string) => {
  const filename = src.split('/').pop() ?? '';
  const containImages = ['hygiene2.jpg', 'gbv1.jpg', 'gbv2.jpg'];
  return containImages.includes(filename) ? 'object-contain' : 'object-cover';
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen py-20 px-6 md:px-16 bg-white text-brandBlack">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-4"
        >
          Our Gallery
        </motion.h1>

        <p className="text-brandPurple text-center mb-10 max-w-3xl mx-auto">
          Explore moments from our outreach programs, mentorship sessions, school hygiene visits,
          and mental health workshops — captured from the heart of Mukuru.
        </p>

        {galleryCategories.map((category, catIdx) => (
          <div key={catIdx} className="mb-14">
            <h2 className="text-2xl font-semibold mb-6 text-brandPurple text-center">
              {category.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {category.images.map((src, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="overflow-hidden rounded-xl shadow-md"
                >
                  <Image
                    src={src}
                    alt={`Gallery image ${idx + 1}`}
                    width={400}
                    height={300}
                    className={`w-full h-72 ${getImageStyle(src)} object-center hover:scale-105 transition-transform duration-300`}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
