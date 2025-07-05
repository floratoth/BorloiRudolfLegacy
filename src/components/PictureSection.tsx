"use client";

// src/components/PictureSection.tsx

import React from 'react';

const PictureSection: React.FC = () => {
  return (
    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto flex justify-center items-center h-60">
        {/* Left Image */}
        <img
          src="/images/hangjegy.jpg"
          alt="Left Image"
          className="h-full w-1/3 object-cover"
        />

        {/* Middle Image */}
        <img
          src="/images/F_20.jpg"
          alt="Main Image"
          className="h-full w-1/3 object-cover mx-2"
        />

        {/* Right Image */}
        <img
          src="/images/zongora.jpg"
          alt="Right Image"
          className="h-full w-1/3 object-cover"
        />
      </div>
    </div>
  );
};

export default PictureSection;
