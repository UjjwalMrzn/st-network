import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Clock,
  DollarSign,
  Briefcase,
  Upload,
  Send,
  Sparkles,
  UserPlus,
  MessageSquare,
} from 'lucide-react';
import { FloatingBackgroundShapes } from '../../components/ui/FloatingBackgroundShapes';

export const Career: React.FC = () => {
  const [fileName, setFileName] = useState<string>('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    experience: '',
    desiredRole: '',
    salaryExpectation: '',
    consent: false,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Application submitted successfully!');
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen relative overflow-hidden">
      {/* 1. DARK HERO BANNER WITH BREADCRUMBS */}
      <section className="relative bg-slate-900 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> Join Our Global Team
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Careers at <span className="text-emerald-500">ST Network's</span>
          </h1>
          <nav className="flex justify-center items-center gap-2 text-sm font-semibold text-slate-400">
            <Link to="/" className="hover:text-emerald-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-emerald-500">Careers</span>
          </nav>
        </div>
      </section>

      {/* 2. CAREERS APPLICATION SECTION */}
      <section className="relative py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Reusable Floating Background Shapes Component */}
        <FloatingBackgroundShapes />

        {/* Section Title Header */}
        <div className="text-center mb-10 space-y-3 relative z-10">
          <div className="w-12 h-1.5 bg-emerald-500 rounded-full mx-auto mb-2" />
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Careers <span className="text-emerald-600">Application</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Build your dream career with STN. Submit your application and resume below to get started.
          </p>
        </div>

        {/* 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
          
          {/* LEFT COLUMN: ANIMATED BREATHING CIRCLE GRAPHIC */}
          <div className="lg:col-span-5 flex items-center justify-center relative py-6">
            
            {/* Outer Soft Breathing Gradient Aura */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.8, 0.95, 0.8],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-emerald-200/60 via-teal-100/80 to-sky-200/50 flex items-center justify-center shadow-xl shadow-emerald-500/10"
            />

            {/* Central Breathing White Circle with Icon */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-white shadow-2xl border border-slate-100 flex items-center justify-center text-emerald-600 z-10"
            >
              <UserPlus className="w-14 h-14 text-emerald-600" />
            </motion.div>

            {/* Floating "Apply Now" Speech Tag */}
            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-8 right-4 sm:right-8 z-20 bg-white border border-slate-200/90 rounded-2xl px-4 py-2.5 shadow-lg flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-bold text-slate-800">Apply Now</span>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: FORM ENCLOSED INSIDE A WHITE CARD BOX */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Row 1: Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="Full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-slate-50/80 border border-slate-200/90 rounded-2xl py-3 pl-12 pr-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white text-sm transition-all"
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="Enter email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50/80 border border-slate-200/90 rounded-2xl py-3 pl-12 pr-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white text-sm transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Phone & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <Phone className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="+1 81234 56789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50/80 border border-slate-200/90 rounded-2xl py-3 pl-12 pr-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white text-sm transition-all"
                    />
                  </div>

                  <div className="relative">
                    <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Enter Location"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-slate-50/80 border border-slate-200/90 rounded-2xl py-3 pl-12 pr-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white text-sm transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Experience & Desired Role */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <Clock className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Enter experience"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full bg-slate-50/80 border border-slate-200/90 rounded-2xl py-3 pl-12 pr-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white text-sm transition-all"
                    />
                  </div>

                  <div className="relative">
                    <Briefcase className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Desired Role / Position"
                      value={formData.desiredRole}
                      onChange={(e) => setFormData({ ...formData, desiredRole: e.target.value })}
                      className="w-full bg-slate-50/80 border border-slate-200/90 rounded-2xl py-3 pl-12 pr-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white text-sm transition-all"
                    />
                  </div>
                </div>

                {/* Row 4: Salary Expectation */}
                <div className="relative">
                  <DollarSign className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Enter salary expectation"
                    value={formData.salaryExpectation}
                    onChange={(e) => setFormData({ ...formData, salaryExpectation: e.target.value })}
                    className="w-full bg-slate-50/80 border border-slate-200/90 rounded-2xl py-3 pl-12 pr-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white text-sm transition-all"
                  />
                </div>

                {/* Resume Upload Box */}
                <div className="pt-1">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Add Your Resume
                  </label>
                  <div className="flex items-center gap-4 bg-slate-50/80 border border-slate-200/90 border-dashed rounded-2xl p-3">
                    <label className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl cursor-pointer transition-colors flex items-center gap-2 shrink-0">
                      <Upload className="w-4 h-4" />
                      <span>Choose File</span>
                      <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
                    </label>
                    <span className="text-xs text-slate-500 truncate">
                      {fileName ? fileName : 'No file chosen (PDF, DOCX up to 5MB)'}
                    </span>
                  </div>
                </div>

                {/* Consent Checkbox */}
                <div className="pt-1">
                  <label className="flex items-start gap-3 text-xs text-slate-600 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-0.5 rounded border-slate-300 text-emerald-600 focus:ring-0 cursor-pointer"
                    />
                    <span>I consent to the collection and processing of my personal data as per Privacy Policy.</span>
                  </label>
                </div>

                {/* Compact Sleek Pill Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-full font-bold text-white text-sm bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/20 transition-all flex items-center gap-2.5 cursor-pointer active:scale-95"
                  >
                    <span>Send Application</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};