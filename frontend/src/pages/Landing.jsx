import React from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import MissionSection from '../components/MissionSection';
import TechSection from '../components/TechSection';

export default function Landing() {
  return (
    <Box bg="bg.primary" minH="100vh">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <MissionSection />
      <TechSection />
      <Footer />
    </Box>
  );
}
