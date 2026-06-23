import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { heroContent } from '@/lib/content';

function VNSIntro({ onDone }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-obsidian flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}>
      
      <motion.h1
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        onAnimationComplete={() => setTimeout(onDone, 900)}
        className="font-heading font-black tracking-widest select-none"
        style={{
          fontSize: 'clamp(6rem, 20vw, 18rem)',
          letterSpacing: '0.15em',
          fontFamily: '"Akira Expanded", "Arial Black", Arial, sans-serif',
          lineHeight: 1
        }}>
        
        VNS
      </motion.h1>
    </motion.div>);

}

export default function HeroSection() {
  const [showIntro, setShowIntro] = useState(true);
  const [introDone, setIntroDone] = useState(false);

  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  const handleMouse = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <>
      <AnimatePresence onExitComplete={() => setIntroDone(true)}>
        {showIntro &&
        <VNSIntro onDone={() => setShowIntro(false)} />
        }
      </AnimatePresence>

      <section
        ref={containerRef}
        onMouseMove={handleMouse}
        className="relative h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background image — edit heroContent.backgroundImage in lib/content.js */}
        <div className="absolute inset-0">
          <img
            src={heroContent.backgroundImage}
            alt="Cyber noir hero background"
            className="w-full h-full object-cover opacity-40"
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/30 to-obsidian" />
        </div>

        {/* Scanning line */}
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{ top: ['0%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }} />
        

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            style={{ rotateX, rotateY, perspective: 1000 }}
            className="transform-gpu">
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: introDone ? 1 : 0, y: introDone ? 0 : 20 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xs tracking-[0.4em] text-ghost uppercase mb-6 font-mono">
              {heroContent.eyebrow}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: introDone ? 1 : 0, y: introDone ? 0 : 30 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6 font-heading text-white">
              {heroContent.headlineLines.map((line, i) => (
                <React.Fragment key={i}>{line}{i < heroContent.headlineLines.length - 1 && <br />}</React.Fragment>
              ))}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: introDone ? 1 : 0, y: introDone ? 0 : 20 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-sm text-ghost max-w-md mx-auto leading-relaxed mb-10">
              {heroContent.subtext}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: introDone ? 1 : 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex items-center justify-center gap-6">
              
              <a href={heroContent.ctaPrimary.href} className="px-8 py-3 bg-white text-black text-xs tracking-[0.2em] uppercase font-mono hover:bg-accent transition-colors duration-300">
                {heroContent.ctaPrimary.label}
              </a>
              <a href={heroContent.ctaSecondary.href} className="px-8 py-3 border border-white/20 text-white text-xs tracking-[0.2em] uppercase font-mono hover:border-white/60 transition-colors duration-300">
                {heroContent.ctaSecondary.label}
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}>
          
          <ArrowDown className="w-4 h-4 text-ghost" />
        </motion.div>

        {/* Grid lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/4 top-0 bottom-0 w-px bg-white/[0.03]" />
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.03]" />
          <div className="absolute left-3/4 top-0 bottom-0 w-px bg-white/[0.03]" />
        </div>
      </section>
    </>);

}