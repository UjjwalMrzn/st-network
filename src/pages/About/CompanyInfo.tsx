import React from 'react';
import { Link } from 'react-router-dom';
import {
  Globe2,
  ShieldCheck,
  Zap,
  Users,
  MessageSquare,
  Radio,
  Globe,
  Code2,
  Handshake,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export const CompanyInfo: React.FC = () => {
  const offersList = [
    {
      title: 'A2P SMS',
      desc: 'High-speed transactional and OTP SMS routes with direct carrier connectivity.',
      icon: Radio,
    },
    {
      title: 'Enterprise Messaging',
      desc: 'Scalable omnichannel messaging solutions designed for modern enterprise workflows.',
      icon: MessageSquare,
    },
    {
      title: 'International Messaging',
      desc: 'Global reach across international operators with optimized route termination.',
      icon: Globe,
    },
    {
      title: 'Telecom Interconnection',
      desc: 'Direct interconnects and robust carrier hub routing for seamless communication.',
      icon: Globe2,
    },
    {
      title: 'Software & Technology Solutions',
      desc: 'Custom telecom software, automated routing suites, and bespoke technology platforms.',
      icon: Code2,
    },
    {
      title: 'Global Carrier Partnerships',
      desc: 'Extensive ecosystem of aggregators and communication providers worldwide.',
      icon: Handshake,
    },
  ];

  const pillars = [
    {
      title: 'Strong Partnerships',
      desc: 'We work closely with enterprises and aggregators to build sustainable, long-term relationships.',
      icon: Users,
    },
    {
      title: 'Competitive Connectivity',
      desc: 'Premium route quality with high delivery performance and optimal pricing structures.',
      icon: Zap,
    },
    {
      title: 'Innovative Technology',
      desc: 'Cutting-edge software solutions and transparent business practices that drive operational efficiency.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* 1. DARK HERO BANNER WITH BREADCRUMBS */}
      <section className="relative bg-slate-900 py-12 sm:py-14 px-4 sm:px-6 lg:px-8 text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-2.5">
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            About <span className="text-emerald-500">Us</span>
          </h1>
          <nav className="flex justify-center items-center gap-2 text-sm font-semibold text-slate-400">
            <Link to="/" className="hover:text-emerald-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-emerald-500">About Us</span>
          </nav>
        </div>
      </section>

      {/* 2. OVERVIEW SECTION (About ST Network) */}
      <section className="pt-10 sm:pt-12 pb-16 sm:pb-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="w-12 h-1.5 bg-emerald-500 rounded-full" />
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              About <span className="text-emerald-600">ST Network</span>
            </h2>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              <strong className="text-slate-900 font-bold">ST Network (STN)</strong> is a global entity of <strong className="text-slate-900 font-bold">Squad Telekom</strong>, focused on delivering reliable, scalable, and high-quality communication and software solutions to businesses and global connectivity partners.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              We specialize in <strong className="text-slate-800">Enterprise Messaging, A2P SMS, international messaging, telecom interconnection, and software solutions</strong>, helping enterprises, aggregators, and communication providers streamline their operations and connect with customers across global markets.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              Our approach is built around strong partnerships, competitive connectivity, route quality, innovative technology, transparent business practices, and responsive customer support. We work closely with our partners to develop sustainable telecom and technology solutions that meet their evolving business needs.
            </p>
          </div>

          {/* Side Feature Box */}
          <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
            <h3 className="text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-3">
              Our Core Strengths
            </h3>

            <div className="space-y-3.5">
              {[
                'Global Entity of Squad Telekom',
                'Reliable & Scalable Infrastructure',
                'Transparent Business Practices',
                'Responsive 24/7 Technical Support',
                'Innovative Technology Solutions',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span className="text-sm font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link to="/" state={{ scrollTo: 'contact' }}>
                <button className="w-full py-3.5 rounded-xl font-bold text-white text-sm bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer">
                  <span>Get In Touch</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 3. GREEN SCREEN-WIDE RECTANGLE BANNER */}
      <section className="w-full bg-emerald-600 text-white py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-y border-emerald-500 shadow-md">
        <div className="max-w-6xl mx-auto text-center space-y-3">
          <p className="text-base sm:text-2xl font-semibold leading-relaxed text-emerald-50">
            At <strong className="font-bold text-white">STN</strong>, we believe in building long-term partnerships, reliable connectivity, and innovative technology solutions that help businesses communicate, connect, and grow.
          </p>
          <div className="pt-2 border-t border-emerald-500/60 max-w-3xl mx-auto">
            <p className="text-lg sm:text-2xl font-black text-white tracking-wide sm:whitespace-nowrap">
              STN — Connect, Communicate and Grow.
            </p>
          </div>
        </div>
      </section>

      {/* 4. OUR APPROACH / PILLARS */}
      <section className="py-10 sm:py-12 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-10 space-y-2">
            <div className="w-12 h-1.5 bg-emerald-500 rounded-full mx-auto mb-2" />
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our <span className="text-emerald-600">Approach</span>
            </h2>
            <p className="text-slate-600 text-base max-w-xl mx-auto">
              Built around trust, route performance, and technological innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50/80 border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xs text-left space-y-4 hover:border-emerald-500 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{pillar.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. WHAT WE OFFER SECTION */}
      <section className="pt-10 sm:pt-12 pb-20 sm:pb-28 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-10 space-y-2">
          <div className="w-12 h-1.5 bg-emerald-500 rounded-full mx-auto mb-2" />
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            What We <span className="text-emerald-600">Offer</span>
          </h2>
          <p className="text-slate-600 text-base max-w-xl mx-auto">
            Comprehensive telecom and software capabilities designed for enterprise growth and seamless global connectivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offersList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 hover:border-emerald-500 hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};