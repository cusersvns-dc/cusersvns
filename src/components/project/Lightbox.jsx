import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  if (currentIndex === null || currentIndex === undefined) return null;

  const current = images[currentIndex];
  const isVideo = current?.endsWith('.mp4') || current?.endsWith('.webm');

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
        onClick={onClose}>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 border border-white/20 flex items-center justify-center hover:border-white/60 transition-colors">
          <X className="w-4 h-4" />
        </button>

        {/* Prev */}
        {currentIndex > 0 && (
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 border border-white/20 flex items-center justify-center hover:border-white/60 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {/* Next */}
        {currentIndex < images.length - 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 border border-white/20 flex items-center justify-center hover:border-white/60 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        {/* Image/Video */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="max-w-[90vw] max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}>

          {isVideo ? (
            <video src={current} controls autoPlay className="max-w-full max-h-[90vh] object-contain" />
          ) : (
            <img
              src={current}
              alt={`Gallery item ${currentIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain"
            />
          )}
        </motion.div>

        {/* Counter */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-ghost font-mono">
          {currentIndex + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
