import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PageHeader } from '../components/shared/PageHeader';
import { AboutContent } from '../components/about/AboutContent';
import { AboutDetails } from '../components/about/AboutDetails'; // <-- Import the new section
// import { AboutGrid } from '../components/about/AboutGrid'; 

export const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Header />
      
      <main className="grow">
        {/* Top Banner with Background Image */}
        <PageHeader title="About Us" breadcrumb="About Us" />
        
        {/* 1. Main Content Section (with the man's image) */}
        <AboutContent />

        {/* 2. The NEW Text & Assessment Section */}
        <AboutDetails />

        {/* 3. The Grid Section we made earlier */}
        {/* <AboutGrid /> */}
      </main>

      <Footer />
    </div>
  );
};