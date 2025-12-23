
import React from 'react';
import { 
  Cpu, 
  Smartphone, 
  Camera, 
  Battery, 
  Zap, 
  ShieldCheck, 
  CreditCard, 
  Truck 
} from 'lucide-react';
import { ProductVariant, SpecItem, FeatureItem } from './types';

export const VARIANTS: ProductVariant[] = [
  {
    id: 'neo',
    name: 'Apex Neo',
    price: '₹42,999',
    tagline: 'The Essential Flagship',
    features: ['8GB RAM | 128GB Storage', 'Snapdragon 8 Gen 2', '6.7" AMOLED'],
  },
  {
    id: 'neo-plus',
    name: 'Apex Neo+',
    price: '₹47,499',
    tagline: 'Enhanced Performance',
    features: ['12GB RAM | 256GB Storage', 'Snapdragon 8 Gen 2', '6.7" AMOLED', 'Free Apex Buds'],
    isPopular: true,
  },
  {
    id: 'neo-ultra',
    name: 'Apex Neo Ultra',
    price: '₹52,499',
    tagline: 'Extreme Capability',
    features: ['16GB RAM | 512GB Storage', 'Snapdragon 8 Gen 2', 'LTPO 120Hz', 'Free Apex Buds'],
  },
];

export const SPECS: SpecItem[] = [
  {
    icon: <Cpu className="w-8 h-8 text-blue-400" />,
    label: 'Processor',
    value: 'Snapdragon 8 Gen 2',
  },
  {
    icon: <Smartphone className="w-8 h-8 text-blue-400" />,
    label: 'Display',
    value: '6.7” AMOLED 120Hz',
  },
  {
    icon: <Camera className="w-8 h-8 text-blue-400" />,
    label: 'Camera',
    value: '50MP with OIS',
  },
  {
    icon: <Battery className="w-8 h-8 text-blue-400" />,
    label: 'Battery',
    value: '5500 mAh',
  },
  {
    icon: <Zap className="w-8 h-8 text-blue-400" />,
    label: 'Charging',
    value: '80W Super Fast',
  },
];

export const FEATURES: FeatureItem[] = [
  {
    title: 'Flagship performance without overpaying',
    description: 'We prioritize what matters. Experience blazing speeds and smooth multitasking with the industry-leading Snapdragon 8 Gen 2 chipset, optimized for the Apex ecosystem.'
  },
  {
    title: 'Clean Apex UI (Android 15)',
    description: 'Zero bloatware. Just pure, fluid Android 15 with Apex UI enhancements. Designed for speed, privacy, and an intuitive user journey right out of the box.'
  },
  {
    title: 'Long-term software support',
    description: 'Invest with confidence. Apex Neo comes with a promise of 4 years of major Android updates and 5 years of security patches, keeping your device modern and secure.'
  }
];

export const TRUST_ITEMS = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Warranty Assurance',
    description: '2-year comprehensive manufacturer warranty.'
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: 'Secure Payments',
    description: 'PCI-compliant, encrypted checkout process.'
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: 'Fast Delivery',
    description: 'Free express shipping on all flagship models.'
  }
];
