import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FooterSocial } from './FooterSocial';

export const Footer: React.FC = () => {
  return (
    <footer className="ml-20 border-t border-zinc-800">
      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* Let's Connect Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-zinc-500 text-transparent bg-clip-text">
            Let's Create Something Amazing Together
          </h2>
          <div className="flex items-center gap-4 mt-8">
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors"
            >
              Get in Touch <ArrowUpRight size={20} />
            </a>
            <a 
              href="mailto:agrimsangotra@gmail.com"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              agrimsangotra@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-zinc-800">
          <FooterSocial />
          <p className="text-zinc-400 text-sm">
            © {new Date().getFullYear()} Agrim Sangotra.
          </p>
        </div>
      </div>
    </footer>
  );
}