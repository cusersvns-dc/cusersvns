import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="py-24 px-6 border-t border-dataline relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/6a250cdd578d119f9a2c4475/01c2f8812_generated_3a827039.png"
          alt="Section background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-obsidian/80" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center relative z-10"
      >
        <p className="text-xs tracking-[0.4em] text-ghost uppercase mb-4 font-mono">Initiate Connection</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-heading mb-6">
          READY TO BUILD<br />
          <span className="text-ghost">SOMETHING?</span>
        </h2>
        <p className="text-sm text-ghost leading-relaxed mb-10 max-w-md mx-auto">
          Let's engineer your next game interface. Reach out and let's discuss your project requirements.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-10 py-4 bg-white text-black text-xs tracking-[0.2em] uppercase font-mono hover:bg-accent transition-colors duration-300"
        >
          Contact Me <ArrowUpRight className="w-3 h-3" />
        </Link>
      </motion.div>
    </section>
  );
}