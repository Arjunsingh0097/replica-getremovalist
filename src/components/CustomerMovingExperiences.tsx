"use client";

import React from "react";

export default function CustomerMovingExperiences() {
  const reviews = [
    {
      customer: "Claudine",
      date: "23rd of Aug",
      jobType: "delivery job",
      company: "Best Price Interstate Removals Australia",
      quote: "Job well done. Quick, great communication, friendly people.",
      rating: 5
    },
    {
      customer: "Ed",
      date: "11th of Sep",
      jobType: "local removalist job",
      company: "Exclusive Moving & Transport",
      quote: "Fantastic service in all aspects, highly recommended",
      rating: 5
    },
    {
      customer: "Michael",
      date: "6th of Aug",
      jobType: "interstate removalist job",
      company: "On Time Removals",
      quote: "Great Team, Very professional",
      rating: 5
    },
    {
      customer: "Caroline",
      date: "8th of Sep",
      jobType: "interstate removalist job",
      company: "On Time Removals",
      quote: "Highly recommend On Time Removals. They took care of everything in a very professional way. Efficient and value for money having peace of mind with our move from Bowral in NSW to Brisbane.",
      rating: 5
    },
    {
      customer: "Jessica",
      date: "12th of Sep",
      jobType: "delivery job",
      company: "Moushs Removals",
      quote: "Excellent service from start to finish. Very professional team.",
      rating: 5
    },
    {
      customer: "Robert",
      date: "13th of Aug",
      jobType: "interstate removalist job",
      company: "Kahlon Movers",
      quote: "Outstanding service, would definitely use again.",
      rating: 5
    },
    {
      customer: "Nicole",
      date: "7th of Sep",
      jobType: "delivery job",
      company: "StarCity Removals Pty Ltd",
      quote: "Great communication and efficient service throughout.",
      rating: 5
    },
    {
      customer: "David",
      date: "15th of Aug",
      jobType: "local removalist job",
      company: "Premium Movers",
      quote: "Professional team, handled everything with care.",
      rating: 5
    },
    {
      customer: "Sarah",
      date: "20th of Aug",
      jobType: "interstate removalist job",
      company: "Swift Movers",
      quote: "Amazing service! Everything was handled perfectly.",
      rating: 5
    },
    {
      customer: "James",
      date: "25th of Aug",
      jobType: "local removalist job",
      company: "Reliable Removals",
      quote: "Very professional and efficient team. Highly recommended!",
      rating: 5
    },
    {
      customer: "Emma",
      date: "30th of Aug",
      jobType: "delivery job",
      company: "Express Movers",
      quote: "Great communication and timely service throughout.",
      rating: 5
    },
    {
      customer: "Mark",
      date: "5th of Sep",
      jobType: "interstate removalist job",
      company: "Pro Movers",
      quote: "Excellent value for money and professional service.",
      rating: 5
    },
    {
      customer: "Lisa",
      date: "10th of Sep",
      jobType: "local removalist job",
      company: "City Movers",
      quote: "Outstanding team, made our move stress-free.",
      rating: 5
    },
    {
      customer: "Tom",
      date: "15th of Sep",
      jobType: "delivery job",
      company: "Fast Track Removals",
      quote: "Quick, reliable, and very professional service.",
      rating: 5
    },
    {
      customer: "Anna",
      date: "18th of Sep",
      jobType: "interstate removalist job",
      company: "Secure Movers",
      quote: "Fantastic experience from start to finish.",
      rating: 5
    },
    {
      customer: "Chris",
      date: "22nd of Sep",
      jobType: "local removalist job",
      company: "Elite Moving Services",
      quote: "Highly professional team with excellent attention to detail.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            What our customers are saying about their recent moving experiences
          </h2>
          <p className="text-lg text-gray-700">
            Hear what the customers think of their moving experience and the movers they used
          </p>
        </div>

        {/* Reviews Grid with Animation */}
        <div className="relative overflow-hidden h-96">
          <div className="animate-float-up">
            {/* First set of cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {reviews.slice(0, 8).map((review, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                  {/* Customer Name and Job Details */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <span className="font-semibold text-blue-600">{review.customer}</span> posted a {review.jobType} on the {review.date} and received a number of quotes. {review.customer} selected <span className="font-bold">{review.company}</span> for the job and left the following feedback:
                    </p>
                  </div>

                  {/* Quote Icon */}
                  <div className="mb-3">
                    <span className="text-red-500 text-2xl font-bold">"</span>
                    <span className="text-red-500 text-2xl font-bold">"</span>
                  </div>

                  {/* Customer Quote */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
                    "{review.quote}"
                  </p>

                  {/* Star Rating */}
                  <div className="flex items-center mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.781 1.402 8.178L12 18.896l-7.336 3.855 1.402-8.178L.132 9.21l8.2-1.192z"/>
                      </svg>
                    ))}
                  </div>

                  {/* Rating Text */}
                  <p className="text-gray-700 text-sm">
                    {review.rating} out of 5
                  </p>
                </div>
              ))}
            </div>

            {/* Second set of cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {reviews.slice(8, 16).map((review, index) => (
                <div key={`second-${index}`} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                  {/* Customer Name and Job Details */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <span className="font-semibold text-blue-600">{review.customer}</span> posted a {review.jobType} on the {review.date} and received a number of quotes. {review.customer} selected <span className="font-bold">{review.company}</span> for the job and left the following feedback:
                    </p>
                  </div>

                  {/* Quote Icon */}
                  <div className="mb-3">
                    <span className="text-red-500 text-2xl font-bold">"</span>
                    <span className="text-red-500 text-2xl font-bold">"</span>
                  </div>

                  {/* Customer Quote */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
                    "{review.quote}"
                  </p>

                  {/* Star Rating */}
                  <div className="flex items-center mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.781 1.402 8.178L12 18.896l-7.336 3.855 1.402-8.178L.132 9.21l8.2-1.192z"/>
                      </svg>
                    ))}
                  </div>

                  {/* Rating Text */}
                  <p className="text-gray-700 text-sm">
                    {review.rating} out of 5
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animation styles */}
        <style jsx global>{`
          @keyframes floatUp {
            0% { transform: translateY(100px); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100px); opacity: 0; }
          }
          .animate-float-up {
            animation: floatUp 20s linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
}
