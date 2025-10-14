"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        {/* Header Text */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Find a Mover operate nationally. Our head office is based in Melbourne. If you have an enquiry please contact us using one of the options below.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Column - Online Enquiry Form */}
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Online Enquiry</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Your full name"
                    required
                  />
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

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                    placeholder="Please describe your enquiry..."
                    required
                  />
                </div>

                {/* reCAPTCHA */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id="recaptcha"
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="recaptcha" className="ml-2 text-sm text-gray-700">
                      I'm not a robot
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-600">
                      reCAPTCHA is changing its terms of service. Take action.
                    </p>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <div className="text-xs text-gray-600">
                        <div>Privacy</div>
                        <div>Terms</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200"
                >
                  Submit
                </button>

              </form>
            </div>

            {/* Right Column - Contact Information */}
            <div className="bg-gray-50 p-8 lg:p-12">
              <div className="space-y-8">
                
                {/* Address */}
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Address</h3>
                  <div className="space-y-1 text-gray-700">
                    <p>Find a Mover Pty Ltd</p>
                    <p>ABN: 99 167 776 838</p>
                    <p>712/198 Harbour Esp</p>
                    <p>Docklands VIC 3008</p>
                  </div>
                </div>

                {/* Support Hours */}
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Support Hours:</h3>
                  <div className="space-y-1 text-gray-700">
                    <p>9:00am - 5:00pm</p>
                    <p>Monday to Friday</p>
                  </div>
                </div>

                {/* Call Us */}
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Call Us</h3>
                  <div className="space-y-1 text-gray-700">
                    <p>Phone: 1300 486 839</p>
                  </div>
                </div>

                {/* Important Note */}
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                  <h4 className="text-lg font-bold text-blue-900 mb-3">Please Note</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Find a Mover is a quote comparison site. We do not provide quotes over the phone. 
                    To get removalists quotes please{' '}
                    <a href="/job/new" className="font-bold underline text-blue-600 hover:text-blue-800">
                      list your job
                    </a>{' '}
                    through our website.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
