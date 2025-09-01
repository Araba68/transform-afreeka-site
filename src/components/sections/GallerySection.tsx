'use client';

import Image from 'next/image';

const images = [
  '/images/gallery1.jpg',
  '/images/gallery2.jpg',
  '/images/gallery3.jpg',
  '/images/gallery4.jpg',
  '/images/gallery5.jpg',
  '/images/gallery6.jpg',
  '/images/gallery7.jpg',
  '/images/gallery8.jpg',
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-brandBlack mb-2">Gallery</h2>
        <p className="text-brandPurple mb-10">
          Moments from our community outreach, mentorship, and health programs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <div key={idx} className="overflow-hidden rounded-xl shadow-md">
              <Image
                src={src}
                alt={`Gallery image ${idx + 1}`}
                width={400}
                height={300}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
