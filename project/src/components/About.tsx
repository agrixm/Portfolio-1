import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="border border-zinc-800 rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-zinc-400 mb-6">
          I'm a full-stack developer with a passion for creating beautiful, functional websites 
          and applications. With expertise in React, TypeScript, and modern web technologies, 
          I bring ideas to life through code.
        </p>
        <a 
          href="#contact" 
          className="inline-flex items-center gap-2 text-white hover:gap-4 transition-all"
        >
          Get in touch <ArrowUpRight size={20} />
        </a>
      </div>
    </div>
  );
}