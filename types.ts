import React from 'react';

export interface ProductVariant {
  id: string;
  name: string;
  price: string;
  tagline?: string;
  features: string[];
  isPopular?: boolean;
}

export interface SpecItem {
  // Fix: Added React import to resolve the 'React' namespace error for React.ReactNode
  icon: React.ReactNode;
  label: string;
  value: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}