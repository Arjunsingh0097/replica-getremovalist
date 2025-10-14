"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  const [isMoveTypesOpen, setIsMoveTypesOpen] = useState(false);
  const [isLocalOpen, setIsLocalOpen] = useState(false);
  const [isInterstateOpen, setIsInterstateOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const localDropdownRef = useRef<HTMLDivElement>(null);
  const interstateDropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsMoveTypesOpen(false);
      }
      if (
        localDropdownRef.current &&
        !localDropdownRef.current.contains(event.target as Node)
      ) {
        setIsLocalOpen(false);
      }
      if (
        interstateDropdownRef.current &&
        !interstateDropdownRef.current.contains(event.target as Node)
      ) {
        setIsInterstateOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const moveTypes = [
    { name: "Local Removalists", href: "/local-removalists" },
    { name: "Interstate Removalists", href: "/interstate-removalist-quotes" },
    { name: "Office Removalists", href: "/office-removalists" },
    { name: "Piano Removalists", href: "/piano-removalists" },
    { name: "Pool Table Removalists", href: "/pool-table-removalists" },
    { name: "Furniture Removalists", href: "/furniture-removalists" },
    { name: "Couriers", href: "/couriers" },
    { name: "Delivery Companies", href: "/delivery-companies" },
    { name: "Fragile Item Removalists", href: "/fragile-item-removalists" },
    { name: "Marketplace Deliveries", href: "/marketplace-deliveries" },
    { name: "Rubbish Removalists", href: "/rubbish-removalists" },
  ];

  const localCities = [
    { name: "Sydney Removalists", href: "/removalists/sydney" },
    { name: "Melbourne Removalists", href: "/removalists/melbourne" },
    { name: "Brisbane Removalists", href: "/removalists/brisbane" },
    { name: "Perth Removalists", href: "/removalists/perth" },
    { name: "Adelaide Removalists", href: "/removalists/adelaide" },
    { name: "Canberra Removalists", href: "/removalists/canberra" },
    { name: "Hobart Removalists", href: "/removalists/hobart" },
    { name: "Darwin Removalists", href: "/removalists/darwin" },
  ];

  const interstateCities = [
    { name: "Sydney Interstate Removalists", href: "/removalists/sydney" },
    {
      name: "Melbourne Interstate Removalists",
      href: "/removalists/melbourne",
    },
    { name: "Brisbane Interstate Removalists", href: "/removalists/brisbane" },
    { name: "Perth Interstate Removalists", href: "/removalists/perth" },
    { name: "Adelaide Interstate Removalists", href: "/removalists/adelaide" },
    { name: "Canberra Interstate Removalists", href: "/removalists/canberra" },
    { name: "Hobart Interstate Removalists", href: "/removalists/hobart" },
    { name: "Darwin Interstate Removalists", href: "/removalists/darwin" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md border-b border-gray-200 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Logo size="md" href="/" />

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Move Types Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => {
                setIsMoveTypesOpen(!isMoveTypesOpen);
                setIsLocalOpen(false);
                setIsInterstateOpen(false);
              }}
              className="flex items-center text-blue-900 font-medium hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded px-2 py-1"
              aria-expanded={isMoveTypesOpen}
              aria-haspopup="true"
            >
              Move Types
              <svg
                className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                  isMoveTypesOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isMoveTypesOpen && (
              <div 
                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                role="menu"
                aria-labelledby="move-types-button"
              >
                <div className="py-2">
                  {moveTypes.map((moveType, index) => (
                    <Link
                      key={index}
                      href={moveType.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-900 focus:bg-gray-100 focus:text-blue-900 focus:outline-none"
                      onClick={() => setIsMoveTypesOpen(false)}
                      role="menuitem"
                    >
                      {moveType.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Local Dropdown */}
          <div className="relative" ref={localDropdownRef}>
            <button
              onClick={() => {
                setIsLocalOpen(!isLocalOpen);
                setIsMoveTypesOpen(false);
                setIsInterstateOpen(false);
              }}
              className="flex items-center text-blue-900 font-medium hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded px-2 py-1"
              aria-expanded={isLocalOpen}
              aria-haspopup="true"
            >
              Local
              <svg
                className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                  isLocalOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isLocalOpen && (
              <div 
                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                role="menu"
                aria-labelledby="local-button"
              >
                <div className="py-2">
                  {localCities.map((city, index) => (
                    <Link
                      key={index}
                      href={city.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-900 focus:bg-gray-100 focus:text-blue-900 focus:outline-none"
                      onClick={() => setIsLocalOpen(false)}
                      role="menuitem"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Interstate Dropdown */}
          <div className="relative" ref={interstateDropdownRef}>
            <button
              onClick={() => {
                setIsInterstateOpen(!isInterstateOpen);
                setIsMoveTypesOpen(false);
                setIsLocalOpen(false);
              }}
              className="flex items-center text-blue-900 font-medium hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded px-2 py-1"
              aria-expanded={isInterstateOpen}
              aria-haspopup="true"
            >
              Interstate
              <svg
                className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                  isInterstateOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isInterstateOpen && (
              <div 
                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                role="menu"
                aria-labelledby="interstate-button"
              >
                <div className="py-2">
                  {interstateCities.map((city, index) => (
                    <Link
                      key={index}
                      href={city.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-900 focus:bg-gray-100 focus:text-blue-900 focus:outline-none"
                      onClick={() => setIsInterstateOpen(false)}
                      role="menuitem"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Get Quotes Button */}
        <Link
          href="/job/new"
          className="bg-red-50 border border-red-300 text-red-600 px-6 py-2 rounded-lg font-medium hover:bg-red-100 transition-colors duration-200 flex items-center"
        >
          Get Quotes
          <svg
            className="w-4 h-4 ml-2"
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
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6 text-blue-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          ref={mobileMenuRef}
          role="menu"
          aria-label="Mobile navigation menu"
        >
          <div className="px-6 py-4 space-y-4">
            {/* Move Types Section */}
            <div>
              <button
                onClick={() => setIsMoveTypesOpen(!isMoveTypesOpen)}
                className="flex items-center justify-between w-full text-left text-blue-900 font-medium hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded px-2 py-1"
                aria-expanded={isMoveTypesOpen}
              >
                Move Types
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isMoveTypesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isMoveTypesOpen && (
                <div className="mt-2 pl-4 space-y-2">
                  {moveTypes.map((moveType, index) => (
                    <Link
                      key={index}
                      href={moveType.href}
                      className="block text-sm text-gray-700 hover:text-blue-900 focus:text-blue-900 focus:outline-none py-1"
                      onClick={() => {
                        setIsMoveTypesOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {moveType.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Local Section */}
            <div>
              <button
                onClick={() => setIsLocalOpen(!isLocalOpen)}
                className="flex items-center justify-between w-full text-left text-blue-900 font-medium hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded px-2 py-1"
                aria-expanded={isLocalOpen}
              >
                Local
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isLocalOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isLocalOpen && (
                <div className="mt-2 pl-4 space-y-2">
                  {localCities.map((city, index) => (
                    <Link
                      key={index}
                      href={city.href}
                      className="block text-sm text-gray-700 hover:text-blue-900 focus:text-blue-900 focus:outline-none py-1"
                      onClick={() => {
                        setIsLocalOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Interstate Section */}
            <div>
              <button
                onClick={() => setIsInterstateOpen(!isInterstateOpen)}
                className="flex items-center justify-between w-full text-left text-blue-900 font-medium hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded px-2 py-1"
                aria-expanded={isInterstateOpen}
              >
                Interstate
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isInterstateOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isInterstateOpen && (
                <div className="mt-2 pl-4 space-y-2">
                  {interstateCities.map((city, index) => (
                    <Link
                      key={index}
                      href={city.href}
                      className="block text-sm text-gray-700 hover:text-blue-900 focus:text-blue-900 focus:outline-none py-1"
                      onClick={() => {
                        setIsInterstateOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Get Quotes Button */}
            <div className="pt-4 border-t border-gray-200">
              <Link
                href="/job/new"
                className="block w-full bg-red-50 border border-red-300 text-red-600 px-6 py-3 rounded-lg font-medium hover:bg-red-100 transition-colors duration-200 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Quotes
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
