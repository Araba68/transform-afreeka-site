'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function VolunteerSection() {
  return (
    <section
      id="volunteer"
      aria-label="Volunteer Sign-up Section"
      className="relative bg-black text-white"
    >
      {/* Background Image with fallback */}
      <div className="absolute inset-0 z-0 bg-black">
        <Image
          src="/images/volunteer1.jpg" // Replace with your actual image path
          alt="Volunteers engaging in community service"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brandYellow">
          Become a Volunteer
        </h2>
        <p className="text-lg text-white mb-4">
          Join our mission to transform the lives of adolescents and teen mothers.
          Your time and compassion can help us create lasting change in Mukuru and beyond.
        </p>
        <p className="text-white/80 mb-8">
          Whether you&apos;re a student, professional, or just passionate about youth empowerment,
          we welcome your support in outreach, mentorship, training, and community development.
        </p>

        <Link
          href="#contact"
          className="inline-block bg-brandYellow text-brandBlack px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Sign Up to Volunteer
        </Link>
      </div>
    </section>
  );
}
