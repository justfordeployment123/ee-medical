import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Hero } from '../components/home/Hero';
import { Services } from '../components/home/Services';
import { Stats } from '../components/home/Stats';
import { Contact } from '../components/home/Contact';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="grow">
        <Hero />
        <Services />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};