"use client";

import React from "react";
import Image from "next/image";
import { Clock, DollarSign, Star, ThumbsUp } from "lucide-react";

export default function WhyUseFindAMover() {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6 text-orange-500" />,
      title: "Save time",
      description:
        "No need to ring around for quotes. Compare trusted movers in one place — companies come to you.",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-orange-500" />,
      title: "Save money",
      description:
        "Compare up to 7 free quotes and find a great deal that fits your moving budget.",
    },
    {
      icon: <Star className="w-6 h-6 text-orange-500" />,
      title: "Find quality movers",
      description:
        "Review mover profiles, feedback, and ratings to choose the perfect mover for your job.",
    },
    {
      icon: <ThumbsUp className="w-6 h-6 text-orange-500" />,
      title: "Free and easy to use",
      description:
        "Our platform is completely free and comes with no obligation to book.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Why use <span className="text-orange-500">Find a Mover?</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Find a Mover simplifies relocation by connecting you with verified,
            professional removalists. Compare quotes, read reviews, and move
            with confidence — all in one place.
          </p>
        </div>

        {/* Main Container */}
        <div className="bg-orange-50 rounded-3xl p-10 md:p-14 flex flex-col lg:flex-row items-center gap-12 shadow-sm">
          {/* Left Side - Text & Benefits */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="flex-shrink-0 p-3 bg-white rounded-full shadow-md">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image with Floating Icons */}
          <div className="relative w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <Image
                src="/images/group-friends-reading-cell-phone-messages.jpg"
                alt="Happy customers using Find a Mover"
                width={600}
                height={600}
                className="rounded-2xl shadow-md object-cover w-full h-full"
              />

              {/* Floating Icons */}
              <div className="absolute -left-6 top-10">
                <div className="bg-orange-500 rounded-full p-3 shadow-md animate-bounce-slow">
                  <Clock className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="absolute -right-6 top-16">
                <div className="bg-orange-500 rounded-full p-3 shadow-md animate-bounce-slow delay-100">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="absolute -left-5 bottom-24">
                <div className="bg-orange-500 rounded-full p-3 shadow-md animate-bounce-slow delay-200">
                  <Star className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="absolute -right-5 bottom-8">
                <div className="bg-orange-500 rounded-full p-3 shadow-md animate-bounce-slow delay-300">
                  <ThumbsUp className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Icon Animations */}
      <style jsx global>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .delay-100 {
          animation-delay: 0.3s;
        }
        .delay-200 {
          animation-delay: 0.6s;
        }
        .delay-300 {
          animation-delay: 0.9s;
        }
      `}</style>
    </section>
  );
}
