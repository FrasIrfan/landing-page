
import React from 'react';
import Navbar from '../../components/LandingPage/Navbar';

const About = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">About Aglivo</h1>
        <p className="text-gray-300 text-lg">
          More information about Aglivo...
        </p>
      </div>
    </div>
  );
};

export default About;
