import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BotMessageSquare, Megaphone, MessageCircle, Globe } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
<div className="relative flex items-center justify-center px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full pt-16 pb-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
        
        {/* Left Text Column */}
        <div className="lg:col-span-6 space-y-5 text-left">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]"
          >
            Connect, <br />
            Communicate, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
              Grow
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed"
          >
            Innovative technology solutions, including A2P messaging, global connectivity, telecom interconnection and communication platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="pt-2"
          >
            <a href="#contact" className="inline-block">
              <button className="px-8 py-3.5 rounded-full font-bold text-white text-base bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/20 transition-all duration-300 flex items-center gap-3 group cursor-pointer">
                <span>Contact Us</span>
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </button>
            </a>
          </motion.div>
        </div>

        {/* Right Hero Vector Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-6 relative flex items-center justify-center"
        >
          <div className="relative w-full max-w-lg aspect-[4/3] max-h-[400px] flex items-center justify-center overflow-visible">
            <div className="absolute w-[92%] h-[92%] bg-gradient-to-tr from-sky-200/70 via-teal-100/60 to-emerald-100/80 rounded-[45%_55%_60%_40%/50%_45%_55%_50%] pointer-events-none" />

            <div className="relative z-10 w-48 h-80 rounded-[2.5rem] bg-white border-4 border-amber-500/80 shadow-2xl p-3 flex flex-col justify-between items-center overflow-hidden">
              <div className="w-12 h-1 bg-slate-300 rounded-full my-1" />
              
              <div className="w-full space-y-2.5 my-auto">
                <div className="bg-sky-50 text-sky-800 border border-sky-100 p-2 rounded-xl text-[10px] font-bold">
                  💬 WhatsApp & RCS Messaging
                </div>
                <div className="bg-emerald-500 text-white p-2 rounded-xl text-[10px] font-bold ml-auto max-w-[85%] text-right">
                  A2P Routes Connected!
                </div>
                <div className="bg-slate-100 text-slate-700 p-2 rounded-xl text-[10px] font-bold max-w-[85%]">
                  OTP Delivery: 99.9%
                </div>
              </div>

              <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                <Globe className="w-4 h-4" />
              </div>
            </div>

            <div className="absolute left-6 top-1/3 -translate-y-1/2 z-20 bg-white p-3 rounded-2xl shadow-xl border border-sky-100 flex items-center gap-2.5 animate-bounce">
              <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center text-white shadow-md shadow-sky-500/20">
                <BotMessageSquare className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-black text-slate-800">Enterprise</p>
                <p className="text-[10px] text-emerald-600 font-bold">Solution</p>
              </div>
            </div>

            <div className="absolute right-4 top-1/4 -translate-y-1/2 z-20 bg-white p-3 rounded-2xl shadow-xl border border-emerald-100 flex items-center gap-2.5 animate-bounce">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
                <Megaphone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-black text-slate-800">Global</p>
                <p className="text-[10px] text-emerald-600 font-bold">Connectivity</p>
              </div>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-slate-900 text-white px-4 py-2 rounded-full shadow-2xl flex items-center gap-2 border border-slate-700">
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold">Smart Enterprise Conversations</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};