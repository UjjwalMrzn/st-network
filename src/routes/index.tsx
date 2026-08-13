import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Home } from '../pages/Home/Home';

// Simple placeholder page for About Us & Leadership
const DummyPage: React.FC<{ title: string }> = ({ title }) => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
    <p className="text-slate-400">Page under construction for ST Network.</p>
  </div>
);

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<DummyPage title="About Us - Company Info" />} />
        <Route path="/leadership" element={<DummyPage title="Leadership Team" />} />
      </Routes>
    </BrowserRouter>
  );
};