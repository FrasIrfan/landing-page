'use client';

import React from 'react';

const TextDisplay = ({ items }) => {
    return (
      <div
        className="flex justify-between items-center w-full px-4 md:px-8"
        style={{
          height: '75px',
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="font-plus-jakarta-sans font-normal text-lg sm:text-xl md:text-3xl leading-none tracking-normal text-white capitalize align-middle animate-fade-in"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {item}
          </div>
        ))}
      </div>
    );
  };
  
  export default TextDisplay;
  
