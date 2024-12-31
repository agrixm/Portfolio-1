import React from 'react';
import { ExternalLink } from 'lucide-react';
import { GalleryCard } from './GalleryCard';
import { designGalleryData } from '../../data/designGallery';

export const DesignGallery: React.FC = () => {
  return (
    <section className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-zinc-200">Design Gallery</h2>
        <a 
          href="https://drive.google.com/drive/folders/your-folder-id"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
        >
          View All Designs <ExternalLink size={16} />
        </a>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {designGalleryData.map((design) => (
          <GalleryCard key={design.id} {...design} />
        ))}
      </div>
    </section>
  );
}