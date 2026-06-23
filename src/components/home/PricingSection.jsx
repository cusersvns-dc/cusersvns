import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const plan = {
  name: 'Signature Tier',
  priceUSD: 100,
  priceRobux: 28000,
  features: [
    'Intentional UX — every interaction considered',
    'Rush-ready, first in queue',
    'Detail-obsessed finish on every element',
    'Revisions welcomed throughout the process',
  ],
};

export default function PricingSection() {
  const [currency, setCurrency] = useState('USD');

  return (
    <section id="pricing" className="py-24 px-6 border-t border-dataline">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-xs tracking-[0.4em] text-ghost uppercase mb-4 font-mono">Pricing Protocol</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-heading">
            CURRENCY EXCHANGE
          </h2>
          <p className="text-sm text-ghost font-mono mt-3">Charged per frame — transparent, no hidden fees</p>
        </motion.div>

        {/* Currency Toggle */}
        <div className="flex justify-center mb-12">
          <div className="glass-card inline-flex p-1 gap-1">
            <button
              onClick={() => setCurrency('USD')}
              className={`px-6 py-2 text-xs tracking-[0.2em] uppercase transition-all duration-300 font-mono ${
                currency === 'USD' ? 'bg-white text-black' : 'text-ghost hover:text-white'
              }`}
            >
              USD $
            </button>
            <button
              onClick={() => setCurrency('ROBUX')}
              className={`px-6 py-2 text-xs tracking-[0.2em] uppercase font-mono transition-all duration-300 ${
                currency === 'ROBUX' ? 'bg-white text-black' : 'text-ghost hover:text-white'
              }`}
            >
              R$ Robux
            </button>
          </div>
        </div>

        {/* Single Card */}
        <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-xl glass-card p-10 relative border border-white/10"
        >
          {/* Top accent line */}
          <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

          <p className="text-xs tracking-[0.4em] text-ghost uppercase font-mono mb-8">{plan.name}</p>

          <div className="mb-1">
            <motion.span
              key={currency}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl font-bold font-heading"
            >
              {currency === 'USD' ? `$${plan.priceUSD}` : `R$${plan.priceRobux.toLocaleString()}`}
            </motion.span>
          </div>
          <p className="text-xs text-ghost font-mono mb-10 tracking-wider">PER FRAME</p>

          <div className="space-y-4 mb-10">
            {plan.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 group">
                <div className="mt-0.5 w-4 h-4 border border-white/20 flex items-center justify-center group-hover:border-white/60 transition-colors shrink-0">
                  <Check className="w-2.5 h-2.5 text-ghost group-hover:text-white transition-colors" />
                </div>
                <span className="text-xs text-ghost group-hover:text-white transition-colors leading-relaxed font-mono">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <Link
            to="/contact"
            className="inline-block bg-white text-black px-10 py-3 text-xs tracking-[0.2em] uppercase font-mono hover:bg-accent transition-all duration-300"
          >
            Get Started
          </Link>
        </motion.div>
        </div>
      </div>
    </section>
  );
}