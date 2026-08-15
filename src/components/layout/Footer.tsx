import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';
import { BackToTop } from '../ui/BackToTop';
import logoImg from '../../assets/stnetworkslogowhite.png';

// Social Media Brand Icons
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z"/>
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
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
  { label: 'Career', to: '/career' },
  { label: 'Contact Us', to: '/', scrollTo: 'contact' },
];

export const Footer: React.FC = () => {
  const handleLinkClick = (scrollTo?: string) => {
    if (!scrollTo) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  };

  return (
    <>
      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">

            {/* Brand + Description */}
            <div className="lg:col-span-1 space-y-5">
              <Link
                to="/"
                onClick={() => handleLinkClick()}
                className="flex items-center gap-3 group w-fit"
              >
                <img
                  src={logoImg}
                  alt="ST Networks"
                  className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
                />
              </Link>
              <p className="text-sm leading-relaxed text-slate-400">
                A telecommunications and technology company delivering reliable, scalable, and high-quality communication and software solutions to businesses and global connectivity partners.
              </p>
              <p className="text-sm font-bold text-emerald-500 tracking-wide">
                Connect Communicate and Grow
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.linkedin.com/company/143194912"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-emerald-600 flex items-center justify-center transition-colors text-slate-300 hover:text-white"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-emerald-600 flex items-center justify-center transition-colors text-slate-300 hover:text-white"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-emerald-600 flex items-center justify-center transition-colors text-slate-300 hover:text-white"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:justify-self-center">
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
                  <Phone className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>+91 97662 00064</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-400">
                  <MapPin className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>Global offices across USA, UAE ....</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} ST Networks. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-slate-500">
              <a href="/privacy" className="hover:text-emerald-500 transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>

      <BackToTop />
    </>
  );
};