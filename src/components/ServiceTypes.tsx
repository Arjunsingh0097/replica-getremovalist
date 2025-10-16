"use client";

import React from "react";

export default function ServiceTypes() {
  const services = [
    { title: "Moving Local / Same State", icon: "🏡" },
    { title: "Moving Interstate", icon: "🚛" },
    { title: "Moving Office", icon: "🏢" },
    { title: "Moving a Single Item", icon: "📦" },
    { title: "Moving a Few Items", icon: "🪑" },
    { title: "Moving Furniture Items", icon: "🛋️" },
    { title: "Moving a Piano", icon: "🎹" },
    { title: "Moving a Pool Table", icon: "🎱" },
    { title: "Gumtree / eBay Pickups", icon: "💻" },
    { title: "Moving Fragile Items", icon: "🍷" },
    { title: "Rubbish Removal", icon: "🗑️" },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">
            What service types can I get quotes for?
          </h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Find a Mover is built for moves of all shapes and sizes. Whether you
            are moving local, interstate, or just need a single item moved — we
            have you covered.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center p-3 sm:p-4 md:p-6"
            >
              {/* Icon */}
              <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 md:mb-4 transform transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-black font-semibold text-xs sm:text-sm md:text-base hover:text-orange-500 transition-colors duration-200 underline-offset-2 leading-tight">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-14 md:mt-16">
          <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 px-4 sm:px-0">
            Not sure what kind of move you need? Let us help you find the best
            fit.
          </p>
          <a 
            href="/job/new"
            className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 sm:px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
          >
            Get Free Quotes
          </a>
        </div>
      </div>
    </section>
  );
}
