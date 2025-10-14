"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import RecentlyBookedMoves from "@/components/RecentlyBookedMoves";
import HowItWorks from "@/components/HowItWorks";
import WhyUseFindAMover from "@/components/WhyUseFindAMover";
import ChooseGoodRemovalist from "@/components/ChooseGoodRemovalist";
import CustomerTestimonials from "@/components/CustomerTestimonials";
import FindRemovalistsAustralia from "@/components/FindRemovalistsAustralia";
import CustomerMovingExperiences from "@/components/CustomerMovingExperiences";
import ServiceTypes from "@/components/ServiceTypes";
import RemovalistsServices from "@/components/RemovalistsServices";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

// ----------------------
// Australia-Wide Furniture Removalists Section
// ----------------------
function AustraliaWideFurnitureRemovalists() {
  const cities = [
    [
      "Sydney",
      "Adelaide",
      "Wollongong",
      "Wanneroo",
      "Campbelltown",
      "Cairns",
      "Launceston",
      "Maitland",
      "Rockhampton",
      "Wagga Wagga",
      "Tamworth",
      "Orange",
    ],
    [
      "Melbourne",
      "Newcastle",
      "Parramatta",
      "Liverpool",
      "Geelong",
      "Toowoomba",
      "Ballarat",
      "Mackay",
      "Bunbury",
      "Coffs Harbour",
      "Dubbo",
      "Warrnambool",
    ],
    [
      "Brisbane",
      "Canberra",
      "Sunshine Coast",
      "Hobart",
      "Joondalup",
      "Darwin",
      "Bendigo",
      "Mandurah",
      "Bundaberg",
      "Shepparton",
      "Port Macquarie",
      "Geraldton",
    ],
    [
      "Perth",
      "Gold Coast",
      "Ipswich",
      "Fairfield",
      "Townsville",
      "Albury",
      "Tweed Heads",
      "Devonport",
      "Hervey Bay",
      "Mildura",
      "Traralgon",
      "Gladstone",
    ],
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Find Furniture Removalists Australia Wide
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Professional furniture removalists serving all major cities across
          Australia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 text-left">
          {cities.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-2">
              {column.map((city, cityIndex) => (
                <a
                  key={cityIndex}
                  href={`/job/new?category=6&city=${city
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="block text-blue-700 hover:text-red-500 hover:underline transition-colors duration-200 py-1"
                >
                  {city} Furniture Removalists
                </a>
              ))}
            </div>
          ))}
        </div>

        <a
          href="/job/new"
          className="inline-flex items-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-blue-900 font-semibold rounded-full shadow-md transition-all duration-300 hover:-translate-y-1"
        >
          Get Free Interstate Furniture Quotes
          <svg
            className="w-5 h-5 ml-2"
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
    </section>
  );
}

// ----------------------
// Interstate Furniture Routes Section
// ----------------------
function InterstateFurnitureRoutes() {
  const routes = [
    [
      "Sydney to Melbourne furniture movers",
      "Sydney to Adelaide furniture movers",
      "Sydney to Darwin furniture movers",
      "Melbourne to Perth furniture movers",
      "Melbourne to Hobart furniture movers",
      "Brisbane to Melbourne furniture movers",
      "Brisbane to Canberra furniture movers",
      "Perth to Sydney furniture movers",
      "Perth to Adelaide furniture movers",
      "Perth to Darwin furniture movers",
      "Adelaide to Brisbane furniture movers",
      "Adelaide to Hobart furniture movers",
      "Canberra to Melbourne furniture movers",
      "Canberra to Adelaide furniture movers",
      "Hobart to Sydney furniture movers",
      "Hobart to Perth furniture movers",
      "Hobart to Darwin furniture movers",
      "Darwin to Brisbane furniture movers",
      "Darwin to Canberra furniture movers",
    ],
    [
      "Sydney to Brisbane furniture movers",
      "Sydney to Canberra furniture movers",
      "Melbourne to Sydney furniture movers",
      "Melbourne to Adelaide furniture movers",
      "Melbourne to Darwin furniture movers",
      "Brisbane to Perth furniture movers",
      "Brisbane to Hobart furniture movers",
      "Perth to Melbourne furniture movers",
      "Perth to Canberra furniture movers",
      "Adelaide to Sydney furniture movers",
      "Adelaide to Perth furniture movers",
      "Adelaide to Darwin furniture movers",
      "Canberra to Brisbane furniture movers",
      "Canberra to Hobart furniture movers",
      "Hobart to Melbourne furniture movers",
      "Hobart to Adelaide furniture movers",
      "Darwin to Sydney furniture movers",
      "Darwin to Perth furniture movers",
      "Darwin to Hobart furniture movers",
    ],
    [
      "Sydney to Perth furniture movers",
      "Sydney to Hobart furniture movers",
      "Melbourne to Brisbane furniture movers",
      "Melbourne to Canberra furniture movers",
      "Brisbane to Sydney furniture movers",
      "Brisbane to Adelaide furniture movers",
      "Brisbane to Darwin furniture movers",
      "Perth to Brisbane furniture movers",
      "Perth to Hobart furniture movers",
      "Adelaide to Melbourne furniture movers",
      "Adelaide to Canberra furniture movers",
      "Canberra to Sydney furniture movers",
      "Canberra to Perth furniture movers",
      "Canberra to Darwin furniture movers",
      "Hobart to Brisbane furniture movers",
      "Hobart to Canberra furniture movers",
      "Darwin to Melbourne furniture movers",
      "Darwin to Adelaide furniture movers",
    ],
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Furniture Removalists Servicing Major Routes
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          You can find furniture removalists servicing all major Australian
          interstate routes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 text-left">
          {routes.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-2">
              {column.map((route, routeIndex) => (
                <a
                  key={routeIndex}
                  href={`/job/new?category=6&route=${route
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="block text-blue-700 hover:text-red-500 hover:underline transition-colors duration-200 py-1"
                >
                  {route}
                </a>
              ))}
            </div>
          ))}
        </div>

        <a
          href="/job/new"
          className="inline-flex items-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-blue-900 font-semibold rounded-full shadow-md transition-all duration-300 hover:-translate-y-1"
        >
          Get Free Interstate Furniture Quotes
          <svg
            className="w-5 h-5 ml-2"
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
    </section>
  );
}

// ----------------------
// Full Page Layout
// ----------------------
export default function FurnitureRemovalists() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero
        heading="Find Furniture Removalists"
        subheading="Professional furniture removalists for your home and office. Compare quotes from trusted movers across Australia."
      />
      <Stats />
      <RecentlyBookedMoves />
      <HowItWorks />
      <WhyUseFindAMover />
      <ChooseGoodRemovalist />
      <AustraliaWideFurnitureRemovalists />
      <InterstateFurnitureRoutes />
      <CustomerTestimonials />
      <FindRemovalistsAustralia />
      <CustomerMovingExperiences />
      <ServiceTypes />
      <RemovalistsServices />
      <FAQ />
      <Footer />
    </div>
  );
}
