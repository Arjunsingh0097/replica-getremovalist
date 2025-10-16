"use client";

import React, { useState } from "react";

interface PricingTabsProps {
  city: string;
}

export default function PricingTabs({ city }: PricingTabsProps) {
  const [activeTab, setActiveTab] = useState(city === "Brisbane" ? "suburbs" : "pricing");

  const pricingData = [
    { homeSize: "Studio Apartment", averageCost: "$450 - $650", typicalMoveTime: "3-4 hours" },
    { homeSize: "1 Bedroom Apartment", averageCost: "$750 - $1,100", typicalMoveTime: "4-6 hours" },
    { homeSize: "2 Bedroom Home", averageCost: "$1,100 - $1,600", typicalMoveTime: "6-9 hours" },
    { homeSize: "3 Bedroom Home", averageCost: "$1,400 - $2,200", typicalMoveTime: "8-12 hours" },
    { homeSize: "4 Bedroom Home", averageCost: "$1,900 - $3,000", typicalMoveTime: "10-14 hours" },
    { homeSize: "5+ Bedroom Home", averageCost: "$2,500 - $4,000", typicalMoveTime: "12+ hours" }
  ];

  const hourlyRates = [
    {
      title: "2 Men & Truck",
      price: "$120-$175/hr",
      description: "Best for studios, 1-3 bedroom homes",
      icon: "👥🚛"
    },
    {
      title: "3 Men & Truck", 
      price: "$180-$240/hr",
      description: "Best for 3-4 bedroom homes",
      icon: "👥👥🚛"
    },
    {
      title: "4 Men & Truck",
      price: "$240-$320/hr", 
      description: "Best for large 4+ bedroom homes",
      icon: "👥👥👥🚛"
    }
  ];

  const costFactors = [
    "Home size and volume of belongings",
    "Access difficulties (stairs, elevators, narrow streets)",
    "Parking availability at both locations", 
    "Time of year (December-February and school holidays are peak seasons)",
    "Day of week (weekends cost 10-15% more than weekdays)",
    `${city} traffic conditions and distance between properties`,
    "Special items requiring extra handling (pianos, antiques, artwork)",
    "Additional services like packing/unpacking (adds 15-30% to total cost)"
  ];

  const suburbData = city === "Sydney" ? [
    {
      region: "CBD",
      traffic: "High",
      access: "Difficult",
      parking: "Limited",
      costFactor: "Higher than average"
    },
    {
      region: "North Shore",
      traffic: "Moderate",
      access: "Variable",
      parking: "Mostly good",
      costFactor: "Average"
    },
    {
      region: "Eastern Suburbs",
      traffic: "High",
      access: "Often difficult",
      parking: "Limited",
      costFactor: "Higher than average"
    },
    {
      region: "Inner West",
      traffic: "High",
      access: "Often difficult",
      parking: "Limited",
      costFactor: "Higher than average"
    },
    {
      region: "Western Suburbs",
      traffic: "Moderate",
      access: "Usually good",
      parking: "Mostly good",
      costFactor: "Lower than average"
    },
    {
      region: "Southern Suburbs",
      traffic: "Moderate",
      access: "Usually good",
      parking: "Mostly good",
      costFactor: "Lower than average"
    }
  ] : [
    {
      region: "CBD",
      traffic: "High",
      access: "Difficult",
      parking: "Limited",
      costFactor: "Higher than average"
    },
    {
      region: "North Brisbane",
      traffic: "Moderate",
      access: "Variable",
      parking: "Mostly good",
      costFactor: "Average"
    },
    {
      region: "South Brisbane",
      traffic: "High",
      access: "Often difficult",
      parking: "Limited",
      costFactor: "Higher than average"
    },
    {
      region: "East Brisbane",
      traffic: "Moderate",
      access: "Usually good",
      parking: "Mostly good",
      costFactor: "Average"
    },
    {
      region: "West Brisbane",
      traffic: "Moderate",
      access: "Usually good",
      parking: "Mostly good",
      costFactor: "Lower than average"
    },
    {
      region: "Outer Suburbs",
      traffic: "Low",
      access: "Usually good",
      parking: "Mostly good",
      costFactor: "Lower than average"
    }
  ];

  const additionalCosts = [
    {
      service: "Stairs",
      cost: "$40-75",
      notes: "Per flight after first flight"
    },
    {
      service: "Elevator", 
      cost: "$50-100",
      notes: "Per hour of waiting/loading time"
    },
    {
      service: "Long Carry",
      cost: "$40-100", 
      notes: "For distances over 20m from truck to door"
    },
    {
      service: "Piano Move",
      cost: "$150-300",
      notes: "Upright piano"
    },
    {
      service: "Grand Piano",
      cost: "$350-600",
      notes: "Grand piano specialist service"
    },
    {
      service: "Parking Permit",
      cost: "$80-150",
      notes: "If required by council"
    },
    {
      service: "Storage",
      cost: "$100-200/night",
      notes: "Overnight or temporary"
    },
    {
      service: "Disassembly",
      cost: "$50-150",
      notes: "For complex furniture"
    },
    {
      service: "Weekend/Holiday Rate",
      cost: "10-25% surcharge",
      notes: "Higher rates apply on weekends and public holidays"
    },
    {
      service: "Packing Services",
      cost: "$80-120/hour",
      notes: "Per packer, plus materials"
    },
    {
      service: "Packing Materials",
      cost: "$150-500",
      notes: "Depends on home size"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        {city !== "Brisbane" && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black font-['DM_Sans'] mb-6">
              How much does a removalist cost in {city}?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Local moving in {city} typically costs between <strong className="text-black font-['DM_Sans']">$1,100-$1,600</strong> for an average 2-bedroom home. Most {city} removalists charge <strong className="text-black font-['DM_Sans']">$120-$175 per hour</strong> for a standard 2-person team, with final costs depending on your home size, location within {city}, access difficulties, and time of year.
            </p>
          </div>
        )}

        {/* Tabs */}
        {city !== "Brisbane" && (
          <div className="flex justify-center mb-8">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveTab("pricing")}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === "pricing"
                    ? "bg-white text-black font-['DM_Sans'] shadow-sm"
                    : "text-gray-600 hover:text-black font-['DM_Sans']"
                }`}
              >
                Pricing Guide
              </button>
              <button
                onClick={() => setActiveTab("suburbs")}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === "suburbs"
                    ? "bg-white text-black font-['DM_Sans'] shadow-sm"
                    : "text-gray-600 hover:text-black font-['DM_Sans']"
                }`}
              >
                {city} Suburb Guide
              </button>
              <button
                onClick={() => setActiveTab("additional")}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === "additional"
                    ? "bg-white text-black font-['DM_Sans'] shadow-sm"
                    : "text-gray-600 hover:text-black font-['DM_Sans']"
                }`}
              >
                Additional Costs
              </button>
            </div>
          </div>
        )}

        {/* Tab Content */}
        {city !== "Brisbane" && activeTab === "pricing" && (
          <div className="space-y-12">
            {/* Pricing Table */}
            {city !== "Brisbane" && (
              <div>
                <h3 className="text-2xl font-bold text-black font-['DM_Sans'] mb-4 text-center">
                  {city} Local Moving Cost Guide (2025 Prices)
                </h3>
                <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
                  Here's a comprehensive breakdown of what you can expect to pay for local removalist services in {city} based on your home size, with pricing data collected from top {city} moving companies in 2025.
                </p>
              
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Home Size</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Average Cost</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Typical Move Time</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {pricingData.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm text-gray-900 font-medium">{item.homeSize}</td>
                          <td className="px-6 py-4 text-sm text-gray-900">{item.averageCost}</td>
                          <td className="px-6 py-4 text-sm text-gray-900">{item.typicalMoveTime}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Hourly Rates */}
            {city !== "Brisbane" && (
              <div>
                <h3 className="text-2xl font-bold text-black font-['DM_Sans'] mb-4 text-center">
                  Hourly Rates for {city} Removalists
                </h3>
                <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
                  {city} removalists typically charge by the hour based on team size, with rates varying depending on the number of movers and truck capacity provided – here's what you can expect to pay for different crew configurations in 2025.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {hourlyRates.map((rate, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                      <div className="text-3xl mb-4">{rate.icon}</div>
                      <h4 className="text-lg font-semibold text-black font-['DM_Sans'] mb-2">{rate.title}</h4>
                      <div className="text-xl font-bold text-black font-['DM_Sans'] mb-2">{rate.price}</div>
                      <p className="text-sm text-gray-600">{rate.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Cost Factors */}
            {city !== "Brisbane" && (
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-black font-['DM_Sans'] mb-6 text-center">
                  What impacts moving costs in {city}?
                </h3>
                <ul className="space-y-3 max-w-3xl mx-auto">
                  {costFactors.map((factor, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-black font-['DM_Sans'] mr-3 mt-1">•</span>
                      <span className="text-gray-700">{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {city !== "Brisbane" && activeTab === "suburbs" && (
          <div>
            <h3 className="text-2xl font-bold text-black font-['DM_Sans'] mb-4 text-center">
              {city} Moving Costs by Region
            </h3>
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              {city === "Sydney" 
                ? "Moving costs vary by Sydney region due to traffic conditions, access difficulties, and parking availability. Here's a guide to specific challenges and cost factors in different areas of Sydney."
                : "Moving costs vary by Brisbane region due to traffic conditions, access difficulties, and parking availability. Brisbane's unique topography with hills and valleys creates distinct moving challenges across different areas."
              }
            </p>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{city} Region</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Traffic</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Access</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Parking</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Cost Factor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {suburbData.map((suburb, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">{suburb.region}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{suburb.traffic}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{suburb.access}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{suburb.parking}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{suburb.costFactor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 bg-blue-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-black font-['DM_Sans'] mb-3">Regional Cost Insights</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <p className="font-medium text-black font-['DM_Sans'] mb-2">Higher Cost Areas:</p>
                  <ul className="space-y-1">
                    {city === "Sydney" ? (
                      <>
                        <li>• CBD - Limited parking, high traffic</li>
                        <li>• Eastern Suburbs - Difficult access, limited parking</li>
                        <li>• Inner West - High traffic, access challenges</li>
                      </>
                    ) : (
                      <>
                        <li>• CBD - Limited parking, high traffic</li>
                        <li>• South Brisbane - Difficult access, limited parking</li>
                        <li>• Inner suburbs - Steep hills, access challenges</li>
                      </>
                    )}
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-black font-['DM_Sans'] mb-2">Lower Cost Areas:</p>
                  <ul className="space-y-1">
                    {city === "Sydney" ? (
                      <>
                        <li>• Western Suburbs - Good access, ample parking</li>
                        <li>• Southern Suburbs - Moderate traffic, good parking</li>
                        <li>• North Shore - Variable but generally manageable</li>
                      </>
                    ) : (
                      <>
                        <li>• West Brisbane - Good access, ample parking</li>
                        <li>• Outer Suburbs - Moderate traffic, good parking</li>
                        <li>• North Brisbane - Variable but generally manageable</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {city !== "Brisbane" && activeTab === "additional" && (
          <div>
            <h3 className="text-2xl font-bold text-black font-['DM_Sans'] mb-4 text-center">
              Additional Costs
            </h3>
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Understanding all potential additional costs for your {city} move. These fees are added to your base moving quote based on specific circumstances.
            </p>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Service/Situation</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Additional Cost</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {additionalCosts.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">{item.service}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-semibold">{item.cost}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-red-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-red-100 rounded-lg mr-3">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-black font-['DM_Sans']">Common Additional Costs</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Stairs and elevator delays</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Long carry distances</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Specialized items (pianos, artwork)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Parking permits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Weekend/holiday surcharges</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white border border-green-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg mr-3">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-black font-['DM_Sans']">Optional Services</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Professional packing services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Packing materials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Furniture disassembly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Temporary storage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Cleaning services</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-white border border-yellow-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-black font-['DM_Sans']">Cost-Saving Tips</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-lg mr-3">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="font-semibold text-black font-['DM_Sans']">Plan Ahead</p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Book weekday moves when possible</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Arrange parking permits in advance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Pack items yourself to save on packing services</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-8 h-8 bg-purple-100 rounded-lg mr-3">
                      <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="font-semibold text-black font-['DM_Sans']">Minimize Challenges</p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Clear pathways before movers arrive</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Disassemble furniture yourself</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Choose ground floor access when possible</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a 
            href="/job/new" 
            className="inline-flex items-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-['DM_Sans'] font-semibold rounded-full shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            Get Moving Quotes
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
