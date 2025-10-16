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

// Australia-wide fragile item removalists component
function AustraliaWideFragileItemRemovalists() {
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
            Find Fragile Item Removalists Australia Wide
          </h2>
          <p className="text-lg text-gray-600">
            Professional fragile item removalists serving all major cities across Australia
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cities.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-2">
              {column.map((city, cityIndex) => (
                <a
                  key={cityIndex}
                  href={`/job/new?category=10&city=${city.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-blue-600 hover:text-red-500 hover:underline transition-colors duration-200 py-1"
                >
                  {city} Fragile Item Removalists
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
            Get Free Fragile Item Quotes
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// Interstate routes component for fragile item removalists
function InterstateFragileItemRoutes() {
  const routes = [
    // Column 1
    [
      'Sydney to Melbourne fragile item movers',
      'Sydney to Adelaide fragile item movers', 
      'Sydney to Darwin fragile item movers',
      'Melbourne to Perth fragile item movers',
      'Melbourne to Hobart fragile item movers',
      'Brisbane to Melbourne fragile item movers',
      'Brisbane to Canberra fragile item movers',
      'Perth to Sydney fragile item movers',
      'Perth to Adelaide fragile item movers',
      'Perth to Darwin fragile item movers',
      'Adelaide to Brisbane fragile item movers',
      'Adelaide to Hobart fragile item movers',
      'Canberra to Melbourne fragile item movers',
      'Canberra to Adelaide fragile item movers',
      'Hobart to Sydney fragile item movers',
      'Hobart to Perth fragile item movers',
      'Hobart to Darwin fragile item movers',
      'Darwin to Brisbane fragile item movers',
      'Darwin to Canberra fragile item movers'
    ],
    // Column 2
    [
      'Sydney to Brisbane fragile item movers',
      'Sydney to Canberra fragile item movers',
      'Melbourne to Sydney fragile item movers',
      'Melbourne to Adelaide fragile item movers',
      'Melbourne to Darwin fragile item movers',
      'Brisbane to Perth fragile item movers',
      'Brisbane to Hobart fragile item movers',
      'Perth to Melbourne fragile item movers',
      'Perth to Canberra fragile item movers',
      'Adelaide to Sydney fragile item movers',
      'Adelaide to Perth fragile item movers',
      'Adelaide to Darwin fragile item movers',
      'Canberra to Brisbane fragile item movers',
      'Canberra to Hobart fragile item movers',
      'Hobart to Melbourne fragile item movers',
      'Hobart to Adelaide fragile item movers',
      'Darwin to Sydney fragile item movers',
      'Darwin to Perth fragile item movers',
      'Darwin to Hobart fragile item movers'
    ],
    // Column 3
    [
      'Sydney to Perth fragile item movers',
      'Sydney to Hobart fragile item movers',
      'Melbourne to Brisbane fragile item movers',
      'Melbourne to Canberra fragile item movers',
      'Brisbane to Sydney fragile item movers',
      'Brisbane to Adelaide fragile item movers',
      'Brisbane to Darwin fragile item movers',
      'Perth to Brisbane fragile item movers',
      'Perth to Hobart fragile item movers',
      'Adelaide to Melbourne fragile item movers',
      'Adelaide to Canberra fragile item movers',
      'Canberra to Sydney fragile item movers',
      'Canberra to Perth fragile item movers',
      'Canberra to Darwin fragile item movers',
      'Hobart to Brisbane fragile item movers',
      'Hobart to Canberra fragile item movers',
      'Darwin to Melbourne fragile item movers',
      'Darwin to Adelaide fragile item movers'
    ]
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">
            Fragile item removalists servicing major routes
          </h2>
          <p className="text-lg text-gray-600">
            You can find Fragile item removalists servicing all major Australian interstate routes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {routes.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-2">
              {column.map((route, routeIndex) => (
                <a
                  key={routeIndex}
                  href={`/job/new?category=10&route=${route.toLowerCase().replace(/\s+/g, '-').replace(/to/g, 'to')}`}
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
            Get Free Interstate Fragile Item Quotes
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function FragileItemRemovalists() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero 
        heading="Find Fragile Item Removalists" 
        subheading="Specialist fragile item removalists for safe transport of delicate items. Compare quotes from experienced fragile item movers."
      />
      <Stats />
      <RecentlyBookedMoves />
      <div className="border-t border-gray-300"></div>
      <HowItWorks />
      <WhyUseFindAMover />
      <ChooseGoodRemovalist />
      <AustraliaWideFragileItemRemovalists />
      <InterstateFragileItemRoutes />
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