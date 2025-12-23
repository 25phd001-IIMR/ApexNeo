
import React from 'react';
import { SPECS } from '../constants';

const SpecsSection: React.FC = () => {
  return (
    <section id="specs" className="py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Built for the Bold</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Experience peak technology in every touchpoint. From the processing core to the charging speed, every spec is engineered for excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {SPECS.map((spec, idx) => (
            <div 
              key={idx} 
              className="p-8 glass-card rounded-3xl border border-slate-800 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-500 flex flex-col items-center text-center group"
            >
              <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                {spec.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">
                {spec.label}
              </h3>
              <p className="text-xl font-bold text-white">
                {spec.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
