"use client";

import React from "react";
import { Calendar, Truck, Star, Clock, Smile } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: Calendar,
      number: "160,000+",
      description: "Total moves booked through Find a Mover.",
    },
    {
      icon: Truck,
      number: "300+",
      description:
        "Removalists Australia-wide currently active in our network.",
    },
    {
      icon: Star,
      number: "25,000+",
      description: "Mover reviews left by genuine Find a Mover customers.",
    },
    {
      icon: Clock,
      number: "10 Years",
      description: "In operation and still the best way to find a mover.",
    },
    {
      icon: Smile,
      number: "4.65 / 5",
      description: "Average mover rating on our platform.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black font-['DM_Sans'] mb-8 sm:mb-10 md:mb-12">
          Why Australians Trust{" "}
          <span className="text-orange-500">Find a Mover</span>
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-4 sm:p-6 flex flex-col items-center text-center border border-gray-100"
            >
              {/* Icon */}
              <div className="flex justify-center items-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-orange-100 mb-3 sm:mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 text-orange-600 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Number */}
              <h3 className="text-2xl sm:text-3xl font-bold text-black font-['DM_Sans'] mb-2">
                {stat.number}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
