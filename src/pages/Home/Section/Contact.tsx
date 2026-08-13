import React, { useState } from 'react';
import { User, Mail, Phone, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });

  return (
    <section id="contact" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white border border-slate-200 rounded-3xl p-6 sm:p-12 shadow-xs">
        
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Contact <span className="text-emerald-600">Us</span>
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Reach out to our expert team for custom route pricing, API documentation, or partnership inquiries.
          </p>
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="flex items-center gap-3 text-slate-700 text-sm">
              <Mail className="w-5 h-5 text-emerald-600" />
              <span>support@stnetwork.com</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700 text-sm">
              <Phone className="w-5 h-5 text-emerald-600" />
              <span>+1 (800) 555-0199</span>
            </div>
          </div>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="relative">
            <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white text-sm transition-colors"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
            <input
              type="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white text-sm transition-colors"
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
            <input
              type="tel"
              placeholder="+1 81234 56789"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white text-sm transition-colors"
            />
          </div>

          <div>
            <textarea
              rows={4}
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white text-sm transition-colors"
            />
          </div>

          <label className="flex items-start gap-3 text-xs text-slate-600 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              className="mt-0.5 rounded border-slate-300 text-emerald-600 focus:ring-0"
            />
            <span>I consent to the collection and processing of my personal data as per Privacy Policy.</span>
          </label>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl font-bold text-white text-sm bg-emerald-600 hover:bg-emerald-500 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-emerald-600/20"
          >
            Send Message <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </section>
  );
};