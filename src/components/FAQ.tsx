"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is a removalist and what services do they provide?",
      answer: "A removalist is a professional moving company that specializes in helping people relocate their belongings from one location to another. They provide services such as packing, loading, transporting, unloading, and unpacking items. Some also offer furniture disassembly and reassembly, storage solutions, and insurance coverage for your belongings during the move."
    },
    {
      question: "How much does it cost to move house Australia?",
      answer: "The cost of moving house in Australia varies significantly based on factors like distance, size of the move, time of year, and services required. Local moves typically range from $300-$800, while interstate moves can cost $1,000-$5,000 or more. It's best to get multiple quotes from different removalists to compare prices."
    },
    {
      question: "How many boxes do I need for a 3 bed house move?",
      answer: "For a 3-bedroom house move, you'll typically need 50-80 boxes depending on how much you own. This includes small boxes for books and heavy items, medium boxes for general belongings, and large boxes for lighter items. You may also need specialty boxes for items like TVs, mirrors, and artwork."
    },
    {
      question: "How far in advance should I schedule local movers?",
      answer: "For local moves, it's recommended to book removalists 2-4 weeks in advance, especially during peak moving seasons (summer months and end of financial year). For interstate moves, book 4-6 weeks ahead. However, some removalists can accommodate shorter notice bookings depending on availability."
    },
    {
      question: "What do most movers charge per hour?",
      answer: "Most local movers charge between $80-$150 per hour for a team of 2-3 people. Interstate movers typically charge a fixed rate based on distance and volume rather than hourly rates. Always confirm pricing structure upfront and ask about any additional fees for stairs, long carries, or special items."
    },
    {
      question: "Should I move furniture or boxes first?",
      answer: "Generally, it's best to move furniture first, then boxes. This allows you to position furniture in the correct rooms before bringing in boxes, making unpacking more organized. Heavy furniture should be moved first to avoid having to work around it, and fragile items should be moved last to minimize handling."
    },
    {
      question: "What months are the most expensive to move?",
      answer: "The most expensive months to move are typically December through February (summer in Australia) and June-July (end of financial year). These are peak moving seasons due to weather conditions and lease cycles. Moving during off-peak months like autumn (March-May) or spring (September-November) can often result in lower costs."
    },
    {
      question: "How long does it take to pack up a 3 bedroom house?",
      answer: "Packing a 3-bedroom house typically takes 2-4 days for an average family, depending on how much you own and how organized you are. Professional packers can usually complete it in 1-2 days. Start packing non-essential items 4-6 weeks before your move and leave daily essentials until the last few days."
    },
    {
      question: "What day is cheapest to hire movers?",
      answer: "Weekdays (Monday-Thursday) are generally cheaper than weekends, with Tuesday and Wednesday often being the most affordable days. Avoid moving on public holidays, end of month, or end of financial year when demand is highest. Some removalists offer discounts for mid-week moves."
    },
    {
      question: "How can I get ready for the moving day with a furniture removalist?",
      answer: "To prepare for moving day: pack everything except essentials, disassemble furniture if needed, clear pathways, arrange parking for the truck, have cash for tips, prepare refreshments for movers, and be present to direct the process. Also, take photos of valuable items and ensure utilities are arranged for both locations."
    },
    {
      question: "Do movers charge a fixed rate or by the hour?",
      answer: "It depends on the type of move. Local movers typically charge by the hour (usually $80-$150/hour for a team), while interstate movers usually charge a fixed rate based on distance, volume, and services. Some local movers also offer fixed rates for smaller moves. Always clarify the pricing structure before booking."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#282C40]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently asked questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left py-6 flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
              >
                <span className="text-white text-lg font-medium pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-[#E53E3E] transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {/* Answer */}
              {openIndex === index && (
                <div className="pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
              
              {/* Separator */}
              {index < faqs.length - 1 && (
                <div className="border-t border-[#4A5568]"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
