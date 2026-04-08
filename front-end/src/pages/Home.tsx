import React, { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Hero } from '../components/home/Hero';
import { ServicesTabs } from '../components/home/ServicesTabs';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { Stats } from '../components/home/Stats';
import { Industries } from '../components/home/Industries';
import { FAQ } from '../components/home/FAQ';
import { PastReviews } from '../components/home/PastReviews';
import { CTABanner } from '../components/home/CTABanner';
import { Contact } from '../components/home/Contact';
import { useContent } from '../hooks/useContent';

export const Home: React.FC = () => {
  const content = useContent('home');

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="grow">
        <Hero content={content?.hero} />
        <ServicesTabs />
        <WhyChooseUs content={content?.why} />
        <Stats content={content?.stats} />
        <Industries />
        <FAQ content={content?.faq} />
        <PastReviews content={content?.reviews} />
        <CTABanner content={content?.cta} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
