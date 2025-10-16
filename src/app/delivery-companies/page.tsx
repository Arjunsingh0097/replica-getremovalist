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

// Australia-wide delivery companies component
function AustraliaWideDeliveryCompanies() {
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
          <h2 className="text-3xl font-bold text-black mb-4">
            Find Delivery Companies Australia Wide
          </h2>
          <p className="text-lg text-gray-600">
            Professional delivery companies serving all major cities across Australia
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
                  {city} Delivery Companies
                </a>
              ))}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/job/new" 
            className="inline-flex items-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-full shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            Get Free Delivery Quotes
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// Interstate routes component for delivery companies
function InterstateDeliveryRoutes() {
  const routes = [
    // Column 1
    [
      'Sydney to Melbourne small movers',
      'Sydney to Adelaide small movers', 
      'Sydney to Darwin small movers',
      'Melbourne to Perth small movers',
      'Melbourne to Hobart small movers',
      'Brisbane to Melbourne small movers',
      'Brisbane to Canberra small movers',
      'Perth to Sydney small movers',
      'Perth to Adelaide small movers',
      'Perth to Darwin small movers',
      'Adelaide to Brisbane small movers',
      'Adelaide to Hobart small movers',
      'Canberra to Melbourne small movers',
      'Canberra to Adelaide small movers',
      'Hobart to Sydney small movers',
      'Hobart to Perth small movers',
      'Hobart to Darwin small movers',
      'Darwin to Brisbane small movers',
      'Darwin to Canberra small movers'
    ],
    // Column 2
    [
      'Sydney to Brisbane small movers',
      'Sydney to Canberra small movers',
      'Melbourne to Sydney small movers',
      'Melbourne to Adelaide small movers',
      'Melbourne to Darwin small movers',
      'Brisbane to Perth small movers',
      'Brisbane to Hobart small movers',
      'Perth to Melbourne small movers',
      'Perth to Canberra small movers',
      'Adelaide to Sydney small movers',
      'Adelaide to Perth small movers',
      'Adelaide to Darwin small movers',
      'Canberra to Brisbane small movers',
      'Canberra to Hobart small movers',
      'Hobart to Melbourne small movers',
      'Hobart to Adelaide small movers',
      'Darwin to Sydney small movers',
      'Darwin to Perth small movers',
      'Darwin to Hobart small movers'
    ],
    // Column 3
    [
      'Sydney to Perth small movers',
      'Sydney to Hobart small movers',
      'Melbourne to Brisbane small movers',
      'Melbourne to Canberra small movers',
      'Brisbane to Sydney small movers',
      'Brisbane to Adelaide small movers',
      'Brisbane to Darwin small movers',
      'Perth to Brisbane small movers',
      'Perth to Hobart small movers',
      'Adelaide to Melbourne small movers',
      'Adelaide to Canberra small movers',
      'Canberra to Sydney small movers',
      'Canberra to Perth small movers',
      'Canberra to Darwin small movers',
      'Hobart to Brisbane small movers',
      'Hobart to Canberra small movers',
      'Darwin to Melbourne small movers',
      'Darwin to Adelaide small movers'
    ]
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">
            Delivery companies servicing major routes
          </h2>
          <p className="text-lg text-gray-600">
            You can find Delivery companies servicing all major Australian interstate routes
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
            className="inline-flex items-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-full shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            Get Free Interstate Delivery Quotes
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function DeliveryCompanies() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero 
        heading="Find Delivery Companies" 
        subheading="Professional delivery companies for reliable transport services. Compare quotes from trusted delivery providers."
      />
      <Stats />
      <RecentlyBookedMoves />
      <div className="border-t border-gray-300"></div>
      <HowItWorks />
      <WhyUseFindAMover />
      <ChooseGoodRemovalist />
      <AustraliaWideDeliveryCompanies />
      <InterstateDeliveryRoutes />
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