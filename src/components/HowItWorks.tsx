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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            How it works
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Discover how Find a Mover makes relocating simple, transparent, and
            stress-free.
          </p>
        </div>

        {/* Main Container */}
        <div className="bg-orange-50 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10 shadow-sm">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden w-full max-w-md shadow-md">
              <Image
                src="/images/interstateremoval.png"
                alt="Professional movers at work"
                width={600}
                height={400}
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>
          </div>

          {/* Right Side - Steps */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-6 mb-10 text-left"
                >
                  {/* Step Number */}
                  <div className="flex flex-col items-center relative">
                    <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                      {step.number}
                    </div>
                    {/* Connecting Line */}
                    {index < steps.length - 1 && (
                      <div className="w-px h-10 bg-gray-300 mt-1"></div>
                    )}
                  </div>

                  {/* Step Content */}
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base">
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
