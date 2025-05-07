import React from 'react';
import Hero from '../components/LandingPage/Hero';
import Aboutus from '../components/LandingPage/Aboutus';
import CoreValuesSection from '../components/LandingPage/CoreValuesSection';
import ProjectsSection from '../components/LandingPage/ProjectsSection';
import ClientStoriesCarousel from '../components/LandingPage/ClientStoriesCarousel';
import CompanyAnalytics from '../components/LandingPage/CompanyAnalytics';
import ServicesSolutions from '../components/LandingPage/ServicesSolutions';
import { heroContent } from '../data/Herocontent';

export default function Home() {
  return (
    <div className="">
      {/* Waves background */}
      {/* <div className="wave-container absolute inset-0 z-0 pointer-events-none">
        <div className="wave-animation w-full h-full"></div>
      </div> */}
      <Hero {...heroContent.home} />
      <CompanyAnalytics />
      <ServicesSolutions />
      <Aboutus />
      <CoreValuesSection />
      <ProjectsSection />
      <ClientStoriesCarousel />
    </div>
  );
}