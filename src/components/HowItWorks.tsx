"use client";

import React from "react";
import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Tell us about your move",
      description:
        "In less than a few minutes, tell us what you need moved, where you need it moved to and when you need it done.",
    },
    {
      number: "2",
      title: "Compare quotes from removalists",
      description:
        "Moving companies ranging from independent house movers to large well-known removal companies then place quotes to win your business.",
    },
    {
      number: "3",
      title: "Choose your favourite mover",
      description:
        "You can then select a quote based on the feedback and reviews of the mover, their availability, and their quoted price.",
    },
    {
      number: "4",
      title: "Leave a review",
      description:
        "Help out the community by leaving a review of your experience.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black font-['DM_Sans'] mb-3 sm:mb-4">
            How it works
          </h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
            Discover how Find a Mover makes relocating simple, transparent, and
            stress-free.
          </p>
        </div>

        {/* Main Container */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10 sm:gap-12">
          {/* Left Side - Image */}
          <div className="w-full lg:w-[60%] flex justify-center">
            <div className="relative rounded-3xl overflow-hidden w-full max-w-3xl shadow-lg">
              <Image
                src="/images/interstateremoval.png"
                alt="Professional movers at work"
                width={900}
                height={600}
                className="object-cover w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] rounded-3xl"
              />
            </div>
          </div>

          {/* Right Side - Steps */}
          <div className="w-full lg:w-[40%]">
            <div className="relative">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 sm:space-x-6 mb-6 sm:mb-8 md:mb-10 text-left"
                >
                  {/* Step Number */}
                  <div className="flex flex-col items-center relative">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-lg shadow-md">
                      {step.number}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-black font-['DM_Sans'] mb-1 sm:mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
