import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <p className="text-xs tracking-[0.4em] text-ghost uppercase mb-6 font-mono">// Error Protocol</p>
        <h1 className="text-8xl md:text-[12rem] font-bold font-heading leading-none tracking-tighter text-white/10">
          404
        </h1>
        <p className="text-sm text-ghost font-mono mb-8 -mt-4 md:-mt-8">
          SIGNAL_NOT_FOUND — The requested node does not exist in this network.
        </p>
        <Link
          to="/"
          className="inline-block px-10 py-4 bg-white text-black text-xs tracking-[0.2em] uppercase font-mono hover:bg-accent transition-colors duration-300"
        >
          Return to Base
        </Link>
      </motion.div>
    </div>
  );
}