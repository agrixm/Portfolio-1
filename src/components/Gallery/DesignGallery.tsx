import React from 'react';
import { ExternalLink } from 'lucide-react';
import { GalleryCard } from './GalleryCard';
import { designGalleryData } from '../../data/designGallery';

export const DesignGallery: React.FC = () => {
  return (
    <section className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-200">Design Gallery</h2>
          <p className="text-zinc-400 mt-2">A collection of my graphic design work</p>
        </div>
        <a 
          href="https://drive.google.com/drive/folders/your-folder-id"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 text-zinc-200 hover:bg-zinc-700 transition-colors"
        >
          View All Designs <ExternalLink size={16} />
        </a>
      </div>
      
      <div className="grid grid-cols-3 md:grid-cols-4 auto-rows-[250px] gap-6">
        {designGalleryData.map((design) => (
          <GalleryCard key={design.id} {...design} />
        ))}
      </div>
    </section>
  );
}