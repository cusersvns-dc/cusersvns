import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { testimonials } from '@/lib/content';

const DiamondRating = ({ rating }) => (
  <div className="flex gap-1.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <div
        key={i}
        className={`w-3 h-3 rotate-45 border ${
          i <= rating ? 'bg-white border-white' : 'bg-transparent border-white/20'
        }`}
      />
    ))}
  </div>
);

// Duplicate for seamless infinite loop
const doubled = [...testimonials, ...testimonials];

function TestimonialCard({ t, onSelect }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onSelect(t)}
      className="glass-card p-6 w-[300px] flex-shrink-0 flex flex-col cursor-pointer select-none"
      style={{
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        boxShadow: hovered ? '0 8px 32px rgba(255,255,255,0.05)' : 'none',
      }}
    >
      <DiamondRating rating={t.rating} />
      <p className="text-sm text-ghost leading-relaxed mt-4 mb-6 flex-1 line-clamp-4">
        "{t.text}"
      </p>
      <div className="flex items-center gap-3 border-t border-dataline pt-4">
        <img
          src={t.avatar}
          alt={t.name}
          className="w-8 h-8 rounded-full bg-graphite border border-dataline"
        />
        <div>
          <p className="text-xs font-mono text-white">{t.name}</p>
          <p className="text-xs text-ghost font-mono">{t.rating}/5</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [selected, setSelected] = useState(null);
  const offsetRef = useRef(0);
  const rafRef = useRef(null);
  const speed = 0.6; // px per frame

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const step = () => {
      if (!paused && !selected) {
        offsetRef.current += speed;
        const halfWidth = track.scrollWidth / 2;
        if (offsetRef.current >= halfWidth) {
          offsetRef.current = 0;
        }
        track.style.transform = `translateX(-${offsetRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [paused, selected]);

  return (
    <section className="py-24 border-t border-dataline overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.4em] text-ghost uppercase mb-4 font-mono">Validation Loop</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-heading">
            CLIENT SIGNALS
          </h2>
        </motion.div>
      </div>

      {/* Scrolling track */}
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-obsidian to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-obsidian to-transparent" />

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-6 py-2 px-6"
            style={{ width: 'max-content', willChange: 'transform' }}
          >
            {doubled.map((t, i) => (
              <TestimonialCard
                key={`${t.name}-${i}`}
                t={t}
                onSelect={setSelected}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Expanded modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center px-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card p-8 max-w-lg w-full relative"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-8 h-8 border border-white/20 flex items-center justify-center hover:border-white/60 transition-colors"
              >
                <X className="w-3 h-3" />
              </button>

              <DiamondRating rating={selected.rating} />
              <p className="text-base text-white leading-relaxed mt-6 mb-8">
                "{selected.text}"
              </p>
              <div className="flex items-center gap-3 border-t border-dataline pt-6">
                <img
                  src={selected.avatar}
                  alt={selected.name}
                  className="w-10 h-10 rounded-full bg-graphite border border-dataline"
                />
                <div>
                  <p className="text-sm font-mono text-white">{selected.name}</p>
                  <p className="text-xs text-ghost font-mono">{selected.rating} / 5 stars</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}