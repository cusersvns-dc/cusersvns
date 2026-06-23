import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Lightbox from '../components/project/Lightbox';
import { projects } from '@/lib/content';

export default function ProjectDetail() {
  const { id } = useParams();
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="pt-32 pb-24 px-6 text-center">
        <h1 className="text-2xl font-bold font-heading mb-4">Project Not Found</h1>
        <Link to="/projects" className="text-xs text-ghost font-mono hover:text-white transition-colors">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  const media = project.media || [project.image];

  return (
    <div className="pt-24 pb-24">
      {/* Header */}
      <div className="px-6 max-w-7xl mx-auto mb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link to="/projects" className="inline-flex items-center gap-2 text-xs text-ghost font-mono hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-3 h-3" /> Back to Projects
          </Link>
          <p className="text-xs tracking-[0.4em] text-ghost uppercase mb-3 font-mono">{project.category}</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-heading">{project.title}</h1>
        </motion.div>
      </div>

      {/* Media */}
      <div className="px-6 max-w-7xl mx-auto space-y-4">
        {media.map((src, i) => {
          const isVideo = src.endsWith('.mp4') || src.endsWith('.webm');
          const isGif = src.endsWith('.gif');
          const ytMatch = src.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
          const vimeoMatch = src.match(/vimeo\.com\/(\d+)/);

          if (ytMatch) {
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.1 }} className="glass-card overflow-hidden">
                <div className="aspect-video">
                  <iframe src={`https://www.youtube.com/embed/${ytMatch[1]}?rel=0`} className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
              </motion.div>
            );
          }

          if (vimeoMatch) {
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.1 }} className="glass-card overflow-hidden">
                <div className="aspect-video">
                  <iframe src={`https://player.vimeo.com/video/${vimeoMatch[1]}`} className="w-full h-full" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
                </div>
              </motion.div>
            );
          }

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              onClick={() => !isVideo && setLightboxIndex(i)}
              className={`group overflow-hidden glass-card ${!isVideo ? 'cursor-pointer' : ''}`}
            >
              {isVideo ? (
                <video src={src} className="w-full rounded" controls autoPlay loop muted playsInline />
              ) : (
                <img
                  src={src}
                  alt={`${project.title} — ${i + 1}`}
                  className={`w-full object-cover transition-all duration-700 group-hover:scale-[1.02] ${isGif ? '' : 'grayscale group-hover:grayscale-0'}`}
                />
              )}
            </motion.div>
          );
        })}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={media}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex(Math.max(0, lightboxIndex - 1))}
          onNext={() => setLightboxIndex(Math.min(media.length - 1, lightboxIndex + 1))}
        />
      )}
    </div>
  );
}