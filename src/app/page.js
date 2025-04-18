import React from 'react';
import Navbar from '../components/LandingPage/Navbar';
import Hero from '../components/LandingPage/Hero';
import Aboutus from '../components/LandingPage/Aboutus';
import TrustedPartners from '../components/LandingPage/TrustedPartners';
import CoreValuesSection from '../components/LandingPage/CoreValuesSection';
import ProjectsSection from '../components/LandingPage/ProjectsSection';
import ClientStoriesCarousel from '../components/LandingPage/ClientStoriesCarousel';
import ContactUs from '../components/LandingPage/ContactUs';
import Footer from '../components/LandingPage/Footer';

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Aboutus />
      <TrustedPartners/>
      <CoreValuesSection />
      <ProjectsSection/>
      <ClientStoriesCarousel/>
      <ContactUs/>
      <Footer/>

    </div>
  );
}
