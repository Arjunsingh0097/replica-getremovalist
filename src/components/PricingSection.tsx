interface PricingSectionProps {
  city: string;
}

export default function PricingSection({ city }: PricingSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 leading-tight">
          How much does a removalist cost in<br />
          <span className="text-4xl md:text-5xl">{city}?</span>
        </h2>
        
        <div className="space-y-6 mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            The average cost to hire a removalist in {city}, including a two-person team and a truck, is <strong className="text-blue-900">$140 per hour</strong>. Rates typically range from <strong className="text-blue-900">$95 to $175 per hour</strong>, covering essential services like loading, transport, and unloading.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            Find a Mover is the perfect way to save money on your {city} move by comparing {city} moving company prices and reviews, you can find the best professional removal company for you.
          </p>
        </div>
        
        <div className="flex justify-center">
          <a 
            href="/job/new" 
            className="inline-flex items-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-blue-900 font-semibold rounded-full shadow-md transition-all duration-300 hover:-translate-y-1"
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
