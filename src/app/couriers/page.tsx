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

// Australia-wide couriers component
function AustraliaWideCouriers() {
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
            Find Couriers Australia Wide
          </h2>
          <p className="text-lg text-gray-600">
            Professional couriers serving all major cities across Australia
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
                  {city} Couriers
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
            Get Free Courier Quotes
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// Interstate routes component for couriers
function InterstateCourierRoutes() {
  const routes = [
    // Column 1
    [
      'Sydney to Melbourne couriers',
      'Sydney to Adelaide couriers', 
      'Sydney to Darwin couriers',
      'Melbourne to Perth couriers',
      'Melbourne to Hobart couriers',
      'Brisbane to Melbourne couriers',
      'Brisbane to Canberra couriers',
      'Perth to Sydney couriers',
      'Perth to Adelaide couriers',
      'Perth to Darwin couriers',
      'Adelaide to Brisbane couriers',
      'Adelaide to Hobart couriers',
      'Canberra to Melbourne couriers',
      'Canberra to Adelaide couriers',
      'Hobart to Sydney couriers',
      'Hobart to Perth couriers',
      'Hobart to Darwin couriers',
      'Darwin to Brisbane couriers',
      'Darwin to Canberra couriers'
    ],
    // Column 2
    [
      'Sydney to Brisbane couriers',
      'Sydney to Canberra couriers',
      'Melbourne to Sydney couriers',
      'Melbourne to Adelaide couriers',
      'Melbourne to Darwin couriers',
      'Brisbane to Perth couriers',
      'Brisbane to Hobart couriers',
      'Perth to Melbourne couriers',
      'Perth to Canberra couriers',
      'Adelaide to Sydney couriers',
      'Adelaide to Perth couriers',
      'Adelaide to Darwin couriers',
      'Canberra to Brisbane couriers',
      'Canberra to Hobart couriers',
      'Hobart to Melbourne couriers',
      'Hobart to Adelaide couriers',
      'Darwin to Sydney couriers',
      'Darwin to Perth couriers',
      'Darwin to Hobart couriers'
    ],
    // Column 3
    [
      'Sydney to Perth couriers',
      'Sydney to Hobart couriers',
      'Melbourne to Brisbane couriers',
      'Melbourne to Canberra couriers',
      'Brisbane to Sydney couriers',
      'Brisbane to Adelaide couriers',
      'Brisbane to Darwin couriers',
      'Perth to Brisbane couriers',
      'Perth to Hobart couriers',
      'Adelaide to Melbourne couriers',
      'Adelaide to Canberra couriers',
      'Canberra to Sydney couriers',
      'Canberra to Perth couriers',
      'Canberra to Darwin couriers',
      'Hobart to Brisbane couriers',
      'Hobart to Canberra couriers',
      'Darwin to Melbourne couriers',
      'Darwin to Adelaide couriers'
    ]
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Couriers servicing major routes
          </h2>
          <p className="text-lg text-gray-600">
            You can find Couriers servicing all major Australian interstate routes
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
            className="inline-flex items-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-blue-900 font-semibold rounded-full shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            Get Free Interstate Courier Quotes
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Couriers() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero 
        heading="Find Courier Services" 
        subheading="Reliable courier services for fast and secure package delivery. Compare quotes from professional courier companies."
      />
      <Stats />
      <RecentlyBookedMoves />
      <div className="border-t border-gray-300"></div>
      <HowItWorks />
      <WhyUseFindAMover />
      <ChooseGoodRemovalist />
      <AustraliaWideCouriers />
      <InterstateCourierRoutes />
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