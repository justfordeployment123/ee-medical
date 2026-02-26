import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { ServiceType } from '../../types';

const servicesData: ServiceType[] = [
  { 
    id: '1', 
    title: 'Reliability', 
    description: 'E&E Medicals helps you carry design reviews to spot any major issues that will create obstacles to compliance testing. Our reliability experts design a test plan for you that ensures your design will last to your expectations in the real world.', 
    link: 'https://eemedicals.com/service/reliability/',
    imageUrl: 'https://eemedicals.com/wp-content/uploads/2020/03/reliability.jpg'
  },
  { 
    id: '2', 
    title: 'FDA Application', 
    description: 'E&E Medicals assist during the process of submitting applications for class I, II, III medical devices. Our qualified team of experts shall submit FDA medical device regulatory documents for U.S. and international clients.', 
    link: 'https://eemedicals.com/service/how-to-get-fda-approval-and-clearance-to-fda-510k-pma-de-novo-for-medical-devices/',
    imageUrl: 'https://eemedicals.com/wp-content/uploads/2021/11/fda_application.jpg'
  },
  { 
    id: '3', 
    title: 'Six Sigma Healthcare', 
    description: 'E&E Medicals offers a very unique Six Sigma program that is designed for the Healthcare industry. It is based on the DMAIC model - Define, Measure, Analyze, Improve, and Control. We fully customize each application to meet the challenges.', 
    link: 'https://eemedicals.com/service/six-sigma-healthcare/',
    imageUrl: 'https://eemedicals.com/wp-content/uploads/2021/11/six-sigma.jpg'
  },
  { 
    id: '4', 
    title: 'Quality System Regulation (QSR)', 
    description: 'E&E Medicals helps define the medical device establishment registration requirements, guide through the electronic establishment registration and medical device listing process, which uses the FURLS.', 
    link: 'https://eemedicals.com/service/quality-system-regulation-qsr/',
    imageUrl: 'https://eemedicals.com/wp-content/uploads/2021/11/qa.jpg'
  },
  { 
    id: '5', 
    title: 'EU MDR Technical Documentation', 
    description: "Our expert's review device design, risk analysis, clinical evaluation, testing reports, post-market surveillance, labeling, and other required areas. Gap analysis is carried out to ease the transition in the required areas.", 
    link: 'https://eemedicals.com/service/how-to-start-eu-mdr-technical-documentation/',
    imageUrl: 'https://eemedicals.com/wp-content/uploads/2021/11/eu-mdr-gap.jpg'
  },
  { 
    id: '6', 
    title: 'Quality Management System Implementation', 
    description: 'The quality management experts at E&E Medicals develop and implement quality systems for companies approved by FDA. We help in designing smart Quality Management Systems that streamline business demands.', 
    link: 'https://eemedicals.com/service/iso-9001-quality-management-system-implementation/',
    imageUrl: 'https://eemedicals.com/wp-content/uploads/2021/11/qms-1.jpg'
  },
  { 
    id: '7', 
    title: 'FDA 483 Observations', 
    description: 'Medical device or IVD manufacturers want to avoid Form 483 or Warning Letter from the US Food and Drug Administration. We help in responding to FDA 483 Observations and Warning Letters through corrective actions.', 
    link: 'https://eemedicals.com/service/fda-483-observations-warning-letters-recalls-remediation/',
    imageUrl: 'https://eemedicals.com/wp-content/uploads/2021/11/fda-483-1.jpg'
  },
  { 
    id: '8', 
    title: 'ISO 13485 Medical Quality System', 
    description: 'ISO 13485 is an international standard adapted to meet the requirements of the medical device industry and it addresses most FDA requirements (21CFR820). We assist in the end-to-end processes to ensure full compliance.', 
    link: 'https://eemedicals.com/service/iso-13485-medical-quality-system-registration-for-medical-devices/',
    imageUrl: 'https://eemedicals.com/wp-content/uploads/2021/11/iso-13485-1.jpg'
  },
  { 
    id: '9', 
    title: 'FDA United States Agent', 
    description: 'The United States FDA require all medical devices, IVD and pharmaceutical companies not located in the United States to appoint a registered US FDA Agent. E&E Medicals shall represent as US Agent in assisting communication.', 
    link: 'https://eemedicals.com/service/fda-united-states-agent-for-foreign-establishments/',
    imageUrl: 'https://eemedicals.com/wp-content/uploads/2021/11/fda-us-agent.jpg'
  }
];

export const Services: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      {/* Using grid layout to match the Masonry feel.
        Cols: 1 on mobile, 2 on tablet, 3 on large screens
      */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <div 
            key={service.id} 
            className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 transition-transform hover:-translate-y-2 hover:shadow-xl duration-300 flex flex-col"
          >
            {/* Image Container */}
            <div className="w-full h-56 overflow-hidden">
              <a href={service.link}>
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </a>
            </div>
            
            {/* Content Container */}
            <div className="p-6 flex flex-col grow">
              <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                <a href={service.link} className="hover:text-blue-600 transition-colors">
                  {service.title}
                </a>
              </h3>
              <p className="text-gray-600 mb-6 grow text-sm leading-relaxed">
                {service.description}
              </p>
              
              {/* Read More Link */}
              <div className="mt-auto">
                <a 
                  href={service.link} 
                  className="inline-flex items-center text-blue-600 font-bold text-sm uppercase tracking-wide hover:text-blue-800 transition-colors group"
                >
                  Read more 
                  <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};