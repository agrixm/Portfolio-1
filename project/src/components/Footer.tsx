import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="max-w-5xl mx-auto px-6 py-12 border-t border-zinc-800">
      <div className="flex justify-between items-center">
        <p className="text-zinc-400">© 2024. All rights reserved.</p>
        <a 
          href="#top" 
          className="text-zinc-400 hover:text-white transition-colors"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}