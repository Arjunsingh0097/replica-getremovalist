"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function JoinNetwork() {
  const [formData, setFormData] = useState({
    businessType: 'rubbish-removalist',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
    businessName: '',
    abn: '',
    suburb: '',
    areaServiced: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column - Benefits Section */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-blue-900 mb-6">
                We can help you get more customers
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Find a Mover is the perfect tool for any business looking for more customers. 
                We provide industry-specific tools for direct customer connection and accurate quoting.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Get job leads */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-blue-900">Get job leads</h3>
                </div>
                <p className="text-gray-600">
                  Receive job leads directly to your inbox as they come in, or browse leads in your provider dashboard. 
                  Only quote on the leads your interested in and forgot the rest.
                </p>
              </div>

              {/* Showcase your business */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-blue-900">Showcase your business</h3>
                </div>
                <p className="text-gray-600">
                  Find a Mover is a great way to showcase your business. Earn great reviews from Find a Mover customers 
                  and they'll be shown on your business profile page. Our profile pages are great exposure.
                </p>
              </div>

              {/* Track and manage */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-blue-900">Track and manage quotes and bookings</h3>
                </div>
                <p className="text-gray-600">
                  We've gone to great efforts to create a platform that is easy to use yet has nice features for 
                  helping you manage your quotes, bookings, reviews etc.
                </p>
              </div>

              {/* Competitive pricing */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-blue-900">Competitive pricing with no commissions</h3>
                </div>
                <p className="text-gray-600">
                  Our price per lead is extremely competitive compared to many other lead generation websites. 
                  Unlike some other lead platforms, we do not charge any commissions on work you find through our site.
                </p>
              </div>

              {/* Follow up quotes */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 md:col-span-2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-blue-900">Follow up quotes directly with the customer</h3>
                </div>
                <p className="text-gray-600">
                  After you've provided a quote to the customer, we'll send you the customer's phone number so you can 
                  follow up your quote and try to secure the job.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column - Registration Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Register Your Business</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Business Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Type
                </label>
                <div className="space-y-2">
                  <label className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
                    formData.businessType === 'removals-transporter' 
                      ? 'bg-gray-100 text-gray-700' 
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}>
                    <input
                      type="radio"
                      name="businessType"
                      value="removals-transporter"
                      checked={formData.businessType === 'removals-transporter'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-3 text-sm font-medium">Removals / Transporter</span>
                  </label>
                  
                  <label className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
                    formData.businessType === 'rubbish-removalist' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}>
                    <input
                      type="radio"
                      name="businessType"
                      value="rubbish-removalist"
                      checked={formData.businessType === 'rubbish-removalist'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-3 text-sm font-medium">Rubbish Removalist</span>
                  </label>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Create a Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter password"
                  required
                />
              </div>

              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="First name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="+61 4XX XXX XXX"
                  required
                />
              </div>

              {/* Business Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Your business name"
                  required
                />
              </div>

              {/* ABN */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ABN
                </label>
                <input
                  type="text"
                  name="abn"
                  value={formData.abn}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="11 222 333 444"
                  required
                />
                <a href="#" className="text-sm text-blue-600 hover:text-blue-800 mt-1 inline-block">
                  Lookup my ABN
                </a>
              </div>

              {/* Suburb */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Suburb
                </label>
                <div className="relative">
                  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <input
                    type="text"
                    name="suburb"
                    value={formData.suburb}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Type 2 or more characters and select from list"
                    required
                  />
                </div>
              </div>

              {/* Area Serviced */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Area Serviced
                </label>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="areaServiced"
                      value="local"
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-3 text-gray-700">Local (within a specific radius of my suburb)</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="areaServiced"
                      value="statewide"
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-3 text-gray-700">Statewide (all areas throughout my state)</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="areaServiced"
                      value="interstate"
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-3 text-gray-700">Interstate</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200"
              >
                Register Your Business
              </button>

              {/* Terms */}
              <p className="text-sm text-gray-500 text-center">
                By clicking the above button, you indicate that you have read and agree to our{' '}
                <a href="/terms" className="text-blue-600 hover:text-blue-800 underline">
                  Terms of Use
                </a>
              </p>

            </form>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
