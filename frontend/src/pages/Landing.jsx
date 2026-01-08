import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import MissionSection from '../components/MissionSection';
import TechSection from '../components/TechSection';

export default function Landing() {
  return (
    <div className="bg-[#0B0E11] min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <MissionSection />
      <TechSection />
      <Footer />
    </div>
  );
}
