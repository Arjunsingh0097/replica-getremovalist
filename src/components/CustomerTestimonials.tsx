"use client";

import React from "react";

export default function CustomerTestimonials() {
  const testimonials = [
    {
      text: "Great way to get quotes and find a mover! Efficient, easy, and wonderful responses. Would highly recommend this system. Hope that more tasks follow suit too. Thanks!",
      author: "Carolyn Davis",
      rating: 5,
    },
    {
      text: "Find a Mover provides an easy way to find a company to move an item or a whole house load. It has reviews of all movers — the best way to choose who you want. Well done Find a Mover, I found the right mover for me.",
      author: "Chris Savill",
      rating: 5,
    },
    {
      text: "Multiple responses and great detail returned. The capped quotes meant I wasn’t overwhelmed. Got an excellent removalist using the service — highly recommend!",
      author: "Mark Dickson",
      rating: 5,
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            What our customers are saying
          </h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
            Hear from satisfied Australians who found trusted removalists
            through Find a Mover.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12 md:mb-14">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-100 border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              {/* Quote Icon */}
              <div className="flex items-start mb-3 sm:mb-4">
                <span className="text-orange-500 text-3xl sm:text-4xl leading-none">
                  "
                </span>
              </div>

              {/* Text */}
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 italic">
                {testimonial.text}
              </p>

              {/* Stars */}
              <div className="flex mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.781 1.402 8.178L12 18.896l-7.336 3.855 1.402-8.178L.132 9.21l8.2-1.192z" />
                  </svg>
                ))}
              </div>

              {/* Author */}
              <p className="text-gray-900 text-sm sm:text-base font-semibold">
                — {testimonial.author}
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">
                (Google Review)
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
