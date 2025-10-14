"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function QuoteFormContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  
  const [formData, setFormData] = useState({
    serviceType: '',
    pickupAddress: '',
    pickupPropertyType: '',
    dropoffAddress: '',
    dropoffPropertyType: '',
    items: [{ description: '', quantity: '', dimensions: '', weight: '' }],
    when: '',
    urgency: '',
    otherDetails: '',
    email: '',
    phone: '',
    firstName: '',
    lastName: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const serviceTypes = [
    { id: 1, name: "Moving Local / Same State" },
    { id: 2, name: "Moving Interstate" },
    { id: 3, name: "Moving Office" },
    { id: 4, name: "Moving a Single Item" },
    { id: 5, name: "Moving a Few Items" },
    { id: 6, name: "Moving Furniture Items" },
    { id: 7, name: "Moving a Piano" },
    { id: 8, name: "Moving a Pool Table" },
    { id: 9, name: "Gumtree/Ebay Pickups" },
    { id: 10, name: "Moving Fragile Items" },
    { id: 11, name: "Rubbish Removal" }
  ];

  useEffect(() => {
    if (category) {
      const selectedService = serviceTypes.find(service => service.id === parseInt(category));
      if (selectedService) {
        setFormData(prev => ({ ...prev, serviceType: selectedService.name }));
      }
    }
  }, [category]);

  const propertyTypes = [
    "Single storey house",
    "Double storey house", 
    "Triple storey house",
    "Apartment with elevator",
    "Apartment without elevator (1st floor)",
    "Apartment without elevator (2nd floor)",
    "Apartment without elevator (3rd floor+)",
    "Storage Facility",
    "Commercial Property"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleItemChange = (index: number, field: string, value: string) => {
    const updatedItems = [...formData.items];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    setFormData(prev => ({ ...prev, items: updatedItems }));
  };

  const addItem = () => {
    setFormData(prev => ({
      ...prev,
      items: [...prev.items, { description: '', quantity: '', dimensions: '', weight: '' }]
    }));
  };

  const removeItem = (index: number) => {
    if (formData.items.length > 1) {
      const updatedItems = formData.items.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, items: updatedItems }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">What are you moving?</h2>
              <p className="text-gray-600">Select the type of service you need</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviceTypes.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, serviceType: service.name }))}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                    formData.serviceType === service.name
                      ? 'border-amber-500 bg-amber-50 text-amber-900'
                      : 'border-gray-200 bg-white hover:border-amber-300 hover:bg-amber-25 text-gray-900'
                  }`}
                >
                  <div className="font-medium">{service.name}</div>
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Where are you moving from?</h2>
              <p className="text-gray-600">Tell us about your pickup location</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pickup Address *
                </label>
                <input
                  type="text"
                  name="pickupAddress"
                  value={formData.pickupAddress}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-500"
                  placeholder="Enter your pickup address"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Type *
                </label>
                <select
                  name="pickupPropertyType"
                  value={formData.pickupPropertyType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent appearance-none cursor-pointer"
                  required
                >
                  <option value="">Select property type</option>
                  {propertyTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Drop-off Address *
                </label>
                <input
                  type="text"
                  name="dropoffAddress"
                  value={formData.dropoffAddress}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-500"
                  placeholder="Enter your drop-off address"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Drop-off Property Type *
                </label>
                <select
                  name="dropoffPropertyType"
                  value={formData.dropoffPropertyType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent appearance-none cursor-pointer"
                  required
                >
                  <option value="">Select property type</option>
                  {propertyTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">What items are you moving?</h2>
              <p className="text-gray-600">Tell us about the items you need moved</p>
            </div>

            <div className="space-y-4">
              {formData.items.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium text-gray-900">Item {index + 1}</h3>
                    {formData.items.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeItem(index)}
                        className="text-red-500 hover:text-red-700 text-sm font-medium"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description *
                      </label>
                      <input
                        type="text"
                        value={item.description}
                        onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-500"
                        placeholder="e.g., 3-seater sofa"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Quantity *
                      </label>
                      <input
                        type="text"
                        value={item.quantity}
                        onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-500"
                        placeholder="e.g., 1"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Dimensions (optional)
                      </label>
                      <input
                        type="text"
                        value={item.dimensions}
                        onChange={(e) => handleItemChange(index, 'dimensions', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-500"
                        placeholder="e.g., 200cm x 90cm x 80cm"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Weight (optional)
                      </label>
                      <input
                        type="text"
                        value={item.weight}
                        onChange={(e) => handleItemChange(index, 'weight', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-500"
                        placeholder="e.g., 50kg"
                      />
                    </div>
                  </div>
                </div>
              ))}
              
              <button
                type="button"
                onClick={addItem}
                className="w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-amber-500 hover:text-amber-600 transition-colors duration-200"
              >
                + Add Another Item
              </button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Details & Timing</h2>
              <p className="text-gray-600">Tell us when you need the move and how to reach you</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-500"
                  placeholder="Your first name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-500"
                  placeholder="Your last name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-500"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-500"
                  placeholder="04XX XXX XXX"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  When do you need to move? *
                </label>
                <select
                  name="when"
                  value={formData.when}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent appearance-none cursor-pointer"
                  required
                >
                  <option value="">Select timing</option>
                  <option value="ASAP">ASAP</option>
                  <option value="Within a week">Within a week</option>
                  <option value="Within a month">Within a month</option>
                  <option value="1-2 months">1-2 months</option>
                  <option value="2+ months">2+ months</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How urgent is this move?
                </label>
                <select
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent appearance-none cursor-pointer"
                >
                  <option value="">Select urgency</option>
                  <option value="Very urgent">Very urgent</option>
                  <option value="Somewhat urgent">Somewhat urgent</option>
                  <option value="Not urgent">Not urgent</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Details (optional)
              </label>
              <textarea
                name="otherDetails"
                value={formData.otherDetails}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none placeholder-gray-500"
                placeholder="Any special requirements, access issues, or additional information..."
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      <Navbar />
      
      {/* Progress Bar */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">
              Step {currentStep} of {totalSteps}
            </span>
            <span className="text-sm font-medium text-amber-600">
              {Math.round((currentStep / totalSteps) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-amber-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-6">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-xl mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Get Your Moving Quote</h1>
                <p className="text-amber-100">Quick, easy, and completely free</p>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8">
            <form onSubmit={handleSubmit}>
              {renderStepContent()}
              
              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                    currentStep === 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Previous
                </button>
                
                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Get My Quotes
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-xl mb-4">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Free Quotes</h3>
            <p className="text-gray-600 text-sm">Get multiple quotes from verified removalists at no cost</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-xl mb-4">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Verified Movers</h3>
            <p className="text-gray-600 text-sm">All removalists are licensed, insured, and background checked</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-xl mb-4">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Quick Response</h3>
            <p className="text-gray-600 text-sm">Receive quotes within 24 hours from local removalists</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default function QuoteForm() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QuoteFormContent />
    </Suspense>
  );
}