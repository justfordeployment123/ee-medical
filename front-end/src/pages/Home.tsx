import React from 'react';
import { Header } from '../components/Header';
import { PageMeta } from '../components/shared/PageMeta';
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
      <PageMeta
        title="FDA Regulatory Consulting Services for Medical Devices"
        description="E&E Medicals provides FDA 510(k), ISO 13485, QMS, and global market access consulting for medical device manufacturers. 32+ years of regulatory expertise."
      />
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
