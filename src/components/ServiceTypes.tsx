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
    <section className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            What service types can I get quotes for?
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Find a Mover is built for moves of all shapes and sizes. Whether you
            are moving local, interstate, or just need a single item moved — we
            have you covered.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center p-6"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-blue-900 font-semibold text-sm md:text-base hover:text-orange-500 transition-colors duration-200 underline-offset-2">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-700 text-lg mb-6">
            Not sure what kind of move you need? Let us help you find the best
            fit.
          </p>
          <a 
            href="/job/new"
            className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Get Free Quotes
          </a>
        </div>
      </div>
    </section>
  );
}
