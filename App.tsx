
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LaunchOffer from './components/LaunchOffer';
import ProductVariants from './components/ProductVariants';
import TrustSection from './components/TrustSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative flex flex-col">
      <Navbar scrolled={scrolled} />
      
      <main className="flex-grow">
        <Hero />
        <ProductVariants />
        <LaunchOffer />
        <TrustSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
