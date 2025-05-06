import React from 'react';
import Navbar from '../components/LandingPage/Navbar';
import Logo from '../components/LandingPage/Logo';
import NavButton from '../components/LandingPage/NavButton';
import Hero from '../components/LandingPage/Hero';
import Aboutus from '../components/LandingPage/Aboutus';
// import TrustedPartners from '../components/LandingPage/TrustedPartners';
import CoreValuesSection from '../components/LandingPage/CoreValuesSection';
import ProjectsSection from '../components/LandingPage/ProjectsSection';
import ClientStoriesCarousel from '../components/LandingPage/ClientStoriesCarousel';
import ContactUs from '../components/LandingPage/ContactUs';
import Footer from '../components/LandingPage/Footer';
import CompanyAnalytics from '../components/LandingPage/CompanyAnalytics';
import ServicesSolutions from '../components/LandingPage/ServicesSolutions';

export default function Home() {
  return (
    <div className="bg-black min-h-screen relative overflow-hidden">
      {/* Waves background */}
      <div className="wave-container absolute inset-0 z-0 pointer-events-none">
        <div className="wave-animation w-full h-full"></div>
      </div>
      {/* Header/Nav with higher z-index */}
      <div className="relative z-10">
        <div className="flex items-center justify-between w-full px-0 py-4">
          <div className="pl-12 md:pl-20">
            <Logo />
          </div>
          <div className="flex-1 flex justify-center">
            <Navbar />
          </div>
          <div className="pr-12 md:pr-20">
            <NavButton />
          </div>
        </div>
      </div>
      <Hero />
      {/* New addition component */}
      <CompanyAnalytics />
      {/* New addition component */}
      <ServicesSolutions />
      <Aboutus />
      <CoreValuesSection />
      <ProjectsSection />
      <ClientStoriesCarousel />
      <ContactUs />
      <Footer />
    </div>
  );
}