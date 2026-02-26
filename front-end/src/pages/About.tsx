import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PageHeader } from '../components/shared/PageHeader';
import { AboutContent } from '../components/About/AboutContent';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Header />
      
      <main className="grow">
        {/* Top Banner with Background Image */}
        <PageHeader title="About Us" breadcrumb="About Us" />
        
        {/* Main Content Section */}
        <AboutContent />
      </main>

      <Footer />
    </div>
  );
};