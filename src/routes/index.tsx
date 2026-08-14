import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Home } from '../pages/Home/Home';
import { CompanyInfo } from '../pages/About/CompanyInfo';
import { Career } from '../pages/Career/Career';
import { ScrollToTop } from '../components/ui/ScrollToTop';

const LeadershipPlaceholder: React.FC = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 bg-slate-50">
    <h1 className="text-4xl font-black text-slate-900 mb-2">Leadership Team</h1>
    <p className="text-slate-600">Executive profiles and leadership team for ST Networks.</p>
  </div>
);

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 antialiased">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<CompanyInfo />} />
            <Route path="/career" element={<Career />} />
            <Route path="/leadership" element={<LeadershipPlaceholder />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};