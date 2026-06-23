import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <p className="text-xs tracking-[0.4em] text-ghost uppercase mb-4 font-mono">Get in touch</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-heading mb-6">
          CONTACT
        </h1>
        <p className="text-sm text-ghost max-w-md mx-auto leading-relaxed mb-10">
          Reach out to me on Discord to discuss your project.
        </p>
        <a
          href="https://discord.com/users/YOUR_DISCORD_ID"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-10 py-4 bg-white text-black text-xs tracking-[0.2em] uppercase font-mono hover:bg-accent transition-colors duration-300"
        >
          Discord <ArrowUpRight className="w-3 h-3" />
        </a>
      </motion.div>
    </div>
  );
}