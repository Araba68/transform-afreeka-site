'use client';

import { useState } from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaTiktok,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/xzzvgeen', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000); // Auto-hide after 5s
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {/* Left: Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-brandBlack mb-4">Contact Us</h2>
          <p className="text-brandPurple mb-6">
            Get in touch with Transform Afreeka Foundation. We’re happy to hear from you.
          </p>

          <div className="space-y-4 text-sm text-gray-700">
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-brandPurple" />
              <a
                href="mailto:transformafreekafoundation@gmail.com"
                className="hover:underline"
              >
                transformafreekafoundation@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="text-brandPurple" />
              <a href="tel:+254727123516" className="hover:underline">
                +254 727 123516
              </a>
            </p>

            <div className="flex gap-4 text-xl text-brandPurple pt-4">
              <a href="https://www.facebook.com/share/16hpb3MDbr/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://twitter.com/T_Afreeka2024" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://tiktok.com/@TransformAfreekaFoundation" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
              <a href="https://linkedin.com/company/transform-afreeka-foundation" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://youtube.com/@TransformAfreekaFoundation" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              <a href="https://wa.me/254727123516" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4 text-brandBlack">Send a Message</h3>

          {status === 'success' && (
            <div className="mb-4 text-green-700 bg-green-100 border border-green-400 px-4 py-3 rounded">
              🎉 Your message was sent successfully!
            </div>
          )}
          {status === 'error' && (
            <div className="mb-4 text-red-700 bg-red-100 border border-red-400 px-4 py-3 rounded">
              ❌ Something went wrong. Please try again.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-brandYellow"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-brandYellow"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-brandYellow"
            />
            <button
              type="submit"
              className="bg-brandYellow text-brandBlack font-semibold px-6 py-3 rounded-md hover:shadow-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
