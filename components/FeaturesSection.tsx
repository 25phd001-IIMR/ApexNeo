
import React from 'react';
import { FEATURES } from '../constants';

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-[#020617] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-12 leading-tight">
              Power Meets <span className="text-blue-500">Precision.</span>
            </h2>
            
            <div className="space-y-12">
              {FEATURES.map((feature, idx) => (
                <div key={idx} className="relative pl-10 border-l border-slate-800">
                  <div className="absolute top-0 left-[-5px] w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,1)]"></div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full scale-90"></div>
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-2 rounded-[3.5rem] border border-slate-800 shadow-2xl overflow-hidden group">
                 <img 
                  src="https://picsum.photos/800/1200?random=11" 
                  alt="Apex UI Experience" 
                  className="w-full h-auto rounded-[3rem] object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                 />
                 <div className="absolute bottom-10 left-10 right-10 glass-card p-6 rounded-3xl border border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-bold">Fluid 120Hz</p>
                        <p className="text-slate-400 text-sm">Ultra-smooth interface</p>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
