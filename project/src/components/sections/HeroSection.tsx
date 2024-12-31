import React from 'react';
import { SocialLinks } from '../SocialLinks';

export const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen ml-20 bg-gradient-to-b from-zinc-900/50 to-zinc-950">
      <div className="max-w-5xl mx-auto px-6 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-500 text-transparent bg-clip-text">
               Agrim:Creative Developer & Designer
            </h1>
            <p className="text-xl text-zinc-400 mb-8">
              I craft digital experiences that combine beautiful design with cutting-edge technology. 
              Currently building products that make a difference.
            </p>
            <SocialLinks />
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img 
                src="\images\agrimmmm.jpg" 
                alt="Developer Portrait" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}