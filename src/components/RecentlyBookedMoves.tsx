"use client";

import React from "react";
import { Truck } from "lucide-react";

export default function RecentlyBookedMoves() {
  const moves = [
    {
      name: "Zain",
      description:
        "booked a local removalist moving 12.85 cubic meters of items from a storage facility going from Greenacre NSW to Wagga Wagga NSW for $1900.00.",
      iconColor: "text-orange-500",
    },
    {
      name: "Usman",
      description:
        "booked an interstate removalist moving 22.75 cubic meters of items from a 3 bedroom house going from Crace ACT to Rockhampton QLD for $3289.00.",
      iconColor: "text-orange-500",
    },
    {
      name: "Keisha",
      description:
        "booked a local removalist moving 40.57 cubic meters of items from a 3 bedroom house going from Lithgow NSW to Dubbo NSW for $2750.00.",
      iconColor: "text-blue-500",
    },
    {
      name: "Liz",
      description:
        "booked an interstate removalist moving 21.88 cubic meters of items from a 2 bedroom house going from Enmore NSW to Melbourne VIC for $2200.00.",
      iconColor: "text-green-500",
    },
    {
      name: "Alicia",
      description:
        "booked an interstate removalist moving 4.94 cubic meters of items from a 1 bedroom house going from Dalmeny NSW to Townsville QLD for $1750.00.",
      iconColor: "text-purple-500",
    },
    {
      name: "Arthur",
      description:
        "booked a local removalist moving 10.05 cubic meters of items from a 1 bedroom house going from North St Marys NSW to Orange NSW for $1190.00.",
      iconColor: "text-yellow-500",
    },
    {
      name: "Christopher",
      description:
        "booked a local removalist moving 30.00 cubic meters of items from a 3 bedroom house going from South Gladstone QLD to Townsville QLD for $3290.00.",
      iconColor: "text-teal-500",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Section Header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">
          Recently <span className="text-orange-500">Booked Moves</span>
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mb-8 sm:mb-10 md:mb-12 px-4 sm:px-0">
          Every day, Australians choose{" "}
          <span className="font-semibold text-orange-500">Find a Mover</span> to
          make moving easy, fast, and stress-free.
        </p>
      </div>

      {/* Scrolling Cards */}
      <div className="overflow-hidden w-full">
        <div className="flex animate-scroll gap-4 sm:gap-6 px-4">
          {/* Original set */}
          {moves.map((move, index) => (
            <div
              key={index}
              className="flex-none w-72 sm:w-80 bg-white border border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <p className="text-black text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">
                <span className="font-bold text-orange-500">{move.name}</span>{" "}
                {move.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex-1 border-b border-dashed border-gray-300"></div>
                <div
                  className={`ml-3 sm:ml-4 ${move.iconColor} bg-gray-50 p-2 rounded-full shadow-sm`}
                >
                  <Truck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </div>
          ))}

          {/* Duplicate set for infinite loop */}
          {moves.map((move, index) => (
            <div
              key={`dup-${index}`}
              className="flex-none w-72 sm:w-80 bg-white border border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <p className="text-black text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">
                <span className="font-bold text-orange-500">{move.name}</span>{" "}
                {move.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex-1 border-b border-dashed border-gray-300"></div>
                <div
                  className={`ml-3 sm:ml-4 ${move.iconColor} bg-gray-50 p-2 rounded-full shadow-sm`}
                >
                  <Truck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient Edge Fade */}
      <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
