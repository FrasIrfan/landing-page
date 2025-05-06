"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const clientReviews = [
  {
    id: 1,
    text: "Pianoforte solicitude so decisively unpleasing conviction is partiality he. Or particular so diminution entreaties oh do. Real he me fond show gave shot plan. Mirth blush linen small hoped way its along. Resolution frequently apartments off all discretion devonshire. Saw sir fat spirit seeing valley.",
    name: "Mr Harry Potter",
    designation: "Doctor",
  },
  {
    id: 2,
    text: "Or particular so diminution entreaties oh do. Real he me fond show gave shot plan. Mirth blush linen small hoped way its along. Resolution frequently apartments off all discretion devonshire. Saw sir fat spirit seeing valley.",
    name: "Mr Harry Potter",
    designation: "Doctor",
  },
  {
    id: 3,
    text: "Mirth blush linen small hoped way its along. Resolution frequently apartments off all discretion devonshire. Saw sir fat spirit seeing valley. Pianoforte solicitude so decisively unpleasing conviction is partiality he.",
    name: "Mr Harry Potter",
    designation: "Doctor",
  },
  {
    id: 4,
    text: "Saw sir fat spirit seeing valley. Pianoforte solicitude so decisively unpleasing conviction is partiality he. Or particular so diminution entreaties oh do. Real he me fond show gave shot plan.",
    name: "Mr Harry Potter",
    designation: "Doctor",
  },
  {
    id: 5,
    text: "Real he me fond show gave shot plan. Mirth blush linen small hoped way its along. Resolution frequently apartments off all discretion devonshire. Saw sir fat spirit seeing valley. Pianoforte solicitude so decisively.",
    name: "Mr Harry Potter",
    designation: "Doctor",
  },
];

const ClientStoriesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const getVisibleCards = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3;
  };

  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };

    handleResize(); // Set initial value

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxSlides = Math.max(0, clientReviews.length - visibleCards);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, maxSlides]);

  const handleScrollTo = (index) => {
    const clampedIndex = Math.min(Math.max(index, 0), maxSlides);
    setCurrentSlide(clampedIndex);
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / clientReviews.length;
      carouselRef.current.scrollLeft = clampedIndex * cardWidth;
    }
  };

  const nextSlide = () => {
    handleScrollTo(currentSlide >= maxSlides ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    handleScrollTo(currentSlide <= 0 ? maxSlides : currentSlide - 1);
  };

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) nextSlide();
    if (touchStart - touchEnd < -100) prevSlide();
  };

  return (
    <div className="relative  w-full overflow-hidden bg-gradient-to-r from-[#0b1825] via-[#121829] to-[#280a1e] font-['Montserrat']">
      {/* Background Logo */}
      <div className="absolute top-20 -right-20 opacity-50 pointer-events-none select-none z-0">
        <Image
          src="/assets/logos/Logogrey.png"
          alt="Logo"
          width={300}
          height={300}
          className="transform rotate-[-7deg]"
          priority
        />
      </div>

      <div className="relative z-10 w-full max-w-[1590px] mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h4 className="text-lg font-medium tracking-wide text-white">
            S U C C E S S &nbsp; S T O R I E S
          </h4>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white uppercase mb-4 leading-tight">
            CLIENTS REVIEWS
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-normal leading-relaxed mx-auto text-white">
            Welcome to Aglivo, a community strength and conditioning facility
            that began in 2019.
          </p>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden ">
          <div
            ref={carouselRef}
            className="flex px-4 gap-8"
            style={{
              transform: `translateX(-${
                (currentSlide * 100) / clientReviews.length
              }%)`,
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {clientReviews.map((review) => (
              <div
                key={review.id}
                className="flex-none hover:scale-105 ease-in-out bg-opacity-30 backdrop-blur-sm w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] mx-0 p-8 bg-black rounded-xl transition duration-300 hover:shadow-lg shadow-white/10 flex flex-col min-h-[320px]"
              >
                <div className="mb-4">
                  <Image
                    src="/assets/Icons/quotesicon.png"
                    alt="Quote Icon"
                    width={30}
                    height={30}
                  />
                </div>
                <p className="text-white text-sm mb-6 flex-grow">
                  {review.text}
                </p>
                <div className="flex items-center mt-auto">
                  <div className="w-10 h-10 mr-3 rounded-full overflow-hidden">
                    <Image
                      src="/assets/logos/client_logo.png"
                      alt={review.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">
                      {review.name}
                    </h4>
                    <p className="text-white text-xs">{review.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: maxSlides + 1 }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentSlide === index ? "bg-white" : "bg-gray-600"
                }`}
                onClick={() => handleScrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Map Section - Full Width */}
      <div className="w-full">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <Image
            src="/assets/logos/map.png"
            alt="Location Map"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="w-full"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default ClientStoriesCarousel;
