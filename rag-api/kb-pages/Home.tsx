import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Hero } from '../components/home/Hero';
import { ServicesTabs } from '../components/home/ServicesTabs';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { Stats } from '../components/home/Stats';
import { Industries } from '../components/home/Industries';
import { FAQ } from '../components/home/FAQ';
import { CTABanner } from '../components/home/CTABanner';
import { Contact } from '../components/home/Contact';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="grow">
        <Hero />
        <ServicesTabs />
        <WhyChooseUs />
        <Stats />
        <Industries />
        <FAQ />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
