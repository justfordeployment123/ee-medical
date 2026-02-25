import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div>
          <p className="text-blue-600 font-semibold tracking-wider uppercase mb-2">Contact us</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-10">We'd <span className="text-blue-600">love</span> to hear from you!</h2>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-blue-50 p-4 rounded-full mr-6">
                <MapPin className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Location:</h3>
                <p className="text-gray-600">400 Galleria Pkwy Suite 1500<br/>Atlanta, GA 30339</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-50 p-4 rounded-full mr-6">
                <Mail className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Get in touch:</h3>
                <p className="text-blue-600 font-medium">info@eemedicals.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-50 p-4 rounded-full mr-6">
                <Phone className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Let's talk:</h3>
                <p className="text-gray-600">Phone: +1-678-385-6106<br/>Toll-free: (800)-305-6069</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
          <p className="text-gray-600 mb-6 font-medium">Fill out the form below and we will get in touch with you.</p>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="First name *" className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              <input type="text" placeholder="Last name *" className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="email" placeholder="Your mail *" className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              <input type="tel" placeholder="Phone number *" className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <textarea placeholder="Message..." rows={5} className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded transition-colors duration-200">
              Send now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};