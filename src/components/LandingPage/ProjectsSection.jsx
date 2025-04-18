'use client';
import React, { useEffect, useRef } from 'react';

const ProjectShowcaseSection = () => {
  const sectionRefs = useRef([]);

  const projects = [
    {
      id: 1,
      category: "Medical Care Platform",
      title: "Luminary Health",
      description: "Luminary Health is a comprehensive medical care platform designed to streamline healthcare processes. This project focuses on building a secure and efficient portal integrating key features like claims management and patient referrals.",
      image: "/assets/logos/Referral Tracker.png",
      tags: ["Web Design", "Web Dev"],
      number: "01",
      alignment: "right",
    },
    {
      id: 2,
      category: "Service Management",
      title: "Spectra Solar",
      description: "This project provides an all-encompassing field service management system for job assignment, tracking, and reporting. It enables installers to follow a clear checklist, track job progress in real-time, communicate with support, and collect customer feedback—all through a mobile app. The web‑based survey app complements this by capturing customer preferences.",
      image: "/assets/logos/Referral Tracker (1).png",
      tags: ["Mobile Design", "Web Dev"],
      number: "02",
      alignment: "left",
    },
    {
      id: 3,
      category: "Medical Care Platform",
      title: "Dillon",
      description: "This project, Dillon, is designed to enhance the delivery workflow for riders by providing a mobile app for order management and route navigation. The system integrates with a CRM for managing riders and customers, ensuring smooth delivery operations and customer satisfaction.",
      image: "/assets/logos/Referral Tracker (2).png",
      tags: ["Web Design", "Web Dev"],
      number: "03",
      alignment: "right",
    },
    {
      id: 4,
      category: "Service Management",
      title: "Goal As",
      description: "Goal is a social media platform designed for small groups to set, track, and share personal goals. It allows users to upload their progress, stay motivated, and connect with their friends' journeys, fostering a supportive community focused on achieving success together.",
      image: "/assets/logos/Referral Tracker (3).png",
      tags: ["Mobile Design", "Web Dev"],
      number: "04",
      alignment: "left",
    }
  ];


  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        } else {
          entry.target.classList.remove('animate-in');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="bg-black min-h-screen py-16 px-4 md:px-8 lg:px-16 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-semibold text-xl tracking-wide mb-2">
            Aglivo Projects
          </h2>
          <h1 className="font-montserrat font-bold text-4xl mb-6">
            Our Recent Projects
          </h1>
          <div className="font-montserrat text-lg max-w-3xl mx-auto">
            Welcome to Aglivo, a community strength and conditioning facility that began in 2019.
          </div>
        </div>
        <div className="space-y-32">
          {projects.map((project, index) => {
            const animatedText = (
              <div
                ref={el => (sectionRefs.current[index] = el)}
                className="flex flex-col justify-center max-w-[760px] opacity-0 transition-all duration-1500 ease-out"
                style={{
                  transformOrigin: project.alignment === 'right' ? 'left' : 'right',
                  transform: 'translateY(30px)',
                  filter: 'blur(8px)',
                  maxHeight: '504px'
                }}
              >
                <div className="mb-4 text-gray-300 text-base">
                  {project.category}
                </div>
                <div className="flex items-center space-x-4 border-b border-white/20 pb-2 mb-4">
                  <h3 className="text-3xl font-light tracking-wide">
                    {project.title}
                  </h3>
                  <div>{project.icon}</div>
                </div>
                <div className="text-lg text-gray-200 leading-relaxed overflow-hidden">
                  {project.description}
                </div>
              </div>
            );
            const staticControls = (
              <div className="flex items-center justify-between mt-6">
                <div className="flex flex-wrap gap-4">
                  {project.tags.map((tag, tagIndex) => (
                    <button
                      key={tagIndex}
                      className="px-7 py-2.5 rounded-[9px] border border-white text-white font-montserrat text-sm transition-colors hover:bg-white hover:text-black"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                <div className="text-2xl font-medium">
                  {project.number}
                </div>
              </div>
            );

            const imageSection = (
              <div className="flex items-center justify-center relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full max-w-[720px] h-auto max-h-[504px] rounded-[36px] object-cover"
                />
              </div>
            );

            return (
              <div key={project.id} className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 relative">
                {project.alignment === 'right' ? (
                  <>
                    <div className="order-2 lg:order-1 flex flex-col justify-center">
                      {animatedText}
                      {staticControls}
                    </div>
                    <div className="order-1 lg:order-2">
                      {imageSection}
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      {imageSection}
                    </div>
                    <div className="flex flex-col justify-center">
                      {animatedText}
                      {staticControls}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
          filter: blur(0px) !important;
          transition: opacity 1.5s ease-out, transform 1.8s ease-out, filter 1.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ProjectShowcaseSection;
