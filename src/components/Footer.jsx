import React from 'react';
import { Link } from 'react-router-dom';
import { footerContent } from '@/lib/content';

const { brand, tagline, discord, twitter, copyright } = footerContent;

export default function Footer() {
  return (
    <footer className="border-t border-dataline bg-obsidian">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-mono text-sm tracking-[0.3em] text-white uppercase mb-4">{brand}</p>
            <p className="text-xs text-ghost leading-relaxed">{tagline}</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-ghost uppercase mb-4">Navigation</p>
            <div className="flex flex-col gap-2">
              <Link to="/projects" className="text-xs text-ghost hover:text-white transition-colors">Projects</Link>
              <Link to="/contact" className="text-xs text-ghost hover:text-white transition-colors">Contact</Link>
              <Link to="/terms" className="text-xs text-ghost hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-ghost uppercase mb-4">Connect</p>
            <div className="flex flex-col gap-2">
              <a href={discord.url} target="_blank" rel="noopener noreferrer" className="text-xs text-ghost hover:text-white transition-colors">
                Discord: {discord.label}
              </a>
              <a href={twitter.url} target="_blank" rel="noopener noreferrer" className="text-xs text-ghost hover:text-white transition-colors">
                Twitter: {twitter.label}
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-dataline mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-ghost">© {new Date().getFullYear()} {copyright} — All rights reserved</p>
          <p className="text-xs text-ghost font-mono">SYS.STATUS: ONLINE</p>
        </div>
      </div>
    </footer>
  );
}