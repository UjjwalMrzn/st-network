import React from 'react';
import type { Partner } from '../../../types';
import InfobipLogo from '../../../assets/partners/Infobip.jpeg';
import TelecallLogo from '../../../assets/partners/Telecall.jpeg';
import ChinaTelecomLogo from '../../../assets/partners/China Skyline.jpeg';
import ItniotechLogo from '../../../assets/partners/Itnio tech.jpeg';
import Six5Logo from '../../../assets/partners/six5.jpeg';
import GTSLogo from '../../../assets/partners/GTS.jpeg';

const partnersList: Partner[] = [
  { id: '1', name: 'Telecall', logo: TelecallLogo },
  { id: '2', name: 'Infobip', logo: InfobipLogo },
  { id: '3', name: 'China Telecom', logo: ChinaTelecomLogo },
  { id: '7', name: 'Itniotech', logo: ItniotechLogo },
  { id: '8', name: 'Six5', logo: Six5Logo },
  { id: '10', name: 'GTS', logo: GTSLogo },
];

export const PartnersMarquee: React.FC = () => {
  const doublePartners = [...partnersList, ...partnersList];

  return ( 
    <div className="bg-slate-100/90 border-y border-slate-200/80 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-4 space-y-1.5 text-left shrink-0">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-600 tracking-tight leading-tight">
              Our Partners
            </h2>
            <p className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Across The Globe
            </p>
          </div>

          <div className="lg:col-span-8 relative w-full overflow-hidden mask-gradient">
            <div className="animate-marquee flex gap-6 items-center">
              {doublePartners.map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="w-48 h-28 rounded-xl bg-white border border-slate-200/90 flex items-center justify-center px-5 py-3 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all shrink-0 group"
                >
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-16 max-w-[85%] object-contain group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <span
                      className={`text-sm font-semibold tracking-wide ${
                        partner.isPlaceholder
                          ? 'text-slate-400 italic'
                          : 'text-slate-700 group-hover:text-emerald-600'
                      }`}
                    >
                      {partner.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};