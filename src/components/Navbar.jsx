import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
{ label: 'Home', href: '/' },
{ label: 'Projects', href: '/projects' },
{ label: 'Pricing', href: '/#pricing', isAnchor: true },
{ label: 'Contact', href: '/contact' },
{ label: 'Terms', href: '/terms' }];


const socials = [
{ label: 'Discord', href: '#' },
{ label: 'Twitter', href: '#' },
{ label: 'Roblox', href: '#' }];


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {document.body.style.overflow = '';};
  }, [open]);

  const handleAnchorClick = (href) => {
    setOpen(false);
    const id = href.replace('/#', '');
    if (location.pathname === '/') {
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 300);
    } else {
      window.location.href = href;
    }
  };

  return (
    <>
      {/* Top bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 mix-blend-normal ${scrolled && !open ? 'bg-obsidian/80 backdrop-blur-xl border-b border-dataline' : 'bg-transparent'}`}>
        <div className="px-6 md:px-10 h-16 flex items-center justify-between">
          <Link to="/" className="font-mono text-sm tracking-[0.3em] text-white uppercase hover:opacity-60 transition-opacity z-50 relative">
            VNS
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="relative z-50 flex flex-col gap-[5px] items-end group"
            aria-label="Toggle menu">
            
            <motion.span
              animate={open ? { rotate: 45, y: 7, width: '24px' } : { rotate: 0, y: 0, width: '24px' }}
              className="block h-px bg-white origin-center"
              style={{ width: 24 }} />
            
            <motion.span
              animate={open ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
              className="block h-px bg-white"
              style={{ width: 16 }} />
            
            <motion.span
              animate={open ? { rotate: -45, y: -7, width: '24px' } : { rotate: 0, y: 0, width: '24px' }}
              className="block h-px bg-white origin-center"
              style={{ width: 24 }} />
            
          </button>
        </div>
      </nav>

      {/* Fullscreen overlay */}
      <AnimatePresence>
        {open &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-40 bg-obsidian flex">
          
            {/* Noise texture */}
            <div className="absolute inset-0 noise-overlay pointer-events-none" />

            {/* Left — nav links */}
            <div className="flex flex-col justify-between p-10 md:p-16 flex-1 relative z-10">
              <div /> {/* spacer for top bar height */}
              <nav className="mt-8">
                <ul className="space-y-1">
                  {navLinks.map((link, i) =>
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ delay: 0.05 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
                  
                      {link.isAnchor ?
                  <button
                    onClick={() => handleAnchorClick(link.href)}
                    className="group text-left">
                    
                          <span className="text-5xl md:text-7xl font-bold font-heading tracking-tight text-white/10 group-hover:text-white transition-colors duration-300 leading-none uppercase">
                            {link.label}
                          </span>
                        </button> :

                  <Link to={link.href} className="group block">
                          <span className="text-5xl md:text-7xl font-bold font-heading tracking-tight text-white/10 group-hover:text-white transition-colors duration-300 leading-none uppercase">
                            {link.label}
                          </span>
                        </Link>
                  }
                    </motion.li>
                )}
                </ul>
              </nav>

              {/* Bottom info */}
              <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center justify-between">
              
                <div className="flex gap-6">
                  {socials.map((s) =>
                <a
                  key={s.label}
                  href={s.href}
                  className="text-xs font-mono text-ghost uppercase tracking-[0.2em] hover:text-white transition-colors">
                  
                      {s.label}
                    </a>
                )}
                </div>
                <div className="hidden md:flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs font-mono text-ghost">Open for work</span>
                </div>
              </motion.div>
            </div>

            {/* Right — decorative image panel (desktop only) */}
            <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block w-[380px] border-l border-dataline relative overflow-hidden">
            
              <img src="https://media.base44.com/images/public/6a250cdd578d119f9a2c4475/f946bc2be_Banner__2_.png"

            alt="VNS work"
            className="w-full h-full object-cover grayscale opacity-50" />
            
              <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-transparent to-obsidian/80" />
              <div className="absolute bottom-10 left-8 right-8">
                <p className="text-xs font-mono text-ghost uppercase tracking-[0.3em] mb-2">UI/UX Designer</p>
                <p className="text-xs font-mono text-white/40">Roblox Experiences</p>
              </div>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}