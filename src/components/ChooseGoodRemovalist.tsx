"use client";

import React from "react";
import Image from "next/image";

export default function ChooseGoodRemovalist() {
  const tips = [
    {
      number: "1",
      keyword: "Research",
      description:
        "Read reviews from previous customers to get an idea of the removalist's reputation.",
    },
    {
      number: "2",
      keyword: "Check credentials",
      description:
        "Ensure the removalist is licensed and insured to protect your belongings during the move.",
    },
    {
      number: "3",
      keyword: "Get quotes",
      description:
        "Compare at least three quotes to evaluate pricing, services, and inclusions.",
    },
    {
      number: "4",
      keyword: "Look for experience",
      description:
        "Choose a removalist with a proven track record and years of experience.",
    },
    {
      number: "5",
      keyword: "Ask questions",
      description:
        "Clarify what’s included in the quote, service details, and insurance coverage.",
    },
    {
      number: "6",
      keyword: "Check for hidden costs",
      description:
        "Ensure transparency in all pricing — avoid unexpected fees.",
    },
    {
      number: "7",
      keyword: "Look for quality equipment",
      description:
        "Opt for movers who use professional equipment and proper packing materials.",
    },
    {
      number: "8",
      keyword: "Check availability",
      description:
        "Confirm the mover’s availability on your preferred moving date.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black font-['DM_Sans'] mb-3 sm:mb-4">
            How do I choose a good removalist?
          </h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
            Choosing the right removalist can make your move seamless and
            stress-free. Here are a few expert tips to help you pick the right
            one.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-orange-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12 shadow-sm">
          {/* Left Side - Tips */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
              {tips.map((tip, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 sm:space-x-4 hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold shadow-md">
                    {tip.number}
                  </div>
                  <div>
                    <span className="font-bold text-black font-['DM_Sans'] text-sm sm:text-base">
                      {tip.keyword}:
                    </span>
                    <span className="text-gray-700 ml-1 sm:ml-2 text-xs sm:text-base">
                      {tip.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-4 sm:mt-6">
              <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4">
                Find a Mover makes it simple to connect with the right
                removalist for your job.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-colors duration-200 flex items-center text-sm sm:text-base">
                Start Getting Quotes
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <Image
                src="/images/removajob.png"
                alt="Professional removalist helping move items"
                width={600}
                height={600}
                className="rounded-2xl shadow-md object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
