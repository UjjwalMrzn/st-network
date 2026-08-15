import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, CheckCircle2 } from 'lucide-react';
import { FloatingBackgroundShapes } from '../../components/ui/FloatingBackgroundShapes';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen relative overflow-hidden">
      {/* 1. DARK HERO BANNER WITH BREADCRUMBS */}
      <section className="relative bg-slate-900 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" /> Legal & Compliance
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Privacy <span className="text-emerald-500">Policy</span>
          </h1>
          <nav className="flex justify-center items-center gap-2 text-sm font-semibold text-slate-400">
            <Link to="/" className="hover:text-emerald-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-emerald-500">Privacy Policy</span>
          </nav>
        </div>
      </section>

      {/* 2. WIDE PRIVACY POLICY CONTENT */}
      <section className="relative py-12 sm:py-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <FloatingBackgroundShapes />

        <div className="relative z-10 space-y-12">
          
          {/* Header Intro */}
          <div className="space-y-4 border-b border-slate-200/80 pb-8">
            <div className="w-12 h-1.5 bg-emerald-500 rounded-full mb-4" />
            <p className="text-slate-700 text-base sm:text-xl leading-relaxed">
              Your privacy is of utmost importance to us. <strong className="text-slate-900 font-bold">ST Networks (STN)</strong>, a global telecommunications and technology entity of <strong className="text-slate-900 font-bold">Squad Telekom</strong>, has created this Privacy Policy to explain what information we collect across our international operations (including our presence across <strong className="text-slate-800">USA, Singapore, UAE, and India</strong>), why we collect it, and how we safeguard your data.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Throughout this policy, <strong className="text-slate-800">"You"</strong>, <strong className="text-slate-800">"Your"</strong>, and <strong className="text-slate-800">"User"</strong> refer to any enterprise client, carrier partner, aggregator, or individual visiting our platform or using our services. <strong className="text-slate-800">"We"</strong>, <strong className="text-slate-800">"Us"</strong>, and <strong className="text-slate-800">"Our"</strong> refer to ST Networks and its subsidiaries.
            </p>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              Last Updated: August 2026
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-10 text-sm sm:text-base text-slate-600 leading-relaxed max-w-5xl">
            
            {/* Section 1 */}
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="text-emerald-600 font-black">1.</span> Information We Collect
              </h2>
              <p>
                We collect personal and corporate data necessary for contractual execution, telecom interconnections, account onboarding, and talent acquisition. This includes:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 pt-2">
                {[
                  'Full Name, Corporate Email & Business Phone',
                  'Company Name & Regional Headquarters (USA, UAE, SG, IN, etc.)',
                  'API Credentials & Technical Interconnect Parameters',
                  'Billing, Invoicing & Tax Identification Details',
                  'Resume / CV & Experience Data for Career Applicants',
                  'Product Inquiries for A2P SMS, RCS, WhatsApp & Software',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 2 */}
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="text-emerald-600 font-black">2.</span> Telecom Messaging & Service Telemetry
              </h2>
              <p>
                As a communications provider facilitating over 2M+ messages daily across global networks, we process transmission data to deliver high-quality routing. This encompasses:
              </p>
              <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 pl-4 border-l-2 border-emerald-500">
                <li>• <strong>A2P & OTP SMS:</strong> Sender IDs, destination mobile numbers, delivery status receipts (DLR), and timestamp logs required for billing and dispute resolution.</li>
                <li>• <strong>RCS & WhatsApp Business API:</strong> Verified brand session data, template submission IDs, and delivery metrics.</li>
                <li>• <strong>Telecom Interconnections & Software Platforms:</strong> Network latency logs, carrier routing pathways, IP addresses, and throughput statistics.</li>
              </ul>
              <p className="text-xs sm:text-sm text-slate-500">
                * Note: We do not inspect or monetize private conversational message payloads. Data is processed strictly for delivery, routing integrity, and compliance.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="text-emerald-600 font-black">3.</span> How We Use Your Data
              </h2>
              <p>We process collected information based on contractual agreements and legitimate business operations to:</p>
              <ul className="space-y-2 text-sm sm:text-base text-slate-700">
                <li>• Deliver, route, and optimize high-speed global messaging and software platforms.</li>
                <li>• Provide dedicated 24/7 technical customer support and carrier troubleshooting.</li>
                <li>• Monitor platform reliability, prevent SMS pumping, spam, and fraudulent traffic.</li>
                <li>• Process career applications submitted through our recruitment portal.</li>
                <li>• Fulfill international statutory, tax, and telecommunications regulatory obligations.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="text-emerald-600 font-black">4.</span> Carrier Interconnections & Third-Party Sharing
              </h2>
              <p>
                To provide international route termination, necessary metadata (such as destination MSISDNs and sender identifiers) is transmitted through authorized mobile network operators (MNOs), aggregators, and infrastructure partners. We do not sell, rent, or lease your personal information to third-party advertisers.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="text-emerald-600 font-black">5.</span> Protection of Minors & Sensitive Data
              </h2>
              <p>
                Our services, platforms, and website are strictly intended for enterprise clients, business professionals, and individuals aged 18 and older. We do not knowingly collect information from minors, nor do we request sensitive personal data (e.g., biometric, health, philosophical, or religious records). Any unauthorized sensitive records received will be promptly purged.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="text-emerald-600 font-black">6.</span> Data Security & Global Retention
              </h2>
              <p>
                ST Networks implements multi-layered enterprise defense mechanisms—including end-to-end encryption in transit (TLS/HTTPS), hardened network firewalls, and restricted role-based administrative access. Data is retained only as long as necessary to fulfill active service contracts, maintain audit trails, and adhere to global telecommunication regulations.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="text-emerald-600 font-black">7.</span> Your Rights & Opt-Out Preferences
              </h2>
              <p>
                Depending on your jurisdiction (including GDPR, CCPA, and regional data privacy frameworks), you have the right to request access to, rectification of, or deletion of your personal records. You may opt out of promotional communications at any time by clicking the unsubscribe link in our correspondence or by notifying our support desk.
              </p>
            </div>

          </div>

          {/* Contact Box */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-5xl shadow-xs">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-base font-bold text-slate-900 flex items-center justify-center sm:justify-start gap-2">
                <Mail className="w-4 h-4 text-emerald-600" /> Have Questions Regarding Privacy & Compliance?
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Our 24/7 dedicated support and compliance team is available to assist with data inquiries.
              </p>
            </div>
            <a
              href="mailto:support@stnetworks.com"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wide shadow-sm transition-all whitespace-nowrap"
            >
              Contact Compliance Team
            </a>
          </div>

        </div>
      </section>
    </div>
  );
};