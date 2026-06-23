import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/lib/content';

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const thumb = project.image;
  const isVideo = thumb && (thumb.endsWith('.mp4') || thumb.endsWith('.webm'));

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.93, 1, 0.97]);
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0.4]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="sticky top-16 mx-4 md:mx-10 rounded-sm overflow-hidden glass-card"
      // 19:6 aspect ratio
    >
      <Link to={`/project/${project.id}`} className="group block w-full relative" style={{ aspectRatio: '16/9' }}>
        {/* Parallax image */}
        <div className="absolute inset-0 overflow-hidden">
          {isVideo ? (
            <video src={thumb} className="w-full h-full object-cover scale-110" autoPlay loop muted playsInline />
          ) : (
            <motion.img
              src={thumb}
              alt={project.title}
              style={{ y: imgY }}
              className="w-full h-[115%] object-cover absolute -top-[7%] grayscale group-hover:grayscale-0 transition-[filter] duration-700"
            />
          )}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

        {/* Index */}
        <div className="absolute top-6 right-8 text-xs font-mono text-white/20 tracking-[0.4em]">
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Bottom label */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <p className="text-xs tracking-[0.4em] text-ghost uppercase font-mono mb-2">{project.category}</p>
          <div className="flex items-end justify-between">
            <h3 className="text-3xl md:text-5xl font-bold font-heading tracking-tight leading-none">
              {project.title}
            </h3>
            <div className="flex items-center gap-1.5 text-xs font-mono text-ghost group-hover:text-white transition-colors uppercase tracking-[0.2em] mb-1">
              View <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function RecentDesigns() {
  return (
    <section id="recent-designs" className="border-t border-dataline">
      <div className="px-6 md:px-10 pt-24 pb-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between"
        >
          <div>
            <p className="text-xs tracking-[0.4em] text-ghost uppercase mb-4 font-mono">Recent Work</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-heading">PERSONAL PROJECTS</h2>
          </div>
          <Link to="/projects" className="hidden md:flex items-center gap-2 text-xs tracking-[0.2em] text-ghost uppercase font-mono hover:text-white transition-colors">
            View All <ArrowUpRight className="w-3 h-3" />
          </Link>
        </motion.div>
      </div>

      <div className="space-y-6 pb-24">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <div className="px-6 pb-10">
        <Link to="/projects" className="md:hidden flex items-center justify-center gap-2 text-xs tracking-[0.2em] text-ghost uppercase font-mono hover:text-white transition-colors">
          View All Projects <ArrowUpRight className="w-3 h-3" />
        </Link>
      </div>
    </section>
  );
}