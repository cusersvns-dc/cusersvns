import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/lib/content';

export default function Projects() {
  return (
    <div className="pt-24 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <p className="text-xs tracking-[0.4em] text-ghost uppercase mb-4 font-mono">// Project Archive</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-heading">ALL PROJECTS</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const thumb = project.image;
            const isVideo = thumb && (thumb.endsWith('.mp4') || thumb.endsWith('.webm'));
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <Link to={`/project/${project.id}`} className="group block glass-card overflow-hidden">
                  <div className="overflow-hidden relative" style={{ aspectRatio: '16/9' }}>
                    {isVideo ? (
                      <video src={thumb} className="w-full h-full object-cover" autoPlay loop muted playsInline />
                    ) : (
                      <img
                        src={thumb}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs tracking-[0.2em] text-ghost uppercase font-mono mb-2">{project.category}</p>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold font-heading">{project.title}</h3>
                      <ArrowUpRight className="w-4 h-4 text-ghost group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}