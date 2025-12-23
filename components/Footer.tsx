
import React from 'react';
import { Twitter, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-32 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-32">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
            Upgrade Smart.<br />Upgrade Apex Neo.
          </h2>
          <a href="#variants" className="px-12 py-5 bg-white text-black font-black rounded-2xl hover:bg-slate-200 transition-all hover:scale-105 shadow-2xl">
            Order Yours Today
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white italic">A</div>
              <span className="text-xl font-extrabold tracking-tighter text-white">APEX <span className="text-blue-500">NEO</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              The next evolution of the smartphone. Engineered with precision, designed for humans.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-blue-600 transition-all"><Twitter size={20} /></a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-blue-600 transition-all"><Instagram size={20} /></a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-blue-600 transition-all"><Facebook size={20} /></a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-blue-600 transition-all"><Youtube size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Products</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Apex Neo</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Apex Neo+</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Apex Neo Ultra</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Apex Buds Pro</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Service Centers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Warranty Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Product Help</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Track Order</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>support@apexneo.com</li>
              <li>+91 1800-APEX-NEO</li>
              <li>Global HQ, New Delhi, India</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
          <p>© 2024 Apex Mobile Technologies. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
