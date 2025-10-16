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
          <div className="flex-1 relative">
            <select
              className="w-full bg-gray-100 border border-gray-200 rounded-xl sm:rounded-full px-3 py-3 sm:px-4 pr-8 sm:pr-10 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300 text-sm sm:text-base appearance-none"
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
            {/* Custom Dropdown Arrow */}
            <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </div>
          </div>

          {/* Get Quote Button */}
          <Link
            href="/job/new"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-3 sm:px-6 rounded-xl sm:rounded-full transition whitespace-nowrap text-center text-sm sm:text-base"
          >
            Get Quote
          </Link>
        </div>
      </div>

      {/* Google Reviews Section */}
      <div className="mt-8 sm:mt-12 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Google Logo */}
        <div className="mb-4 sm:mb-6">
          <div className="inline-flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              className="mr-2"
            >
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-xl font-bold text-gray-800">Google</span>
          </div>
        </div>

        {/* Review Text */}
        <div className="text-center">
          <p className="text-base sm:text-lg text-gray-700 font-['DM_Sans'] leading-relaxed">
            <span className="font-bold text-gray-900">4.7</span>{" "}
            <span className="text-gray-600">out of</span>{" "}
            <span className="font-bold text-gray-900">5</span>{" "}
            <span className="text-gray-600">average rating on Google from over</span>{" "}
            <span className="font-bold text-orange-500">500+ reviews</span>
          </p>
        </div>
      </div>
    </section>
  );
}
