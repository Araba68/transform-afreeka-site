import Footer from '../components/layout/Footer'; 
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';

import ImpactSection from '../components/sections/ImpactSection';

import EventsSection from '../components/sections/EventsSection';
import VolunteerSection from '../components/sections/VolunteerSection';
import DonateSection from '../components/sections/DonateSection';


export default function HomePage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <ImpactSection />
      <EventsSection />
      <VolunteerSection />
      <DonateSection />
      <Footer />
    </main>
  );
}
