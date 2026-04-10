import React from 'react';
import { Header } from '../components/Header';
import { PageMeta } from '../components/shared/PageMeta';
import { Footer } from '../components/Footer';
import { PageHeader } from '../components/shared/PageHeader';
import { AboutContent } from '../components/about/AboutContent';
import { AboutDetails } from '../components/about/AboutDetails';
import { useContent } from '../hooks/useContent';

export const About: React.FC = () => {
  const content = useContent('about');

  const mission = content?.mission;

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <PageMeta
        title="About E&E Medicals — FDA Regulatory & Quality Management Experts"
        description="Learn about E&E Medicals and Consulting — 32+ years of FDA regulatory affairs, medical device compliance, ISO 13485, and quality management system expertise."
      />
      <Header />

      <main className="grow">
        <PageHeader title="About Us" breadcrumb="About Us" />

        {/* Main Content Section */}
        <AboutContent content={content?.main} />

        {/* Mission strip */}
        <div className="bg-navy-900 py-16 px-4 md:px-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-brand-500/5 blur-3xl" />
          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
              {[
                {
                  title: mission?.mission_title || 'Our Mission',
                  text: mission?.mission_text || 'To empower healthcare and life sciences companies with expert regulatory guidance, ensuring safe and compliant products reach patients worldwide.',
                },
                {
                  title: mission?.vision_title || 'Our Vision',
                  text: mission?.vision_text || 'To be the most trusted global partner for regulatory affairs, quality systems, and market access in the medical device and pharmaceutical industries.',
                },
                {
                  title: mission?.values_title || 'Our Values',
                  text: mission?.values_text || 'Integrity, excellence, and client-centricity drive every engagement. We hold ourselves to the highest standards of ethical practice and scientific rigor.',
                },
              ].map(({ title, text }) => (
                <div key={title}>
                  <h3 className="font-display text-xl font-bold text-white mb-3">{title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Details Section */}
        <AboutDetails />
      </main>

      <Footer />
    </div>
  );
};
