import React, { useState } from 'react';
import { User, Mail, Phone, Send, Users, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });

  return (
    <section id="contact" className="py-14 bg-slate-50 relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute -left-24 top-24 w-72 h-72 rounded-full border-[24px] border-amber-100 pointer-events-none" />
      <div className="absolute right-10 top-16 w-10 h-10 rounded-full bg-gradient-to-tr from-sky-400 to-emerald-400 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Centered Heading */}
        <div className="text-center mb-14 space-y-3">
          <div className="w-12 h-1.5 bg-emerald-500 rounded-full mx-auto mb-2" />
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Contact <span className="text-emerald-600">Us</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Reach out to our expert team for custom route pricing, API documentation, or partnership inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left - Illustration + contact info */}
          <div className="flex flex-col items-center lg:items-start space-y-10">
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              <div className="absolute w-[85%] h-[85%] bg-gradient-to-tr from-sky-100 via-teal-50 to-emerald-100 rounded-[45%_55%_60%_40%/50%_45%_55%_50%]" />
              <div className="relative z-10 w-40 h-40 rounded-full bg-white shadow-xl border border-slate-100 flex items-center justify-center">
                <Users className="w-16 h-16 text-emerald-600" />
              </div>
              <div className="absolute top-8 right-6 bg-white p-3 rounded-2xl shadow-lg border border-sky-100 flex items-center gap-2 animate-bounce">
                <MessageSquare className="w-5 h-5 text-sky-500" />
                <span className="text-xs font-bold text-slate-800">Let's talk</span>
              </div>
            </div>
          </div>

          {/* Right - Open form, no card wrapper */}
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <User className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 text-sm shadow-xs transition-colors"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
              <input
                type="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 text-sm shadow-xs transition-colors"
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
              <input
                type="tel"
                placeholder="+1 81234 56789"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-white border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 text-sm shadow-xs transition-colors"
              />
            </div>

            <div className="relative">
              <Send className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
              <textarea
                rows={4}
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 text-sm shadow-xs transition-colors"
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
              className="w-full py-3.5 rounded-full font-bold text-white text-sm bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-emerald-600/20"
            >
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};