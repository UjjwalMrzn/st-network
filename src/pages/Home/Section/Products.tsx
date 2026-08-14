import React from 'react';
import { MessageCircle, Bot, Radio, Code2 } from 'lucide-react';

export const Products: React.FC = () => {
  const products = [
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      subtitle: 'WhatsApp Business API',
      description: 'Engage customers worldwide with rich media and verified messaging.',
      icon: MessageCircle,
      iconColor: 'bg-emerald-500 text-white',
    },
    {
      id: 'rcs',
      title: 'RCS',
      subtitle: 'Rich Communication Services',
      description: 'Deliver interactive branded campaigns with rich media and action buttons.',
      icon: Bot,
      iconColor: 'bg-amber-500 text-white',
    },
    {
      id: 'sms',
      title: 'SMS',
      subtitle: 'A2P & OTP Messaging',
      description: 'Send high-speed OTPs, alerts, and promotional messages globally.',
      icon: Radio,
      iconColor: 'bg-blue-600 text-white',
    },
    {
      id: 'software',
      title: 'Software',
      subtitle: 'Enterprise Solutions & Platforms',
      description: 'Custom telecom software and automated routing tools built for scale.',
      icon: Code2,
      iconColor: 'bg-teal-600 text-white',
    },
  ];

  return (
    <section id="product-services" className="py-14 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="w-12 h-1.5 bg-emerald-500 rounded-full mx-auto mb-2" />
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Our <span className="text-emerald-600">Products</span>
          </h2>
        </div>

        {/* Outer Card Container */}
        <div className="relative bg-white border border-slate-200/90 rounded-[2.5rem] p-8 sm:p-14 shadow-xs">
          
          {/* Header Description inside card */}
          <div className="max-w-3xl mb-12 space-y-2 text-left">
            <h3 className="text-3xl font-bold text-emerald-600">Engage</h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Meet customers where they are with connected, real-time conversations across every preferred channel. Our omnichannel suite helps enterprises create seamless and personalized engagement at scale.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <div
                  key={product.id}
                  className="h-full bg-slate-50 border border-slate-200/80 rounded-2xl p-7 hover:border-emerald-500 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
                >
                  {/* Icon Box */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform shrink-0 ${product.iconColor}`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">
                    {product.title}
                  </h4>

                  {/* Subtitle (Uniform locked height for alignment) */}
                  <div className="min-h-[2.25rem] flex items-center justify-center mb-3">
                    <p className="text-xs font-semibold text-slate-400 leading-tight">
                      {product.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};