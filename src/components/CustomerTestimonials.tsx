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
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#1C2235] to-[#121826]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            What our customers are saying
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
            Hear from satisfied Australians who found trusted removalists
            through Find a Mover.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12 md:mb-14">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg backdrop-blur-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Quote Icon */}
              <div className="flex items-start mb-3 sm:mb-4">
                <span className="text-orange-500 text-3xl sm:text-4xl leading-none">"</span>
              </div>

              {/* Text */}
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 italic">
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
              <p className="text-white text-sm sm:text-base font-semibold">
                — {testimonial.author}
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">(Google Review)</p>
            </div>
          ))}
        </div>

        {/* Google Rating Summary */}
        <div className="text-center">
          <div className="flex justify-center mb-3 sm:mb-4">
            {/* Google Logo */}
            <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 24 24">
              <path
                fill="#EA4335"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
          </div>
          <p className="text-gray-300 text-base sm:text-lg px-4 sm:px-0">
            <span className="font-semibold text-white">4.7 out of 5</span>{" "}
            average rating on Google from over{" "}
            <span className="font-semibold text-orange-400">500+ reviews</span>
          </p>
        </div>
      </div>
    </section>
  );
}
