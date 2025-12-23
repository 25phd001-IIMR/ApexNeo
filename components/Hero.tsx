
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] -ml-24 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-8 uppercase tracking-widest animate-pulse">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Free Apex Buds with Apex Neo
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gradient leading-[1.1] mb-6 tracking-tighter">
            Flagship Feel.<br />Smarter Price.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
            Meet the New Apex Neo. Uncompromising performance, stunning 120Hz AMOLED display, and professional-grade imaging. Redefining what value means.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
            <a href="#launch-offer" className="w-full sm:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all hover:scale-105 shadow-xl shadow-blue-600/25">
              Buy Now
            </a>
            {/* "Book In-Store Demo" button removed as per request */}
          </div>

          <div className="relative w-full max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full scale-75 pointer-events-none"></div>
            <div className="flex justify-center items-center gap-4 md:gap-12 relative">
               {/* Phone Rear View Placeholder */}
               <div className="w-[180px] h-[360px] md:w-[240px] md:h-[480px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3rem] border-4 border-slate-700 shadow-2xl transform -rotate-12 hover:rotate-0 transition-transform duration-700 overflow-hidden group">
                  <div className="absolute top-8 right-8 w-20 h-40 bg-slate-800 rounded-2xl border border-slate-700 flex flex-col items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-700 border-2 border-slate-600 flex items-center justify-center">
                       <div className="w-4 h-4 rounded-full bg-slate-900"></div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-700 border border-slate-600"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                  <img src="https://picsum.photos/400/800?random=1" className="w-full h-full object-cover opacity-30 grayscale group-hover:opacity-60 transition-opacity" alt="Apex Neo Back" />
               </div>
               {/* Phone Front View Placeholder */}
               <div className="w-[200px] h-[400px] md:w-[280px] md:h-[560px] bg-black rounded-[3rem] border-4 border-slate-700 shadow-2xl z-20 overflow-hidden relative group">
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-30 flex items-center justify-center overflow-hidden">
                    <div className="w-2 h-2 rounded-full bg-slate-800"></div>
                  </div>
                  <img src="https://picsum.photos/400/800?random=2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Apex Neo Front" />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent flex flex-col items-center justify-end pb-12 px-6">
                    <span className="text-white text-2xl font-black mb-1">Apex UI</span>
                    <span className="text-white/60 text-xs tracking-[0.2em] uppercase">Built on Android 15</span>
                  </div>
               </div>
               {/* Phone Rear View Placeholder 2 */}
               <div className="w-[180px] h-[360px] md:w-[240px] md:h-[480px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3rem] border-4 border-slate-700 shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-700 overflow-hidden group">
                  <div className="absolute top-8 right-8 w-20 h-40 bg-slate-800 rounded-2xl border border-slate-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                  <img src="https://picsum.photos/400/800?random=3" className="w-full h-full object-cover opacity-20 grayscale group-hover:opacity-50 transition-opacity" alt="Apex Neo Side" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
