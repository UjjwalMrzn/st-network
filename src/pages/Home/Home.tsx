import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from './Section/Hero';
import { PartnersMarquee } from './Section/PartnersMarquee';
import { Products } from './Section/Products';
import { WorldMap } from './Section/WorldMap';
import { Contact } from './Section/Contact';

export const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      document.getElementById(state.scrollTo)?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.state]);

  return (
    <main className="flex-grow bg-slate-50 text-slate-900">
      <section className="min-h-[calc(100vh-5rem)] flex flex-col justify-between bg-white">
        <Hero />
        <PartnersMarquee />
      </section>
      <Products />
      <WorldMap />
      <Contact />
    </main>
  );
};