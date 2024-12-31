import React from 'react';
import { SocialLinks } from './SocialLinks';

export const Hero: React.FC = () => {
  return (
    <div className="ml-20 max-w-5xl mx-auto px-6 pt-32 pb-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-500 text-transparent bg-clip-text">
            Agrim : Creative Developer & Designer
          </h1>
          <p className="text-xl text-zinc-400 mb-8">
            
          </p>
          <SocialLinks />
        </div>
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" 
              alt="Developer Portrait" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
        </div>
      </div>
    </div>
  );
}