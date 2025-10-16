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

// Australia-wide marketplace transporters component
function AustraliaWideMarketplaceTransporters() {
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
            Find Gumtree & Ebay Transporters Australia Wide
          </h2>
          <p className="text-lg text-gray-600">
            Professional marketplace transporters serving all major cities across Australia
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cities.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-2">
              {column.map((city, cityIndex) => (
                <a
                  key={cityIndex}
                  href={`/job/new?category=9&city=${city.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-blue-600 hover:text-red-500 hover:underline transition-colors duration-200 py-1"
                >
                  {city} Gumtree & Ebay Transporters
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
            Get Free Marketplace Quotes
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// Interstate routes component for marketplace transporters
function InterstateMarketplaceRoutes() {
  const routes = [
    // Column 1
    [
      'Sydney to Melbourne marketplace transporters',
      'Sydney to Adelaide marketplace transporters', 
      'Sydney to Darwin marketplace transporters',
      'Melbourne to Perth marketplace transporters',
      'Melbourne to Hobart marketplace transporters',
      'Brisbane to Melbourne marketplace transporters',
      'Brisbane to Canberra marketplace transporters',
      'Perth to Sydney marketplace transporters',
      'Perth to Adelaide marketplace transporters',
      'Perth to Darwin marketplace transporters',
      'Adelaide to Brisbane marketplace transporters',
      'Adelaide to Hobart marketplace transporters',
      'Canberra to Melbourne marketplace transporters',
      'Canberra to Adelaide marketplace transporters',
      'Hobart to Sydney marketplace transporters',
      'Hobart to Perth marketplace transporters',
      'Hobart to Darwin marketplace transporters',
      'Darwin to Brisbane marketplace transporters',
      'Darwin to Canberra marketplace transporters'
    ],
    // Column 2
    [
      'Sydney to Brisbane marketplace transporters',
      'Sydney to Canberra marketplace transporters',
      'Melbourne to Sydney marketplace transporters',
      'Melbourne to Adelaide marketplace transporters',
      'Melbourne to Darwin marketplace transporters',
      'Brisbane to Perth marketplace transporters',
      'Brisbane to Hobart marketplace transporters',
      'Perth to Melbourne marketplace transporters',
      'Perth to Canberra marketplace transporters',
      'Adelaide to Sydney marketplace transporters',
      'Adelaide to Perth marketplace transporters',
      'Adelaide to Darwin marketplace transporters',
      'Canberra to Brisbane marketplace transporters',
      'Canberra to Hobart marketplace transporters',
      'Hobart to Melbourne marketplace transporters',
      'Hobart to Adelaide marketplace transporters',
      'Darwin to Sydney marketplace transporters',
      'Darwin to Perth marketplace transporters',
      'Darwin to Hobart marketplace transporters'
    ],
    // Column 3
    [
      'Sydney to Perth marketplace transporters',
      'Sydney to Hobart marketplace transporters',
      'Melbourne to Brisbane marketplace transporters',
      'Melbourne to Canberra marketplace transporters',
      'Brisbane to Sydney marketplace transporters',
      'Brisbane to Adelaide marketplace transporters',
      'Brisbane to Darwin marketplace transporters',
      'Perth to Brisbane marketplace transporters',
      'Perth to Hobart marketplace transporters',
      'Adelaide to Melbourne marketplace transporters',
      'Adelaide to Canberra marketplace transporters',
      'Canberra to Sydney marketplace transporters',
      'Canberra to Perth marketplace transporters',
      'Canberra to Darwin marketplace transporters',
      'Hobart to Brisbane marketplace transporters',
      'Hobart to Canberra marketplace transporters',
      'Darwin to Melbourne marketplace transporters',
      'Darwin to Adelaide marketplace transporters'
    ]
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black font-['DM_Sans'] mb-4">
            Gumtree & ebay transporters servicing major routes
          </h2>
          <p className="text-lg text-gray-600">
            You can find Gumtree & ebay transporters servicing all major Australian interstate routes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {routes.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-2">
              {column.map((route, routeIndex) => (
                <a
                  key={routeIndex}
                  href={`/job/new?category=9&route=${route.toLowerCase().replace(/\s+/g, '-').replace(/to/g, 'to')}`}
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
            Get Free Interstate Marketplace Quotes
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function MarketplaceDeliveries() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero 
        heading="Find Marketplace Delivery Services" 
        subheading="Professional marketplace delivery services for Gumtree and eBay items. Compare quotes from trusted marketplace transporters."
      />
      <Stats />
      <RecentlyBookedMoves />
      <div className="border-t border-gray-300"></div>
      <HowItWorks />
      <WhyUseFindAMover />
      <ChooseGoodRemovalist />
      <AustraliaWideMarketplaceTransporters />
      <InterstateMarketplaceRoutes />
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