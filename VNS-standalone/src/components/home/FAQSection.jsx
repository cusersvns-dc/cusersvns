import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'What does "per frame" pricing mean?',
    a: 'Each frame is a single UI screen or view — such as a main menu, inventory screen, or settings panel. Complex multi-state interfaces may count as multiple frames depending on the scope.',
  },
  {
    q: 'Do you accept Robux as payment?',
    a: 'Yes. All prices are available in both USD and Robux. Robux payments are processed through verified gamepass transactions. The current exchange rate is clearly displayed in the pricing section.',
  },
  {
    q: 'What files do I receive?',
    a: 'Depending on your plan, you receive high-resolution PNG exports, source files (Figma/Photoshop), tweening maps, and implementation-ready RBXL assets. Enterprise clients receive full vector source files.',
  },
  {
    q: 'How long does a project take?',
    a: 'Standard orders are delivered within 48 hours. Premium orders have a 24-hour priority turnaround. Enterprise projects include same-day rush availability for urgent deliverables.',
  },
  {
    q: 'Can I request revisions?',
    a: 'Absolutely. Standard includes 1 revision round, Premium includes 3 rounds, and Enterprise offers unlimited revisions until you\'re satisfied with the final result.',
  },
  {
    q: 'Do you offer full game UI systems?',
    a: 'Yes. The Enterprise tier is specifically designed for comprehensive UI system design — covering all screens, states, and interactive elements your game requires.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 px-6 border-t border-dataline">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] text-ghost uppercase mb-4 font-mono">Logic Queries</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-heading">
            FREQUENTLY ASKED
          </h2>
        </motion.div>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border-b border-dataline"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-5 group"
              >
                <div className="flex items-center gap-4 text-left">
                  <span className="text-xs text-ghost font-mono w-6">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-sm font-mono text-white group-hover:text-accent transition-colors">
                    {faq.q}
                  </span>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {openIndex === i ? (
                    <Minus className="w-4 h-4 text-ghost" />
                  ) : (
                    <Plus className="w-4 h-4 text-ghost" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-ghost leading-relaxed pb-5 pl-10">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}