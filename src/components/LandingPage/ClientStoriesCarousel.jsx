'use client';
import React, { useState, useEffect, useRef } from 'react';

const clientReviews = [
  {
    id: 1,
    text: "Pianoforte solicitude so decisively unpleasing conviction is partiality he. Or particular so diminution entreaties oh do. Real he me fond show gave shot plan. Mirth blush linen small hoped way its along. Resolution frequently apartments off all discretion devonshire. Saw sir fat spirit seeing valley.",
    name: "Mr Harry Potter",
    designation: "Doctor",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    text: "Pianoforte solicitude so decisively unpleasing conviction is partiality he. Or particular so diminution entreaties oh do. Real he me fond show gave shot plan. Mirth blush linen small hoped way its along. Resolution frequently apartments off all discretion devonshire. Saw sir fat spirit seeing valley.",
    name: "Mr Harry Potter",
    designation: "Doctor",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    text: "Pianoforte solicitude so decisively unpleasing conviction is partiality he. Or particular so diminution entreaties oh do. Real he me fond show gave shot plan. Mirth blush linen small hoped way its along. Resolution frequently apartments off all discretion devonshire. Saw sir fat spirit seeing valley.",
    name: "Mr Harry Potter",
    designation: "Doctor",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    text: "Pianoforte solicitude so decisively unpleasing conviction is partiality he. Or particular so diminution entreaties oh do. Real he me fond show gave shot plan. Mirth blush linen small hoped way its along. Resolution frequently apartments off all discretion devonshire. Saw sir fat spirit seeing valley.",
    name: "Mr Harry Potter",
    designation: "Doctor",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    text: "Pianoforte solicitude so decisively unpleasing conviction is partiality he. Or particular so diminution entreaties oh do. Real he me fond show gave shot plan. Mirth blush linen small hoped way its along. Resolution frequently apartments off all discretion devonshire. Saw sir fat spirit seeing valley.",
    name: "Mr Harry Potter",
    designation: "Doctor",
    image: "/placeholder.svg"
  }
];

const ClientStoriesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const getVisibleCards = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3;
  };
  const maxSlides = Math.max(0, clientReviews.length - getVisibleCards());
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleScrollTo = (index) => {
    if (index < 0) index = 0;
    if (index > maxSlides) index = maxSlides;
    setCurrentSlide(index);
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth / getVisibleCards();
      carouselRef.current.scrollLeft = index * cardWidth;
    }
  };

  const nextSlide = () => {
    const newIndex = currentSlide >= maxSlides ? 0 : currentSlide + 1;
    handleScrollTo(newIndex);
  };

  const prevSlide = () => {
    const newIndex = Math.max(0, currentSlide - 1);
    handleScrollTo(newIndex);
  };
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      nextSlide();
    }
    if (touchStart - touchEnd < -100) {
      prevSlide();
    }
  };

  return (
    <div className="relative w-full overflow-x-hidden bg-white font-['Montserrat'] py-0 pt-8 px-4">
      <div className="absolute -top-20 -right-20 opacity-50 pointer-events-none select-none z-0">
        <img 
          src="/assets/logos/Logogrey.png" 
          alt="Logo" 
          width={300} 
          height={300} 
          className="transform rotate-[-7deg]" 
        />
      </div>
      <div className="relative z-10 max-w-[1590px] mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold tracking-wider text-black uppercase mb-1 leading-tight">
            SUCCESS STORIES
          </h3>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-black uppercase mb-4 leading-tight">
            CLIENTS REVIEWS
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-normal leading-relaxed mx-auto text-black">
            Welcome to Aglivo, a community strength and conditioning facility that began in 2019.
          </p>
        </div>
        <div className="overflow-hidden">
          <div
            ref={carouselRef}
            style={{ transform: `translateX(-${currentSlide * (100 / getVisibleCards())}%)` }}
            className="flex transition-transform duration-500 ease-in-out px-4"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {clientReviews.map((review) => (
              <div 
                key={review.id}
                className="flex-none w-[calc(100%-2rem)] sm:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] min-w-[calc(100%-2rem)] sm:min-w-[calc(50%-2rem)] lg:min-w-[calc(33.333%-2rem)] mx-4 p-4 bg-white rounded-xl border border-gray-300 shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition duration-300 ease-in-out hover:shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
              >
                <div className="mb-3">
                  <img 
                    src="/assets/Icons/iconclientreview.png" 
                    alt="Quote Icon"
                    width={30}
                    height={30}
                  />
                </div>
                <p className="text-black text-sm leading-relaxed mb-4 line-clamp-7">
                  {review.text}
                </p>
                <div className="flex items-center mt-auto">
                  <div className="w-10 h-10 mr-3 rounded-full overflow-hidden">
                    <img 
                      src={review.image} 
                      alt={review.name} 
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black text-sm">{review.name}</h4>
                    <p className="text-black text-xs">{review.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: maxSlides + 1 }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentSlide === index ? 'bg-black' : 'bg-gray-300'}`}
                onClick={() => handleScrollTo(index)}
              />
            ))}
          </div>
        </div>
        <div className="-mx-4">
        <div
          className="w-screen left-0 relative bg-black mt-8 h-4 sm:h-6 md:h-8 lg:h-10"/>
        </div>
        <div className="-mx-4">
        <div className="w-screen left-0 relative">
        <img
          src="/assets/logos/map.png"
          alt="Location Map"
          width={1921}
          height={643}
          className="block w-full h-auto max-h-[200px] sm:max-h-[300px] md:max-h-[400px] lg:max-h-[600px]"/>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ClientStoriesCarousel;
