
import React from 'react';
import { TRUST_ITEMS } from '../constants';

const TrustSection: React.FC = () => {
  return (
    <section className="py-32 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-card p-12 rounded-[3rem] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
           {TRUST_ITEMS.map((item, idx) => (
             <div key={idx} className="flex-1 flex flex-col md:flex-row items-center md:items-start gap-6">
               <div className="w-16 h-16 rounded-3xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                 {item.icon}
               </div>
               <div>
                 <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                 <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{item.description}</p>
               </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
