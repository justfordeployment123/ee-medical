import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { ServiceType } from '../../types';

const servicesData: ServiceType[] = [
  { id: '1', title: 'Reliability', description: 'E&E Medicals helps you carry design reviews to spot any major issues that will create obstacles to compliance testing...', link: '#' },
  { id: '2', title: 'FDA Application', description: 'Assist during the process of submitting applications for class I, II, III medical devices...', link: '#' },
  { id: '3', title: 'Six Sigma - Healthcare', description: 'A unique Six Sigma program designed for the Healthcare industry based on the DMAIC model...', link: '#' },
  { id: '4', title: 'Quality System Regulation', description: 'Helps define medical device establishment registration requirements and guides through the FURLS process...', link: '#' },
  { id: '5', title: 'EU MDR Documentation', description: 'Expert review of device design, risk analysis, clinical evaluation, post-market surveillance...', link: '#' },
  { id: '6', title: 'ISO 9001 QMS', description: 'Develop and implement quality systems for companies approved by FDA...', link: '#' },
];

export const Services: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <div key={service.id} className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 transition-transform hover:-translate-y-1">
            {/* Image Placeholder: Service Thumbnail */}
            <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-500 font-semibold">
               [SERVICE IMAGE: {service.title}]
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
              <a href={service.link} className="flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                Read more <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};