"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const realReviews = [
  {
    id: 1,
    text: "Pianoforte solicitude so decisively unpleasing conviction is partiality he. Or particular so diminution entreaties oh do. Real he me fond show gave shot plan. Mirth blush linen small hoped way its along. Resolution frequently apartments off all discretion devonshire. Saw sir fat spirit seeing valley.",
    name: "Mr Harry Potter",
    designation: "Doctor",
    rating: 5,
  },
  {
    id: 2,
    text: "Or particular so diminution entreaties oh do. Real he me fond show gave shot plan. Mirth blush linen small hoped way its along. Resolution frequently apartments off all discretion devonshire. Saw sir fat spirit seeing valley.",
    name: "Ms Hermione Granger",
    designation: "Engineer",
    rating: 4,
  },
  {
    id: 3,
    text: "Mirth blush linen small hoped way its along. Resolution frequently apartments off all discretion devonshire. Saw sir fat spirit seeing valley. Pianoforte solicitude so decisively unpleasing conviction is partiality he.",
    name: "Mr Ron Weasley",
    designation: "Entrepreneur",
    rating: 5,
  },
  {
    id: 4,
    text: "Saw sir fat spirit seeing valley. Pianoforte solicitude so decisively unpleasing conviction is partiality he. Or particular so diminution entreaties oh do. Real he me fond show gave shot plan.",
    name: "Ms Luna Lovegood",
    designation: "Athlete",
    rating: 4,
  },
  {
    id: 5,
    text: "Real he me fond show gave shot plan. Mirth blush linen small hoped way its along. Resolution frequently apartments off all discretion devonshire. Saw sir fat spirit seeing valley. Pianoforte solicitude so decisively.",
    name: "Mr Neville Longbottom",
    designation: "Professor",
    rating: 5,
  },
];

const ClientStoriesCarousel = () => {
  const totalSlides = realReviews.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const autoplayRef = useRef(null);

  const getVisibleCards = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3;
  };

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Simplified navigation without clones
  const goToSlide = (index) => {
    // Handle wrapping around in both directions
    let newIndex = index;
    if (newIndex < 0) {
      newIndex = totalSlides - visibleCards;
    } else if (newIndex > totalSlides - visibleCards) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => goToSlide(currentIndex + 1);
  const prevSlide = () => goToSlide(currentIndex - 1);

  // Pagination navigation
  const goToPage = (pageIndex) => {
    goToSlide(pageIndex * visibleCards);
  };

  // Reset autoplay timer when slides change manually
  useEffect(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }

    if (!isPaused) {
      autoplayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [currentIndex, isPaused]);

  // Generate star ratings component
  const renderStars = (rating) => {
    return (
      <div className="flex mt-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            fill={i < rating ? "#FFD700" : "none"}
            stroke={i < rating ? "#FFD700" : "#cccccc"}
            className="mr-1"
          />
        ))}
      </div>
    );
  };

  // Calculate the number of pagination dots needed
  const totalPages = Math.max(1, Math.ceil((totalSlides - visibleCards + 1) / 1));
  const currentPage = Math.floor(currentIndex / 1);

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#0b1825] via-[#121829] to-[#280a1e] font-['Montserrat']">
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

        <div className="relative overflow-hidden px-6 group">
          {/* Left Arrow Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-r-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Previous slide"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Arrow Navigation */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-l-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Next slide"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Container */}
          <div 
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex gap-8 transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
                width: `${(totalSlides / visibleCards) * 100}%`,
              }}
            >
              {realReviews.map((review, index) => (
                <div
                  key={index}
                  className={`flex-none p-8 bg-opacity-30 backdrop-blur-sm bg-black rounded-xl transition-all duration-300 shadow-[0_4px_30px_rgba(255,255,255,0.1)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.3)] flex flex-col min-h-[320px] ${
                    activeIndex === index
                      ? "scale-105 shadow-[0_4px_30px_rgba(255,255,255,0.4)]"
                      : "hover:scale-105"
                  }`}
                  style={{
                    width: `calc((100% / ${totalSlides}) - ${(totalSlides - 1) * 8 / totalSlides}px)`,
                  }}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <Image
                      src="/assets/Icons/quotesicon.png"
                      alt="Quote Icon"
                      width={30}
                      height={30}
                    />
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <p className="text-white text-sm mb-6 flex-grow">
                    {review.text}
                  </p>
                  <div className="flex items-center mt-auto">
                    <div className="w-10 h-10 mr-3 rounded-full overflow-hidden border-2 border-transparent hover:border-white transition-all duration-300">
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
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 gap-3">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPage ? "bg-white w-6" : "bg-gray-600 hover:bg-gray-400"
                }`}
                onClick={() => goToPage(index)}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientStoriesCarousel;