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

// Australia-wide pool table removalists component
function AustraliaWidePoolTableRemovalists() {
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
            Find Pool Table Removalists Australia Wide
          </h2>
          <p className="text-lg text-gray-600">
            Professional pool table removalists serving all major cities across Australia
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cities.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-2">
              {column.map((city, cityIndex) => (
                <a
                  key={cityIndex}
                  href={`/job/new?category=8&city=${city.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-blue-600 hover:text-red-500 hover:underline transition-colors duration-200 py-1"
                >
                  {city} Pool Table Removalists
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
            Get Free Pool Table Removal Quotes
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// Interstate routes component for pool table removalists
function InterstatePoolTableRoutes() {
  const routes = [
    // Column 1
    [
      'Sydney to Melbourne pool table movers',
      'Sydney to Adelaide pool table movers', 
      'Sydney to Darwin pool table movers',
      'Melbourne to Perth pool table movers',
      'Melbourne to Hobart pool table movers',
      'Brisbane to Melbourne pool table movers',
      'Brisbane to Canberra pool table movers',
      'Perth to Sydney pool table movers',
      'Perth to Adelaide pool table movers',
      'Perth to Darwin pool table movers',
      'Adelaide to Brisbane pool table movers',
      'Adelaide to Hobart pool table movers',
      'Canberra to Melbourne pool table movers',
      'Canberra to Adelaide pool table movers',
      'Hobart to Sydney pool table movers',
      'Hobart to Perth pool table movers'
    ],
    // Column 2
    [
      'Sydney to Brisbane pool table movers',
      'Sydney to Canberra pool table movers',
      'Melbourne to Sydney pool table movers',
      'Melbourne to Adelaide pool table movers',
      'Melbourne to Darwin pool table movers',
      'Brisbane to Perth pool table movers',
      'Brisbane to Hobart pool table movers',
      'Perth to Melbourne pool table movers',
      'Perth to Canberra pool table movers',
      'Adelaide to Sydney pool table movers',
      'Adelaide to Perth pool table movers',
      'Adelaide to Darwin pool table movers',
      'Canberra to Brisbane pool table movers',
      'Canberra to Hobart pool table movers',
      'Hobart to Melbourne pool table movers',
      'Hobart to Adelaide pool table movers'
    ],
    // Column 3
    [
      'Sydney to Perth pool table movers',
      'Sydney to Hobart pool table movers',
      'Melbourne to Brisbane pool table movers',
      'Melbourne to Canberra pool table movers',
      'Brisbane to Sydney pool table movers',
      'Brisbane to Adelaide pool table movers',
      'Brisbane to Darwin pool table movers',
      'Perth to Brisbane pool table movers',
      'Perth to Hobart pool table movers',
      'Adelaide to Melbourne pool table movers',
      'Adelaide to Canberra pool table movers',
      'Canberra to Sydney pool table movers',
      'Canberra to Perth pool table movers',
      'Canberra to Darwin pool table movers',
      'Hobart to Brisbane pool table movers',
      'Hobart to Canberra pool table movers'
    ]
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">
            Pool table removalists servicing major routes
          </h2>
          <p className="text-lg text-gray-600">
            You can find Pool table removalists servicing all major Australian interstate routes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {routes.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-2">
              {column.map((route, routeIndex) => (
                <a
                  key={routeIndex}
                  href={`/job/new?category=8&route=${route.toLowerCase().replace(/\s+/g, '-').replace(/to/g, 'to')}`}
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
            Get Free Interstate Pool Table Quotes
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function PoolTableRemovalists() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero 
        heading="Find Pool Table Removalists" 
        subheading="Expert pool table removalists for safe and professional pool table transport. Compare quotes from specialist movers."
      />
      <Stats />
      <RecentlyBookedMoves />
      <div className="border-t border-gray-300"></div>
      <HowItWorks />
      <WhyUseFindAMover />
      <ChooseGoodRemovalist />
      <AustraliaWidePoolTableRemovalists />
      <InterstatePoolTableRoutes />
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