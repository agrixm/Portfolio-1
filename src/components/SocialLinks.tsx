import React from 'react';
import { Github, Twitter, Instagram } from 'lucide-react';

export const SocialLinks: React.FC = () => {
  return (
    <div className="flex gap-6 mt-8">
      <a href="https://github.com/agrixm" className="text-zinc-400 hover:text-white transition-colors">
        <Github size={24} />
      </a>
      <a href="https://x.com/agxrim" className="text-zinc-400 hover:text-white transition-colors">
        <Twitter size={24} />
      </a>
      <a href="https://www.instagram.com/agrxim/" className="text-zinc-400 hover:text-white transition-colors">
        <Instagram size={24} />
      </a>
    </div>
  );
}