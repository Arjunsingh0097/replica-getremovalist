"use client";

import React from "react";
import { Truck } from "lucide-react";

export default function RecentlyBookedMoves() {
  const moves = [
    {
      name: "Zain",
      role: "local removalist",
      items: "12.85 cubic meters of items from a storage facility",
      route: "Greenacre NSW to Wagga Wagga NSW",
      price: "$1900.00",
    },
    {
      name: "Usman",
      role: "interstate removalist",
      items: "22.75 cubic meters of items from a 3 bedroom house",
      route: "Crace ACT to Rockhampton QLD",
      price: "$3289.00",
    },
    {
      name: "Keisha",
      role: "local removalist",
      items: "40.57 cubic meters of items from a 3 bedroom house",
      route: "Lithgow NSW to Dubbo NSW",
      price: "$2750.00",
    },
    {
      name: "Liz",
      role: "interstate removalist",
      items: "21.88 cubic meters of items from a 2 bedroom house",
      route: "Enmore NSW to Melbourne VIC",
      price: "$2200.00",
    },
    {
      name: "Alicia",
      role: "interstate removalist",
      items: "3.4 cubic meters of items from a 1 bedroom house",
      route: "Dalmeny NSW to Townsville QLD",
      price: "$1750.00",
    },
    {
      name: "Arthur",
      role: "local removalist",
      items: "10.05 cubic meters of items from a 1 bedroom house",
      route: "North St Marys NSW to Orange NSW",
      price: "$1190.00",
    },
    {
      name: "Christopher",
      role: "local removalist",
      items: "30.00 cubic meters of items from a 3 bedroom house",
      route: "South Gladstone QLD to Townsville QLD",
      price: "$3290.00",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Section Header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black font-['DM_Sans'] mb-3 sm:mb-4">
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
              {/* Top Section - Mover Information */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-orange-500 font-['DM_Sans'] text-lg">{move.name}</h3>
                  <p className="text-gray-500 font-['DM_Sans'] text-sm">{move.role}</p>
                </div>
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Truck className="w-5 h-5 text-orange-500" />
                </div>
              </div>

              {/* Middle Section - Move Details */}
              <div className="mb-4">
                <p className="font-bold text-black font-['DM_Sans'] text-sm leading-tight mb-2">
                  moving {move.items}
                </p>
                <p className="text-gray-600 font-['DM_Sans'] text-sm">
                  going from {move.route}
                </p>
              </div>

              {/* Separator Line */}
              <div className="border-t border-gray-200 mb-4"></div>

              {/* Bottom Section - Price */}
              <div>
                <p className="font-bold text-black font-['DM_Sans'] text-lg">{move.price}</p>
              </div>
            </div>
          ))}

          {/* Duplicate set for infinite loop */}
          {moves.map((move, index) => (
            <div
              key={`dup-${index}`}
              className="flex-none w-72 sm:w-80 bg-white border border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Top Section - Mover Information */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-orange-500 font-['DM_Sans'] text-lg">{move.name}</h3>
                  <p className="text-gray-500 font-['DM_Sans'] text-sm">{move.role}</p>
                </div>
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Truck className="w-5 h-5 text-orange-500" />
                </div>
              </div>

              {/* Middle Section - Move Details */}
              <div className="mb-4">
                <p className="font-bold text-black font-['DM_Sans'] text-sm leading-tight mb-2">
                  moving {move.items}
                </p>
                <p className="text-gray-600 font-['DM_Sans'] text-sm">
                  going from {move.route}
                </p>
              </div>

              {/* Separator Line */}
              <div className="border-t border-gray-200 mb-4"></div>

              {/* Bottom Section - Price */}
              <div>
                <p className="font-bold text-black font-['DM_Sans'] text-lg">{move.price}</p>
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
