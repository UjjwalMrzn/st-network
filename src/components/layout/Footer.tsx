import React from 'react';
import { Link } from 'react-router-dom';
import { Network, Mail, Phone, MapPin } from 'lucide-react';
import { BackToTop } from '../ui/BackToTop';

// lucide-react 1.0 removed brand/logo icons, so these are defined inline
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z"/>
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
  </svg>
);

interface QuickLink {
  label: string;
  to: string;
  scrollTo?: string;
}

const quickLinks: QuickLink[] = [
  { label: 'About Us', to: '/about' },
  { label: 'Product & Services', to: '/', scrollTo: 'product-services' },
  { label: 'Career', to: '/about' },
  { label: 'Contact Us', to: '/', scrollTo: 'contact' },
];

export const Footer: React.FC = () => {
  const handleLinkClick = (scrollTo?: string) => {
    // Only force top-of-page for links that aren't scrolling to a section
    if (!scrollTo) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  };

  return (
    <>
      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

            {/* Brand + Description */}
            <div className="lg:col-span-1 space-y-5">
              <Link
                to="/"
                onClick={() => handleLinkClick()}
                className="flex items-center gap-3 group w-fit"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
                  <Network className="w-6 h-6" />
                </div>
                <span className="font-black text-xl text-white tracking-wider">
                  ST <span className="text-emerald-500">NETWORK</span>
                </span>
              </Link>
              <p className="text-sm leading-relaxed text-slate-400">
                A telecommunications and technology company delivering reliable, scalable, and high-quality communication and software solutions to businesses and global connectivity partners.
              </p>
              <p className="text-sm font-bold text-emerald-500 tracking-wide">
                Connect, Communicate and Grow.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a href="#" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-emerald-600 flex items-center justify-center transition-colors">
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-emerald-600 flex items-center justify-center transition-colors">
                  <TwitterIcon className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-emerald-600 flex items-center justify-center transition-colors">
                  <FacebookIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      state={link.scrollTo ? { scrollTo: link.scrollTo } : undefined}
                      onClick={() => handleLinkClick(link.scrollTo)}
                      className="text-sm text-slate-400 hover:text-emerald-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Get In Touch</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-slate-400">
                  <Mail className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>support@stnetwork.com</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-400">
                  <Phone className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>+1 (800) 555-0199</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-400">
                  <MapPin className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>Global offices across USA, UAE, India & Singapore</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} ST Network. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-slate-500">
              <a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <BackToTop />
    </>
  );
};