"use client";

import React from "react";
import Logo from "./Logo";

export default function Footer() {
  const footerLinks = {
    general: [
      { name: "Home", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contact us", href: "#" },
      { name: "Privacy policy", href: "#" },
      { name: "Business Index", href: "#" },
    ],
    providers: [
      { name: "FAQ", href: "#" },
      { name: "Join our network", href: "#" },
      { name: "Terms of use", href: "#" },
    ],
    customers: [
      { name: "How it works", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Get quotes", href: "#" },
      { name: "Terms of use", href: "#" },
    ],
    moveTypes: [
      { name: "Local removalists", href: "#" },
      { name: "Interstate removalists", href: "#" },
      { name: "Office removalists", href: "#" },
      { name: "Piano removalists", href: "#" },
      { name: "Pool table removalists", href: "#" },
      { name: "Furniture removalists", href: "#" },
      { name: "Fragile Item removalists", href: "#" },
      { name: "Marketplace Deliveries", href: "#" },
      { name: "Rubbish Removals", href: "#" },
    ],
    majorCities: [
      { name: "Sydney, NSW", href: "#" },
      { name: "Melbourne, VIC", href: "#" },
      { name: "Brisbane, QLD", href: "#" },
      { name: "Perth, WA", href: "#" },
      { name: "Adelaide, SA", href: "#" },
      { name: "Canberra, ACT", href: "#" },
      { name: "Darwin, NT", href: "#" },
      { name: "Hobart, TAS", href: "#" },
    ],
    otherCities: [
      { name: "Newcastle", href: "#" },
      { name: "Gold Coast", href: "#" },
      { name: "Wollongong", href: "#" },
      { name: "Sunshine Coast", href: "#" },
      { name: "Geelong", href: "#" },
      { name: "Townsville", href: "#" },
      { name: "Cairns", href: "#" },
      { name: "Toowoomba", href: "#" },
      { name: "Bendigo", href: "#" },
    ],
  };

  return (
    <footer className="bg-white text-blue-900">
      {/* Top CTA Banner */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 py-12 sm:py-16 text-center text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
            Save yourself the hassle,
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
            find a mover the{" "}
            <span className="underline underline-offset-4">easy way</span>.
          </h3>
          <a
            href="/job/new"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-red-500 transition-all duration-300 shadow-md text-sm sm:text-base"
          >
            Get Quotes
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
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
          </a>
        </div>
      </div>

      {/* Links Section */}
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-10">
          {/* Logo and General */}
          <div className="col-span-2 sm:col-span-1">
            <Logo size="lg" href="/" />
            <div className="mt-4 sm:mt-6 space-y-2">
              {footerLinks.general.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-blue-900 hover:text-orange-500 transition-colors duration-200 text-sm sm:text-base"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries({
            Providers: footerLinks.providers,
            Customers: footerLinks.customers,
            "Move Types": footerLinks.moveTypes,
            "Major Cities": footerLinks.majorCities,
            "Other Cities": footerLinks.otherCities,
          }).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-base sm:text-lg font-bold text-blue-900 mb-3 sm:mb-4">{title}</h4>
              <div className="space-y-2">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-blue-900 hover:text-orange-500 transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white border-t border-gray-200 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Find a Mover. All rights reserved.</p>
          <div className="mt-2 sm:mt-0 space-x-3 sm:space-x-4">
            <a
              href="#"
              className="hover:text-red-500 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-red-500 transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
