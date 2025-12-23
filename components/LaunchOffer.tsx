
import React, { useState, useEffect } from 'react';

const LaunchOffer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="launch-offer" className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Exclusive Launch Bundle
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-xl">
              Be among the first to own the Apex Neo. Get the <span className="font-bold">Apex Buds (Wireless) worth ₹1,499</span> absolutely free with every purchase of Neo+ and Ultra.
            </p>
            
            <div className="flex items-center gap-4 mb-10">
              <div className="flex flex-col items-center justify-center w-20 h-20 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20">
                <span className="text-2xl font-black">{timeLeft.hours.toString().padStart(2, '0')}</span>
                <span className="text-[10px] uppercase font-bold text-blue-100">Hrs</span>
              </div>
              <span className="text-2xl font-bold">:</span>
              <div className="flex flex-col items-center justify-center w-20 h-20 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20">
                <span className="text-2xl font-black">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                <span className="text-[10px] uppercase font-bold text-blue-100">Min</span>
              </div>
              <span className="text-2xl font-bold">:</span>
              <div className="flex flex-col items-center justify-center w-20 h-20 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20">
                <span className="text-2xl font-black">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                <span className="text-[10px] uppercase font-bold text-blue-100">Sec</span>
              </div>
              <div className="ml-4 px-4 py-1 rounded-full bg-red-500 text-[10px] font-black uppercase tracking-tighter animate-bounce">
                Selling Fast
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="p-6 bg-white/10 rounded-2xl border border-white/20">
                  <p className="text-sm font-bold text-blue-100 mb-1">Apex Neo+</p>
                  <p className="text-3xl font-black">₹47,499</p>
               </div>
               <div className="p-6 bg-white/10 rounded-2xl border border-white/20">
                  <p className="text-sm font-bold text-blue-100 mb-1">Apex Neo Ultra</p>
                  <p className="text-3xl font-black">₹52,499</p>
               </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-white/20 blur-[80px] rounded-full"></div>
            <div className="relative glass-card p-4 rounded-[2rem] overflow-hidden border-white/30 rotate-3 shadow-2xl">
               <img src="https://picsum.photos/600/600?random=10" className="rounded-[1.5rem] w-full aspect-square object-cover" alt="Apex Buds" />
               <div className="absolute top-8 right-8 bg-white text-blue-600 font-black px-6 py-2 rounded-full shadow-lg transform rotate-12">
                 FREE GIFT
               </div>
               <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur text-blue-950 rounded-2xl">
                 <h3 className="text-xl font-black mb-1">Apex Buds Pro</h3>
                 <p className="text-sm font-medium opacity-70">Included in the launch bundle</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchOffer;
