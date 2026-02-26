import React from 'react';
import { CheckCircle } from 'lucide-react';

export const AboutContent: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Image */}
        <div className="relative">
          {/* Decorative background box (common in Consultio theme) */}
          <div className="absolute top-6 -left-6 w-full h-full border-8 border-blue-50 z-0 hidden md:block rounded-lg"></div>
          
          <img 
            src="https://demo.casethemes.net/consultio-agency/wp-content/uploads/2019/12/about1.png" 
            alt="About E & E Medicals" 
            className="w-full h-auto object-cover relative z-10"
          />
        </div>

        {/* Right Side: Text Content */}
        <div>
          <p className="text-blue-600 font-bold tracking-wider uppercase mb-3">About Us</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            We are your trusted partners in <span className="text-blue-600">Regulatory Compliance</span>.
          </h2>
          
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            E&E Medicals & Consulting is a premier regulatory affairs consulting firm dedicated to helping medical device, IVD, and pharmaceutical companies navigate the complex landscape of FDA and international regulations.
          </p>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            With over 32 years of combined experience, our experts provide strategic guidance, gap analysis, and hands-on implementation support to ensure your products reach the market safely and efficiently. We specialize in quality systems, 510(k) submissions, CE marking, and comprehensive compliance auditing.
          </p>

          {/* Feature List */}
          <ul className="space-y-4 mb-10">
            <li className="flex items-start">
              <CheckCircle className="text-blue-600 mr-3 mt-1 shrink-0" size={20} />
              <span className="text-gray-800 font-medium">Proven track record with FDA and international regulatory bodies.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-blue-600 mr-3 mt-1 shrink-0" size={20} />
              <span className="text-gray-800 font-medium">Customized quality management systems (ISO 13485 & ISO 9001).</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-blue-600 mr-3 mt-1 shrink-0" size={20} />
              <span className="text-gray-800 font-medium">Dedicated support for clinical data and post-market compliance.</span>
            </li>
          </ul>

          {/* Call to Action Button */}
          <a 
            href="#contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Discover More
          </a>
        </div>

      </div>
    </section>
  );
};