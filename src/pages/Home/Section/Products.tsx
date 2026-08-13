import React, { useState } from 'react';
import { MessageCircle, Bot, Radio, Code2, ChevronLeft, ChevronRight } from 'lucide-react';

export const Products: React.FC = () => {
  const [, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      subtitle: 'WhatsApp Business API',
      description: 'Meet customers where they are with verified WhatsApp messaging and automated chat flows at scale.',
      icon: MessageCircle,
      iconColor: 'bg-emerald-500 text-white',
    },
    {
      id: 'rcs',
      title: 'RCS',
      subtitle: 'Rich Communication Services',
      description: 'Interactive, media-rich messaging channels right inside native inbox apps for high engagement.',
      icon: Bot,
      iconColor: 'bg-amber-500 text-white',
    },
    {
      id: 'sms',
      title: 'SMS',
      subtitle: 'A2P & OTP Messaging',
      description: 'Global transactional SMS and high-speed OTP delivery with guaranteed carrier interconnects.',
      icon: Radio,
      iconColor: 'bg-blue-600 text-white',
    },
    {
      id: 'software',
      title: 'Software',
      subtitle: 'Enterprise Solutions & Platforms',
      description: 'Custom software platforms and automated routing suites built for telecom and enterprise scale.',
      icon: Code2,
      iconColor: 'bg-teal-600 text-white',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, products.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  return (
    <section id="product-services" className="py-20 bg-slate-50 border-t border-slate-200/80">
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

          {/* Product Cards Row with Navigation Arrows */}
          <div className="relative flex items-center">
            
            {/* Left Scroll Arrow */}
            <button
              onClick={prevSlide}
              className="absolute -left-6 sm:-left-8 z-20 w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg transition-transform active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Cards Grid */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
              {products.map((product) => {
                const Icon = product.icon;
                return (
                  <div
                    key={product.id}
                    className="bg-slate-50 border border-slate-200/80 rounded-2xl p-8 hover:border-emerald-500 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
                  >
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform ${product.iconColor}`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">
                      {product.title}
                    </h4>
                    <p className="text-xs font-semibold text-slate-400 mb-3">
                      {product.subtitle}
                    </p>
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Right Scroll Arrow */}
            <button
              onClick={nextSlide}
              className="absolute -right-6 sm:-right-8 z-20 w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg transition-transform active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center items-center gap-2 mt-10">
            <span className="w-6 h-2 rounded-full bg-emerald-500" />
            <span className="w-2 h-2 rounded-full bg-slate-300" />
          </div>

        </div>

      </div>
    </section>
  );
};