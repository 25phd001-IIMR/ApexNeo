
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-slate-950/80 backdrop-blur-md border-slate-800 py-3' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center font-bold text-white italic">A</div>
          <span className="text-xl font-extrabold tracking-tighter text-white">APEX <span className="text-blue-500">NEO</span></span>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-medium text-white px-4 py-2 rounded-full border border-slate-700 hover:bg-slate-800 transition-colors">
            Support
          </button>
          <a href="#variants" className="text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all shadow-lg shadow-blue-900/20">
            Buy Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
