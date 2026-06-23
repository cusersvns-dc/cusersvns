import React from 'react';
import HeroSection from '../components/home/HeroSection';
import PricingSection from '../components/home/PricingSection';
import RecentDesigns from '../components/home/RecentDesigns';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FAQSection from '../components/home/FAQSection';
import ContactCTA from '../components/home/ContactCTA';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <RecentDesigns />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactCTA />
    </div>
  );
}