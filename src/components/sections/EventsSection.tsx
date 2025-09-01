'use client';

type Event = {
  date: string;
  title: string;
  description: string;
};

const events: Event[] = [
  {
    date: 'June 19, 2025',
    title: 'GBV Workshop by London School of Hygiene & Tropical Medicine',
    description:
      'We are honored to participate in this workshop at Sarova Panafric Hotel, Nairobi. Theme: Unintended consequences of GBV programs.',
  },
  {
    date: 'May 15, 2025',
    title: 'Butterfly Program School Outreach',
    description:
      'Adolescent mentorship sessions at Mukuru Rescue Center focusing on SRHR and mental health.',
  },
  {
    date: 'April 10, 2025',
    title: 'Children’s Home Visit - Kayole',
    description:
      'Engagements with teen mothers and adolescents through guided mentorship and donations.',
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-brandBlack mb-4">
          Events
        </h2>
        <p className="text-brandPurple mb-16 max-w-2xl mx-auto">
          Highlights from our latest outreach and empowerment programs.
        </p>

        <div className="space-y-36 relative">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="relative flex flex-col sm:flex-row justify-start items-center min-h-[280px]"
            >
              {/* Left card */}
              <div className="absolute sm:static -left-36 sm:-translate-x-0 sm:transform-none top-1/2 sm:top-auto transform -translate-y-1/2 z-20">
                <div className="bg-brandPurple text-white px-6 py-6 rounded-l-xl rounded-tr-xl shadow-md w-64 h-[200px] flex items-center justify-center text-center">
                  <h3 className="text-base font-semibold leading-snug">
                    {event.title}
                  </h3>
                </div>
              </div>

              {/* Right card */}
              <div className="bg-white shadow-2xl rounded-xl p-10 sm:pl-60 w-full relative z-10 text-left min-h-[260px] flex flex-col justify-center">
                <p className="text-sm text-gray-500 mb-3">{event.date}</p>
                <p className="text-base text-gray-700 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
