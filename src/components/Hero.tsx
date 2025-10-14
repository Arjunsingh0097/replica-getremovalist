"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  heading?: string;
  subheading?: string;
}

export default function Hero({
  heading = "Everything you need for your next move.",
  subheading = "View pricing, read reviews and book professional interstate and local removalists online.",
}: HeroProps) {
  const images = [
    "/images/interstateremoval.png",
    "/images/HomeRemoval.png",
    "/images/furnitureremoal.png",
    "/images/removajob.png",
    "/images/Herosection.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade out
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); // fade back in
      }, 500); // duration of fade out
    }, 5000); // image changes every 5s

    return () => clearInterval(interval);
  }, []); // Empty dependency array since images array is static

  return (
    <section className="relative flex flex-col items-center justify-center w-full bg-white py-8 sm:py-16 pt-24 sm:pt-32">
      {/* Image Container */}
      <div className="relative w-full max-w-7xl rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl mx-4 sm:mx-0">
        {/* Background Image with smooth transition */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[450px]">
          <Image
            src={images[currentImageIndex]}
            alt="Moving service background"
            fill
            priority
            className={`object-cover object-top brightness-[0.8] transition-opacity duration-1000 ease-in-out ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-2 sm:mb-3 drop-shadow-lg">
            {heading}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-6 sm:mb-8 md:mb-10 drop-shadow-md max-w-2xl">
            {subheading}
          </p>
        </div>

        {/* Welcome Bubble */}
        <div className="absolute top-3 right-3 sm:top-6 sm:right-6 bg-white text-orange-600 font-semibold px-2 py-1 sm:px-4 sm:py-2 rounded-full shadow-md text-xs sm:text-sm flex items-center gap-1 sm:gap-2">
          <span>👋 Welcome back!</span>
          <button className="text-gray-600 hover:text-orange-600 underline text-xs sm:text-sm hidden sm:block">
            Click here to resume
          </button>
        </div>
      </div>

      {/* Floating Search Bar */}
      <div className="relative -mt-6 sm:-mt-8 md:-mt-10 w-full flex justify-center px-4 sm:px-0">
        <div className="bg-white rounded-2xl sm:rounded-full shadow-xl flex flex-col sm:flex-row items-stretch sm:items-center max-w-4xl w-full sm:w-[90%] px-3 py-3 sm:px-6 sm:py-4 gap-3">
          {/* Full-width Dropdown */}
          <select
            className="flex-1 bg-gray-100 border border-gray-200 rounded-xl sm:rounded-full px-3 py-3 sm:px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300 text-sm sm:text-base"
            defaultValue=""
          >
            <option value="" disabled>
              Select type of move
            </option>
            <option>Moving Local / Same State</option>
            <option>Moving Interstate</option>
            <option>Moving Office</option>
            <option>Moving a Single Item</option>
            <option>Moving a Few Items</option>
            <option>Moving Furniture Items</option>
            <option>Moving a Piano</option>
            <option>Moving a Pool Table</option>
            <option>Gumtree / eBay Pickups</option>
            <option>Moving Fragile Items</option>
            <option>Rubbish Removal</option>
          </select>

          {/* Get Quote Button */}
          <Link
            href="/job/new"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-3 sm:px-6 rounded-xl sm:rounded-full transition whitespace-nowrap text-center text-sm sm:text-base"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
