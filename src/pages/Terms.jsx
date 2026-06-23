import React from 'react';
import { motion } from 'framer-motion';
import { termsSections, termsIntro } from '@/lib/content';

export default function Terms() {
  return (
    <div className="pt-24 pb-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-14">
          <p className="text-xs tracking-[0.4em] text-ghost uppercase mb-4 font-mono">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-heading mb-5">
            TERMS OF SERVICE
          </h1>
          <p className="text-sm text-ghost leading-relaxed max-w-xl">{termsIntro}</p>
        </motion.div>

        {/* Table of Contents */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6 md:p-8 mb-16"
        >
          <p className="text-xs tracking-[0.3em] text-white uppercase font-mono mb-6">Contents</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
            {termsSections.map((section, i) => (
              <a key={section.id} href={`#${section.id}`} className="flex items-baseline gap-3 group">
                <span className="text-[10px] font-mono text-white/20 w-5 flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-xs font-mono text-ghost group-hover:text-white transition-colors">
                  {section.title}
                </span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Sections */}
        <div className="space-y-0">
          {termsSections.map((section, i) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="scroll-mt-28 py-10 border-b border-dataline last:border-0"
            >
              {/* Section header */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] font-mono text-white/20 tracking-widest">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1 h-px bg-white/5" />
                <h2 className="text-xs font-mono font-bold tracking-[0.3em] text-white uppercase">
                  {section.title}
                </h2>
              </div>

              {/* Points */}
              <ul className="space-y-3">
                {section.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-4 group">
                    <span className="mt-[7px] flex-shrink-0 w-1 h-1 bg-white/20 rounded-full group-hover:bg-white/60 transition-colors" />
                    <span className="text-sm text-ghost leading-relaxed group-hover:text-white/70 transition-colors">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] font-mono text-white/20 tracking-widest uppercase mt-12 text-center"
        >
          Last updated · {new Date().getFullYear()}
        </motion.p>
      </div>
    </div>
  );
}