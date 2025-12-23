
import React from 'react';
import { VARIANTS } from '../constants';
import { ChevronRight } from 'lucide-react';

const ProductVariants: React.FC = () => {
  return (
    <section id="variants" className="py-24 bg-[#020617] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">The Neo Lineup</h2>
            <p className="text-slate-400 text-lg">
              Three ways to experience the future. All powered by the same flagship Snapdragon 8 Gen 2 DNA.
            </p>
          </div>
          <button className="flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors group">
            Compare all specs <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VARIANTS.map((variant) => (
            <div 
              key={variant.id}
              className={`group relative p-1 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 ${
                variant.isPopular 
                  ? 'bg-gradient-to-b from-blue-500 to-cyan-500 shadow-2xl shadow-blue-500/20' 
                  : 'bg-slate-800/50 hover:bg-slate-800'
              }`}
            >
              <div className="h-full bg-slate-950 rounded-[2.4rem] p-8 flex flex-col">
                <div className="mb-8">
                  {variant.isPopular && (
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-500 text-[10px] font-black uppercase tracking-widest text-white mb-4">
                      Best Value
                    </span>
                  )}
                  <h3 className="text-3xl font-black text-white mb-1">{variant.name}</h3>
                  <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">{variant.tagline}</p>
                </div>

                <div className="aspect-[4/5] bg-slate-900/50 rounded-3xl mb-8 overflow-hidden relative border border-slate-800 group-hover:border-slate-700 transition-colors">
                  <img 
                    src={`https://picsum.photos/400/500?random=${variant.id}`} 
                    alt={variant.name} 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-3xl font-black text-white">{variant.price}</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-10 flex-grow">
                  {variant.features.map((feature, i) => (
                    <li key={i} className="text-slate-400 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-4 rounded-2xl font-bold transition-all ${
                    variant.isPopular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-white text-black hover:bg-slate-200'
                  }`}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductVariants;
