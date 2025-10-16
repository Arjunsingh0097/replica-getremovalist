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

// Australia-wide rubbish removalists component
function AustraliaWideRubbishRemovalists() {
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
          <h2 className="text-3xl font-bold text-black font-['DM_Sans'] mb-4">
            Find Rubbish Removalists Australia Wide
          </h2>
          <p className="text-lg text-gray-600">
            Professional rubbish removalists serving all major cities across Australia
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cities.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-2">
              {column.map((city, cityIndex) => (
                <a
                  key={cityIndex}
                  href={`/job/new?category=11&city=${city.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-blue-600 hover:text-red-500 hover:underline transition-colors duration-200 py-1"
                >
                  {city} Rubbish Removalists
                </a>
              ))}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/job/new" 
            className="inline-flex items-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-['DM_Sans'] font-semibold rounded-full shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            Get Free Rubbish Removal Quotes
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// Interstate routes component for rubbish removalists
function InterstateRubbishRoutes() {
  const routes = [
    // Column 1
    [
      'Sydney to Melbourne rubbish removal companies',
      'Sydney to Adelaide rubbish removal companies', 
      'Sydney to Darwin rubbish removal companies',
      'Melbourne to Perth rubbish removal companies',
      'Melbourne to Hobart rubbish removal companies',
      'Brisbane to Melbourne rubbish removal companies',
      'Brisbane to Canberra rubbish removal companies',
      'Perth to Sydney rubbish removal companies',
      'Perth to Adelaide rubbish removal companies',
      'Perth to Darwin rubbish removal companies',
      'Adelaide to Brisbane rubbish removal companies',
      'Adelaide to Hobart rubbish removal companies',
      'Canberra to Melbourne rubbish removal companies',
      'Canberra to Adelaide rubbish removal companies',
      'Hobart to Sydney rubbish removal companies',
      'Hobart to Perth rubbish removal companies',
      'Hobart to Darwin rubbish removal companies',
      'Darwin to Brisbane rubbish removal companies',
      'Darwin to Canberra rubbish removal companies'
    ],
    // Column 2
    [
      'Sydney to Brisbane rubbish removal companies',
      'Sydney to Canberra rubbish removal companies',
      'Melbourne to Sydney rubbish removal companies',
      'Melbourne to Adelaide rubbish removal companies',
      'Melbourne to Darwin rubbish removal companies',
      'Brisbane to Perth rubbish removal companies',
      'Brisbane to Hobart rubbish removal companies',
      'Perth to Melbourne rubbish removal companies',
      'Perth to Canberra rubbish removal companies',
      'Adelaide to Sydney rubbish removal companies',
      'Adelaide to Perth rubbish removal companies',
      'Adelaide to Darwin rubbish removal companies',
      'Canberra to Brisbane rubbish removal companies',
      'Canberra to Hobart rubbish removal companies',
      'Hobart to Melbourne rubbish removal companies',
      'Hobart to Adelaide rubbish removal companies',
      'Darwin to Sydney rubbish removal companies',
      'Darwin to Perth rubbish removal companies',
      'Darwin to Hobart rubbish removal companies'
    ],
    // Column 3
    [
      'Sydney to Perth rubbish removal companies',
      'Sydney to Hobart rubbish removal companies',
      'Melbourne to Brisbane rubbish removal companies',
      'Melbourne to Canberra rubbish removal companies',
      'Brisbane to Sydney rubbish removal companies',
      'Brisbane to Adelaide rubbish removal companies',
      'Brisbane to Darwin rubbish removal companies',
      'Perth to Brisbane rubbish removal companies',
      'Perth to Hobart rubbish removal companies',
      'Adelaide to Melbourne rubbish removal companies',
      'Adelaide to Canberra rubbish removal companies',
      'Canberra to Sydney rubbish removal companies',
      'Canberra to Perth rubbish removal companies',
      'Canberra to Darwin rubbish removal companies',
      'Hobart to Brisbane rubbish removal companies',
      'Hobart to Canberra rubbish removal companies',
      'Darwin to Melbourne rubbish removal companies',
      'Darwin to Adelaide rubbish removal companies'
    ]
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black font-['DM_Sans'] mb-4">
            Rubbish removalists servicing major routes
          </h2>
          <p className="text-lg text-gray-600">
            You can find Rubbish removalists servicing all major Australian interstate routes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {routes.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-2">
              {column.map((route, routeIndex) => (
                <a
                  key={routeIndex}
                  href={`/job/new?category=11&route=${route.toLowerCase().replace(/\s+/g, '-').replace(/to/g, 'to')}`}
                  className="block text-blue-600 hover:text-red-500 hover:underline transition-colors duration-200 py-1"
                >
                  {route}
                </a>
              ))}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/job/new" 
            className="inline-flex items-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-['DM_Sans'] font-semibold rounded-full shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            Get Free Interstate Rubbish Removal Quotes
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function RubbishRemovalists() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero 
        heading="Find Rubbish Removalists" 
        subheading="Professional rubbish removalists for efficient waste disposal. Compare quotes from reliable rubbish removal companies."
      />
      <Stats />
      <RecentlyBookedMoves />
      <div className="border-t border-gray-300"></div>
      <HowItWorks />
      <WhyUseFindAMover />
      <ChooseGoodRemovalist />
      <AustraliaWideRubbishRemovalists />
      <InterstateRubbishRoutes />
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