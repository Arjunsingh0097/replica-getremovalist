"use client";

import React, { useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

function SelectServiceTypeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const category = searchParams.get("category");

  useEffect(() => {
    if (category) {
      router.push(`/job/new/quote?category=${category}`);
      return; // prevent continuous navigation
    }
  }, [category, router]);

  const services = [
    { id: 1, title: "Moving Local / Same State", icon: "🏠" },
    { id: 2, title: "Moving Interstate", icon: "🚛" },
    { id: 3, title: "Moving Office", icon: "🏢" },
    { id: 4, title: "Moving a Single Item", icon: "📦" },
    { id: 5, title: "Moving a Few Items", icon: "📦📦" },
    { id: 6, title: "Moving Furniture Items", icon: "🪑" },
    { id: 7, title: "Moving a Piano", icon: "🎹" },
    { id: 8, title: "Moving a Pool Table", icon: "🎱" },
    { id: 9, title: "Gumtree/Ebay Pickups", icon: "🛍️" },
    { id: 10, title: "Moving Fragile Items", icon: "💎" },
    { id: 11, title: "Rubbish Removal", icon: "🗑️" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-28">
      <Navbar />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-xl">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">
                  Select Service Type
                </h1>
                <p className="text-amber-100 text-sm">
                  Choose the type of moving service you need
                </p>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                What are you moving?
              </h2>
              <p className="text-gray-600">
                Select the type of service that fits your needs best
              </p>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/job/new?category=${service.id}`}
                  className="group p-6 rounded-xl border border-gray-200 bg-white hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 text-4xl group-hover:scale-110 transition-transform duration-200">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-800 font-semibold group-hover:text-amber-600 transition-colors duration-200">
                      {service.title}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-300">
                      <svg
                        className="w-3 h-3 text-gray-400 group-hover:text-white transition-colors duration-300"
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
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Free Quotes",
              desc: "Get multiple quotes from verified removalists at no cost",
              icon: (
                <svg
                  className="w-6 h-6 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              ),
            },
            {
              title: "Verified Movers",
              desc: "All removalists are licensed, insured, and background checked",
              icon: (
                <svg
                  className="w-6 h-6 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ),
            },
            {
              title: "Quick Response",
              desc: "Receive quotes within 24 hours from local removalists",
              icon: (
                <svg
                  className="w-6 h-6 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              ),
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 text-center shadow hover:shadow-md transition-shadow duration-200 border border-gray-100"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-xl mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default function SelectServiceType() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SelectServiceTypeContent />
    </Suspense>
  );
}
