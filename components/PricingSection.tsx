
import React from 'react';
import { VARIANTS } from '../constants';
import { Check } from 'lucide-react';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Choose Your Neo</h2>
        <p className="text-slate-400 mb-16 max-w-2xl mx-auto">
          From the value-packed standard model to the boundary-pushing Ultra, find the Apex Neo that perfectly fits your lifestyle.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {VARIANTS.map((variant) => (
            <div 
              key={variant.id}
              className={`relative p-8 rounded-[2.5rem] border transition-all duration-500 flex flex-col ${
                variant.isPopular 
                  ? 'bg-blue-600/5 border-blue-500/50 scale-105 shadow-2xl shadow-blue-500/10' 
                  : 'bg-slate-900 border-slate-800'
              }`}
            >
              {variant.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
                  Recommended
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-black text-white mb-2">{variant.name}</h3>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">{variant.tagline}</p>
              </div>

              <div className="mb-8 text-left">
                <p className="text-4xl font-black text-white mb-8">{variant.price}</p>
                <div className="space-y-4">
                  {variant.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-blue-400" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto space-y-4">
                <button 
                  className={`w-full py-4 rounded-2xl font-bold transition-all ${
                    variant.isPopular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30' 
                      : 'bg-slate-800 hover:bg-slate-700 text-white'
                  }`}
                >
                  Buy Now
                </button>
                <button className="w-full py-3 rounded-2xl text-sm font-bold text-slate-400 hover:text-white transition-colors">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="px-10 py-4 bg-transparent border border-slate-700 hover:border-slate-500 text-slate-300 font-bold rounded-2xl transition-all">
          Compare All Models
        </button>
      </div>
    </section>
  );
};

export default PricingSection;
