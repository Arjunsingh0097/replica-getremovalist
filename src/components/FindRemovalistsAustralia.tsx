"use client";

import React from "react";

export default function FindRemovalistsAustralia() {
  const cities = [
    // Column 1
    [
      "Sydney removalists",
      "Adelaide removalists",
      "Wollongong removalists",
      "Wanneroo removalists",
      "Campbelltown removalists",
      "Cairns removalists",
      "Launceston removalists",
      "Maitland removalists",
      "Rockhampton removalists",
      "Wagga Wagga removalists",
      "Tamworth removalists",
      "Orange removalists",
    ],
    // Column 2
    [
      "Melbourne removalists",
      "Newcastle removalists",
      "Parramatta removalists",
      "Liverpool removalists",
      "Geelong removalists",
      "Toowoomba removalists",
      "Ballarat removalists",
      "Mackay removalists",
      "Bunbury removalists",
      "Coffs Harbour removalists",
      "Dubbo removalists",
      "Warrnambool removalists",
    ],
    // Column 3
    [
      "Brisbane removalists",
      "Canberra removalists",
      "Sunshine Coast removalists",
      "Hobart removalists",
      "Joondalup removalists",
      "Darwin removalists",
      "Bendigo removalists",
      "Mandurah removalists",
      "Bundaberg removalists",
      "Shepparton removalists",
      "Port Macquarie removalists",
      "Geraldton removalists",
    ],
    // Column 4
    [
      "Perth removalists",
      "Gold Coast removalists",
      "Ipswich removalists",
      "Fairfield removalists",
      "Townsville removalists",
      "Albury removalists",
      "Tweed Heads removalists",
      "Devonport removalists",
      "Hervey Bay removalists",
      "Mildura removalists",
      "Traralgon removalists",
      "Gladstone removalists",
    ],
  ];

  return (
    <section className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black font-['DM_Sans'] mb-4">
            Find Removalists Australia Wide
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            From coast to coast, find trusted and verified removalists in every
            major Australian city.
          </p>
        </div>

        {/* City Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {cities.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 text-center border border-gray-100"
            >
              {column.map((city, cityIndex) => (
                <a
                  key={cityIndex}
                  href="#"
                  className="block text-blue-700 hover:text-orange-500 hover:underline text-sm py-1 transition-colors duration-200"
                >
                  {city}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Interstate Moving */}
        <div className="text-center">
          <p className="text-gray-700 text-lg">
            Moving interstate? No problem —{" "}
            <a
              href="#"
              className="text-orange-500 hover:text-orange-600 font-semibold hover:underline transition-colors duration-200"
            >
              find interstate removalists
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
