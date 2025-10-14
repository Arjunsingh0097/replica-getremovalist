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

// Australia-wide cities component
function AustraliaWideCities() {
  const cities = [
    // Column 1
    ['Sydney', 'Adelaide', 'Wollongong', 'Wanneroo', 'Campbelltown', 'Cairns', 'Launceston', 'Maitland', 'Rockhampton', 'Wagga Wagga', 'Tamworth', 'Orange'],
    // Column 2
    ['Melbourne', 'Newcastle', 'Parramatta', 'Liverpool', 'Geelong', 'Toowoomba', 'Ballarat', 'Mackay', 'Bunbury', 'Coffs Harbour', 'Dubbo', 'Warrnambool'],
    // Column 3
    ['Brisbane', 'Canberra', 'Sunshine Coast', 'Hobart', 'Joondalup', 'Darwin', 'Bendigo', 'Mandurah', 'Bundaberg', 'Shepparton', 'Port Macquarie', 'Geraldton'],
    // Column 4
    ['Perth', 'Gold Coast', 'Ipswich', 'Fairfield', 'Townsville', 'Albury', 'Tweed Heads', 'Devonport', 'Hervey Bay', 'Mildura', 'Traralgon', 'Gladstone']
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Interstate Removalists Australia Wide
          </h2>
          <p className="text-lg text-gray-600">
            Professional interstate removalists serving all major cities across Australia
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cities.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-2">
              {column.map((city, cityIndex) => (
                <a
                  key={cityIndex}
                  href={`/job/new?category=2&city=${city.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-blue-600 hover:text-red-500 hover:underline transition-colors duration-200 py-1"
                >
                  {city} Interstate Removalists
                </a>
              ))}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/job/new" 
            className="inline-flex items-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-blue-900 font-semibold rounded-full shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            Get Free Interstate Quotes
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function InterstateRemovalistQuotes() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero 
        heading="Find Interstate Removalist Quotes" 
        subheading="Compare quotes from quality interstate removalists across Australia. Get the best rates for your interstate move."
      />
      <Stats />
      <RecentlyBookedMoves />
      <div className="border-t border-gray-300"></div>
      <HowItWorks />
      <WhyUseFindAMover />
      <ChooseGoodRemovalist />
      <AustraliaWideCities />
      <CustomerTestimonials />
      <FindRemovalistsAustralia />
      <div className="border-t border-gray-300"></div>
      <CustomerMovingExperiences />
      <div className="border-t border-gray-300"></div>
      <ServiceTypes />
      <div className="border-t border-gray-300"></div>
      <RemovalistsServices />
      <div className="border-t border-gray-300"></div>
      <FAQ />
      <Footer />
    </div>
  );
}
